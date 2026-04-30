import classnames from 'classnames';
import type { HTMLAttributes } from 'react';
import { JSX, useEffect, useState } from 'react';
import { Icon } from '../Icon/icon';
import './secondary-nav.scss';

export interface SecondaryNavChildItem {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface SecondaryNavItem {
  href?: string;
  label: string;
  /**
   * Whether this item is the current page. Ignored when the item has children;
   * only children can be active in that case.
   */
  isActive?: boolean;
  children?: SecondaryNavChildItem[];
}

export interface SecondaryNavProperties extends HTMLAttributes<HTMLElement> {
  /**
   * Array of navigation items. Each item can be marked active for the current page.
   */
  items: SecondaryNavItem[];
  /**
   * Accessible label for the nav landmark. Matches cfgov gettext('Section').
   */
  ariaLabel?: string;
  /**
   * Label for the mobile header. Matches cfgov _('Navigate this section').
   */
  mobileToggleLabel?: string;
}

/**
 * Markup and classes match cfgov `secondary-nav.html` / `SecondaryNav.js` on
 * consumerfinance.gov (FlyoutMenu + MaxHeightTransition are not initialized here;
 * mobile expand/collapse follows `aria-expanded` on `.o-secondary-nav__header`).
 *
 * Typography and spacing live in `secondary-nav.scss` (cfgov organism): DS math from
 * `$base-font-size-px` produces **em** (e.g. header padding, 1.125em parent links) and
 * **rem** (header label), not px in this file.
 *
 * @see https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/v1/jinja2/v1/includes/organisms/secondary-nav.html
 * @see https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/unprocessed/css/organisms/secondary-nav.scss
 */
export const SecondaryNav = ({
  items,
  ariaLabel = 'Section',
  mobileToggleLabel = 'Navigate this section',
  className,
  ...properties
}: SecondaryNavProperties): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasAnyChildren = items.some((item) => Boolean(item.children?.length));

  // Align with cfgov small-screen layout: when the viewport crosses into the
  // mobile breakpoint, hide the flyout so the collapsed header + chevron show.
  // (matches max-width in secondary-nav.scss / $bp-sm-max → 56.25em.)
  useEffect(() => {
    if (!globalThis.window?.matchMedia) {
      return;
    }

    const mediaQuery = globalThis.window.matchMedia('(max-width: 56.25em)');

    const collapseForMobileLayout = (): void => {
      if (mediaQuery.matches) {
        setIsExpanded(false);
      }
    };

    collapseForMobileLayout();
    mediaQuery.addEventListener('change', collapseForMobileLayout);

    return () => {
      mediaQuery.removeEventListener('change', collapseForMobileLayout);
    };
  }, []);

  const onToggle = (): void => {
    setIsExpanded((isOpen) => !isOpen);
  };

  const onLinkClick = (): void => {
    setIsExpanded(false);
  };

  return (
    <nav
      className={classnames(
        'o-secondary-nav',
        !hasAnyChildren && 'o-secondary-nav--no-children',
        className,
      )}
      aria-label={ariaLabel}
      {...properties}
    >
      {items.length > 0 ? (
        <>
          <button
            type='button'
            className='o-secondary-nav__header'
            aria-expanded={isExpanded}
            data-testid='secondary-nav-toggle'
            onClick={onToggle}
          >
            <span className='o-secondary-nav__label'>{mobileToggleLabel}</span>
            <span className='o-secondary-nav__cues'>
              <span className='o-secondary-nav__cue-open' aria-label='Show'>
                <Icon name='down' isPresentational />
              </span>
              <span className='o-secondary-nav__cue-close' aria-label='Hide'>
                <Icon name='up' isPresentational />
              </span>
            </span>
          </button>
          <div className='o-secondary-nav__content'>
            <ul className='o-secondary-nav__list o-secondary-nav__list--parents'>
              {items.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const hasActiveChild =
                  hasChildren && item.children!.some((c) => c.isActive);
                const parentIsActive = Boolean(item.isActive && !hasActiveChild);
                const sectionHasActive = hasActiveChild || parentIsActive;

                return (
                  <li
                    key={item.href ?? item.label}
                    data-nav-is-active={sectionHasActive ? 'True' : 'False'}
                  >
                    {item.href && !parentIsActive ? (
                      <a
                        className={classnames(
                          'o-secondary-nav__link',
                          'o-secondary-nav__link--parent',
                        )}
                        href={item.href}
                        onClick={onLinkClick}
                      >
                        {item.label}
                      </a>
                    ) : (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid -- cfgov omits href for current page
                      <a
                        className={classnames(
                          'o-secondary-nav__link',
                          'o-secondary-nav__link--parent',
                          parentIsActive && 'o-secondary-nav__link--current',
                        )}
                        aria-current={parentIsActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    )}
                    {item.children && item.children.length > 0 ? (
                      <ul className='o-secondary-nav__list o-secondary-nav__list--children'>
                        {item.children.map((child) =>
                          child.isActive ? (
                            <li key={child.href}>
                              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- cfgov omits href for current page */}
                              <a
                                className='o-secondary-nav__link o-secondary-nav__link--current'
                                aria-current='page'
                              >
                                {child.label}
                              </a>
                            </li>
                          ) : (
                            <li key={child.href}>
                              <a
                                className='o-secondary-nav__link'
                                href={child.href}
                                onClick={onLinkClick}
                              >
                                {child.label}
                              </a>
                            </li>
                          ),
                        )}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
};

import classnames from 'classnames';
import type { HTMLAttributes } from 'react';
import { JSX, useId, useState } from 'react';
import { Icon } from '../Icon/icon';
import Link from '../Link/link';
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
   * Accessible label for the nav landmark. Defaults to "Page navigation".
   */
  ariaLabel?: string;
  /**
   * Label for the mobile toggle button. Defaults to "Navigate this section".
   */
  mobileToggleLabel?: string;
}

/**
 * Secondary navigation (e.g. left panel "Navigate this section") for in-page or section navigation.
 * Matches the pattern used on consumerfinance.gov compliance and other CFPB pages.
 *
 * @see https://www.consumerfinance.gov/compliance/supervisory-highlights/
 */
export const SecondaryNav = ({
  items,
  ariaLabel = 'Page navigation',
  mobileToggleLabel = 'Navigate this section',
  className,
  ...properties
}: SecondaryNavProperties): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const listId = useId();

  const onToggle = (): void => {
    setIsExpanded((isOpen) => !isOpen);
  };

  const onLinkClick = (): void => {
    setIsExpanded(false);
  };

  return (
    <nav
      className={classnames('o-secondary-nav', className)}
      aria-label={ariaLabel}
      {...properties}
    >
      {items.length > 0 ? (
        <>
          <button
            type='button'
            className='o-secondary-nav__toggle'
            aria-expanded={isExpanded}
            aria-controls={listId}
            aria-label={mobileToggleLabel}
            data-testid='secondary-nav-toggle'
            onClick={onToggle}
          >
            <span className='o-secondary-nav__toggle-label'>
              {mobileToggleLabel}
            </span>
            <span className='o-secondary-nav__toggle-icon' aria-hidden='true'>
              <Icon name={isExpanded ? 'up' : 'down'} isPresentational />
            </span>
          </button>
          <ul
            id={listId}
            className='o-secondary-nav__list o-secondary-nav__list--parents'
            data-expanded={isExpanded ? 'true' : 'false'}
          >
            {items.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const hasActiveChild =
                hasChildren && item.children!.some((c) => c.isActive);
              const parentIsActive = Boolean(item.isActive && !hasActiveChild);
              const sectionHasActive = hasActiveChild || parentIsActive;

              return (
                <li
                  key={item.href ?? item.label}
                  className='o-secondary-nav__item'
                  data-nav-is-active={sectionHasActive ? 'true' : undefined}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={classnames(
                        'o-secondary-nav__link o-secondary-nav__link--parent',
                        parentIsActive && 'o-secondary-nav__link--current',
                      )}
                      aria-current={parentIsActive ? 'page' : undefined}
                      onClick={onLinkClick}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid -- placeholder anchor per CFPB pattern
                    <a
                      className='o-secondary-nav__link o-secondary-nav__link--parent'
                      aria-current={undefined}
                    >
                      {item.label}
                    </a>
                  )}
                  {item.children && item.children.length > 0 ? (
                    <ul className='o-secondary-nav__list o-secondary-nav__list--children'>
                      {item.children.map((child) => (
                        <li key={child.href} className='o-secondary-nav__item'>
                          <Link
                            href={child.href}
                            className={classnames(
                              'o-secondary-nav__link',
                              child.isActive && 'o-secondary-nav__link--current',
                            )}
                            aria-current={child.isActive ? 'page' : undefined}
                            onClick={onLinkClick}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </nav>
  );
};

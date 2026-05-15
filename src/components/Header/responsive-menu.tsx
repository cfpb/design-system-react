import React, { JSX, useCallback, useState } from 'react';
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import logo161w from '../../assets/images/cfpb-header/logo-161w.png?url';
import logo237w from '../../assets/images/cfpb-header/logo-237w.png?url';
import logo322w from '../../assets/images/cfpb-header/logo-322w.png?url';
import logo474w from '../../assets/images/cfpb-header/logo-474w.png?url';
import logo483w from '../../assets/images/cfpb-header/logo-483w.png?url';
import logo644w from '../../assets/images/cfpb-header/logo-644w.png?url';
import { Button } from '../Buttons/button';
import { Icon } from '../Icon/icon';
import Link from '../Link/link';
import type { JSXElement } from '../../types/jsx-element';
import './responsive-menu.scss';

/** Matches consumerfinance.gov header logo `srcset` (see static/img on the live site). */
const CFPB_HEADER_LOGO_SRCSET = [
  `${logo161w} 161w`,
  `${logo322w} 322w`,
  `${logo483w} 483w`,
  `${logo644w} 644w`,
  `${logo237w} 237w`,
  `${logo474w} 474w`,
].join(', ');

interface CfpbLogoProperties {
  href?: string;
}

export function CfpbLogo({
  href = 'https://www.consumerfinance.gov',
}: CfpbLogoProperties): JSX.Element {
  return (
    <Link
      data-testid='CfpbLogoLink'
      href={href}
      title='Home'
      aria-label='Home'
      className='o-header__logo'
    >
      <img
        alt='Consumer Financial Protection Bureau'
        className='o-header__logo-img'
        height={50}
        sizes='(max-width: 900px) 161px, 237px'
        src={logo237w}
        srcSet={CFPB_HEADER_LOGO_SRCSET}
        width={237}
      />
    </Link>
  );
}

const Links = ({
  elements,
  onLinkClick,
}: {
  elements: ReactNode[] | undefined;
  onLinkClick: () => void;
}): JSXElement => {
  if (!elements?.length) return null;

  return (
    <div className='links'>
      {elements.map((element, index) => {
        if (
          React.isValidElement<{ onClick?: (event: MouseEvent) => void }>(
            element,
          )
        ) {
          return React.cloneElement(element, {
            ...element.props,
            key: element.key ?? index,
            onClick: (event: MouseEvent) => {
              if (element.props.onClick) {
                element.props.onClick(event);
              }
              onLinkClick();
            },
          });
        }
        return element;
      })}
    </div>
  );
};

interface ResponsiveMenuProperties {
  links?: ReactNode[];
  href?: string;
}

export default function ResponsiveMenu({
  links,
  href,
}: ResponsiveMenuProperties): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLinkClick = (): void => {
    setIsMenuOpen(false);
  };

  const onHandleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    },
    [],
  );

  if (!links?.length) {
    // no need for hamburger menu button or any links
    return (
      <div className='o-header__content'>
        <div className='navbar wrapper wrapper--match-content'>
          <CfpbLogo href={href} />
        </div>
      </div>
    );
  }

  return (
    <>
      {isMenuOpen ? (
        <div
          className='menu-overlay open'
          onClick={onToggleMenu}
          onKeyDown={onHandleKeyDown}
          tabIndex={0}
          role='button'
          aria-label='Close menu'
        />
      ) : null}
      <div className='o-header__content'>
        <div className='navbar wrapper wrapper--match-content'>
          <button
            className='menu-toggle'
            onClick={onToggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls='nav-links'
            type='button'
            data-testid='menu-toggle'
          >
            <Icon name={isMenuOpen ? 'error' : 'menu'} />
            <span className='sr-only'>
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
          </button>
          <CfpbLogo href={href} />
          <nav
            className={`nav-items ${isMenuOpen ? 'open' : ''}`}
            id='nav-links'
          >
            <Links elements={links} onLinkClick={onLinkClick} />
          </nav>
        </div>
      </div>
    </>
  );
}

export const ExampleLinks: ReactNode[] = [
  <Link key='home' href='/' label='Home' />,
  <Link
    key='filing'
    className='nav-item active'
    href='/filing'
    label='Filing'
  />,
  <Link
    key='profile'
    className='nav-item profile'
    href='/profile'
    label='John Sample'
  />,
  <Button
    appearance={'secondary'}
    label='Log out'
    onClick={(): void => {
      /* Empty*/
    }}
    key='logout'
  />,
];

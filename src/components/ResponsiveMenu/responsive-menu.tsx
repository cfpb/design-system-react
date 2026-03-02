import React, { JSX, useCallback, useState } from 'react';
import CFPBLogo from '../../assets/images/cfpb-logo.png';
import { Button } from '../Buttons/button';
import { Icon } from '../Icon/icon';
import Link from '../Link/link';
<<<<<<< HEAD
import Navbar, { buildUserLinks } from '../Navbar/navbar';
import type { User } from '../../types/user';
=======
>>>>>>> main
import './responsive-menu.scss';

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
      <img className='o-header__logo-img' src={CFPBLogo} alt='CFPB Logo' />
    </Link>
  );
}

const Links = ({
  elements,
  onLinkClick,
}: {
  elements: React.ReactNode[] | undefined;
  onLinkClick: () => void;
}): JSX.Element | null => {
  if (!elements?.length) return null;

  return (
    <div className='links'>
      {elements.map((element, index) => {
        if (
          React.isValidElement<{ onClick?: (event: React.MouseEvent) => void }>(
            element,
          )
        ) {
          return React.cloneElement(element, {
            ...element.props,
            key: element.key ?? index,
            onClick: (event: React.MouseEvent) => {
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
  links?: React.ReactNode[];
  href?: string;
  user?: User;
}

export default function ResponsiveMenu({
  links,
  href,
  user,
}: ResponsiveMenuProperties): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLinkClick = (): void => {
    setIsMenuOpen(false);
  };

  const onHandleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
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
            <Links elements={allLinks} onLinkClick={onLinkClick} />
          </nav>
        </div>
      </div>
    </>
  );
}

export const ExampleLinks: React.ReactNode[] = [
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
    label='Log Out'
    isLink
    onClick={(): void => {
      /* Empty*/
    }}
    key='logout'
  />,
];

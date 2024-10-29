import React, { useCallback, useState } from 'react';
import CFPBLogo from '../../assets/images/cfpb-logo.png';
import { Button } from '../Buttons/Button';
import { Icon } from '../Icon/Icon';
import Link from '../Link/Link';
import Navbar from '../Navbar/Navbar';
import './responsivemenu.less';

interface CfpbLogoProperties {
  href?: string;
}

export function CfpbLogo({
  href = 'https://www.consumerfinance.gov'
}: CfpbLogoProperties): JSX.Element {
  return (
    <Link
      data-testid='CfpbLogoLink'
      href={href}
      title='Home'
      aria-label='Home'
      className='o-header_logo'
    >
      <img className='o-header_logo-img' src={CFPBLogo} alt='CFPB Logo' />
    </Link>
  );
}

const Links = ({
  elements,
  onLinkClick
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
            element
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
            }
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
}

export default function ResponsiveMenu({
  links,
  href
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
    []
  );

  if (!links?.length) return <Navbar href={href} />;

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
      <header className='o-header_content'>
        <div className='navbar wrapper wrapper__match-content'>
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
      </header>
    </>
  );
}

export const ExampleLinks: React.ReactNode[] = [
  <Link key='home' href='/'>
    <span className='nav-item'>Home</span>
  </Link>,
  <Link key='filing' className='nav-item active' href='/filing'>
    Filing
  </Link>,
  <Link key='profile' className='nav-item profile' href='/profile'>
    <span>John Sample</span>
  </Link>,
  <Button label='LOG OUT' asLink onClick={(): void => {}} key='logout' />
];

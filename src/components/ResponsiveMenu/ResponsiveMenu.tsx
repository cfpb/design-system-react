import type React from 'react';
import { useCallback, useState } from 'react';
import CFPBLogo from '../../assets/images/cfpb-logo.png';
import { Button } from '../Buttons/Button';
import { Icon } from '../Icon/Icon';
import Link from '../Link/Link';
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
  elements
}: {
  elements: React.ReactNode[] | undefined;
}): JSX.Element | null => {
  if (!elements?.length) return null;

  return <div className='links'>{elements}</div>;
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

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onHandleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    },
    []
  );

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
            <Links elements={links} />
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
  <Link key='profile' href='/profile'>
    <span className='nav-item'>John Sample</span>
  </Link>,
  <Button label='LOG OUT' asLink onClick={() => {}} key='logout' />
];

import type { JSX, ReactNode } from 'react';
import CFPBLogo from '../../assets/images/cfpb-logo.png';
import { Button } from '../Buttons/button';
import Link from '../Link/link';
import type { User } from '../../types/user';
import './navbar.scss';

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
}: {
  elements: ReactNode[] | undefined;
}): JSX.Element | null => {
  if (!elements?.length) return null;

  return <div className='links'>{elements}</div>;
};

interface NavbarProperties {
  links?: ReactNode[];
  href?: string;
  user?: User;
}

export const buildUserLinks = (user?: User): JSX.Element[] => {
  if (!user) return [];

  const userLinks: JSX.Element[] = [];

  if (user.name && user.profileHref) {
    userLinks.push(
      <Link className='nav-item profile' key='profile' href={user.profileHref}>
        {user.name}
      </Link>,
    );
  }

  if (user.logoutHref) {
    userLinks.push(
      <Link className='nav-item' key='logout' href={user.logoutHref}>
        Log out
      </Link>,
    );
  } else if (user.loginHref) {
    userLinks.push(
      <Link className='nav-item' key='login' href={user.loginHref}>
        Log in
      </Link>,
    );
  }

  return userLinks;
};

export default function Navbar({
  links,
  href,
  user,
}: NavbarProperties): JSX.Element {
  const allLinks = [...(links ?? []), ...buildUserLinks(user)];

  return (
    <div className='o-header__content'>
      <div className='navbar-static wrapper wrapper--match-content'>
        <CfpbLogo href={href} />
        <div className='nav-items'>
          <Links elements={allLinks} />
        </div>
      </div>
    </div>
  );
}

export const ExampleLinks: JSX.Element[] = [
  <Link className='nav-item' key='home' href='/'>
    Home
  </Link>,
  <Link className='nav-item active' key='filing' href='/filing'>
    Filing
  </Link>,
  <Link className='nav-item' key='profile' href='/profile'>
    John Sample
  </Link>,
  <Button label='LOG OUT' asLink key='logout' />,
];

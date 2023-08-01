import type { JSXElement } from '~/src/types/jsxElement';
import CFPBLogo from '../../assets/images/cfpb-logo.png';
import Link from '../Link/Link';
import './navbar.less';

export function CfpbLogo(): JSX.Element {
  return (
    <Link href='/' title='Home' aria-label='Home' className='o-header_logo'>
      <img className='o-header_logo-img' src={CFPBLogo} alt='CFPB Logo' />
    </Link>
  );
}

const Links = ({
  elements
}: {
  elements: JSX.Element[] | undefined;
}): JSX.Element | null => {
  if (!elements?.length) return null;

  return <div className='links'>{elements}</div>;
};

interface NavbarProperties {
  links?: JSX.Element[];
  user?: User;
}

export interface User {
  name?: string;
  loginHref?: string;
  logoutHref?: string;
}

interface UserActionsProperties {
  user?: User;
}

const UserActions = ({ user }: UserActionsProperties): JSXElement => {
  if (!user) return null;

  if (!user.name)
    return (
      <div className='user-actions'>
        <Link href={user.loginHref} className='nav-item login'>
          LOGIN
        </Link>
      </div>
    );

  return (
    <div className='user-actions'>
      <span className='nav-item username'>{user.name}</span>
      <Link href={user.logoutHref} className='nav-item logout'>
        LOGOUT
      </Link>
    </div>
  );
};

export default function Navbar({ links, user }: NavbarProperties): JSX.Element {
  return (
    <div className='o-header_content'>
      <div className='navbar wrapper wrapper__match-content'>
        <CfpbLogo />
        <div className='nav-items'>
          <Links elements={links} />
          <UserActions user={user} />
        </div>
      </div>
    </div>
  );
}

export const ExampleLinks: JSX.Element[] = [
  <Link href='/' className='nav-item' key='home'>
    HOME
  </Link>,
  <Link href='/filing' className='nav-item selected' key='filing'>
    FILING HOME
  </Link>,
  <Link href='/datasets' className='nav-item' key='dataset'>
    DATASETS
  </Link>
];

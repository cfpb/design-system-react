import CFPBLogo from '../../assets/images/cfpb-logo.png';
import Link from '../Link/Link';
import './navbar.less';

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
  elements: JSX.Element[] | undefined;
}): JSX.Element | null => {
  if (!elements?.length) return null;

  return <div className='links'>{elements}</div>;
};

const UserActions = ({
  elements
}: {
  elements: JSX.Element[] | undefined;
}): JSX.Element | null => {
  if (!elements?.length) return null;

  return <div className='user-actions'>{elements}</div>;
};

interface NavbarProperties {
  links?: JSX.Element[];
  user?: JSX.Element[];
  href?: string;
}

// export interface User {
//   name?: string;
//   loginHref?: string;
//   logoutHref?: string;
// }

// interface UserActionsProperties {
//   user?: User;
// }

// const UserActions = ({ user }: UserActionsProperties): JSXElement => {
//   if (!user) return null;

//   if (!user.name)
//     return (
//       <div className='user-actions'>
//         <Link href={user.loginHref} className='nav-item login'>
//           LOGIN
//         </Link>
//       </div>
//     );

//   return (
//     <div className='user-actions'>
//       <span className='nav-item username'>{user.name}</span>
//       <Link href={user.logoutHref} className='nav-item logout'>
//         LOG OUT
//       </Link>
//     </div>
//   );
// };

export default function Navbar({
  links,
  user,
  href
}: NavbarProperties): JSX.Element {
  return (
    <div className='o-header_content'>
      <div className='navbar wrapper wrapper__match-content'>
        <CfpbLogo href={href} />
        <div className='nav-items'>
          <Links elements={links} />
          <UserActions elements={user} />
        </div>
      </div>
    </div>
  );
}

export const ExampleLinks: JSX.Element[] = [
  <Link href='/' className='nav-item' key='home'>
    Home
  </Link>,
  <Link href='/filing' className='nav-item selected' key='filing'>
    Filing
  </Link>
];

export const ExampleUserLinks: JSX.Element[] = [
  <Link href='/profile/view' className='nav-item' key='profile'>
    John Sample
  </Link>,
  <Link href='#' className='nav-item' key='logout'>
    LOG OUT
  </Link>
];

export const ExampleLoginLink: JSX.Element[] = [
  <Link href='#' className='nav-item' key='login'>
    Login
  </Link>
];

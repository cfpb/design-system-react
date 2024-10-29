import CFPBLogo from '../../assets/images/cfpb-logo.png';
import { Button } from '../Buttons/Button';
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

interface NavbarProperties {
  links?: JSX.Element[];
  href?: string;
}

export default function Navbar({ links, href }: NavbarProperties): JSX.Element {
  return (
    <div className='o-header_content'>
      <div className='navbar-static wrapper wrapper__match-content'>
        <CfpbLogo href={href} />
        <div className='nav-items'>
          <Links elements={links} />
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
  <Button label='LOG OUT' asLink onClick='' key='logout' />
];

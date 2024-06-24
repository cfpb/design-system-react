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

interface NavbarProperties {
  links?: JSX.Element[];
  href?: string;
}

export default function Navbar({ links, href }: NavbarProperties): JSX.Element {
  return (
    <div className='o-header_content'>
      <div className='navbar wrapper wrapper__match-content'>
        <CfpbLogo href={href} />
        <div className='nav-items'>
          <Links elements={links} />
        </div>
      </div>
    </div>
  );
}

export const ExampleLinks: JSX.Element[] = [
  <Link className='nav-item' key='home'>
    Home
  </Link>,
  <Link className='nav-item active' key='filing'>
    Filing
  </Link>,
  <Link className='nav-item' key='profile'>
    John Sample
  </Link>,
  <Link className='nav-item' key='logout'>
    LOG OUT
  </Link>
];

import { Banner } from '../Banner/Banner';
import type { User } from '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar';
import './header.less';

interface PageHeaderProperties {
  links?: JSX.Element[];
  user?: User;
  href?: string;
}

export default function PageHeader({
  links,
  user,
  href
}: PageHeaderProperties): JSX.Element {
  return (
    <header className='o-header'>
      <Banner tagline='An official website of the United States government' />
      <Navbar {...{ links, user, href }} />
    </header>
  );
}

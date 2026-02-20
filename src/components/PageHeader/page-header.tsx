import classnames from 'classnames';
import { JSX } from 'react';
import { Banner } from '../Banner/banner';
import type { User } from '../../types/user';
import ResponsiveMenu from '../ResponsiveMenu/responsive-menu';
import './page-header.scss';

interface PageHeaderProperties {
  links?: JSX.Element[];
  user?: User;
  href?: string;
  withBottomBorder?: boolean;
}

export default function PageHeader({
  links,
  user,
  href,
  withBottomBorder = true,
}: PageHeaderProperties): JSX.Element {
  const headerClasses = ['o-header'];
  if (withBottomBorder) headerClasses.push('bottom-border');

  return (
    <header className={classnames(headerClasses)}>
      <Banner tagline='An official website of the United States government' />
      <ResponsiveMenu links={links} href={href} user={user} />
    </header>
  );
}

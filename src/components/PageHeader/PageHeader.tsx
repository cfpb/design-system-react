import classnames from 'classnames';
import { Banner } from '../Banner/Banner';
import type { User } from '../ResponsiveMenu/ResponsiveMenu';
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';
import './header.less';

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
  withBottomBorder = true
}: PageHeaderProperties): JSX.Element {
  const headerClasses = ['o-header'];
  if (withBottomBorder) headerClasses.push('bottom-border');

  return (
    <header className={classnames(headerClasses)}>
      <Banner tagline='An official website of the United States government' />
      <ResponsiveMenu {...{ links, user, href }} />
    </header>
  );
}

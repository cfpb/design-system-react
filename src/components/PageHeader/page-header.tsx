import classnames from 'classnames';
import { JSX } from 'react';
import { Banner } from '../Banner/banner';
import ResponsiveMenu from '../ResponsiveMenu/responsive-menu';
import './page-header.scss';

interface PageHeaderProperties {
  links?: JSX.Element[];
  href?: string;
  withBottomBorder?: boolean;
}

export default function PageHeader({
  links,
  href,
  withBottomBorder = true,
}: PageHeaderProperties): JSX.Element {
  const headerClasses = ['o-header'];
  if (withBottomBorder) headerClasses.push('bottom-border');

  return (
    <header className={classnames(headerClasses)}>
      <Banner tagline='An official website of the United States government' />
      <ResponsiveMenu links={links} href={href} />
    </header>
  );
}

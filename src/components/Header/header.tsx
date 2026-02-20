import classnames from 'classnames';
import { JSX } from 'react';
import { Banner } from '../Banner/banner';
import type { User } from '../../types/user';
import ResponsiveMenu from '../ResponsiveMenu/responsive-menu';
import './header.scss';

export interface HeaderProperties {
  links?: JSX.Element[];
  user?: User;
  href?: string;
  withBottomBorder?: boolean;
}

/**
 * A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
 *
 */
export const Header = ({
  links,
  user,
  href,
  withBottomBorder = true,
}: HeaderProperties): JSX.Element => {
  const headerClasses = ['o-header'];
  if (withBottomBorder) headerClasses.push('bottom-border');

  return (
    <header className={classnames(headerClasses)}>
      <Banner tagline='An official website of the United States government' />
      <ResponsiveMenu links={links} href={href} user={user} />
    </header>
  );
};

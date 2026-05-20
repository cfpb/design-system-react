import classnames from 'classnames';
import { JSX } from 'react';
import { Banner } from '../Banner/banner';
import ResponsiveMenu from './responsive-menu';
import './header.scss';

export interface HeaderProperties {
  links?: JSX.Element[];
  href?: string;
}

/**
 * A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
 *
 */
export const Header = ({ links, href }: HeaderProperties): JSX.Element => {
  const headerClasses = ['o-header', 'bottom-border'];

  return (
    <div className='o-header-scope'>
      <header className={classnames(headerClasses)}>
        <Banner tagline='An official website of the United States government' />
        <ResponsiveMenu links={links} href={href} />
      </header>
    </div>
  );
};

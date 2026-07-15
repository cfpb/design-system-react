import classnames from 'classnames';
import { JSX } from 'react';
import { Banner } from '../banner/banner';
import type { LogoLanguage } from './logo';
import ResponsiveMenu from './responsive-menu';
import './header.scss';

export interface HeaderProperties {
  links?: JSX.Element[];
  href?: string;
  lang?: LogoLanguage;
}

/**
 * The header component is a primary user interface element at the top of a
 * webpage that helps visitors identify their location and provides organized,
 * high-level navigation across the site.
 *
 */
export const Header = ({
  links,
  href,
  lang = 'en',
}: HeaderProperties): JSX.Element => {
  const headerClasses = ['o-header', 'bottom-border'];

  const taglineText =
    lang === 'es'
      ? 'Un sitio web oficial del gobierno federal de los Estados Unidos'
      : 'An official website of the United States government';

  return (
    <div className='o-header-scope'>
      <header className={classnames(headerClasses)}>
        <Banner tagline={taglineText} />
        <ResponsiveMenu links={links} href={href} lang={lang} />
      </header>
    </div>
  );
};

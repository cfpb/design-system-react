import type { JSXElement } from '../../types/jsxElement';
import './SkipNav.scss';
import { Link } from '~/src';

export interface SkipNavProperties {
  href?: string;
}

/**
 * A SkipNav (skip navigation) link is an accessibility feature, usually hidden
 * until focused, placed at the top of a webpage to allow keyboard and screen
 * reader users to bypass repetitive navigation menus and jump directly to the
 * main content. It acts as an anchor link, enhancing user experience and
 * efficiency.
 */
export default function SkipNav({
  href = '#main'
}: SkipNavProperties): JSXElement {
  return (
    <div className='skip-nav'>
      <Link
        href={href}
        label={'Skip to main content'}
        className={'skip-nav__link'}
        asButton
      />
    </div>
  );
}

import type { JSXElement } from '../../types/jsxElement';
import './SkipNav.scss';

/**
 * A skipnav (skip navigation) link is an accessibility feature, usually hidden
 * until focused, placed at the top of a webpage to allow keyboard and screen
 * reader users to bypass repetitive navigation menus and jump directly to the
 * main content. It acts as an anchor link, enhancing user experience and
 * efficiency.
 */
export default function SkipNav({
  href = '#main',
  text = 'Skip to main content'
}): JSXElement {
  return (
    <div className='skip-nav'>
      <a className='skip-nav__link a-btn' href={href}>
        {text}
      </a>
    </div>
  );
}

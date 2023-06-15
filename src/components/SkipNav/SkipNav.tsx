import type { JSXElement } from '../../types/jsxElement';
import './SkipNav.less';

export default function SkipNav({
  href = '#main',
  text = 'Skip to main content'
}): JSXElement {
  return (
    <div className='skip-nav'>
      <a className='skip-nav_link a-btn' href={href}>
        {text}
      </a>
    </div>
  );
}

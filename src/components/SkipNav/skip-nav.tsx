import { CfpbButton } from '@cfpb/cfpb-design-system';
import type { JSXElement } from '../../types/jsx-element';
import './skip-nav.scss';

CfpbButton.init();

export interface SkipNavProperties {
  href?: string;
  label?: string;
}

/**
 * A SkipNav (skip navigation) link is an accessibility feature, usually hidden
 * until focused, placed at the top of a webpage to allow keyboard and screen
 * reader users to bypass repetitive navigation menus and jump directly to the
 * main content. It acts as an anchor link, enhancing user experience and
 * efficiency.
 */
export default function SkipNav({
  href = '#main',
  label = 'Skip to main content',
}: SkipNavProperties): JSXElement {
  return (
    <div className='skip-nav'>
      <cfpb-button href={href} className='skip-nav__link'>
        {label}
      </cfpb-button>
    </div>
  );
}

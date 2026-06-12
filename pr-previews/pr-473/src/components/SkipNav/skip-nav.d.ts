import { JSXElement } from '../../types/jsx-element';
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
export default function SkipNav({ href, label, }: SkipNavProperties): JSXElement;

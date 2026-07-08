import { JSX } from '../../../node_modules/react';
import { LogoLanguage } from './logo';
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
export declare const Header: ({ links, href, lang, }: HeaderProperties) => JSX.Element;

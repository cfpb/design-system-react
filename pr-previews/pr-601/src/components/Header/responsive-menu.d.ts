import { JSX, ReactNode } from '../../../node_modules/react';
import { LogoLanguage } from './logo';
interface CfpbLogoProperties {
    href?: string;
    language?: LogoLanguage;
}
export declare function CfpbLogo({ href, language, }: CfpbLogoProperties): JSX.Element;
interface ResponsiveMenuProperties {
    links?: ReactNode[];
    href?: string;
    lang?: LogoLanguage;
}
export default function ResponsiveMenu({ links, href, lang, }: ResponsiveMenuProperties): JSX.Element;
export declare const ExampleLinks: ReactNode[];
export {};

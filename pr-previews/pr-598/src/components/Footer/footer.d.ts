import { JSX, ReactNode, HTMLProps } from '../../../node_modules/react';
interface FooterProperties extends HTMLProps<HTMLElement> {
    children?: ReactNode;
}
export declare function Footer({ children, className, ...properties }: FooterProperties): JSX.Element;
interface WebsiteFooterProperties extends HTMLProps<HTMLElement> {
    navLinks?: JSX.Element[];
    socialLinks?: JSX.Element[];
    linksCol1?: JSX.Element[];
    linksCol2?: JSX.Element[];
    linksCol3?: JSX.Element[];
}
/**
 * Simply define the anchor elements for each section to compose your Footer
 */
export declare function WebsiteFooter({ navLinks, socialLinks, linksCol1, linksCol2, linksCol3, className, ...properties }: WebsiteFooterProperties): JSX.Element;
interface ApplicationFooterProperties extends HTMLProps<HTMLElement> {
    footerContent?: JSX.Element | string;
    navLinks?: JSX.Element[];
}
/**
 * A minimal two-column footer for use in applications.
 * The left column can contain information about the app,
 * and the right column is for relevant links.
 */
export declare function ApplicationFooter({ footerContent, navLinks, className, ...properties }: ApplicationFooterProperties): JSX.Element;
export {};

import { JSX, HTMLProps, ReactNode, Ref } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
export interface LinkProperties extends HTMLProps<HTMLAnchorElement> {
    /**
     * Whether the link should be rendered as a button.
     */
    isButton?: boolean;
    /**
     * Any children to render within the link. Allows you to wrap any node with anchor tag
     */
    children?: ReactNode;
    /**
     * The link's destination URL.
     */
    href: string;
    /**
     * Name of icon to display left of link text
     */
    iconLeft?: string;
    /**
     * Name of icon to display right of link text
     */
    iconRight?: string;
    /**
     * Whether the link is a standalone link
     */
    isJump?: boolean;
    /**
     * Whether the link is a react router link
     */
    isRouterLink?: boolean;
    /**
     * The link's text content, not required if children are provided
     */
    label?: string;
    ref?: Ref<HTMLAnchorElement>;
    /**
     * What type of link should be rendered
     */
    type?: 'default' | 'destructive';
}
/**
 * Links are navigational elements that connect users to other locations, either on the current page or to a different
 * page or site. In contrast, buttons are used to signal important actions.
 *
 * Source: https://cfpb.github.io/design-system/components/links
 */
export default function Link({ isButton, children, href, iconLeft, iconRight, isJump, isRouterLink, label, type, ...others }: LinkProperties): JSXElement;
export declare const LinkText: ({ children, ...others }: HTMLProps<HTMLSpanElement>) => JSX.Element;
export declare const ListLink: (properties: LinkProperties) => JSXElement;

import { ReactNode } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
export interface BaseLinkProperties {
    to: string | undefined;
    children: ReactNode;
    [key: string]: unknown;
}
export declare const BaseLink: ({ to, children, ...others }: BaseLinkProperties) => JSXElement | null;

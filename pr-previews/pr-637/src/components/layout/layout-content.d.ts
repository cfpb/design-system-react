import { JSX, HTMLAttributes } from '../../../node_modules/react';
export interface LayoutContentProperties {
    children: JSX.Element | JSX.Element[] | string;
    flushAllOnSmall?: boolean;
    flushBottom?: boolean;
    flushTopOnSmall?: boolean;
}
export declare const LayoutContent: ({ children, flushBottom, flushTopOnSmall, flushAllOnSmall, ...properties }: LayoutContentProperties & HTMLAttributes<HTMLDivElement>) => JSX.Element;

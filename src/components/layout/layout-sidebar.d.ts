import { JSX, HTMLAttributes } from '../../../node_modules/react';
export interface LayoutSidebarProperties {
    children: JSX.Element | JSX.Element[] | string;
    flushBottom?: boolean;
    flushTopOnSmall?: boolean;
    flushAllOnSmall?: boolean;
}
export declare const LayoutSidebar: ({ children, flushBottom, flushTopOnSmall, flushAllOnSmall, ...properties }: LayoutSidebarProperties & HTMLAttributes<HTMLDivElement>) => JSX.Element;

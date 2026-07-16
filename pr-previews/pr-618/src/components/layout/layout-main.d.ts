import { JSX } from '../../../node_modules/react';
export interface LayoutMainProperties {
    children: JSX.Element | JSX.Element[];
    classes?: string;
    id?: string;
    layout?: '1-3' | '2-1';
}
export declare const LayoutMain: ({ children, classes, id, layout, }: LayoutMainProperties) => JSX.Element;

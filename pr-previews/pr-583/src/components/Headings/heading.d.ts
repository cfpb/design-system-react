import { JSX, HTMLProps, ReactNode } from '../../../node_modules/react';
export type HeadingType = '1' | '2' | '3' | '4' | '5' | 'display' | 'eyebrow' | 'slug';
interface HeadingProperties extends Omit<HTMLProps<HTMLHeadingElement>, 'children'> {
    /** Heading type (1-5, display, eyebrow, slug) */
    type?: HeadingType;
    children?: ReactNode;
}
export declare const Heading: ({ type, children, className, ...properties }: HeadingProperties) => JSX.Element;
export {};

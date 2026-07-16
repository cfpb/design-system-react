import { JSX, HTMLProps } from '../../../node_modules/react';
export type HeadingType = '1' | '2' | '3' | '4' | '5' | 'display' | 'eyebrow' | 'slug';
interface HeadingProperties extends HTMLProps<HTMLHeadingElement> {
    /** Heading type (1-5, display, eyebrow, slug) */
    type?: HeadingType;
}
export declare const Heading: ({ type, children, className, ...properties }: HeadingProperties) => JSX.Element;
export {};

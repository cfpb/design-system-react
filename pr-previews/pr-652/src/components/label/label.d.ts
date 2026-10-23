import { JSX, ReactNode } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
interface LabelProperties {
    children: ReactNode;
    /** When true, uses inline label style instead of heading style */
    isInline?: boolean;
    htmlFor: string;
    className?: string;
}
export declare const Label: ({ children, isInline, htmlFor, className, ...other }: JSX.IntrinsicElements["label"] & LabelProperties) => JSXElement;
export default Label;

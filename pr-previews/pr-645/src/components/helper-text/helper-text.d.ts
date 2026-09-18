import { HTMLProps } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
type HelperTextProperties = HTMLProps<HTMLDivElement>;
/**
 * A utility component to consistently display helper text for input elements
 */
export declare const HelperText: ({ children, className, ...properties }: HelperTextProperties) => JSXElement;
export {};

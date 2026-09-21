import { JSX } from '../../../node_modules/react';
interface ListProperties {
    children: JSX.Element | JSX.Element[];
    className?: string;
    isHorizontal?: boolean;
    isLinks?: boolean;
    isOrdered?: boolean;
    isSpaced?: boolean;
    isUnstyled?: boolean;
}
export default function List({ children, className, isHorizontal, isLinks, isOrdered, isSpaced, isUnstyled, }: ListProperties): JSX.Element;
export {};

import { JSX } from '../../../node_modules/react';
interface GridWrapperProperties {
    width?: number | undefined;
    children?: JSX.Element | JSX.Element[] | string;
    demo?: boolean;
    center?: boolean;
    className?: string;
}
export declare function GridWrapper({ children, width, // TODO: Do we need to support non-12-column grids?
demo, center, className, ...properties }: GridWrapperProperties): JSX.Element;
export {};

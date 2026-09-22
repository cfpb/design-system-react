import { JSX } from '../../../node_modules/react';
export declare enum GridColWidth {
    Full = 12,
    ThreeQuarters = 9,
    TwoThirds = 8,
    Half = 6,
    Third = 4,
    Quarter = 3,
    Single = 1
}
interface GridColumnProperties {
    width?: GridColWidth | number | undefined;
    children?: JSX.Element | JSX.Element[] | string;
    className?: string;
    others?: unknown[];
}
export declare function GridColumn({ width, children, className, ...properties }: GridColumnProperties): JSX.Element;
export {};

import { FC, HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface ExpandableProperties extends HTMLAttributes<HTMLDivElement> {
    header: string;
    children: ReactNode;
    icon?: string;
    inAccordion?: boolean;
    isPadded?: boolean;
    openOnLoad?: boolean;
}
export declare const Expandable: FC<ExpandableProperties>;
export default Expandable;

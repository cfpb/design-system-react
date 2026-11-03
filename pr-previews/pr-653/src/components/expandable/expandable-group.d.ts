import { FC, HTMLAttributes, ReactElement } from '../../../node_modules/react';
import { ExpandableProperties } from './expandable';
export interface ExpandableGroupProperties extends HTMLAttributes<HTMLDivElement> {
    groupId: string;
    accordion?: boolean;
    children?: ReactElement<ExpandableProperties>[];
}
export declare const ExpandableGroup: FC<ExpandableGroupProperties>;
export default ExpandableGroup;

import { ForwardedRef, HTMLProps, ReactNode } from '../../../node_modules/react';
import { WidthPercent } from '../../types/width-percent';
export interface TableColumnConfig {
    header: string;
    isAlignRight?: boolean | undefined;
    width?: WidthPercent;
    isCellWordBreak?: boolean;
    isCellDisableWordWrap?: boolean;
    isHeaderWordWrap?: boolean;
}
export type TableColumn = TableColumnConfig | string;
export interface TableProperties {
    id?: string;
    caption?: ReactNode;
    columns: TableColumn[];
    rows: ReactNode[][];
    isResponsive?: boolean;
    isScrollableHorizontal?: boolean;
    isStriped?: boolean;
    isPaginated?: boolean;
    startPage?: number;
    perPage?: number;
    className?: string;
    divRef?: ForwardedRef<HTMLDivElement>;
    tableRef?: ForwardedRef<HTMLTableElement>;
}
/**
 * Tables allow for the presentation of many data points grouped together in a visual way. They serve a unique purpose of allowing easy organization or comparison of more complex data than a chart or graph. They can be read either vertically (by columns) or horizontally (by rows).
 *
 * Source: https://cfpb.github.io/design-system/components/tables
 */
export declare const Table: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<HTMLProps<HTMLTableElement> & TableProperties, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Table;

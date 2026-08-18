import { ReactNode } from '../../../node_modules/react';
import { PaginationProperties } from './pagination';
export declare const ONE = 1;
interface UsePaginationProperties {
    isPaginated?: boolean;
    startPage?: number;
    rows?: ReactNode[][];
    perPage?: number;
}
/**
 * Hook to determine which data is visible for the currently selected page as well as derive props for Pagination based on the provided list of items and configuration options
 *
 *  In the return array:
 * - VisibleRows = Rows for the currently selected page (or all rows when not paginating)
 * - PaginationProperties = Props that should be passed to the <Pagination /> component
 *
 * @returns [VisibleRows, PaginationProperties]
 */
export declare const usePagination: ({ isPaginated, startPage, rows, perPage, }: UsePaginationProperties) => [ReactNode[][], PaginationProperties];
export {};

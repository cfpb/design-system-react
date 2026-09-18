import { ReactElement } from '../../../node_modules/react';
export interface PaginationProperties {
    /** Identifier of the table this element controls */
    tableId?: string;
    /** Currently displayed page number  */
    page: number;
    /** Total number of available pages */
    pageCount: number;
    /** Event handler for `Previous` button */
    onClickPrevious: () => void;
    /** Event handler for `Next` button */
    onClickNext: () => void;
    /** Event handler for `Go` button */
    onClickGo: (value: number) => void;
    /** Text label for Previous button */
    previousLabel?: string;
    /** Text label for Next button */
    nextLabel?: string;
}
/**
 * Pagination is used to help split up long sets of data or content into shorter pieces, so as to make it easier for users to consume information.
 *
 * Source: https://cfpb.github.io/design-system/components/pagination
 */
export declare const Pagination: ({ tableId, page, pageCount, onClickPrevious, onClickNext, onClickGo, previousLabel, nextLabel, }: PaginationProperties) => ReactElement;

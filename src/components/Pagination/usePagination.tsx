import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { noOp } from '~/src/utils/noOp';
import type { PaginationProperties } from './Pagination';
import { DEFAULT_PER_PAGE, MIN_PAGE } from './paginationConstants';

export const ONE = 1;

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
export const usePagination = ({
  isPaginated = true,
  startPage = MIN_PAGE,
  rows = [],
  perPage = DEFAULT_PER_PAGE
}: UsePaginationProperties): [ReactNode[][], PaginationProperties] => {
  const rowCount = rows.length;
  const pageCount = Math.max(Math.ceil(rowCount / perPage), MIN_PAGE);
  const canPaginate = isPaginated && rowCount > perPage;

  // Track the currently displayed page
  const [page, setPage] = useState<number>(Math.min(startPage, pageCount));

  // Keep `page` up-to-date if `perPage` count changes
  useEffect(() => {
    setPage(Math.min(page, pageCount));
  }, [page, pageCount, perPage]);

  const defaultProperties: PaginationProperties = {
    page: MIN_PAGE,
    pageCount: MIN_PAGE,
    onClickNext: noOp,
    onClickPrevious: noOp,
    onClickGo: noOp
  };

  // If not paginating, return the basics
  if (!isPaginated || !canPaginate) return [rows, defaultProperties];

  const zeroIndexedPage = page - ONE;

  const paginatedProperties = {
    page,
    pageCount,
    onClickNext: (): void => setPage(Math.min(page + ONE, pageCount)),
    onClickPrevious: (): void => setPage(Math.max(zeroIndexedPage, MIN_PAGE)),
    onClickGo: (targetPage: number): void => setPage(targetPage)
  };

  // Calculate which rows are shown on the current page
  const lowerBound = zeroIndexedPage * perPage;
  const upperBound = zeroIndexedPage * perPage + perPage;
  const visibleRows = rows.slice(lowerBound, upperBound);

  return [visibleRows, paginatedProperties];
};

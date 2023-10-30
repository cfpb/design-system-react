import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
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
 * Hook to derive props for Pagination based on the provided list of items and configuration options
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

  // Keep `page` in up-to-date if `perPage` count changes
  useEffect(() => {
    setPage(Math.min(page, pageCount));
  }, [page, pageCount, perPage]);

  const defaultProperties: PaginationProperties = {
    page: 0,
    pageCount: 0
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

  const lowerBound = zeroIndexedPage * perPage;
  const upperBound = zeroIndexedPage * perPage + perPage;
  const visibleRows = rows.slice(lowerBound, upperBound);

  return [visibleRows, paginatedProperties];
};

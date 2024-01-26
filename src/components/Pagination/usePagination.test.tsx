import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { usePagination } from './usePagination';

const ONE = 1;
const PER_PAGE = 10;
const NUMBER_ROWS = 30;

const generateTestRows = (quantity: number): ReactNode[][] =>
  [...Array.from({ length: quantity }).keys()].map(key => [
    `A${key + ONE}`,
    `B${key + ONE}`
  ]);

describe('usePagination', () => {
  it('Returns all rows when not paginating', () => {
    const { result } = renderHook(usePagination, {
      initialProps: {
        rows: generateTestRows(NUMBER_ROWS),
        isPaginated: false
      }
    });

    const [visibleRows, paginationProperties] = result.current;

    // Returns all rows
    expect(visibleRows.length).toBe(NUMBER_ROWS);

    // Returns placeholder Pagination props
    expect(paginationProperties.page).toBe(ONE);
    expect(paginationProperties.pageCount).toBe(ONE);
  });

  it('Returns all rows when cannot paginate (rows.length < perPage)', () => {
    const { result } = renderHook(usePagination, {
      initialProps: { rows: generateTestRows(4), perPage: 5 }
    });

    const [visibleRows, paginationProperties] = result.current;

    // Returns all rows
    expect(visibleRows.length).toBe(4);

    // Returns placeholder Pagination props
    expect(paginationProperties.page).toBe(ONE);
    expect(paginationProperties.pageCount).toBe(ONE);
  });

  it('Returns returns first page of content by default when paginating', () => {
    const { result } = renderHook(usePagination, {
      initialProps: {
        rows: generateTestRows(NUMBER_ROWS),
        perPage: PER_PAGE
      }
    });

    const [visibleRows, paginationProperties] = result.current;

    // Returns first page of content
    expect(visibleRows.length).toBe(PER_PAGE);
    expect(visibleRows[0][0]).toBe('A1');
    expect(visibleRows[0][1]).toBe('B1');

    // Correctly calculates Pagination props
    expect(paginationProperties.page).toBe(1);
    expect(paginationProperties.pageCount).toBe(3);
  });

  it('Returns correct page of content by default when given a startPage', () => {
    const { result } = renderHook(usePagination, {
      initialProps: {
        rows: generateTestRows(NUMBER_ROWS),
        perPage: PER_PAGE,
        startPage: 3
      }
    });

    const [visibleRows, paginationProperties] = result.current;

    // Returns page 3 of content
    expect(visibleRows.length).toBe(PER_PAGE);
    expect(visibleRows[0][0]).toBe('A21');
    expect(visibleRows[0][1]).toBe('B21');

    // Correctly calculates Pagination props
    expect(paginationProperties.page).toBe(3);
    expect(paginationProperties.pageCount).toBe(3);
  });

  it('Generated Pagination event handlers correctly update state', () => {
    const { result } = renderHook(usePagination, {
      initialProps: {
        rows: generateTestRows(NUMBER_ROWS),
        perPage: PER_PAGE,
        startPage: 3
      }
    });

    const [, paginationProperties] = result.current;

    // Correctly calculates Pagination props
    expect(paginationProperties.page).toBe(3);
    expect(paginationProperties.pageCount).toBe(3);

    // Handle clicking `Previous`
    act(() => paginationProperties.onClickPrevious());
    expect(result.current[1].page).toBe(2);
    expect(result.current[1].pageCount).toBe(3);

    // Handle clicking `Next`
    act(() => paginationProperties.onClickNext());
    expect(result.current[1].page).toBe(3);
    expect(result.current[1].pageCount).toBe(3);

    // Handle clicking `Go`
    act(() => paginationProperties.onClickGo(1));
    expect(result.current[1].page).toBe(1);
    expect(result.current[1].pageCount).toBe(3);
  });
});

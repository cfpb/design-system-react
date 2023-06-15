import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { PaginationProperties } from '../Pagination/Pagination';
import { TableFilter as Filter } from './TableFilter';

export const FIRST_PAGE = 1;

export const getPaginationProperties = (
  table: Table<any>
): PaginationProperties => {
  const page = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();

  return {
    page,
    pageCount,
    onClickPrev: (): void => {
      if (page <= FIRST_PAGE) return;
      table.previousPage();
    },
    onClickNext: (): void => {
      if (page === pageCount) return;
      table.nextPage();
    },
    onClickGo: (pageNumber: number) => table.setPageIndex(pageNumber)
  };
};

export const buildHeaders = (
  table: Table<any>,
  isFilterable: boolean
): JSX.Element => (
  <thead>
    {table.getHeaderGroups().map(headerGroup => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map(header => (
          <th key={header.id} colSpan={header.colSpan}>
            {header.isPlaceholder ? null : (
              <div>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {isFilterable && header.column.getCanFilter() ? (
                  <Filter column={header.column} table={table} />
                ) : null}
              </div>
            )}
          </th>
        ))}
      </tr>
    ))}
  </thead>
);

export const buildRows = (table: Table<any>): JSX.Element => (
  <tbody>
    {table.getRowModel().rows.map(row => (
      <tr key={row.id}>
        {row.getVisibleCells().map(cell => (
          <td key={cell.id} data-label={cell.column.columnDef.header}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

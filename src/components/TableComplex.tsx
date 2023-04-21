import type { ColumnDef, Table } from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import classnames from 'classnames';
import type { PaginationProperties } from './Pagination';
import { Pagination } from './Pagination';
import './Table.less';
import { TableFilter as Filter } from './TableFilter';

export interface TableComplexOptions {
  isFilterable?: boolean;
  isStriped?: boolean;
  pageSize?: number;
  isPaginated?: boolean;
  isResponsive?: boolean;
}

interface TableComplexProperties {
  /** Source data */
  data: object[];
  /** Column definitions (react-table) */
  columns: ColumnDef<any>[];
  /** Table description */
  caption?: React.ReactElement | string;
  /** Table configuration */
  options?: TableComplexOptions;
  /** Table rows will stack on small screens */
  isResponsive?: boolean;
}

const FIRST_PAGE = 1;
const DEFAULT_PAGE_SIZE = 20;

export const TableComplex = ({
  data,
  columns,
  caption,
  options = {}
}: TableComplexProperties): React.ReactElement => {
  const {
    isFilterable = false,
    isStriped,
    pageSize,
    isPaginated,
    isResponsive = true
  } = options;

  const pageSizeDerived = isPaginated
    ? pageSize ?? DEFAULT_PAGE_SIZE
    : data.length;

  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize: pageSizeDerived } },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const tableCnames = ['o-table-complex', 'o-table'];

  /**
   * TODO: Design a searchable table for mobile screens.
   * The current "stackable" design hides the table headers
   * on mobile, including the search boxes.
   * */
  if (isResponsive && !isFilterable)
    tableCnames.push('o-table__stack-on-small');

  if (isStriped) tableCnames.push('o-table__striped');

  return (
    <div className='o-table-wrapper__scrolling'>
      <table className={classnames(tableCnames)}>
        {!!caption && <caption>{caption}</caption>}
        {buildHeaders(table, isFilterable)}
        {buildRows(table)}
      </table>
      {isPaginated && <Pagination {...getPaginationProperties(table)} />}
    </div>
  );
};

const getPaginationProperties = (table: Table<any>): PaginationProperties => {
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

const buildHeaders = (
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

const buildRows = (table: Table<any>): JSX.Element => (
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

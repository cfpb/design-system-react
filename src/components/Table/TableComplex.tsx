import type { ColumnDef } from '@tanstack/react-table';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import classnames from 'classnames';
import { Pagination } from '../Pagination/Pagination';
import './Table.less';
import {
  buildHeaders,
  buildRows,
  getPaginationProperties
} from './TableComplexUtils';

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
    <div data-testId='table-complex' className='o-table-wrapper__scrolling'>
      <table className={classnames(tableCnames)}>
        {!!caption && <caption>{caption}</caption>}
        {buildHeaders(table, isFilterable)}
        {buildRows(table)}
      </table>
      {isPaginated ? <Pagination {...getPaginationProperties(table)} /> : null}
    </div>
  );
};

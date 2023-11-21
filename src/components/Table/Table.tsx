import classNames from 'classnames';
import { type ReactNode } from 'react';
import type { JSXElement } from '~/src/types/jsxElement';
import { type WidthPercent } from '../../types/WidthPercent';
import { Pagination } from '../Pagination/Pagination';
import { DEFAULT_PER_PAGE, MIN_PAGE } from '../Pagination/paginationConstants';
import { usePagination } from '../Pagination/usePagination';
import { buildColumnHeaders, buildRows } from './tableUtils';

const Caption = ({ children }: { children: ReactNode }): JSXElement => {
  if (!children) return null;
  return <caption>{children}</caption>;
};

export interface TableColumnConfiguration {
  header: string; // Column heading
  alignRight?: boolean | undefined; // Align content to the right?
  width?: WidthPercent; // Fixed percentage of table width for column to consume
}

export type TableColumn = TableColumnConfiguration | string;

export interface TableProperties {
  // Table description, displayed atop the table
  caption?: ReactNode;
  // Array of column headers or column configurations
  columns: TableColumn[];
  // Array of row content
  rows: ReactNode[][];
  // Table layout adapts on mobile screens
  isResponsive?: boolean;
  // https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables
  isDirectory?: boolean;
  // Horizontal table overflow will scroll
  isScrollableHorizontal?: boolean;
  // Show background on alternate rows to improve readability
  isStriped?: boolean;
  // Provide pagination controls for large datasets
  isPaginated?: boolean;
  // When isPaginated, which page of data to display by default
  startPage?: number;
  // When isPaginated, number of items to show per page
  perPage?: number;
}

/**
 * Tables allow for the presentation of many data points grouped together in a visual way. They serve a unique purpose of allowing easy organization or comparison of more complex data than a chart or graph. They can be read either vertically (by columns) or horizontally (by rows).
 *
 * Source: https://cfpb.github.io/design-system/components/tables
 */
export const Table = ({
  caption,
  columns,
  rows,
  isResponsive = false,
  isDirectory = false,
  isScrollableHorizontal = false,
  isStriped = false,
  isPaginated = false,
  startPage = MIN_PAGE,
  perPage = DEFAULT_PER_PAGE
}: TableProperties): React.ReactElement => {
  const [visibleRows, paginationProperties] = usePagination({
    rows,
    isPaginated,
    startPage,
    perPage
  });

  const tableClassnames = [];

  if (isResponsive || isDirectory)
    tableClassnames.push('o-table o-table__stack-on-small');
  if (isDirectory) tableClassnames.push('o-table__entry-header-on-small');
  if (isStriped) tableClassnames.push('o-table__striped');

  const tableContent = (
    <>
      <table data-testid='table-testid' className={classNames(tableClassnames)}>
        <Caption>{caption}</Caption>
        {buildColumnHeaders(columns)}
        {buildRows(visibleRows, columns)}
      </table>
      {isPaginated ? <Pagination {...paginationProperties} /> : null}
    </>
  );

  if (isScrollableHorizontal) {
    return (
      <div
        data-testid='table-simple-scrollable'
        className='o-table o-table-wrapper__scrolling'
      >
        {tableContent}
      </div>
    );
  }

  return tableContent;
};

export default Table;

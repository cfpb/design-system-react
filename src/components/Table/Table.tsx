import classNames from 'classnames';
import type { ForwardedRef, HTMLProps } from 'react';
import { forwardRef, useId, type ReactNode } from 'react';
import type { JSXElement } from '~/src/types/jsxElement';
import { type WidthPercent } from '../../types/WidthPercent';
import { Pagination } from '../Pagination/Pagination';
import { DEFAULT_PER_PAGE, MIN_PAGE } from '../Pagination/paginationConstants';
import { usePagination } from '../Pagination/usePagination';
import './table.less';
import { buildColumnHeaders, buildRows } from './tableUtils';

const Caption = ({
  children
}: HTMLProps<HTMLTableCaptionElement>): JSXElement => {
  if (!children) return null;
  return <caption>{children}</caption>;
};

export interface TableColumnConfiguration {
  header: string; // Column heading
  alignRight?: boolean | undefined; // Align content to the right?
  width?: WidthPercent; // Fixed percentage of table width for column to consume
  cellWordBreak?: boolean; // Allows the td (cells) to break upon limit space
  cellDisableWordWrap?: boolean; // Overrides 'cellWordBreak' and explicitly forces wrapping to be disabled in the td (cell)
  headerWordWrap?: boolean; // Allows wrapping in the th (header), by default -- header fields are set to no-wrap
}

export type TableColumn = TableColumnConfiguration | string;

export interface TableProperties {
  // Unique identifier
  id?: string;
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
  // Additional CSS classes
  className?: string;
  // Refs for div and table elements
  divRef?: ForwardedRef<HTMLDivElement>;
  tableRef?: ForwardedRef<HTMLTableElement>;
}

/**
 * Tables allow for the presentation of many data points grouped together in a visual way. They serve a unique purpose of allowing easy organization or comparison of more complex data than a chart or graph. They can be read either vertically (by columns) or horizontally (by rows).
 *
 * Source: https://cfpb.github.io/design-system/components/tables
 */
export const Table = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLTableElement> & TableProperties
>(
  (
    {
      id,
      caption,
      columns,
      rows,
      isResponsive = false,
      isDirectory = false,
      isScrollableHorizontal = false,
      isStriped = false,
      isPaginated = false,
      startPage = MIN_PAGE,
      perPage = DEFAULT_PER_PAGE,
      className,
      divRef,
      tableRef,
      ...others
    },
    reference
  ): React.ReactElement => {
    const [visibleRows, paginationProperties] = usePagination({
      rows,
      isPaginated,
      startPage,
      perPage
    });

    const tableId = useId();

    const tableClassnames = [];

    if (isResponsive || isDirectory)
      tableClassnames.push('o-table o-table__stack-on-small');
    if (isDirectory) tableClassnames.push('o-table__entry-header-on-small');
    if (isStriped) tableClassnames.push('o-table__striped');
    if (isPaginated) tableClassnames.push('u-w100pct');
    if (className) tableClassnames.push(className);

    const tableContent = (
      <>
        <table
          data-testid='table-testid'
          className={classNames(tableClassnames)}
          ref={tableRef}
          id={id ?? tableId}
          {...others}
        >
          <Caption>{caption}</Caption>
          {buildColumnHeaders(columns)}
          {buildRows(visibleRows, columns)}
        </table>
        {isPaginated ? <Pagination {...paginationProperties} tableId={id ?? tableId}/> : null}
      </>
    );

    if (isScrollableHorizontal) {
      return (
        <div
          data-testid='table-simple-scrollable'
          className='o-table o-table-wrapper__scrolling'
          ref={reference ?? divRef}
        >
          {tableContent}
        </div>
      );
    }

    return tableContent;
  }
);

Table.displayName = 'Table';

export default Table;

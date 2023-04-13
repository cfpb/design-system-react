import { default as classNames, default as classnames } from 'classnames';

interface TableSimpleColumnProps {
  header: string;
  alignRight?: boolean;
  width?: string | number; // TODO: Make enumerated type - 100 |  90 |  80 |  70 |  60 |  50 |  40 |  30 |  20 |  10 |  75 |  25 |  66 |  33
}

interface TableSimpleProps {
  caption?: string | React.ReactElement;
  columns: Array<string | TableSimpleColumnProps>;
  rows: Array<Array<string | React.ReactElement>>;
  isResponsive?: boolean;
  isDirectory?: boolean;
  isScrollableHorizontal?: boolean;
  isStriped?: boolean;
}

/**
 * This component captures the non-interactive variations of the
 * CFPB DS Table. For advanced functionality, such as pagination,
 * use the TableComplex component.
 *
 * https://cfpb.github.io/design-system/components/tables
 *
 * @param caption Table description, displayed atop the table
 * @param columns Array of column headers or column configurations
 * @param rows Array of row content
 * @param isResponsive Table layout adapts on mobile screens
 * @param isDirectory https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables
 * @param isScrollableHorizontal Horizontal table overflow will scroll
 * @param isStriped Show background on alternate rows to improve readability
 * @returns ReactElement
 */
export const TableSimple = ({
  caption,
  columns,
  rows,
  isResponsive = false,
  isDirectory = false,
  isScrollableHorizontal = false,
  isStriped = false
}: TableSimpleProps): React.ReactElement => {
  const tableCnames = [];
  if (isResponsive || isDirectory) {
    tableCnames.push('o-table');
    tableCnames.push('o-table__stack-on-small');
  }
  if (isDirectory) tableCnames.push('o-table__entry-header-on-small');
  if (isStriped) tableCnames.push('o-table__striped');

  if (isScrollableHorizontal) {
    return (
      <div className='o-table-wrapper__scrolling'>
        <table className={classNames(tableCnames)}>
          {caption && <caption>{caption}</caption>}
          {buildColumnHeaders(columns)}
          {buildRows(rows, columns)}
        </table>
      </div>
    );
  }

  return (
    <table className={classNames(tableCnames)}>
      {caption && <caption>{caption}</caption>}
      {buildColumnHeaders(columns)}
      {buildRows(rows, columns)}
    </table>
  );
};

const buildColumnHeaders = (
  columns: TableSimpleProps['columns']
): React.ReactNode => {
  if (!columns) return;

  return (
    <thead>
      <tr>
        {columns.map((column, idx) => {
          let content = '';
          let cnames = [''];
          const key = `header-${idx}`;

          if (typeof column === 'object') {
            content = column.header;

            if (column.alignRight) cnames.push('o-table_cell__right-align');
            if (column.width) cnames.push(`u-w${column.width}pct`);
          } else {
            content = column;
          }

          return (
            <th key={key} className={classnames(cnames)}>
              {content}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

const buildRows = (
  rows: TableSimpleProps['rows'],
  columns: TableSimpleProps['columns']
) => {
  if (!rows) return;

  return (
    <tbody>
      {rows.map((row, rowIdx) => (
        <tr key={`row-${rowIdx}`}>
          {row.map((rowVal, columnIdx) => {
            const column = columns && columns[columnIdx];

            return (
              <td
                {...getCellProps(column)}
                key={`row-${rowIdx}-col-${columnIdx}`}
              >
                {rowVal}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

const getCellProps = (column: string | TableSimpleColumnProps): object => {
  if (!column) return {};

  if (typeof column === 'string')
    return {
      'data-label': column
    };

  return {
    'data-label': column.header,
    className: column.alignRight ? 'o-table_cell__right-align' : ''
  };
};

export default TableSimple;

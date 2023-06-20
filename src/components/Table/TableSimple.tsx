import { default as classNames, default as classnames } from 'classnames';

interface TableSimpleColumnProperties {
  header: string;
  alignRight?: boolean;
  width?: number | string; // TODO: Make enumerated type - 100 |  90 |  80 |  70 |  60 |  50 |  40 |  30 |  20 |  10 |  75 |  25 |  66 |  33
}

interface TableSimpleProperties {
  caption?: React.ReactElement | string;
  columns: (TableSimpleColumnProperties | string)[];
  rows: (React.ReactElement | string)[][];
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
}: TableSimpleProperties): React.ReactElement => {
  const tableCnames = [];
  if (isResponsive || isDirectory) {
    tableCnames.push('o-table', 'o-table__stack-on-small');
  }
  if (isDirectory) tableCnames.push('o-table__entry-header-on-small');
  if (isStriped) tableCnames.push('o-table__striped');

  if (isScrollableHorizontal) {
    return (
      <div
        data-testid='table-simple-scrollable'
        className='o-table-wrapper__scrolling'
      >
        <table className={classNames(tableCnames)}>
          {caption ? <caption>{caption}</caption> : null}
          {buildColumnHeaders(columns)}
          {buildRows(rows, columns)}
        </table>
      </div>
    );
  }

  return (
    <table data-testid='table-simple' className={classNames(tableCnames)}>
      {caption ? <caption>{caption}</caption> : null}
      {buildColumnHeaders(columns)}
      {buildRows(rows, columns)}
    </table>
  );
};

const buildColumnHeaders = (
  columns: TableSimpleProperties['columns']
): JSX.Element | null => {
  if (!columns) return;

  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          let content = '';
          const cnames = [''];
          const key = `header-${index}`;

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
  rows: TableSimpleProperties['rows'],
  columns: TableSimpleProperties['columns']
): JSX.Element | null => {
  if (!rows) return;

  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={`row-${rowIndex}`}>
          {row.map((rowValue, columnIndex) => {
            const column = columns && columns[columnIndex];

            return (
              <td
                {...getCellProperties(column)}
                key={`row-${rowIndex}-col-${columnIndex}`}
              >
                {rowValue}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

const getCellProperties = (
  column: TableSimpleColumnProperties | string
): object => {
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

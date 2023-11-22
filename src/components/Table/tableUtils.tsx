import classNames from 'classnames';
import type { TableColumn, TableProperties } from './Table';

export const buildColumnHeaders = (
  columns: TableProperties['columns']
): JSX.Element | null => (
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
          <th key={key} className={classNames(cnames)}>
            {content}
          </th>
        );
      })}
    </tr>
  </thead>
);

const getCellProperties = (column: TableColumn): object => {
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

export const buildRows = (
  rows: TableProperties['rows'],
  columns: TableProperties['columns']
): JSX.Element | null => (
  <tbody>
    {rows.map((row, rowIndex) => {
      const rowKey = `row-${rowIndex}`;

      return (
        <tr key={rowKey}>
          {row.map((rowValue, columnIndex) => {
            const column = columns[columnIndex];
            const columnKey = `row-${rowIndex}-col-${columnIndex}`;

            return (
              <td {...getCellProperties(column)} key={columnKey}>
                {rowValue}
              </td>
            );
          })}
        </tr>
      );
    })}
  </tbody>
);

import classNames from 'classnames';
import type { TableColumn, TableProperties } from './table';
import { JSXElement } from '../../types/jsx-element';

export const buildColumnHeaders = (
  columns: TableProperties['columns'],
): JSXElement => (
  <thead>
    <tr>
      {columns.map((column, index) => {
        let content;
        const cnames = [''];
        const key = `header-${index}`;

        if (typeof column === 'object') {
          content = column.header;

          if (column.isAlignRight) cnames.push('o-table__cell--right-align');
          if (column.width) cnames.push(`u-w${column.width}pct`);
          if (!column.isHeaderWordWrap) cnames.push('white-space-nowrap');
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

  if (typeof column === 'string') {
    return {
      'data-label': column,
    };
  }

  const cellCnames = [''];
  if (column.isAlignRight) cellCnames.push('o-table__cell--right-align');
  if (column.isCellDisableWordWrap) cellCnames.push('white-space-nowrap');
  if (!column.isCellDisableWordWrap && column.isCellWordBreak)
    cellCnames.push('word-break-break-all');

  return {
    'data-label': column.header,
    className: classNames(cellCnames),
  };
};

export const buildRows = (
  rows: TableProperties['rows'],
  columns: TableProperties['columns'],
): JSXElement => (
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

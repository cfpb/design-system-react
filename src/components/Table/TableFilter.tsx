import type { Column, Table } from '@tanstack/react-table';
import type { EventHandler } from 'react';

const onNumericFilterChange =
  (
    column: Column<any, any>,
    isMinColumn?: boolean
  ): EventHandler<React.SyntheticEvent<HTMLInputElement>> =>
  (event: React.SyntheticEvent<HTMLInputElement>): void => {
    if (isMinColumn) {
      const MAX_INDEX = 1;

      column.setFilterValue((old: [string, string] | undefined): string[] => {
        const preservedMaxValue: string = old ? old[MAX_INDEX] : '';
        return [event.target.value, preservedMaxValue];
      });
    } else {
      column.setFilterValue((old: [string, string] | undefined): string[] => {
        const preservedMinValue: string = old ? old[0] : '';
        return [preservedMinValue, event.target.value];
      });
    }
  };

interface TableFilterProperties {
  column: Column<any, any>;
  table: Table<any>;
}

export function TableFilter({
  column,
  table
}: TableFilterProperties): JSX.Element {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();
  const columnIsNumeric = typeof firstValue === 'number';

  if (!columnIsNumeric) {
    return (
      <div>
        <input
          type='text'
          value={(columnFilterValue ?? '') as string}
          onChange={e => column.setFilterValue(e.target.value)}
          placeholder='Search...'
          className='filter'
        />
      </div>
    );
  }

  let filterMin = '';
  let filterMax = '';

  if (columnFilterValue) {
    [filterMin, filterMax] = columnFilterValue as [string, string];
  }

  return (
    <div className='flex space-x-2'>
      <input
        type='number'
        value={filterMin}
        onChange={onNumericFilterChange(column, true)}
        placeholder='Min'
        className='filter number'
      />
      <input
        type='number'
        value={filterMax}
        onChange={onNumericFilterChange(column)}
        placeholder='Max'
        className='filter number'
      />
    </div>
  );
}

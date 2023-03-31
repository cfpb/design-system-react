import { Column, Table } from '@tanstack/react-table';

interface TableFilterProps {
  column: Column<any, any>;
  table: Table<any>;
}

export function TableFilter({ column, table }: TableFilterProps) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === 'number' ? (
    <div className='flex space-x-2'>
      <input
        type='number'
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={e =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1]
          ])
        }
        placeholder={`Min`}
        className='filter number'
      />
      <input
        type='number'
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={e =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value
          ])
        }
        placeholder={`Max`}
        className='filter number'
      />
    </div>
  ) : (
    <div>
      <input
        type='text'
        value={(columnFilterValue ?? '') as string}
        onChange={e => column.setFilterValue(e.target.value)}
        placeholder={`Search...`}
        className='filter'
      />
    </div>
  );
}

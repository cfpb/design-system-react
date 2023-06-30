import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { TableComplex } from '~/src/index';

type TestData = Record<string, number | string>;

const ROW_COUNT_25 = 25;
const ROW_COUNT_3 = 3;
const PAGE_SIZE = 5;
const ONE = 1;

const defaultCaption = (
  <>
    This is the default at the large screen breakpoint. Tables are not
    responsive by default;
  </>
);

const defaultColumns = [
  {
    accessorKey: 'col1',
    header: 'Column 1'
  },
  {
    accessorKey: 'col2',
    header: 'Column 2'
  },
  {
    accessorKey: 'col3',
    header: 'Column 3'
  },
  {
    accessorKey: 'col4',
    header: 'Column 4',
    enableColumnFilter: false
  },
  {
    accessorKey: 'col5',
    header: 'Column 5',
    enableColumnFilter: false
  }
];

const defaultRows: TestData[] = [...'x'.repeat(ROW_COUNT_3)].map(
  (_value, index) => ({
    col1: `Row ${index + ONE}`,
    col2: index,
    col3: `Row ${index + ONE}`,
    col4: `Row ${index + ONE}`,
    col5: `Row ${index + ONE}`
  })
);

const paginatedRows: TestData[] = [...'x'.repeat(ROW_COUNT_25)].map(
  (_value, index) => ({
    col1: `Row ${index + ONE}, Col 1`,
    col2: `Row ${index + ONE}, Col 2`,
    col3: `Row ${index + ONE}, Col 3`,
    col4: `Row ${index + ONE}, Col 4`,
    col5: `Row ${index + ONE}, Col 5`
  })
);

describe('<TableComplex />', () => {
  it('displays table when provided', () => {
    render(
      <TableComplex
        caption={defaultCaption}
        columns={defaultColumns}
        data={defaultRows}
      />
    );
    const table = screen.queryByTestId('table-complex');
    expect(table).toBeInTheDocument();

    const cells = screen.getAllByText('Row 1');
    expect(cells).toHaveLength(4);
  });

  it('is filterable when configured', () => {
    render(
      <TableComplex
        caption={defaultCaption}
        columns={defaultColumns}
        data={defaultRows}
        options={{
          isFilterable: true
        }}
      />
    );
    const table = screen.queryByTestId('table-complex');
    expect(table).toBeInTheDocument();

    const cells = screen.getAllByPlaceholderText('Search...');
    expect(cells).toHaveLength(2);

    fireEvent.change(cells[0], { target: { value: '2' } });
    const hidden = screen.queryByText('Row 1');
    expect(hidden).not.toBeInTheDocument();
  });

  it('is filterable by numeric values', () => {
    render(
      <TableComplex
        caption={defaultCaption}
        columns={defaultColumns}
        data={defaultRows}
        options={{
          isFilterable: true
        }}
      />
    );
    const table = screen.queryByTestId('table-complex');
    expect(table).toBeInTheDocument();

    const cell = screen.getByPlaceholderText('Min');
    expect(cell).toBeInTheDocument();

    fireEvent.change(cell, { target: { value: '1' } });
    const hidden = screen.queryByText('Row 0');
    expect(hidden).not.toBeInTheDocument();
  });

  it('is paginated when configured', () => {
    render(
      <TableComplex
        caption={defaultCaption}
        columns={defaultColumns}
        data={paginatedRows}
        options={{
          isPaginated: true,
          pageSize: PAGE_SIZE
        }}
      />
    );

    const table = screen.queryByTestId('table-complex');
    expect(table).toBeInTheDocument();

    const button = screen.getByText('Next');
    fireEvent.click(button);

    const cell = screen.getByText('Row 6, Col 1');
    expect(cell).toBeInTheDocument();

    const hidden = screen.queryByText('Row 5, Col 1');
    expect(hidden).not.toBeInTheDocument();

    const previous = screen.getByText('Previous');
    fireEvent.click(previous);

    const previousCell = screen.getByText('Row 5, Col 1');
    expect(previousCell).toBeInTheDocument();
  });
});

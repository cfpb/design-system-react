import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TableComplex } from './TableComplex';

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

    const cell = screen.getByText('Row 1, Column 1');
    expect(cell).toBeInTheDocument();
  });
});

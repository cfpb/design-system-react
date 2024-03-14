import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

const defaultCaption = (
  <>
    This is the default at the large screen breakpoint. Tables are not
    responsive by default;
  </>
);

const defaultColumns = [
  'Column 1 header',
  'Column 2 header',
  'Column 3 header',
  'Column 4 header'
];

const defaultRows = [
  ['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3', 'Row 1, Column 4'],
  ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3', 'Row 2, Column 4'],
  ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3', 'Row 3, Column 4']
];

const columnsWithConfiguration = [
  { header: 'Col 1', width: 30 },
  'Col 2',
  'Col 3',
  { header: 'Right Aligned', width: 40, alignRight: true }
];

describe('<Table />', () => {
  it('displays table when provided', () => {
    render(
      <Table
        caption={defaultCaption}
        columns={defaultColumns}
        rows={defaultRows}
      />
    );
    const table = screen.queryByTestId('table-testid');
    expect(table).toBeInTheDocument();

    const cell = screen.getByText('Row 1, Column 1');
    expect(cell).toBeInTheDocument();
  });

  it('displays scrollable table when provided', () => {
    render(
      <Table
        caption={defaultCaption}
        columns={defaultColumns}
        rows={defaultRows}
        isScrollableHorizontal
      />
    );

    const scrollable = screen.queryByTestId('table-simple-scrollable');
    expect(scrollable).toBeInTheDocument();

    const cell = screen.getByText('Row 1, Column 1');
    expect(cell).toBeInTheDocument();
  });

  it('displays responsive, directory, and striped table when provided', () => {
    render(
      <Table
        caption={defaultCaption}
        columns={defaultColumns}
        rows={defaultRows}
        isResponsive
        isDirectory
        isStriped
      />
    );

    const table = screen.queryByTestId('table-testid');
    expect(table?.classList.contains('o-table__stack-on-small')).toBe(true);
    expect(table?.classList.contains('o-table__entry-header-on-small')).toBe(
      true
    );
    expect(table?.classList.contains('o-table__striped')).toBe(true);
  });

  it('accepts columns with configuration', () => {
    render(
      <Table
        caption={defaultCaption}
        columns={columnsWithConfiguration}
        rows={defaultRows}
      />
    );

    const cell = screen.queryByText('Right Aligned');
    expect(cell?.classList.contains('o-table_cell__right-align')).toBe(true);
    expect(cell?.classList.contains('u-w40pct')).toBe(true);
  });

  it('Pagination controls displayed when isPaginated', () => {
    render(
      <Table
        columns={columnsWithConfiguration}
        rows={defaultRows}
        isPaginated
      />
    );

    const previousButton = screen.getByText('Previous');
    expect(previousButton.classList.contains('m-pagination_btn-prev')).toBe(
      true
    );

    const nextButton = screen.getByText('Next');
    expect(nextButton.classList.contains('m-pagination_btn-next')).toBe(true);
  });
});

import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import { TableComplex, TableComplexOptions } from './TableComplex';

const meta = {
  component: TableComplex,
  argTypes: {
    caption: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - TableComplex component
 
Provides more advanced table functionality such as pagination and filtration.

Source: https://cfpb.github.io/design-system/components/tables
`
      }
    }
  }
} satisfies Meta<typeof TableComplex>;

export default meta;

type Story = StoryObj<typeof meta>;


interface TestData {
  [key: string]: string | number;
}

const columns: ColumnDef<TestData>[] = [
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

const data: TestData[] = Array.from('x'.repeat(3)).map((_val, idx) => ({
  col1: `Row ${idx + 1}`,
  col2: idx,
  col3: `Row ${idx + 1}`,
  col4: `Row ${idx + 1}`,
  col5: `Row ${idx + 1}`
}));

const options: TableComplexOptions = {
  isStriped: true
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    caption:
      'TableComplex offers extended functionality such as pagination and data filtration. By default these are disabled but can be enabled and configured via the `options` prop.',
    options,
    columns,
    data
  }
}

export const Paginated: Story = {
  args: {
    caption: (
      <>
        Setting `options.isPaginated = true` will enable the pagination of table
        content, with navigation controls displayed beneath the table. <br />
        <br />
        Use `options.pageSize` to adjust the number of items displayed per page.
      </>
    ),
    options: {
      ...Default.args.options,
      isPaginated: true,
      pageSize: 5
    },
    columns,
    data: Array.from('x'.repeat(25)).map((_val, idx) => ({
      col1: `Row ${idx + 1}, Col 1`,
      col2: `Row ${idx + 1}, Col 2`,
      col3: `Row ${idx + 1}, Col 3`,
      col4: `Row ${idx + 1}, Col 4`,
      col5: `Row ${idx + 1}, Col 5`
    }))
  }
}

export const Filterable: Story = {
  args: {
    caption: (
      <>
        Setting `options.isFilterable = true` will enable the display of a search
        box for each column that displays a filtration-compatible data type.{' '}
        <br />
        <br />
        To disable the filter capability for individual fields, set
        `enableColumnFilter: false` in the column's configuration, as we see for
        Column 4 below.
      </>
    ),
    columns,
    options: {
      ...Default.args.options,
      isFilterable: true
    },
    data
  }
}

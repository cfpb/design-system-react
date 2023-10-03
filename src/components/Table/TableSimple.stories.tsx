import type { Meta, StoryObj } from '@storybook/react';
import { TableSimple } from '~/src/index';

const meta: Meta<typeof TableSimple> = {
  title: 'Components (Draft)/Tables/Simple',
  component: TableSimple,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - TableSimple component

Source: https://cfpb.github.io/design-system/components/tables
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    caption: (
      <>
        This is the{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#standard-table-1'>
          default style
        </a>{' '}
        at the large screen breakpoint. Tables are not responsive by default;
      </>
    ),
    columns: [
      'Column 1 header',
      'Column 2 header',
      'Column 3 header',
      'Column 4 header'
    ],
    rows: [
      [
        'Row 1, Column 1',
        'Row 1, Column 2',
        'Row 1, Column 3',
        'Row 1, Column 4'
      ],
      [
        'Row 2, Column 1',
        'Row 2, Column 2',
        'Row 2, Column 3',
        'Row 2, Column 4'
      ],
      [
        'Row 3, Column 1',
        'Row 3, Column 2',
        'Row 3, Column 3',
        'Row 3, Column 4'
      ]
    ]
  }
};

export const Responsive: Story = {
  args: {
    ...Standard.args,
    caption: (
      <>
        Use a{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table'>
          Responsive stacked table
        </a>{' '}
        to stack table information on smaller screens and keep the information
        legible.
      </>
    ),
    isResponsive: true
  }
};

export const Directory: Story = {
  args: {
    columns: ['Employee name', 'Phone number', 'Email address'],
    rows: [
      ['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'],
      ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'],
      ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']
    ],
    caption: (
      <>
        The{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables'>
          directory table
        </a>{' '}
        is a variation of the stacked table. At the small screen breakpoint, the
        directory table pattern uses first column data (employee name, for
        instance) as a way to group and label stacks of rows. .
      </>
    ),
    isDirectory: true
  }
};

export const HorizontalScroll: Story = {
  args: {
    ...Standard.args,
    caption: (
      <>
        Use a table with{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-table-with-horizontal-scroll'>
          horizontal scroll
        </a>{' '}
        when the data you’re presenting has more columns than will fit
        comfortably on the screen, and you want to ensure all information can be
        accessed in its original tabular structure, even on smaller screens.
      </>
    ),
    isScrollableHorizontal: true
  }
};

export const Striped: Story = {
  args: {
    ...Standard.args,
    caption: (
      <>
        <a href='https://cfpb.github.io/design-system/components/tables#striped-table'>
          Striping
        </a>{' '}
        is useful to help the eye track across table rows. Use striping for
        tables that have more than five columns, or for tables with rows that
        are difficult to follow across the full width of the table.
      </>
    ),
    isStriped: true
  }
};

const columnsWithConfiguration = [
  { header: 'Col 1', width: 30 },
  'Col 2',
  'Col 3',
  { header: 'Right Aligned', width: 40, alignRight: true }
];

export const RightAligned: Story = {
  args: {
    ...Standard.args,
    columns: columnsWithConfiguration,
    caption: (
      <>
        <a href='https://cfpb.github.io/design-system/components/tables#right-aligned-table'>
          Right-align columns
        </a>{' '}
        of numbers when they’re quantities (counts, dollar amounts, percentages)
        or ordinals (ranks, item numbers). Use the .o-table_cell__right-align
        class on a td. <br />
        <br />
        Left-align columns of numbers when they’re nominal (ZIP codes, room
        numbers) or non-numeric values (names, phrases).
      </>
    )
  }
};

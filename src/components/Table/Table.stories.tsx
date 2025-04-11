import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '~/src/index';
import { ONE } from '../Pagination/usePagination';

const meta: Meta<typeof Table> = {
  title: 'Components (Verified)/Tables',
  tags: ['autodocs'],
  component: Table
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: 'Standard table',
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [
      ['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'],
      ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'],
      ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']
    ]
  }
};

export const Responsive: Story = {
  name: 'Responsive stacked table',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [
      ['Row A', 'Cell A2', 'Cell A3'],
      ['Row B', 'Cell B2', 'Cell B3'],
      ['Row C', 'Cell C2', 'Cell C3'],
      ['Row D', 'Cell D2', 'Cell D3']
    ],
    isResponsive: true
  }
};

export const Directory: Story = {
  name: 'Responsive stacked table with header (directory table)',
  args: {
    columns: ['Employee name', 'Phone number', 'Email address'],
    rows: [
      ['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'],
      ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'],
      ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']
    ],
    isDirectory: true
  }
};

export const HorizontalScroll: Story = {
  name: 'Responsive table with horizontal scroll',
  args: {
    columns: [
      'Column 1',
      'Column 2',
      'Column 3',
      'Column 4',
      'Column 5',
      'Column 6',
      'Column 7',
      'Column 8'
    ],
    rows: [
      [
        'Row A',
        'Cell A2',
        'Cell A3',
        'Cell A4',
        'Cell A5',
        'Cell A6',
        'Cell A7',
        'Cell A8'
      ],
      [
        'Row B',
        'Cell B2',
        'Cell B3',
        'Cell B4',
        'Cell B5',
        'Cell B6',
        'Cell B7',
        'Cell B8'
      ],
      [
        'Row C',
        'Cell C2',
        'Cell C3',
        'Cell C4',
        'Cell C5',
        'Cell C6',
        'Cell C7',
        'Cell C8'
      ]
    ],
    isScrollableHorizontal: true
  }
};

export const Striped: Story = {
  name: 'Striped table',
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
};

export const RightAligned: Story = {
  name: 'Right-aligned table',
  args: {
    columns: [
      { header: 'Col 1' },
      'Col 2',
      { header: 'Right-aligned column', alignRight: true }
    ],
    rows: [
      ['Row A', 'Cell A2', '$1.00'],
      ['Row B', 'Cell B2', '$200.02']
    ]
  }
};

const numberRows = 30;

const PAGINATION_PER_PAGE = 5;
export const Pagination: Story = {
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],
    rows: [...Array.from({ length: numberRows }).keys()].map(key => [
      `Row ${key + ONE}, Column 1`,
      `Row ${key + ONE}, Column 2`,
      `Row ${key + ONE}, Column 3`,
      `Row ${key + ONE}, Column 4`,
      `Row ${key + ONE}, Column 5`
    ]),
    isPaginated: true,
    perPage: PAGINATION_PER_PAGE
  },
  render: arguments_ => <Table {...arguments_} />
};

export const FixedWidth: Story = {
  name: 'Fixed-width column tables ',
  args: {
    columns: [
      { header: 'County', width: '20' },
      { header: 'Lien status', width: '60' },
      { header: 'Active', width: '20' }
    ],
    rows: [
      ['Abbeville', 'Secured', 'Yes'],
      ['Abbey', 'Secured', 'No']
    ]
  }
};

const maxUidTestRows = [...Array.from({ length: 20 }).keys()].map(
  (item, index) => [
    `Row ${index + 1_000_000_000}`,
    '4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS',
    '4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS',
    '4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS'
  ]
);

export const LongCharacterSets: Story = {
  name: 'Long Character Sets ',
  args: {
    columns: [
      { header: 'Column 1', cellDisableWordWrap: true, headerWordWrap: false },
      { header: 'Column 2', cellWordBreak: true },
      { header: 'Column 3', cellWordBreak: true },
      { header: 'Column 4', cellWordBreak: true }
    ],
    rows: maxUidTestRows,
    isScrollableHorizontal: false
  }
};

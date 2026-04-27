import type { Meta, StoryObj } from '@storybook/react-vite';
import type { SecondaryNavItem } from './secondary-nav';
import { SecondaryNav } from './secondary-nav';

const meta: Meta<typeof SecondaryNav> = {
  title: 'Components (Draft)/Secondary navigation',
  tags: ['autodocs'],
  component: SecondaryNav,
  parameters: {
    docs: {
      description: {
        component: `
Secondary navigation for in-page or section navigation, typically shown in a left sidebar.
Matches the "Navigate this section" pattern used on [consumerfinance.gov](https://www.consumerfinance.gov/compliance/supervisory-highlights/).

### Usage

- Pass \`items\` with \`href\`, \`label\`, and optional \`isActive\` for the current page.
- Items can have optional \`children\` for sub-menu items. Parent items with children can omit \`href\` when active (section header).
- Use \`ariaLabel\` to describe the nav for screen readers.
- Use \`mobileToggleLabel\` to set the toggle label shown on mobile when the list collapses.
        `,
      },
    },
  },
  argTypes: {
    ariaLabel: { control: 'text' },
    mobileToggleLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultItems: SecondaryNavItem[] = [
  { href: '#section-1', label: 'Section 1' },
  { href: '#section-2', label: 'Section 2', isActive: true },
  { href: '#section-3', label: 'Section 3' },
  { href: '#section-4', label: 'Section 4' },
  { href: '#section-5', label: 'Section 5' },
  { href: '#section-6', label: 'Section 6' },
  { href: '#section-7', label: 'Section 7' },
];

const itemsWithSubMenu: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '/section-1',
    children: [
      { href: '/section-1/item-a', label: 'Item A', isActive: true },
      { href: '/section-1/item-b', label: 'Item B' },
      { href: '/section-1/item-c', label: 'Item C' },
    ],
  },
  { href: '/section-2', label: 'Section 2' },
  { href: '/section-3', label: 'Section 3' },
  { href: '/section-4', label: 'Section 4' },
  { href: '/section-5', label: 'Section 5' },
  { href: '/section-6', label: 'Section 6' },
  { href: '/section-7', label: 'Section 7' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    ariaLabel: 'Page navigation',
  },
  render: (args) => <SecondaryNav {...args} />,
};

export const WithShortList: Story = {
  args: {
    items: [
      { href: '#overview', label: 'Overview' },
      { href: '#rules', label: 'Rules', isActive: true },
      { href: '#resources', label: 'Resources' },
    ],
    ariaLabel: 'On this page',
  },
  render: (args) => <SecondaryNav {...args} />,
};

export const WithSubMenu: Story = {
  args: {
    items: itemsWithSubMenu,
    ariaLabel: 'Section',
  },
  render: (args) => <SecondaryNav {...args} />,
};

export const NoActiveItem: Story = {
  args: {
    items: defaultItems.map(({ isActive: _isActive, ...item }) => item),
    ariaLabel: 'Page navigation',
  },
  render: (args) => <SecondaryNav {...args} />,
};

export const EmptyList: Story = {
  args: {
    items: [],
    ariaLabel: 'Page navigation',
  },
  render: (args) => <SecondaryNav {...args} />,
};

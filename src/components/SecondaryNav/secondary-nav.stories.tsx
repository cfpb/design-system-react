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
Markup and classes match [cfgov secondary-nav.html](https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/v1/jinja2/v1/includes/organisms/secondary-nav.html).

### Usage

- **Flat list (no \`children\`):** use \`isActive\` on the current top-level item.
- **With \`children\`:** only children should use \`isActive\` for a subpage, unless the “current” page is the parent index—in that case set \`isActive\` on the parent and leave children inactive.
- Default \`ariaLabel\` is \`Section\`. \`mobileToggleLabel\` defaults to **Navigate this section**.
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

/** 1. Flat links only; none marked current. */
const basicNoChildren: SecondaryNavItem[] = [
  { href: '#topic-a', label: 'Section A' },
  { href: '#topic-b', label: 'Section B' },
  { href: '#topic-c', label: 'Section C' },
];

/** 2. Flat list; one top-level item is the current page. */
const basicNoChildrenWithCurrent: SecondaryNavItem[] = [
  { href: '#topic-a', label: 'Section A' },
  { href: '#topic-b', label: 'Section B', isActive: true },
  { href: '#topic-c', label: 'Section C' },
];

/** 3. Nested items; no \`isActive\` on parents or children. */
const withChildrenNoActive: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '#section-1',
    children: [
      { href: '#section-1-a', label: 'Item A' },
      { href: '#section-1-b', label: 'Item B' },
    ],
  },
  { href: '#section-2', label: 'Section 2' },
  { href: '#section-3', label: 'Section 3' },
];

/** 4. Current page is the parent “index”; children are links but none are active. */
const withChildrenActiveParent: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '#section-1',
    isActive: true,
    children: [
      { href: '#section-1-a', label: 'Item A' },
      { href: '#section-1-b', label: 'Item B' },
    ],
  },
  { href: '#section-2', label: 'Section 2' },
];

/** 5. Typical subpage: one child is the current page. */
const withChildrenActiveChild: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '#section-1',
    children: [
      { href: '#section-1-a', label: 'Item A', isActive: true },
      { href: '#section-1-b', label: 'Item B' },
      { href: '#section-1-c', label: 'Item C' },
    ],
  },
  { href: '#section-2', label: 'Section 2' },
  { href: '#section-3', label: 'Section 3' },
];

export const BasicMenuNoChildren: Story = {
  name: 'Basic secondary nav',
  args: {
    items: basicNoChildren,
  },
};

export const BasicMenuNoChildrenOneActive: Story = {
  name: 'Basic secondary nav, one active',
  args: {
    items: basicNoChildrenWithCurrent,
  },
};

export const MenuWithChildrenNoActive: Story = {
  name: 'Secondary nav with children, no active items',
  args: {
    items: withChildrenNoActive,
  },
};

export const MenuWithChildrenActiveParent: Story = {
  name: 'Secondary nav with children, active parent',
  args: {
    items: withChildrenActiveParent,
  },
};

export const MenuWithChildrenActiveChild: Story = {
  name: 'Secondary nav with children, active child',
  args: {
    items: withChildrenActiveChild,
  },
};

/** Same data as story 5; kept as a short default entry in the sidebar. */
export const Default: Story = {
  args: {
    items: withChildrenActiveChild,
  },
};

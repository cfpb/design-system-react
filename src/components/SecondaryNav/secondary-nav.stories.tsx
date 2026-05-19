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
  { href: '#', label: 'Section A' },
  { href: '#', label: 'Section B' },
  { href: '#', label: 'Section C' },
];

/** 2. Flat list; one top-level item is the current page. */
const basicNoChildrenWithCurrent: SecondaryNavItem[] = [
  { href: '#', label: 'Section A' },
  { href: '#', label: 'Section B', isActive: true },
  { href: '#', label: 'Section C' },
];

/** 3. Nested items; no \`isActive\` on parents or children. */
const withChildrenNoActive: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '#',
    children: [
      { href: '#', label: 'Item A' },
      { href: '#', label: 'Item B' },
    ],
  },
  { href: '#', label: 'Section 2' },
  { href: '#', label: 'Section 3' },
];

/** 4. Current page is the parent “index”; children are links but none are active. */
const withChildrenActiveParent: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '#',
    isActive: true,
    children: [
      { href: '#', label: 'Item A' },
      { href: '#', label: 'Item B' },
    ],
  },
  { href: '#', label: 'Section 2' },
];

/** 5. Typical subpage: one child is the current page. */
const withChildrenActiveChild: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '#',
    children: [
      { href: '#', label: 'Item A', isActive: true },
      { href: '#', label: 'Item B' },
      { href: '#', label: 'Item C' },
    ],
  },
  { href: '#', label: 'Section 2' },
  { href: '#', label: 'Section 3' },
];

export const BasicMenuNoChildren: Story = {
  name: 'Basic',
  args: {
    items: basicNoChildren,
  },
};

export const BasicMenuNoChildrenOneActive: Story = {
  name: 'One active item',
  args: {
    items: basicNoChildrenWithCurrent,
  },
};

export const MenuWithChildrenNoActive: Story = {
  name: 'With children',
  args: {
    items: withChildrenNoActive,
  },
};

export const MenuWithChildrenActiveParent: Story = {
  name: 'With children, active parent',
  args: {
    items: withChildrenActiveParent,
  },
};

export const MenuWithChildrenActiveChild: Story = {
  name: 'With children, active child',
  args: {
    items: withChildrenActiveChild,
  },
};

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
The secondary navigation component provides a left-hand navigation menu that can be used for in-page or section navigation.

Source: https://cfpb.github.io/design-system/development/main-content-and-sidebars
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
  { to: '#', label: 'Section A' },
  { to: '#', label: 'Section B' },
  { to: '#', label: 'Section C' },
];

/** 2. Flat list; one top-level item is the current page. */
const basicNoChildrenWithCurrent: SecondaryNavItem[] = [
  { to: '#', label: 'Section A' },
  { to: '#', label: 'Section B', isActive: true },
  { to: '#', label: 'Section C' },
];

/** 3. Nested items; no \`isActive\` on parents or children. */
const withChildrenNoActive: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    to: '#',
    children: [
      { to: '#', label: 'Item A' },
      { to: '#', label: 'Item B' },
    ],
  },
  { to: '#', label: 'Section 2' },
  { to: '#', label: 'Section 3' },
];

/** 4. Current page is the parent “index”; children are links but none are active. */
const withChildrenActiveParent: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    to: '#',
    isActive: true,
    children: [
      { to: '#', label: 'Item A' },
      { to: '#', label: 'Item B' },
    ],
  },
  { to: '#', label: 'Section 2' },
];

/** 5. Typical subpage: one child is the current page. */
const withChildrenActiveChild: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    to: '#',
    children: [
      { to: '#', label: 'Item A', isActive: true },
      { to: '#', label: 'Item B' },
      { to: '#', label: 'Item C' },
    ],
  },
  { to: '#', label: 'Section 2' },
  { to: '#', label: 'Section 3' },
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

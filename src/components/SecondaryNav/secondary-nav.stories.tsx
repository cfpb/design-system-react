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
Markup and classes match [cfgov secondary-nav.html](https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/v1/jinja2/v1/includes/organisms/secondary-nav.html) (e.g. [Auto loans](https://www.consumerfinance.gov/data-research/consumer-credit-trends/auto-loans/)).

### Usage

- Pass \`items\` with \`href\`, \`label\`, and optional \`isActive\` for the current page.
- Items can have optional \`children\` for sub-menu items.
- **Cfgov:** if *no* item has \`children\`, the nav gets \`o-secondary-nav--no-children\` and is **hidden on small viewports**. Examples below all include a parent-with-children branch so the mobile header works.
- Put the **current section** (with \`children\`) **first**, like production: on small screens only \`li[data-nav-is-active="True"]\` stays visible.
- Default \`ariaLabel\` is \`Section\` (cfgov gettext). Override if needed.
- \`mobileToggleLabel\` sets the collapsible header text (default **Navigate this section**).
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

/**
 * Canonical cfgov-shaped data (matches the working consumerfinance pattern):
 * first item = index with subpages; one child \`isActive\`; following items are peers.
 */
const sectionNavItems: SecondaryNavItem[] = [
  {
    label: 'Section 1',
    href: '#section-1',
    children: [
      { href: '#section-1/item-a', label: 'Item A', isActive: true },
      { href: '#section-1/item-b', label: 'Item B' },
      { href: '#section-1/item-c', label: 'Item C' },
    ],
  },
  { href: '#section-2', label: 'Section 2' },
  { href: '#section-3', label: 'Section 3' },
  { href: '#section-4', label: 'Section 4' },
  { href: '#section-5', label: 'Section 5' },
  { href: '#section-6', label: 'Section 6' },
  { href: '#section-7', label: 'Section 7' },
];

const stripActive = (items: SecondaryNavItem[]): SecondaryNavItem[] =>
  items.map((item) => ({
    ...item,
    isActive: undefined,
    children: item.children?.map((child) => ({
      ...child,
      isActive: undefined,
    })),
  }));

export const Default: Story = {
  args: {
    items: sectionNavItems,
  },
};

export const WithShortList: Story = {
  args: {
    items: [
      sectionNavItems[0],
      { href: '#more', label: 'More' },
    ],
    ariaLabel: 'On this page',
  },
};

export const WithSubMenu: Story = {
  args: {
    items: sectionNavItems,
    ariaLabel: 'Section',
  },
};

export const NoActiveItem: Story = {
  args: {
    items: stripActive(sectionNavItems),
  },
  parameters: {
    docs: {
      description: {
        story:
          'No `isActive` anywhere: every `li` is `data-nav-is-active="False"`, so cfgov hides all section rows on small viewports—you still get the header, but the expanded panel has no visible links.',
      },
    },
  },
};

export const EmptyList: Story = {
  args: {
    items: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          'With no items, or with `o-secondary-nav--no-children` (no nested sections), cfgov hides the whole nav on small viewports.',
      },
    },
  },
};

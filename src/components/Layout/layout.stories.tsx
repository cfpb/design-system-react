import type { Meta, StoryObj } from '@storybook/react-vite';
import { Layout } from '~/src/index';
import {
  LAYOUT_DOCS,
  LAYOUT_STORY_LAYOUT_OPTIONS,
  LayoutExampleContent,
  LayoutExampleSidebar,
  type LayoutStoryLayoutValue,
  renderLayoutPageExample,
} from './layout-stories-shared';

const layoutLabels: Record<LayoutStoryLayoutValue, string> = {
  '': 'None (single column)',
  '2-1': '2-1 (main + right sidebar)',
  '1-3': '1-3 (left sidebar + main)',
};

const meta: Meta<typeof Layout.Main> = {
  title: 'Components (Draft)/Layouts',
  tags: ['autodocs'],
  component: Layout.Main,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: LAYOUT_DOCS.component,
      },
    },
  },
  argTypes: {
    layout: {
      name: 'Column layout',
      control: { type: 'select' },
      options: LAYOUT_STORY_LAYOUT_OPTIONS,
      labels: layoutLabels,
      description:
        'Two-column ratios on `Layout.Main`. None = no `layout` prop (main content only, no sidebar column).',
    },
    id: { table: { disable: true } },
    classes: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Composed page shell — use Controls to switch column layout or preview main-only. */
export const PageLayout: Story = {
  name: 'Page layout',
  args: {
    layout: '' satisfies LayoutStoryLayoutValue,
  },
  render: ({ layout = '' }) => renderLayoutPageExample({ layout }),
  parameters: {
    docs: {
      description: {
        story:
          'Typical assembly: `Layout.Main` → `Layout.Wrapper` → `Layout.Content` (and `Layout.Sidebar` when using `2-1` or `1-3`). This is the story to use when reviewing layout behavior; the stories below show each building block alone.',
      },
    },
  },
};

export const BuildingBlockMain: Story = {
  name: 'Building block — Main',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`Layout.Main` only, with no `layout` prop — single-column shell (`content`, no `content--*`).',
      },
    },
  },
  render: () => (
    <Layout.Main>
      <Layout.Wrapper>{LayoutExampleContent()}</Layout.Wrapper>
    </Layout.Main>
  ),
};

export const BuildingBlockContent: Story = {
  name: 'Building block — Content',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: '`Layout.Content` markup and classes without Main/Wrapper.',
      },
    },
  },
  render: () => LayoutExampleContent(),
};

export const BuildingBlockSidebar: Story = {
  name: 'Building block — Sidebar',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: '`Layout.Sidebar` markup and classes without Main/Wrapper.',
      },
    },
  },
  render: () => LayoutExampleSidebar(),
};

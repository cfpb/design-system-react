import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider, Layout } from '~/src/index';
import {
  LAYOUT_DOCS,
  LAYOUT_EXAMPLE_LOREM,
  LayoutStoryFooter,
} from './layout-stories-shared';

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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MainContentAndSidebar: Story = {
  name: 'Main content and sidebar',
  render: () => (
    <Layout.Main>
      <section className='content_hero' style={{ background: '#E3E4E5' }}>
        Content hero
      </section>
      <Layout.Wrapper>
        <Layout.Content>Main content area</Layout.Content>
        <Layout.Sidebar style={{ background: '#F1F2F2' }}>Sidebar</Layout.Sidebar>
      </Layout.Wrapper>
    </Layout.Main>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Standard layout for the main content area and sidebar. By default `.content__main` and `.content__sidebar` stack vertically. Column modifiers (`2-1`, `1-3`) convert to side-by-side columns at 801px. Inline styling is for demonstration only.',
      },
    },
  },
};

export const LeftHandSidebarLayout: Story = {
  name: 'Left-hand sidebar layout',
  render: () => (
    <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar>Section navigation</Layout.Sidebar>
          <Layout.Content>
            <h2>Main content area</h2>
            <p>{LAYOUT_EXAMPLE_LOREM}</p>
          </Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Add `layout="1-3"` to `Layout.Main` for a 1:3 ratio with the sidebar on the left and main content on the right. Place `Layout.Sidebar` before `Layout.Content` in the wrapper.',
      },
    },
  },
};

export const RightHandSidebarLayout: Story = {
  name: 'Right-hand sidebar layout',
  render: () => (
    <>
      <Layout.Main layout='2-1'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Content>
            <h2>Main content area</h2>
            <p>{LAYOUT_EXAMPLE_LOREM}</p>
          </Layout.Content>
          <Layout.Sidebar style={{ background: '#F1F2F2' }}>Sidebar</Layout.Sidebar>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Add `layout="2-1"` to `Layout.Main` for a 2:1 ratio with main content on the left and the sidebar on the right. Place `Layout.Content` before `Layout.Sidebar` in the wrapper.',
      },
    },
  },
};

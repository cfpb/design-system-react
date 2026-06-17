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

export const FlushBottomModifier: Story = {
  name: 'Flush bottom modifier',
  render: () => (
    <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar flushBottom>
            Side with no bottom padding...
          </Layout.Sidebar>
          <Layout.Content flushBottom>
            Main content with no bottom padding...
            <div className='block block--flush-bottom block--flush-sides block--bg'>
              .content--flush-bottom is very useful when you have a content block
              inside of .content__main with a background and flush sides.
            </div>
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
          'Set `flushBottom` on `Layout.Content` or `Layout.Sidebar` to apply `.content--flush-bottom` and remove bottom padding.',
      },
    },
  },
};

export const FlushTopOnSmallModifier: Story = {
  name: 'Flush top modifier (only on small screens)',
  render: () => (
    <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar flushTopOnSmall>
            Side with no top padding on small screens...
          </Layout.Sidebar>
          <Layout.Content>Main content</Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Set `flushTopOnSmall` on `Layout.Content` or `Layout.Sidebar` to apply `.content--flush-top-on-small`. Top padding is removed only on small screens, where main and sidebar stack in a single column.',
      },
    },
  },
};

export const FlushAllOnSmallModifier: Story = {
  name: 'Flush all modifier (only on small screens)',
  render: () => (
    <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar flushAllOnSmall>
            Side with no padding or border-based gutters on small screens...
          </Layout.Sidebar>
          <Layout.Content>Main content</Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Set `flushAllOnSmall` on `Layout.Content` or `Layout.Sidebar` to apply `.content--flush-all-on-small`. All padding and border-based gutters are removed on small screens only.',
      },
    },
  },
};

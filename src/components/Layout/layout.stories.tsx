import type { Meta, StoryObj } from '@storybook/react-vite';
import { Layout } from '~/src/index';
import {
  LAYOUT_DOCS,
  LayoutExampleContent,
  renderLayoutTwoColumnExample,
} from './layout-stories-shared';

const meta: Meta<typeof Layout.Main> = {
  title: 'Components (Draft)/Layouts',
  tags: ['autodocs'],
  component: Layout.Main,
  parameters: {
    docs: {
      description: {
        component: LAYOUT_DOCS.component,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicMain: Story = {
  name: 'Basic main',
  render: () => (
    <Layout.Main>
      <Layout.Wrapper>{LayoutExampleContent()}</Layout.Wrapper>
    </Layout.Main>
  ),
};

export const Layout_2_1: Story = {
  name: '2-1 layout',
  args: {
    layout: '2-1',
  },
  render: ({ layout = '2-1' }) => renderLayoutTwoColumnExample({ layout }),
};

export const Layout_1_3: Story = {
  name: '1-3 layout',
  args: {
    layout: '1-3',
  },
  render: ({ layout = '1-3' }) => renderLayoutTwoColumnExample({ layout }),
};

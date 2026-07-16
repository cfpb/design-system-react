import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from '~/src/index';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components (Draft)/Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumb,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Breadcrumb',
  render: (properties) => <Breadcrumb {...properties} />,
  args: {
    crumbs: [
      {
        to: '/',
        label: 'Page link',
      },
      {
        to: '/',
        label: 'Page link',
      },
    ],
  },
};

export const Crumb: Story = {
  render: (properties) => <Breadcrumb {...properties} />,
  args: {
    crumbs: [
      {
        to: '/',
        label: 'Page link',
      },
    ],
  },
};

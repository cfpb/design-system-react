import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '~/src/index';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components (Draft)/Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumb,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Crumb: Story = {
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [
      {
        href: '/example',
        label: 'Page link'
      }
    ]
  }
};
Crumb.storyName = 'Crumb';

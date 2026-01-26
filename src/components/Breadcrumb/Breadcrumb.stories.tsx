import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '~/src/index';

const meta: Meta<typeof BreadCrumbComponent> = {
  title: 'Components (Draft)/Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumb,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Breadcrumb',
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [
      {
        href: '/example',
        label: 'Page link'
      },
      {
        href: '/example2',
        label: 'Page link'
      }
    ]
  }
};


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


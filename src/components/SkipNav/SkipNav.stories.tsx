import type { Meta, StoryObj } from '@storybook/react';
import { SkipNav } from '~/src/index';

const meta: Meta<typeof SkipNav> = {
  title: 'Components (Draft)/Skip Navigation',
  tags: ['autodocs'],
  component: SkipNav,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: properties => <SkipNav {...properties} />,
  args: {
    href: '#main'
  }
};

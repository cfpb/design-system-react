import type { Meta, StoryObj } from '@storybook/react';
import { SkipNav } from '~/src/index';

const meta: Meta<typeof SkipNav> = {
  title: 'Components (Draft)/SkipNav',
  tags: ['autodocs'],
  component: SkipNav,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'SkipNav',
  render: properties => <SkipNav {...properties} />,
  args: {
    href: '#main',
    text: 'Skip to main content'
  }
};

export const CustomText: Story = {
  render: properties => <SkipNav {...properties} />,
  args: {
    href: '#content',
    text: 'Skip to content'
  }
};

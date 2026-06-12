import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkipNav } from '~/src/index';

const meta: Meta<typeof SkipNav> = {
  title: 'Components (Draft)/Skip Navigation',
  tags: ['autodocs'],
  component: SkipNav,
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (properties) => <SkipNav {...properties} />,
  args: {
    href: '#main',
    label: 'Skip to main content',
  },
};

export const CustomLabel: Story = {
  name: 'Custom label',
  render: (properties) => <SkipNav {...properties} />,
  args: {
    href: '#main',
    label: 'Skip to page content',
  },
};

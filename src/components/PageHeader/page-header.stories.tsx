import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from '~/src/index';
import { ExampleLinks } from '../ResponsiveMenu/responsive-menu';

const meta: Meta<typeof PageHeader> = {
  title: 'Components (Draft)/Page header',
  tags: ['autodocs'],
  component: PageHeader,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    links: ExampleLinks,
  },
};

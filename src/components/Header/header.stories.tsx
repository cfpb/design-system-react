import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from '~/src/index';
import { ExampleLinks } from '../ResponsiveMenu/responsive-menu';

const meta: Meta<typeof Header> = {
  title: 'Components (Draft)/Header',
  tags: ['autodocs'],
  component: Header,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Header',
  render: (properties) => <Header {...properties} />,
  args: {
    links: ExampleLinks,
  },
};

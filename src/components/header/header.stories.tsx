import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './header';
import { ExampleLinks } from './responsive-menu';

const meta: Meta<typeof Header> = {
  title: 'Components (Draft)/Headers',
  tags: ['autodocs'],
  component: Header,
  argTypes: {
    lang: {
      control: 'select',
      options: ['en', 'es'],
      description: 'Logo language (English or Spanish)',
    },
  },
  parameters: {
    sbNestedCanvasPadding: 'flush',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Header',
  render: (properties) => <Header {...properties} />,
  args: {
    links: ExampleLinks,
    lang: 'en',
  },
};

export const Basic: Story = {
  render: (properties) => <Header {...properties} />,
  args: {
    links: [],
  },
};

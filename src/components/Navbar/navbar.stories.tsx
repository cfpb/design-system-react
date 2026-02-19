import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from '~/src/index';
import '../PageHeader/page-header.scss';
import { ExampleLinks } from './navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components (Draft)/Navbar',
  tags: ['autodocs'],
  component: Navbar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    links: ExampleLinks,
  },
};

export const LoggedOut: Story = {
  args: {},
};

export const NoUser: Story = {
  args: {},
};

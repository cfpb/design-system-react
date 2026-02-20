import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from '~/src/index';
import type { User } from '../../types/user';
import { ExampleLinks } from '../Navbar/navbar';

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

const LoggedInUser: User = {
  name: 'John Sample',
  profileHref: '/profile',
  logoutHref: '/logout',
};

export const LoggedIn: Story = {
  name: 'Logged in',
  args: {
    links: ExampleLinks,
    // user: LoggedInUser,
  },
};

export const LoggedOut: Story = {
  name: 'Logged out',
  args: {
    links: ExampleLinks,
  },
};

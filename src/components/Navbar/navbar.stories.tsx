import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from '~/src/index';
import type { User } from '../../types/user';
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

const LoggedInUser: User = {
  name: 'John Sample',
  profileHref: '/profile',
  logoutHref: '/logout',
};

export const LoggedIn: Story = {
  args: {
    links: ExampleLinks,
    user: LoggedInUser,
  },
};

export const LoggedOut: Story = {
  args: {},
};

export const NoUser: Story = {
  args: {},
};

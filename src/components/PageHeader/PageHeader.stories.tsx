import type { Meta, StoryObj } from '@storybook/react';
import type { User } from '../Navbar/Navbar';
import { ExampleLinks } from '../Navbar/Navbar';
import PageHeader from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

const LoggedInUser: User = {
  name: 'John Sample',
  logoutHref: '/logout',
  loginHref: '/login'
};

export const LoggedIn: Story = {
  args: {
    links: ExampleLinks,
    user: LoggedInUser
  }
};

export const LoggedOut: Story = {
  args: {
    links: ExampleLinks
  }
};

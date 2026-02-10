import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from '~/src/index';
import type { User } from '../Navbar/navbar';
import { ExampleLinks } from '../Navbar/navbar';

const meta: Meta<typeof PageHeader> = {
  title: 'Components (Draft)/Page header',
  tags: ['autodocs'],
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

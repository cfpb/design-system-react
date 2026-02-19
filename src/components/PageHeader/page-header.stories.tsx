import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from '~/src/index';
import type { User } from '../Navbar/navbar';
import { ExampleLinks } from '../Navbar/navbar';

const meta: Meta<typeof PageHeader> = {
  title: 'Components (Draft)/Header',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 
A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const LoggedInUser: User = {
  name: 'John Sample',
  logoutHref: '/logout',
  loginHref: '/login',
};

export const LoggedIn: Story = {
  args: {
    name: 'Logged in',
    links: ExampleLinks,
    user: LoggedInUser,
  },
};

export const LoggedOut: Story = {
  args: {
    name: 'Logged out',
    links: ExampleLinks,
  },
};

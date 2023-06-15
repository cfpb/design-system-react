import type { Meta, StoryObj } from '@storybook/react';
import '../PageHeader/header.less';
import Navbar, { ExampleLinks } from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

const LoggedInUser = {
  name: 'John Sample'
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

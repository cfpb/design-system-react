import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '~/src/index';
import '../PageHeader/header.less';
import { ExampleLinks } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components (Draft)/Navbar',
  tags: ['autodocs'],
  component: Navbar,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

const LoggedInUser = {
  name: 'John Sample',
  logoutHref: '#'
};

export const LoggedIn: Story = {
  args: {
    links: ExampleLinks
  }
};

export const LoggedOut: Story = {
  args: {}
};

export const NoUser: Story = {
  args: {}
};

import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveMenu } from '~/src/index';
import '../PageHeader/header.less';
import { ExampleLinks } from './ResponsiveMenu';

const meta: Meta<typeof ResponsiveMenu> = {
  title: 'Components (Draft)/ResponsiveMenu',
  tags: ['autodocs'],
  component: ResponsiveMenu,
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

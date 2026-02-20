import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponsiveMenu } from '~/src/index';
import '../Header/header.scss';
import { ExampleLinks } from './responsive-menu';

const meta: Meta<typeof ResponsiveMenu> = {
  title: 'Components (Draft)/ResponsiveMenu',
  tags: ['autodocs'],
  component: ResponsiveMenu,
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

import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from './UserProfile';

const meta: Meta<typeof UserProfile> = {
  component: UserProfile,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    emailAddress: '',
    firstName: 'Test',
    lastName: 'User'
  }
};

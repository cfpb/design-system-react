import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from './UserProfile/UserProfile';

const meta: Meta<typeof UserProfile> = {
  component: UserProfile,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

// export const InvalidEmailDomain: Story = {
//   args: {
//     emailAddress: 'invalid@email.com',
//     firstName: 'Invalid Email Domain',
//     lastName: 'Invalid Email Domain'
//   }
// };

export const NoAssociatedInstitutions: Story = {
  args: {
    email: 'test.user@no-associated-financial_institutions.com',
    firstName: 'No Associated Institutions',
    lastName: 'No Associated Institutions'
  }
};

export const PersonalEmailDomain: Story = {
  args: {
    email: 'personal-email@gmail.com',
    firstName: 'Personal Email Domain',
    lastName: 'Personal Email Domain'
  }
};

export const HasMultipleAssociatedInstitutions: Story = {
  args: {
    email: 'has-multiple-institutions@bank0.com',
    firstName: 'Has Multiple Associated Institutions',
    lastName: 'Has Multiple Associated Institutions'
  }
};

export const HasSingleAssociatedInstitutions: Story = {
  args: {
    email: 'has-single-institution@test1.local',
    firstName: 'Has Single Associated Institutions',
    lastName: 'Has Single Associated Institutions'
  }
};

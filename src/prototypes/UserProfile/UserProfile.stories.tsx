import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { CompleteUserProfile } from './CompleteUserProfile';
import { Page } from './Page';
import './UserProfile.less';
import { UserProfileStatus } from './UserProfileStatus';

const meta: Meta<typeof Page> = {
  title: 'Prototypes/User profile',
  component: Page
};

export default meta;

type Story = StoryObj<typeof meta>;

export interface UserProfilePageState {
  submitted: boolean;
  institutionSelected: boolean;
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * Wrapper to provide state management to the page
 */
const StatefulContainer = (): JSX.Element => {
  const [state, setState] = useState<UserProfilePageState>({
    submitted: false,
    institutionSelected: false,
    firstName: 'Test',
    lastName: 'User',
    email: 'test.user@fintech1.com'
  });

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value;
      setState(old => ({ ...old, [event.target.id]: value }));
    },
    [setState]
  );

  if (state.submitted)
    return <UserProfileStatus {...{ state, setState, onChange }} />;

  return <CompleteUserProfile {...{ state, setState, onChange }} />;
};

export const UserProfile: Story = {
  args: {
    children: <StatefulContainer />
  }
};

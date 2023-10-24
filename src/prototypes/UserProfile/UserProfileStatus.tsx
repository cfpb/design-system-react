import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import {
  Button,
  FooterCfGov,
  Icon,
  Layout,
  Link,
  Notification,
  PageHeader
} from '~/src/index';
import type { UserProfilePageState } from './UserProfile.stories';

interface PageProperties {
  state: UserProfilePageState;
  setState: Dispatch<SetStateAction<UserProfilePageState>>;
}

export const UserProfileStatus = ({
  state,
  setState
}: PageProperties): JSX.Element => {
  useEffect(() => window.scrollTo(0, 0), []);

  const onButtonClick = (event: MouseEvent): void => {
    event.preventDefault();
    setState(old => ({ ...old, submitted: false }));
  };

  return (
    <>
      <PageHeader />

      <Layout.Wrapper>
        <Layout.Main>
          <div id='profile-status' className='w-medium'>
            <h1>User profile submission status</h1>
            <Notification
              type='success'
              message='You are approved to proceed to the filing platform'
            >
              You have successfully completed your user profile and are
              authorized to proceed to the data filing platform. If you need
              further assistance please{' '}
              <Link href='#'>submit a technical question</Link>.
            </Notification>
            <div className='details'>
              <h3>User profile details</h3>
              <div className='field'>
                <h4>First name</h4>
                <p>{state.firstName}</p>
              </div>
              <div className='field'>
                <h4>Last name</h4>
                <p>{state.lastName}</p>
              </div>
              <div className='field'>
                <h4>Email address</h4>
                <p>
                  <Link>{state.email}</Link>
                </p>
              </div>
              <div className='field'>
                <h4>Associated financial institutions</h4>
                <ul className='institution-list'>
                  <li className='institution'>
                    <Icon name='approved' withBg />
                    <span>Approved</span>
                    <Link>Bank 1 | TESTS6AFX2TESTXJ89VJ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='page-actions'>
              <Button
                label='Proceed to filing platform'
                onClick={onButtonClick}
              />
            </div>
          </div>
        </Layout.Main>
      </Layout.Wrapper>

      <FooterCfGov />
    </>
  );
};

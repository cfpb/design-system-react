/**
 * TODO
 *  - Build out form components
 *    - Allow fields to have a status (error | warning | info)
 *
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Notification } from '../components/Notification/Notification';
import { TextInput } from '../components/TextInput/TextInput';
import type { JSXElement } from '../types/jsxElement';
import './UserProfile.less';
import Institutions from './UserProfileInstitutions.json';

const emailOptions = [
  '',
  'test.user@financial_institution_email_domain-not-in-system.com',
  'has-multiple-institutions@foo.bar',
  'test.user@bank0.com'
];

const filterInstitutionOptionsByDomain = emailDomain => {
  /**
   * Example Institution
   {
    "name": "Test Bank 230626",
    "lei": "TESTBANK230626",
    "domains": [
      {
        "domain": "baz.qux",
        "lei": "TESTBANK230626"
      },
      {
        "domain": "foo.bar",
        "lei": "TESTBANK230626"
      }
    ]
  }
   */
  const matches = Institutions.filter(index => {
    if (index.domains.length === 0 > 0) return false;
    const _matches = index.domains.filter(
      ({ domain }) => domain === emailDomain
    );
    return _matches.length > 0;
  });

  console.log('matches', matches);
  console.log(
    'institution matches',
    matches.map(match => makeSelectOption(match.name, match.lei))
  );
  return matches.map(match =>
    makeSelectOption(`${match.name} | ${match.lei}`, match.lei)
  );
};

export default function UserProfile({
  emailAddress = emailOptions[0],
  firstName = 'Test',
  lastName = 'User'
}): JSX.Element {
  const [email, setEmail] = useState(emailAddress);
  const [institutions, setInstitutions] = useState([]);

  const isValidEmailDomain = email.length > 0;

  useEffect(() => {
    setInstitutions([]);
  }, [email]);

  const onEmailChange = useCallback(
    event => {
      console.log('Changing email to', event.target.value);
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const selectableInstitutions = useMemo(
    () => filterInstitutionOptionsByDomain(email.split('@')[1]),
    [email]
  );

  const hasMatchingInstitutions = selectableInstitutions.length > 0;

  return (
    <main className='page'>
      <h1>Complete your user profile</h1>
      <p className='intro u-mb60'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum commodi
        atque ut quidem ipsum! Nemo inventore magnam dolorem, nihil cumque
        explicabo qui quisquam sit tempore quam, voluptate natus officia
        doloremque.
      </p>
      <Notification
        message='Does your financial institution have an LEI?'
        type='warning'
      >
        In order to begin using the filing platform your institution must have a
        Legal Entity Identifier (LEI). Visit the Global LEI Foundation (GLEIF)
        website for more information on how to obtain an LEI for your
        institution.
      </Notification>
      <div className='form'>
        <form action=''>
          <div className='field'>
            <h3>First name</h3>
            <TextInput
              id='firstName'
              name='firstName'
              defaultValue={firstName}
              width='full'
            />
          </div>
          <div className='field'>
            <h3>Last name</h3>
            <TextInput
              id='lastName'
              name='lastName'
              defaultValue={lastName}
              width='full'
            />
          </div>
          <div className='field'>
            <h3>Email address</h3>
            <p>Your email address is automatically pulled in from Login.gov.</p>
            <select
              onChange={onEmailChange}
              value={email}
              className={isValidEmailDomain ? '' : 'error'}
            >
              {emailOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ConditionalNotification visible={!isValidEmailDomain}>
              <Notification
                message='Your email domain is not in our system'
                type='error'
                className='inline'
              >
                Please check that you are logged in to Login.gov with your
                financial institution email address. If you need further
                assistance please <a href='#'>submit a technical question</a> to
                our help desk.
              </Notification>
            </ConditionalNotification>
          </div>
          <div className='field'>
            <h3>Associated financial institution(s)</h3>
            <p>
              Select the financial institution(s) that you are associated with.{' '}
            </p>
            <Dropdown
              pillAlign='bottom'
              isMulti
              label=''
              id='institutions'
              options={selectableInstitutions}
              value={institutions}
              onSelect={option => setInstitutions(option)}
              isDisabled={!hasMatchingInstitutions}
              className={
                hasMatchingInstitutions || !isValidEmailDomain ? '' : 'warning'
              }
            />
            <ConditionalNotification
              visible={!hasMatchingInstitutions && isValidEmailDomain}
            >
              <Notification
                type='warning'
                message='No results found'
                className='inline'
              >
                If you recently registered for an LEI the blah blah might still
                be processing. Might not be in our system yet. If you need
                further assistance please{' '}
                <a href='#'>submit a technical question</a> to our help desk.
              </Notification>
            </ConditionalNotification>
          </div>
          <Button label='Complete profile' />
        </form>
      </div>
    </main>
  );
}

const makeSelectOption = (label: string, value: string) => ({ value, label });

const ConditionalNotification = ({ visible, children }): JSXElement => {
  if (!visible) return null;

  return children;
};

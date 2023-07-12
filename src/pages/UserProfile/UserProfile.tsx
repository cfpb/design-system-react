/**
 * TODO
 *  - Build out form components
 *    - Allow fields to have a status (error | warning | info)
 *
 */

import { useMemo, useState } from 'react';
import type { OnChangeValue } from 'react-select';
import { Button } from '../../components/Button/Button';
import type { SelectOption } from '../../components/Dropdown/Dropdown';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Notification } from '../../components/Notification/Notification';
import { TextInput } from '../../components/TextInput/TextInput';
import {
  LabelInstitutionDropdown,
  MessageNoSearchMatches
} from './InstitutionSelectionComponents';
import { filterInstitutionOptionsByDomain } from './InstitutionSelectionUtils';
import { MatchedInstitutions } from './MatchedInstitutionsList';
import './UserProfile.less';

const emailOptions = [
  'test.user@no-associated-financial_institutions.com',
  'personal-email@gmail.com',
  'has-multiple-institutions@bank0.com',
  'has-single-institution@test1.local'
];

/**
 * Main Component
 * @param email User's email address
 * @param firstName First
 * @param lastName Last
 * @returns JSX.Element
 */
export default function UserProfile({
  email = emailOptions[0],
  firstName = 'Test',
  lastName = 'User'
}): JSX.Element {
  const [institutions, setInstitutions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isValidEmailDomain = email.length > 0 && email !== 'invalid@email.com';

  // TODO: There will be a list of email domains to check against for this error
  const isPersonalEmailDomain =
    isValidEmailDomain && email.includes('personal');

  const onInstitutionSelect = (
    selectedOptions: OnChangeValue<SelectOption, boolean>
  ): void => {
    console.log('Selected Options:', selectedOptions);
    setInstitutions(selectedOptions);
  };

  // Separate matched-by-email-domain vs other Institution options
  const [matchingInstitutions, otherInstitutions] = useMemo(() => {
    const IDX_DOMAIN = 1;
    return filterInstitutionOptionsByDomain(email.split('@')[IDX_DOMAIN]);
  }, [email]);
  const hasMatchingInstitutions = matchingInstitutions.length > 0;

  const onFormSubmit = (): void => setFormSubmitted(value => !value);

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
            <TextInput
              disabled
              id='user-email'
              name='user-email'
              className={
                isValidEmailDomain && !isPersonalEmailDomain ? '' : 'error'
              }
              value={email}
            />
            <Notification
              message='Personal email domains are not permitted'
              type='error'
              className='inline'
              isVisible={isPersonalEmailDomain}
            >
              Please check that you are logged in to Login.gov with your
              financial institution email address. If you need further
              assistance please <a href='#'>submit a technical question</a> to
              our help desk.
            </Notification>
          </div>
          <div className='field'>
            <h3>Associated financial institution(s)</h3>
            <MatchedInstitutions institutions={matchingInstitutions} />
            <LabelInstitutionDropdown
              hasMatches={matchingInstitutions.length > 0}
            />
            <Dropdown
              placeholder={
                !hasMatchingInstitutions ||
                !isValidEmailDomain ||
                isPersonalEmailDomain
                  ? ''
                  : 'Select...'
              }
              pillAlign='bottom'
              isMulti
              withCheckbox
              label=''
              id='institutions'
              options={otherInstitutions}
              value={institutions}
              onSelect={onInstitutionSelect}
              className={isValidEmailDomain ? '' : 'error'}
              noOptionsMessage={MessageNoSearchMatches}
              isClearable={false}
              backspaceRemovesValue={false}
            />
          </div>
          <Button label='Submit' onClick={onFormSubmit} />
        </form>
        <Notification
          type='warning'
          message='Your selection has been submitted to our technical help team for review'
          isVisible={formSubmitted}
          className='u-mt60'
        >
          Please allow 24-48 hours for response time during normal business
          hours, although occasionally more time may be required. If you need
          further assistance please <a href='#'>submit a technical question</a>{' '}
          to our help desk.
        </Notification>
      </div>
    </main>
  );
}

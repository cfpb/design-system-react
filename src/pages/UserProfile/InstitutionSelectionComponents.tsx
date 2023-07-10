import { Icon } from '~/src/components/Icon/Icon';
import Notification from '~/src/components/Notification/Notification';

export const LabelInstitutionDropdown = ({
  hasMatches
}: {
  hasMatches: boolean;
}): JSX.Element => {
  if (hasMatches) {
    return (
      <p>
        If you need to file for additional institutions not listed above, search
        and select the institutions you are associated with.
      </p>
    );
  }

  return (
    <p>Select the financial institution(s) that you are associated with. </p>
  );
};

export const MessageNoSearchMatches = (): JSX.Element => (
  <Notification
    type='error'
    // className='inline'
    message={
      <>
        <Icon name='error' withBg style={{ position: 'relative' }} /> No results
        found in our database
      </>
    }
    showIcon={false}
  >
    Your financial institution/LEI was not found in our database. If you
    recently registered for an LEI with GLEIF, your request may still be in
    process. If you need further assistance please{' '}
    <a href='#'>submit a technical question</a>
    to our help desk.
  </Notification>
);

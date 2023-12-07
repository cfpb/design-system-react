import { Icon, Link, List, ListItem } from '~/src';
import { SubsectionWrapper } from './SubsectionWrapper';

export function ReviewInstitutions(): JSX.Element {
  return (
    <SubsectionWrapper>
      <h3 className='heading'>Review financial institution details</h3>
      <p>
        You are able to file data for the financial institutions that have been
        verified. Pending selections will be reviewed by our technical help
        team. You will not be able to file for those institutions until the
        associations are approved. Please allow 24-48 hours for response time
        during normal business hours.
      </p>
      <List isLinks className='institution-list'>
        <ListItem>
          <Icon name='approved' withBg className='green' />
          <span className='status-label'>Approved</span>
          <Link href={Date.now().toString()} type='list'>
            Fintech 1 | TESTS6AFX2TESTXJ89VJ
          </Link>
        </ListItem>
      </List>
    </SubsectionWrapper>
  );
}
export default ReviewInstitutions;

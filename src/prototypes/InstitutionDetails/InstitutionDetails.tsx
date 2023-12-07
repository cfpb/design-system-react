import { Grid } from '~/src';
import { AffiliateInformation } from './AffiliateInformation';
import { FinancialInstitutionDetails } from './FinancialInstitutionDetails';
import { IdentifyingInformation } from './IdentifyingInformation';
import { PageIntro } from './PageIntro';
import { data } from './data';

function InstitutionDetails(): JSX.Element {
  return (
    <Grid.Wrapper center>
      <Grid.Row>
        <Grid.Column width={8}>
          <main id='main-content' className='my-10'>
            <PageIntro />
            <FinancialInstitutionDetails data={data} />
            <IdentifyingInformation data={data} />
            <AffiliateInformation data={data} />
            {/* <ChangeHistory /> */}
          </main>
        </Grid.Column>
      </Grid.Row>
    </Grid.Wrapper>
  );
}

export default InstitutionDetails;

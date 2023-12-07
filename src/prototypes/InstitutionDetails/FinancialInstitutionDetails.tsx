import { Heading, WellContainer } from '~/src/';
import { DisplayField } from './DisplayField';
import type { InstitutionDetailsApiType } from './institutionDetails.type';

export function FinancialInstitutionDetails({
  data
}: {
  data: InstitutionDetailsApiType;
}): JSX.Element {
  const street2 = data.hq_address_street_2 ?? '';
  const domains = data.domains ?? [];

  return (
    <>
      <Heading type='3' className='u-mt45'>
        Financial institution details
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      <WellContainer className='u-mt30'>
        <DisplayField label='Financial institution name' value={data.name} />
        <DisplayField
          label='Headquarters address'
          value={
            <>
              {data.hq_address_street_1}
              <br />
              {street2.length > 0 ? (
                <>
                  data.hq_address_street_2.length
                  <br />
                </>
              ) : undefined}
              {data.hq_address_city}, {data.hq_address_state}{' '}
              {data.hq_address_zip}
            </>
          }
        />
        <DisplayField label='LEI' value={data.lei} />
        <DisplayField label='Email domain' value={domains.join(',')} />
      </WellContainer>
    </>
  );
}

export default FinancialInstitutionDetails;

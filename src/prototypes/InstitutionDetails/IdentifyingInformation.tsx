import { Heading, WellContainer } from '~/src/';
import { DisplayField } from './DisplayField';
import type { InstitutionDetailsApiType } from './institutionDetails.type';

export function IdentifyingInformation({
  data
}: {
  data: InstitutionDetailsApiType;
}): JSX.Element {
  return (
    <>
      <Heading type='3' className='u-mt45'>
        Identifying information
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      <WellContainer className='u-mt30'>
        <DisplayField
          label='Federal Taxpayer Identification Number (TIN)'
          value={data.tax_id}
        />
        <DisplayField
          label='Research, Statistics, Supervision, and Discount Identification
                (RSSD ID) number'
          value={data.rssd_id}
        />
        <DisplayField
          label='Type of financial institution'
          value={data.sbl_institution_type_id}
        />
        <DisplayField
          label='Federal prudential regulator'
          value={data.primary_federal_regulator_id}
        />
      </WellContainer>
    </>
  );
}

export default IdentifyingInformation;

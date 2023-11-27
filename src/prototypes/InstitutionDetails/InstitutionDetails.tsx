import classNames from 'classnames';
import {
  Grid,
  Heading,
  Link,
  Table,
  TextIntroduction,
  WellContainer
} from '~/src';
import './InstitutionDetails.less';

function DisplayField({ label, value, className = '' }): JSX.Element {
  return (
    <div className={classNames('display-field', className)}>
      {label ? <Heading type='4'>{label}</Heading> : null}
      {value ? <p>{value}</p> : null}
    </div>
  );
}

function InstitutionDetails(): JSX.Element {
  return (
    <Grid.Wrapper center>
      <Grid.Row>
        <Grid.Column width={8}>
          <main id='main-content' className='my-10'>
            <TextIntroduction
              heading='View financial institution details'
              subheading='This data reflects the most current information available to the CFPB for your financial institution. Please confirm the accuracy of the information to continue with the data submission process.'
              description={
                <>
                  We pull data from sources such as GLEIF (Global Legal Entity
                  Identifier Foundation), the National Information Center (NIC),
                  and filers through requests to our technical help desk.
                </>
              }
              callToAction={
                <Link href='/#'>
                  To make changes, please contact our technical help desk
                </Link>
              }
            />

            <Heading type='3' className='u-mt45'>
              Financial institution details
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <WellContainer className='u-mt30'>
              <DisplayField
                label='Financial institution name Fintech 1'
                value='Fintech 1'
              />
              <DisplayField
                label='Headquarters address'
                value={
                  <>
                    321 Anywhere Street
                    <br />
                    Anytown, AR 12312
                  </>
                }
              />
              <DisplayField
                label='LEI'
                value='TESTS6AFX2TESTXJ89VJ  (Active)'
              />
              <DisplayField label='Email domain' value='fintech1.com' />
            </WellContainer>

            <Heading type='3' className='u-mt45'>
              Identifying information
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <WellContainer className='u-mt30'>
              <DisplayField
                label='Federal Taxpayer Identification Number (TIN)'
                value='03-2345678'
              />
              <DisplayField
                label='Research, Statistics, Supervision, and Discount Identification
                (RSSD ID) number'
                value='N/A'
              />
              <DisplayField
                label='Institution type (HMDA)'
                value='1 - National Bank'
              />
              <DisplayField
                label='Type of financial institution'
                value='Online lender, Equipment finance company'
              />
              <DisplayField
                label='Federal prudential regulator'
                value='Federal Deposit Insurance Corporation (FDIC)'
              />
              <DisplayField
                label='Agency code'
                value='9 - Consumer Financial Protection Bureau (CFPB)'
              />
            </WellContainer>

            <Heading type='3' className='u-mt45'>
              Affiliate information
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <WellContainer className='u-mt30'>
              <Heading type='5'>Parent entity</Heading>
              <DisplayField
                label='Name'
                value='Not available'
                className='inline u-w33pct'
              />
              <DisplayField
                label='LEI'
                value='Not available'
                className='inline u-w33pct'
              />
              <DisplayField
                label='RSSD ID'
                value='Not available'
                className='inline u-w33pct'
              />

              <Heading type='5' className='u-mt45'>
                Top Holder
              </Heading>
              <DisplayField
                label='Name'
                value='Not available'
                className='inline u-w33pct'
              />
              <DisplayField
                label='LEI'
                value='Not available'
                className='inline u-w33pct'
              />
              <DisplayField
                label='RSSD ID'
                value='Not available'
                className='inline u-w33pct'
              />
            </WellContainer>

            <Heading type='3' className='u-mt45'>
              History of changes
            </Heading>
            <Table
              isPaginated
              className='w-100pct'
              perPage={5}
              columns={[
                'Change ID',
                'Field',
                'Description of change',
                'Source',
                'Date'
              ]}
              rows={[
                [
                  '004',
                  'Tax ID',
                  <div key='change4'>
                    <b>New value:</b>
                    <p>01-01234567</p>
                    <br />
                    <b>Old value:</b>
                    <p>01-98765432 </p>
                  </div>,
                  'NIC',
                  '8/23/2023'
                ],
                [
                  '003',
                  'Headquarters address',
                  <div key='change3'>
                    <b>New value:</b>
                    <p>
                      321 Anywhere Street
                      <br />
                      Anytown, AR 12312
                    </p>
                    <br />
                    <b>Old value:</b>
                    <p>
                      123 Everywhere Street
                      <br />
                      Everytown, AR 12312
                    </p>
                  </div>,
                  'NIC',
                  '8/23/2023'
                ],
                [
                  '002',
                  'RSSD ID',
                  <div key='change2'>
                    <b>New value:</b>
                    <p>9876543</p>
                    <br />
                    <b>Old value:</b>
                    <p>0987654</p>
                  </div>,
                  'CFPB Reported by: Judy Jones',
                  '5/21/2021'
                ],
                [
                  '001',
                  'Financial institution name',
                  <div key='change1'>
                    <b>New value:</b>
                    <p>Fintech 1</p>
                    <br />
                    <b>Old value:</b>
                    <p>Fintech 0</p>
                  </div>,
                  'NIC',
                  '2/28/2020'
                ]
              ]}
            />
          </main>
        </Grid.Column>
      </Grid.Row>
    </Grid.Wrapper>
  );
}

export default InstitutionDetails;

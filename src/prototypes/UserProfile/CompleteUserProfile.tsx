import {
  Button,
  Checkbox,
  FooterCfGov,
  Layout,
  Link,
  Dropdown as Multiselect,
  PageHeader
} from '~/src/index';
import { DSRForm as Form } from './DSRForm';
import { DSRLabeledInput as TextInput } from './DSRLabeledInput';
import { FieldGroup } from './FieldGroup';
import { FormActions } from './FormActions';
import { HelperText } from './HelperText';
import { SBLInstitutionCheckboxLabel as InstitutionLabel } from './SBLInstitutionCheckboxLabel';
import { SectionIntroduction } from './SectionIntroduction';
import { TextIntroduction } from './TextIntroduction';
import { Well } from './Well';

export const CompleteUserProfile = ({ state, setState, onChange }) => (
  <>
    <PageHeader />

    <Layout.Wrapper>
      <Layout.Main>
        <Form
          id='complete-profile'
          className='w-medium'
          onSubmit={e => {
            e.preventDefault();
            setState(old => ({ ...old, submitted: true }));
          }}
        >
          <TextIntroduction
            heading='Complete your user profile'
            lead='Select the financial institution you are authorized to file for to complete your user profile. Once you have successfully associated your user profile with a financial institution you will have access to the filing platform and can begin the filing process.'
            body='In order to begin using the filing platform you must have a Legal Entity Identifier (LEI) for your financial institution. Visit the Global LEI Foundation (GLEIF) website for more information on how to obtain an LEI.'
          />

          <Well>
            <SectionIntroduction
              heading='Provide your identifying information'
              body={
                <>
                  Type your first name and last name in the fields below. Your
                  email address is automatically populated from{' '}
                  <Link href='https://login.gov'>Login.gov</Link>.
                </>
              }
            />
            <FieldGroup>
              <TextInput
                id='firstName'
                name='firstName'
                value={state.firstName}
                label='First Name'
                onChange={onChange}
              />

              <TextInput
                id='lastName'
                name='lastName'
                value={state.lastName}
                label='Last Name'
                onChange={onChange}
              />

              <TextInput
                id='email'
                name='email'
                label='Email address'
                value={state.email}
                disabled
              />
            </FieldGroup>
          </Well>

          <Well>
            <SectionIntroduction
              heading='Select the financial institution you are authorized to file for'
              body='Select from the pre-selected matches by email domain or search by LEI to find a match for your institution. Self-selections will be submitted to the technical help team for approval. If you are authorized to file for multiple financial institutions you can select more than one.'
            />

            <FieldGroup>
              <HelperText>
                The following financial institution matches your email domain.
                Check the box if you are authorized to file for this
                institution.
              </HelperText>

              <Checkbox
                id='institutionSelected'
                name='institutionSelected'
                checked={state.institutionSelected}
                onChange={onChange}
                label={
                  <InstitutionLabel
                    name='Bank 1'
                    lei='TESTS6AFX2TESTXJ89VJ'
                    taxid='01-01234567'
                    agency='9'
                  />
                }
              />

              <HelperText>
                If the financial institution you are authorized to file for is
                not included above or if you are authorized to file for
                additional institutions, search by LEI and select your
                institution.
              </HelperText>

              <Multiselect
                id='additional-institutions'
                label=''
                placeholder=''
                options={[
                  {
                    label: 'Credit Union 2  |  EX0YWS6AMX2PLE92J1LD',
                    value: 'EX0YWS6AMX2PLE92J1LD'
                  },
                  {
                    label: 'Bank 2  |  B90YWS6AFX2LGWOXJ1LD',
                    value: 'B90YWS6AFX2LGWOXJ1LD'
                  }
                ]}
              />
            </FieldGroup>
          </Well>

          <FormActions>
            <Button label='Submit' type='submit' />
            <Button label='Clear form' asLink appearance='warning' />
          </FormActions>
        </Form>
      </Layout.Main>
    </Layout.Wrapper>

    <FooterCfGov />
  </>
);

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '../components/Button/Button';
import Divider from '../components/Divider/Divider';
import { FooterCfGov } from '../components/Footer/FooterCfGov';
import Hero from '../components/Hero/Hero';
import { Label } from '../components/Label/Label';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/Link';
import List from '../components/List/List';
import { ListItemBuilder } from '../components/List/ListItem';
import { ExampleLinks } from '../components/Navbar/Navbar';
import PageHeader from '../components/PageHeader/PageHeader';
import SkipNav from '../components/SkipNav/SkipNav';
import { TextInput } from '../components/TextInput/TextInput';
import Well from '../components/Well/Well';
import './FilingLanding.less';

export default function FilingLanding(): JSX.Element {
  return (
    <div id='FilingLanding'>
      <SkipNav />
      <PageHeader links={ExampleLinks} user={{ name: 'John Sample' }} />
      <Layout.Main id='main' layout='2-1' bleedbar>
        <Hero
          heading='Get started filing your mortgage or small business lending data'
          subheading='Covered financial institutions and voluntary reporters to maintain, report, and publicly disclose information about lending.'
          backgroundColor='#EFF8FD'
        />
        <Layout.Wrapper>
          <Layout.Content>
            <Well
              heading='Does your financial institution have an LEI?'
              text='In order to begin using the filing platform you must have a
                  Legal Entity Identifier (LEI) for your financial institution.
                  Visit the Global LEI Foundation (GLEIF) website for more
                  information on how to obtain an LEI.'
              links={[
                <Link key='register' href='#'>
                  Register for an LEI
                </Link>
              ]}
            />
            <div className='sign-in u-mt45'>
              <h2>Sign in or create an account</h2>
              <p>
                The CFPB participates with Login.gov to provide secure sign in
                and private access to your information on the CFPB filing
                platform. In order to access the filing platform you must
                register and sign in with the email address issued to you by
                your financial institution.
              </p>
              <Button label='Sign in with Login.gov' appearance='primary' />
              <div className='create-account inline u-mt15'>
                Don&apos;t have an account?{' '}
                <Link href='#' type='list'>
                  Create an account with Login.gov
                </Link>
              </div>
            </div>
            <Divider className='u-mt45 u-mb45' />
            <div className='get-help'>
              <h3>Get technical help</h3>
              <p>
                Find answers to frequently asked questions regarding the small
                business lending data submission platform. If you need further
                assistance you can submit a technical question using our help
                form.
              </p>
              <List isLinks>
                <ListItemBuilder>
                  <a href='#'>Find answers to frequently asked questions</a>
                  <a href='#'>Submit a technical question</a>
                </ListItemBuilder>
              </List>
            </div>
          </Layout.Content>
          <Layout.Sidebar>
            <div className='m-related-links'>
              <header className='m-slug-header'>
                <h3 className='a-heading'>Additional Resources</h3>
              </header>
              <List isLinks>
                <ListItemBuilder>
                  <a href='#'>Final Rule</a>
                  <a href='#'>Resources for small business owners</a>
                </ListItemBuilder>
              </List>
            </div>
            <Divider className='u-mt60 u-mb30' />
            <form className='mailing-list-signup'>
              <h3>Get updates</h3>
              <p>
                Sign up for updates about regulatory compliance resources or
                guidance specific to small business lending.
              </p>
              <Label htmlFor='email'>Email Address</Label>
              <TextInput
                id='email'
                name='mailing-email'
                type='email'
                placeholder='mail@example.com'
                width='full'
              />
              <div className='actions'>
                <Button label='Sign up' />
                <Link href='#' type='list'>
                  See Privacy Act Statement
                </Link>
              </div>
            </form>
          </Layout.Sidebar>
        </Layout.Wrapper>
      </Layout.Main>
      <FooterCfGov />
    </div>
  );
}

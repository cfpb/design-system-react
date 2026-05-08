import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer, ApplicationFooter, FooterCfGov, Link } from '~/src/index';

const meta: Meta<typeof Footer> = {
  title: 'Components (Draft)/Footers',
  tags: ['autodocs'],
  component: Footer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const App: Story = {
  name: 'Application',
  render: () => (
    <ApplicationFooter 
      navLinks={[
        <Link label='Link 1' key='link_1' href='#'/>,
        <Link label='Longer link 2' key='link_2' href='#'/>,
      ]}
      footerContent={
        <>
          <h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link href='#'>Link</Link>
        </>
    }/>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.',
      },
    },
  }
};

export const CFGov: Story = {
  name: 'Website (cf.gov)',
  render: () => <FooterCfGov />,
};
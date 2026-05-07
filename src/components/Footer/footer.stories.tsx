import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSX } from 'react';
import { Footer, ApplicationFooter, FooterCfGov, Icon, Link } from '~/src/index';

const meta: Meta<typeof Footer> = {
  title: 'Components (Draft)/Footers',
  tags: ['autodocs'],
  component: Footer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

const makeLink = (label: string, isExternal?: boolean): JSX.Element => (
  <a
    key={label}
    href={globalThis.location.href}
    className={`m-list__link a-link ${isExternal ? 'a-link--icon' : ''}`}
  >
    <span className='a-link__text'>{label}</span>
    {isExternal ? <Icon name='external-link' alt='External link' /> : null}
  </a>
);

export const CFGov: Story = {
  name: 'Website (cf.gov)',
  render: () => <FooterCfGov />,
};

export const App: Story = {
  name: 'Application',
  render: (properties) => <ApplicationFooter {...properties} />,
  args: {
    navLinks: [makeLink('relevant link one'), makeLink('link two')],
    footerContent: 
      <>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link href='#'>Link</Link>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.',
      },
    },
  }
};



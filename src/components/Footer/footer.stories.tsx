import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSX } from 'react';
import { Footer, ApplicationFooter, WebsiteFooter, FooterCfGov, Icon, Link } from '~/src/index';

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

const makeSocialLink = (label: string): JSX.Element => (
  <a key={label} href={globalThis.location.href}>
    <Icon name={label} withBg />
  </a>
);

export const Example: Story = {
  name: 'Footer',
  render: (properties) => 
    <Footer {...properties} >
      Footer content goes here
    </Footer>

};


export const App: Story = {
  name: 'Application footer',
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

export const Website: Story = {
  name: 'Website footer',
  render: (properties) => <WebsiteFooter {...properties} />,
  args: {
    navLinks: [makeLink('Nav 1'), makeLink('Nav 2'), makeLink('Nav 3')],
    socialLinks: [makeSocialLink('facebook'), makeSocialLink('youtube')],
    linksCol1: [
      makeLink('Col1 Link 1'),
      makeLink('Col1 Link 2'),
      makeLink('Col1 Link 3'),
    ],
    linksCol2: [
      makeLink('Col2 Link 1'),
      makeLink('Col2 Link 2'),
      makeLink('Col2 Link 3'),
    ],
    linksCol3: [
      makeLink('Col3 Link 1', true),
      makeLink('Col3 Link 2', true),
      makeLink('Col3 Link 3', true),
    ],
  },
};

export const CFGov: Story = {
  render: () => <FooterCfGov />,
};



import type { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterCfGov, Icon } from '~/src/index';

const meta: Meta<typeof Footer> = {
  title: 'Components (Draft)/Footers',
  component: Footer,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

const makeLink = (label: string, isExternal?: boolean): JSX.Element => (
  <a
    key={label}
    href={window.location.href}
    className={`m-list_link a-link ${isExternal ? 'a-link__icon' : ''}`}
  >
    <span className='a-link_text'>{label}</span>
    {isExternal ? <Icon name='external-link' alt='External link' /> : null}
  </a>
);

const makeSocialLink = (label: string): JSX.Element => (
  <a key={label} href={window.location.href}>
    <Icon name={label} withBg />
  </a>
);

export const Example: Story = {
  args: {
    navLinks: [makeLink('Nav 1'), makeLink('Nav 2'), makeLink('Nav 3')],
    socialLinks: [makeSocialLink('facebook'), makeSocialLink('youtube')],
    linksCol1: [
      makeLink('Col1 Link 1'),
      makeLink('Col1 Link 2'),
      makeLink('Col1 Link 3')
    ],
    linksCol2: [
      makeLink('Col2 Link 1'),
      makeLink('Col2 Link 2'),
      makeLink('Col2 Link 3')
    ],
    linksCol3: [
      makeLink('Col3 Link 1', true),
      makeLink('Col3 Link 2', true),
      makeLink('Col3 Link 3', true)
    ]
  }
};

export const CFGov: Story = {
  render: () => <FooterCfGov />
};

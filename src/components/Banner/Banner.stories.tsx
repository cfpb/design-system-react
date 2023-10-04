import type { Meta, StoryObj } from '@storybook/react';
import type { SyntheticEvent } from 'react';
import { Banner } from '~/src/index';
import { AllLanguageCodes, LanguageLink } from './BannerLanguageLink';

const meta: Meta<typeof Banner> = {
  title: 'Components (Draft)/Banners',
  component: Banner,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Helpers to avoid unnecessary navigation
 */
const onPreventInteraction = (error: SyntheticEvent): void => {
  error.preventDefault();
};
const UnclickableLink = ({
  children,
  ...others
}: {
  children: JSX.Element | string;
  [key: string]: JSX.Element | string;
}): JSX.Element => (
  // eslint-disable-next-line jsx-a11y/interactive-supports-focus
  <span
    role='link'
    onClick={onPreventInteraction}
    onKeyUp={onPreventInteraction}
    {...others}
  >
    {children}
  </span>
);

export const BannerWithLinks: Story = {
  render: properties => <Banner {...properties} />,
  args: {
    links: [
      <UnclickableLink key='Link 1'>
        <a href='/link'>Link 1</a>
      </UnclickableLink>,
      <UnclickableLink key='Link 2'>
        <a href='/link'>Link 2</a>
      </UnclickableLink>,
      <UnclickableLink key='Link 3'>
        <a href='/link'>Link 3</a>
      </UnclickableLink>
    ]
  }
};

export const CFGovEdition: Story = {
  ...BannerWithLinks,
  args: {
    links: AllLanguageCodes.filter(code => code !== 'en').map(code => (
      <UnclickableLink key={code}>
        <LanguageLink code={code} />
      </UnclickableLink>
    )),
    phoneNumber: '1-855-411-2372',
    tagline: (
      <>
        An official website of the{' '}
        <span className='u-nowrap'>United States government</span>
      </>
    )
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import {
  DestructiveLink,
  Icon,
  Link,
  LinkText,
  List,
  ListLink
} from '~/src/index';

const meta: Meta<typeof Link> = {
  title: 'Components (Draft)/Links',
  component: Link
};

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultArguments = {
  args: {
    href: '#',
    children: 'Link Text'
  }
};

export const Inline: Story = {
  name: 'Inline links',
  render: () => (
    <p>
      Here&apos;s the <Link href='/#'>default link style</Link>. For reference,
      here&apos;s the{' '}
      <Link href='/#' className='hover'>
        hover link style
      </Link>
      . Train your eyes on the{' '}
      <Link href='/#' className='focus'>
        focused link style
      </Link>
      . Jump to the{' '}
      <Link href='/#' className='active'>
        active link style
      </Link>
      . We&apos;ve all been to the{' '}
      <Link href='/#' className='visited'>
        visited link style
      </Link>
      .
    </p>
  )
};

export const CallToAction: Story = {
  name: 'Call-to-action links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => (
    <List isLinks>
      <ListLink {...arguments_}>Sample call-to-action link</ListLink>
      <ListLink {...arguments_}>Another sample call-to-action link</ListLink>
    </List>
  )
};

export const Destructive: Story = {
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Sample destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
};

export const StandardLinkWithIcon: Story = {
  name: 'Standard link with icon',
  args: {
    ...DefaultArguments.args,
    hasIcon: true
  },
  render: arguments_ => (
    <>
      The document icon should emphasize a link that contains a{' '}
      <Link {...arguments_}>
        <LinkText>file or document</LinkText> <Icon name='download' />
      </Link>
      . Use the external link icon to emphasize{' '}
      <Link {...arguments_}>
        <LinkText>a non-CFPB webpage</LinkText> <Icon name='external-link' />
      </Link>{' '}
      for further details.
    </>
  )
};

export const StandardLinkWithIconNoWrapping: Story = {
  name: 'Non-wrapping icon links',
  args: {
    ...StandardLinkWithIcon.args,
    noWrap: true
  },
  render: arguments_ => (
    <>
      The document icon should emphasize a link that contains a{' '}
      <Link {...arguments_}>
        <LinkText>file or document</LinkText> <Icon name='download' />
      </Link>
      .
    </>
  )
};

export const JumpLink: Story = {
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <LinkText>Default jump link</LinkText>&nbsp;
      <Icon name='right' />
    </Link>
  )
};

export const JumpLinkIconLeft: Story = {
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJumpLeft: true
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <Icon name='left' />
      &nbsp;<LinkText>Jump link with icon on left</LinkText>
    </Link>
  )
};

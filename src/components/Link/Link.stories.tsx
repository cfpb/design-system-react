import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
  DestructiveLink,
  Icon,
  Link,
  LinkText,
  List,
  ListLink
} from '~/src/index';

const meta: Meta<typeof Link> = {
  title: 'Components (Verified)/Links',
  tags: ['autodocs'],
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

export const ListLinks: Story = {
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => (
    <List isLinks>
      <ListLink {...arguments_}>List link 1</ListLink>
      <ListLink {...arguments_}>List link 2</ListLink>
    </List>
  )
};

export const Destructive: Story = {
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
};

export const LinkWithIcon: Story = {
  name: 'Link with icon',
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

export const LinkWithIconNoWrapping: Story = {
  name: 'Non-wrapping link with icon',
  args: {
    ...LinkWithIcon.args,
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
      <LinkText>Jump link</LinkText>&nbsp;
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

export const LinkWithReactRouterLink: Story = {
  name: 'Link using React Router Link',
  parameters: {
    docs: {
      description: {
        story:
          'See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information'
      }
    }
  },
  render: () => (
    <BrowserRouter>
      <p>
        <Link href='/#' isRouterLink>
          Link using React Router Link
        </Link>
      </p>
    </BrowserRouter>
  )
};

import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
  DestructiveLink,
  Heading,
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
  name: 'Inline',
  parameters: {
    docs: {
      description: {
        story:
          'Inline links appear within a line of text or other inline elements. ' +
          'Inline links are underlined and retain a consistent appearance across ' +
          'all screen widths.'
      }
    }
  },
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

export const Standalone: Story = {
  name: 'Standalone',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Standalone links sit on their own line. At larger screen widths, ' +
          'standalone links are medium weight and underlined. At smaller ' +
          'screen widths, standalone links convert to full block links with ' +
          'top and bottom borders that have a finger-friendly touch area.'
      }
    }
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <LinkText>Standalone link</LinkText>
    </Link>
  )
};

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    ...DefaultArguments.args,
    hasIcon: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Each icon should be used exclusively and consistently for one ' +
          'action. An icon should appear after the text it represents. The ' +
          'only exception is a link that takes a user to a previous step or ' +
          'page, where the icon should appear before the link’s text. Icons ' +
          'should never be underlined.'
      }
    }
  },
  render: arguments_ => (
    <>
      <Heading type='4'>Inline</Heading>
      <p>
        The document icon should emphasize a link that contains a{' '}
        <Link {...arguments_}>
          <LinkText>file or document</LinkText> <Icon name='download' />
        </Link>
        . The external link icon is used to emphasize a link to a{' '}
        <Link {...arguments_}>
          <LinkText>a non-CFPB webpage</LinkText> <Icon name='external-link' />
        </Link>
        .
      </p>
      <Heading type='4'>Standalone</Heading>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <Icon name='left' />
          <LinkText>Go back</LinkText>
        </Link>
      </p>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <LinkText>Continue</LinkText>
          <Icon name='right' />
        </Link>
      </p>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <LinkText>External link</LinkText>
          <Icon name='external-link' />
        </Link>
      </p>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <LinkText>Document or file</LinkText>
          <Icon name='document' />
        </Link>
      </p>
    </>
  )
};

export const ListLinks: Story = {
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => (
    <List isLinks>
      <ListLink {...arguments_}>
        <LinkText>List item 1</LinkText>
      </ListLink>
      <ListLink {...arguments_}>
        <LinkText>List item 2</LinkText>
      </ListLink>
      <ListLink {...arguments_}>
        <LinkText>List item 3</LinkText>
      </ListLink>
    </List>
  )
};

export const Destructive: Story = {
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  parameters: {
    docs: {
      description: {
        story:
          'A destructive action is an action that will lead to data loss, ' +
          'for example, deleting data from a form or removing a file that ' +
          'was previously uploaded. Although a destructive action can be ' +
          'styled as a button, we recommend using the destructive link ' +
          'style (shown below) to ensure consistency across cf.gov products.'
      }
    }
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
};

export const LinkWithReactRouterLink: Story = {
  name: 'Link using React Router Link',
  parameters: {
    docs: {
      description: {
        story:
          'See [React Router Link docs](https://reactrouter.com/en/main/components/link) ' +
          'for usage information'
      }
    }
  },
  render: () => (
    <BrowserRouter>
      <p>
        <Link href='/#' isRouterLink>
          <LinkText>Link using React Router Link</LinkText>
        </Link>
      </p>
    </BrowserRouter>
  )
};

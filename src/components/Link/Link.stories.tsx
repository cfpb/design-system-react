import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
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
      Here&apos;s the{' '}
      <Link href='/#' label='default link style'/>
      . For reference, here&apos;s the{' '}
      <Link href='/#' label='hover link style' className='hover' />. Train your
      eyes on the{' '}
      <Link href='/#' label='focused link style' className='focus' />. Jump to
      the <Link href='/#' label='active link style' className='active' />.
      We&apos;ve all been to the{' '}
      <Link href='/#' label='visited link style' className='visited' />.
    </p>
  )
};

export const Standalone: Story = {
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
  render: arguments_ => <Link {...arguments_} href='/#' isJump label='Standalone link' />
};

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    ...DefaultArguments.args
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
        <Link
          href={DefaultArguments.args.href}
          label='file or document'
          iconRight='download'
        />
        . The external link icon is used to emphasize a link to a{' '}
        <Link
          href={DefaultArguments.args.href}
          label='non-CFPB webpage'
          iconRight='external-link'
        />
        .
      </p>
      <Heading type='4'>Standalone</Heading>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          iconLeft='left'
          label='Go back'
        />
      </p>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          label='Continue'
          iconRight='right'
        />
      </p>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          label='External link'
          iconRight='external-link'
        />
      </p>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          label='Document or file'
          iconRight='document'
        />
      </p>
    </>
  )
};

export const Listlink: Story = {
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  parameters: {
    docs: {
      description: {
        story:
          'A list link is an item in a set of two or more stacked standalone links. Items in a link list are medium weight and are underlined at larger screen widths. At smaller screen widths, they convert to full block links with a top and bottom border.'
      }
    }
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
  args: {
    ...DefaultArguments.args,
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
  render: arguments_ => <Link href='/#' type='destructive' label='Destructive link' />
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

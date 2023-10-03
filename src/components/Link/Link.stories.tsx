import type { Meta, StoryObj } from '@storybook/react';
import {
  DestructiveLink,
  Icon,
  Link,
  LinkText,
  List,
  ListLink as ListLinkComponent
} from '~/src/index';

const meta: Meta<typeof Link> = {
  title: 'Components (Draft)/Links',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Link component

https://cfpb.github.io/design-system/components/links
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: <LinkText>Link Text</LinkText>
  }
};

export const ListLink: Story = {
  args: {
    ...Default.args
  },
  render: arguments_ => (
    <List isLinks>
      <ListLinkComponent {...arguments_} />
    </List>
  )
};

export const Destructive: Story = {
  args: {
    ...Default.args
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    hasIcon: true,
    type: 'default'
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <LinkText>Download file</LinkText> <Icon name='download' />
    </Link>
  )
};

export const WithIconNoWrapping: Story = {
  args: {
    ...WithIcon.args,
    noWrap: true
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <LinkText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        incidunt explicabo, odio delectus quia magnam non . teeeeext
      </LinkText>

      <Icon name='document' />
    </Link>
  )
};

export const JumpLink: Story = {
  args: {
    ...Default.args,
    isJump: true
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <LinkText>Jump link</LinkText>
      <Icon name='right' />
    </Link>
  )
};

export const JumpLinkIconLeft: Story = {
  args: {
    ...Default.args,
    isJumpLeft: true
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <Icon name='left' />
      <LinkText>Jump link</LinkText>
    </Link>
  )
};

import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon/Icon';
import Link, { LinkText } from './Link';

const meta: Meta<typeof Link> = {
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
    ...Default.args,
    type: 'list'
  }
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    type: 'destructive'
  }
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    hasIcon: true,
    type: 'list'
  },
  render: arguments_ => (
    <Link {...arguments_}>
      <LinkText>Document link</LinkText> <Icon name='document' />
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

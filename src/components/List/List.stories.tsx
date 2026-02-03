import type { Meta, StoryObj } from '@storybook/react';
import { LinkText, List, ListItem, ListLink } from '~/src/index';

const meta: Meta<typeof List> = {
  title: 'Components (Draft)/Lists',
  component: List,
  tags: ['autodocs'],
  argTypes: 
  parameters: {
    docs: {
      description: {
        component: `
Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.
Source: https://cfpb.github.io/design-system/components/lists
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
  args: {
    children: (
      <>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </>
    )
  }
};

export const Ordered: Story = {
  args: {
    ...Unordered.args,
    isOrdered: true
  }
};

export const Unstyled: Story = {
  args: {
    ...Unordered.args,
    isUnstyled: true
  }
};

export const Horizontal: Story = {
  args: {
    ...Unordered.args,
    isHorizontal: true
  }
};

export const Spaced: Story = {
  args: {
    ...Unordered.args,
    isSpaced: true
  }
};

export const Links: Story = {
  args: {
    isLinks: true,
    children: (
      <>
        <ListLink type='list' href='#'>
          <LinkText>List item 1</LinkText>
        </ListLink>
        <ListLink type='list' href='#'>
          <LinkText>List item 2</LinkText>
        </ListLink>
        <ListLink type='list' href='#'>
          <LinkText>List item 3</LinkText>
        </ListLink>
      </>
    )
  }
};

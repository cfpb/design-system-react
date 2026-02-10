import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkText, List, ListItem, ListLink } from '~/src/index';

const meta: Meta<typeof List> = {
  title: 'Components (Draft)/Lists',
  component: List,
  tags: ['autodocs'],
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
  name: 'Bulleted',
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
  name: 'Numbered',
  args: {
    ...Unordered.args,
    isOrdered: true
  }
};

export const Unstyled: Story = {
  name: 'Unstyled',
  args: {
    ...Unordered.args,
    isUnstyled: true
  }
};

export const Horizontal: Story = {
  name: 'Horizontal',
  args: {
    ...Unordered.args,
    isHorizontal: true
  }
};

export const Links: Story = {
  name: 'Link',
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

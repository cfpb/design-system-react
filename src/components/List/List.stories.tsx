import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '~/src/index';

const meta: Meta<typeof List> = {
  component: List,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
  args: {
    children: (
      <>
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
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
        <ListItem>
          <a href='#'>First Link</a>
        </ListItem>
        <ListItem>
          <a href='#'>Second Link</a>
        </ListItem>
        <ListItem>
          <a href='#'>Third Link</a>
        </ListItem>
      </>
    )
  }
};

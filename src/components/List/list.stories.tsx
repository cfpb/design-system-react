import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, ListItem, Link } from '~/src/index';

const meta: Meta<typeof List> = {
  title: 'Components (Draft)/Lists',
  tags: ['autodocs'],
  component: List,
  argTypes: {},
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
    ),
  },
};

export const Ordered: Story = {
  args: {
    ...Unordered.args,
    isOrdered: true,
  },
};

export const Unstyled: Story = {
  args: {
    ...Unordered.args,
    isUnstyled: true,
  },
};

export const Horizontal: Story = {
  args: {
    ...Unordered.args,
    isHorizontal: true,
  },
};

export const Spaced: Story = {
  args: {
    ...Unordered.args,
    isSpaced: true,
  },
};

export const Links: Story = {
  args: {
    isLinks: true,
    children: (
      <>
        Link lists is where each item in a list is a jump link, which converts
        to a finger-friendly link with a large tap area on smaller screens. See
        example on the{' '}
        <Link
          label='links'
          href='/?path=/docs/components-verified-links--listlink'
        />{' '}
        page.
      </>
    ),
  },
};

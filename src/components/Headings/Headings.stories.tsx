import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '~/src/index';

/**
 * A successful type hierarchy establishes the order of importance of elements on a page. Consistent scaling, weights, and capitalization are used to create distinction between heading levels and provide users with familiar focus points when scanning text.
 *
 * Source: <a href='https://cfpb.github.io/design-system/foundation/headings' target='_blank'> https://cfpb.github.io/design-system/foundation/headings</a>
 */
const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    type: { control: { type: 'select' } }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {
  name: 'Display heading',
  args: {
    type: 'display',
    children: 'Display heading'
  }
};

export const H1: Story = {
  name: 'H1',
  args: {
    children: 'Heading level 1'
  }
};

export const H2: Story = {
  name: 'H2',
  args: {
    type: '2',
    children: 'Heading level 2'
  }
};

export const H3: Story = {
  name: 'H3',
  args: {
    type: '3',
    children: 'Heading level 3'
  }
};

export const H4: Story = {
  name: 'H4',
  args: {
    type: '4',
    children: 'Heading level 4'
  }
};

export const H5: Story = {
  name: 'H5',
  args: {
    type: '5',
    children: 'Heading level 5'
  }
};

export const H6: Story = {
  name: 'H6',
  args: {
    type: '6',
    children: 'Heading level 6'
  }
};

export const Eyebrow: Story = {
  name: 'Eyebrow heading',
  args: {
    type: 'eyebrow',
    children: 'Eyebrow Heading'
  },
  render: arguments_ => (
    <>
      <Heading {...arguments_}>Eyebrow Heading</Heading>
      <Heading>Heading 1</Heading>
    </>
  )
};

export const Slug: Story = {
  name: 'Slug heading',
  args: {
    type: 'slug',
    children: 'Slug heading'
  }
};

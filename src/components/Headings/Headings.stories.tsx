import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '~/src/index';

/**
 * A successful type hierarchy establishes the order of importance of elements on a page. Consistent scaling, weights, and capitalization are used to create distinction between headings and provide users with familiar focus points when scanning text.
 *
 * Source: <a href='https://cfpb.github.io/design-system/foundation/headings' target='_blank'> https://cfpb.github.io/design-system/foundation/headings</a>
 */
const meta: Meta<typeof Heading> = {
  title: 'Components (Verified)/Headings',
  tags: ['autodocs'],
  component: Heading,
  argTypes: {
    type: { control: { type: 'select' } }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  name: 'H1',
  args: {
    children: 'Heading 1'
  }
};

export const H2: Story = {
  name: 'H2',
  args: {
    type: '2',
    children: 'Heading 2'
  }
};

export const H3: Story = {
  name: 'H3',
  args: {
    type: '3',
    children: 'Heading 3'
  }
};

export const H4: Story = {
  name: 'H4',
  args: {
    type: '4',
    children: 'Heading 4'
  }
};

export const H5: Story = {
  name: 'H5',
  args: {
    type: '5',
    children: 'Heading 5'
  }
};

export const Display: Story = {
  args: {
    type: 'display',
    children: 'Display'
  }
};

export const Eyebrow: Story = {
  args: {
    type: 'eyebrow',
    children: 'Eyebrow'
  },
  render: arguments_ => (
    <>
      <Heading {...arguments_} />
      <div className='h1'>Heading 1</div>
    </>
  )
};

export const Slug: Story = {
  args: {
    type: 'slug',
    children: 'Slug'
  }
};

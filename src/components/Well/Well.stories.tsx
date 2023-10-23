import type { Meta, StoryObj } from '@storybook/react';
import { Link, Well } from '~/src/index';

const meta: Meta<typeof Well> = {
  title: 'Components (Draft)/Wells',
  component: Well,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    heading: 'Heading',
    text: 'Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur instructior ex pri. Cu pri inani constituto, cum aeque noster commodo',
    links: [
      <Link type='list' href='#' key='example1'>
        Call-to-action link
      </Link>
    ]
  }
};
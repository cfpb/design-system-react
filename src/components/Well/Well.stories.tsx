import type { Meta, StoryObj } from '@storybook/react';
import { Well } from '~/src/index';

const meta: Meta<typeof Well> = {
  title: 'Components (Draft)/Wells',
  component: Well,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    heading: 'Well title',
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae dolor
        distinctio tenetur quibusdam rem debitis, voluptate nesciunt culpa
        officiis quos perspiciatis nostrum illo libero autem beatae temporibus
        ratione reprehenderit? <a href='#'>Example link</a>.
      </>
    )
  }
};

export const CallToAction: Story = {
  args: {
    heading: 'Well title',
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae dolor
        distinctio tenetur quibusdam rem debitis, voluptate nesciunt culpa
        officiis quos perspiciatis nostrum illo libero autem beatae temporibus
        ratione reprehenderit?
      </>
    ),
    links: [
      <a href='#' key='example1'>
        Example link
      </a>
    ]
  }
};

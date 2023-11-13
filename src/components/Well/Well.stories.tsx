import type { Meta, StoryObj } from '@storybook/react';
import { Link, Well, WelledCTA } from '~/src/index';

const meta: Meta<typeof Well> = {
  title: 'Components (Draft)/Wells',
  component: Well,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Container: Story = {
  name: 'Well',
  args: {
    children: [
      <p key='p1'>
        Grey wells should be used to feature content or specific calls to
        action. They will help visually set apart the content within it, so use
        sparingly to draw attention to that content.
      </p>,
      <p key='p2'>
        Ideally, content within a well should not take up more than a third of
        page content.
      </p>
    ]
  }
};

export const WellPattern: Story = {
  name: 'Welled call-to-action',
  args: {
    heading: 'Heading',
    headingLevel: 'h2',
    text: 'Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur instructior ex pri. Cu pri inani constituto, cum aeque noster commodo',
    links: [
      <Link type='list' href='/#' key='example1'>
        Call-to-action link
      </Link>
    ]
  },
  render: arguments_ => <WelledCTA {...arguments_} />
};

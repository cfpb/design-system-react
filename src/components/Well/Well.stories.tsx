import type { Meta, StoryObj } from '@storybook/react';
import { LinkText, ListLink } from '../Link/Link';
import { WellContainer, WellContent } from './Well';

const meta: Meta<typeof WellContainer> = {
  title: 'Components (Verified)/Wells',
  tags: ['autodocs'],
  component: WellContainer,
  argTypes: {
    children: { type: 'string' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Container: Story = {
  name: 'Well (container)'
};

export const Content: Story = {
  name: 'Well (content)',
  args: {
    heading: 'Heading',
    headingLevel: 'h3',
    text: 'Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur instructior ex pri. Cu pri inani constituto, cum aeque noster commodo',
    links: [
      <ListLink href='/#' key='example1'>
        <LinkText>Call-to-action link</LinkText>
      </ListLink>
    ]
  },
  render: arguments_ => <WellContent {...arguments_} />
};

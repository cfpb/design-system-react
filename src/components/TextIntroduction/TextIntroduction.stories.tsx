import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement } from 'react';
import { List, ListItem, TextIntroduction } from '~/src/index';
import { callToAction, description, heading, subheading } from './testHelpers';

const meta: Meta<typeof TextIntroduction> = {
  title: 'Components (Verified)/Text introductions',
  component: TextIntroduction
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: _arguments => (
    <TextIntroduction {..._arguments}>
      <TextIntroduction.Heading>{heading}</TextIntroduction.Heading>
      <TextIntroduction.Subheading>{subheading}</TextIntroduction.Subheading>
      <TextIntroduction.Description>{description}</TextIntroduction.Description>
      <List isLinks>
        <ListItem>{cloneElement(callToAction, { type: 'list' })}</ListItem>
      </List>
    </TextIntroduction>
  ),
  name: 'Standard text introduction',
  args: {}
};

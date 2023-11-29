import type { Meta } from '@storybook/react';
import { TextIntroduction } from '~/src/index';
import { callToAction, description, subheading } from './testHelpers';

const meta: Meta<typeof TextIntroduction> = {
  title: 'Components (Verified)/Text introductions',
  component: TextIntroduction
};

export default meta;

export const Standard = {
  render: _arguments => (
    <TextIntroduction {..._arguments} callToAction={callToAction}>
      <TextIntroduction.Heading>Heading 1</TextIntroduction.Heading>
      <TextIntroduction.Subheading>{subheading}</TextIntroduction.Subheading>
      <TextIntroduction.Description>{description}</TextIntroduction.Description>
    </TextIntroduction>
  ),
  name: 'Standard text introduction',
  args: {}
};

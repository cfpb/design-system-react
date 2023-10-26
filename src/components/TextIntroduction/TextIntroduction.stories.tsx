import type { Meta } from '@storybook/react';
import { TextIntroduction } from './TextIntroduction';
import placeholders from './testHelpers';

const meta: Meta<typeof TextIntroduction> = {
  title: 'Components (Draft)/Text introductions',
  component: TextIntroduction
};

export default meta;

export const Standard = {
  name: 'Standard text introduction',
  args: {
    ...placeholders
  }
};

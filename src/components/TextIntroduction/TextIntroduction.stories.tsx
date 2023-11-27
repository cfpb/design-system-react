import type { Meta } from '@storybook/react';
import { TextIntroduction } from '~/src/index';
import placeholders from './testHelpers';

const meta: Meta<typeof TextIntroduction> = {
  title: 'Components (Verified)/Text introductions',
  component: TextIntroduction
};

export default meta;

export const Standard = {
  name: 'Standard text introduction',
  args: {
    ...placeholders
  }
};

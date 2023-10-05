import type { Meta } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Components (Verified)/Paragraphs',
  component: Paragraph
};

export default meta;

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam, dolorum rerum eaque delectus aut magnam quo eos nemo facere consequatur repellat minus commodi. Autem sapiente itaque molestiae cum aliquid!';

export const Body = {
  name: 'Body text',
  args: {
    children: text
  }
};

export const Lead = {
  name: 'Lead paragraph',
  args: {
    children: text,
    isLead: true
  }
};

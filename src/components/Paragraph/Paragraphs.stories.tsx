import type { Meta } from '@storybook/react';
import { Paragraph } from './Paragraph';

/**
 * Paragraph text should provide an efficient and pleasant experience on every viewport size. Readable text makes good use of alignment, spacing, line length and height, and contrast.
 *
 * Source: https://cfpb.github.io/design-system/foundation/paragraphs
 */
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

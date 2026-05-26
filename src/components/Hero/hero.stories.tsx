import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hero } from '~/src/index';

const meta: Meta<typeof Hero> = {
  title: 'Components (Draft)/Heroes',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    sbNestedCanvasPadding: 'flush',
    docs: {
      description: {
        component: `
Heroes are a primary focal point on landing and sublanding pages. They 
introduce a collection of pages by combining a brief description of the goals 
of that section along with a visually impactful graphic. To introduce 
lower-level pages, use the 
[text introduction](https://cfpb.github.io/design-system/patterns/text-introductions) instead.

Source: https://cfpb.github.io/design-system/patterns/heroes
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithIllustration: Story = {
  name: 'With illustration',
  args: {
    heading: '41 characters max for a one-line heading',
    image:
      'https://cfpb.github.io/design-system/images/uploads/hero_illustration_example_keys.png',
    subheading:
      'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#d4e7e6',
  },
};

export const WithPhotograph: Story = {
  name: 'With photograph',
  args: {
    ...WithIllustration.args,
    imageIsPhoto: true,
    image: 'https://files.consumerfinance.gov/f/images/PC_hero.original.jpg',
    backgroundColor: '#f7f8f9',
  },
};

export const WithKnockoutText: Story = {
  name: 'With knockout text',
  args: {
    ...WithIllustration.args,
    heading: '41 characters max for a one-line heading',
    subheading:
      'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#207676',
    isKnockout: true,
    image:
      'https://files.consumerfinance.gov/f/images/ConsumerMarketTrends-hero.original.png',
  },
};

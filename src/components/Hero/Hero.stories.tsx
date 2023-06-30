import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '~/src/index';

const meta: Meta<typeof Hero> = {
  component: Hero,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Hero component

Source: https://cfpb.github.io/design-system/patterns/heroes
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithIllustration: Story = {
  args: {
    heading: '41 chars max for a one-line heading',
    image:
      'https://cfpb.github.io/design-system/images/uploads/hero_illustration_example_keys.png',
    subheading:
      'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#d4e7e6'
  }
};

export const WithPhoto: Story = {
  args: {
    ...WithIllustration.args,
    imageIsPhoto: true,
    image: 'https://files.consumerfinance.gov/f/images/PC_hero.original.jpg',
    backgroundColor: '#f7f8f9'
  }
};

export const Jumbo: Story = {
  args: {
    ...WithIllustration.args,
    heading: '50 chars max for a two-line heading',
    subheading:
      'This text has a recommended count of 140-175 characters (four lines at 1230px) following a two- or three-line heading.',
    isJumbo: true,
    image:
      'https://cfpb.github.io/design-system/images/uploads/jumbo_hero_image_wide.jpeg',
    backgroundColor: 'rgb(168,213,200	)'
  }
};

export const FiftyFifty: Story = {
  args: {
    ...WithIllustration.args,
    heading: '50 chars max for a two-line heading',
    subheading:
      'This text has a recommended count of 140-175 characters (four lines at 1230px) following a two- or three-line heading.',
    is5050: true,
    image:
      'https://cfpb.github.io/design-system/images/uploads/jumbo-hero-image.png',
    backgroundColor: 'white'
  }
};

export const Knockout: Story = {
  args: {
    ...WithIllustration.args,
    heading: 'Max of 41 chars for a one-line heading',
    subheading:
      'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#207676',
    isKnockout: true,
    image:
      'https://cfpb.github.io/design-system/images/uploads/design_system_hero_example.png'
  }
};

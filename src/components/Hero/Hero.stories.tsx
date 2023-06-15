import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

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
    heading: 'Hero Heading',
    image: 'images/credit-card-hero.png',
    subheading:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae dolor distinctio tenetur quibusdam rem debitis, voluptate nesciunt culpa officiis quos perspiciatis nostrum illo libero autem beatae temporibus ratione reprehenderit?',
    backgroundColor: 'lightblue',
    textColor: undefined
  }
};

export const WithPhoto: Story = {
  args: {
    ...WithIllustration.args,
    imageIsPhoto: true
  }
};
export const Knockout: Story = {
  args: {
    ...WithIllustration.args,
    backgroundColor: 'teal',
    knockout: true
  }
};

export const Jumbo: Story = {
  args: {
    ...WithIllustration.args,
    isJumbo: true
  }
};

export const FiftyFifty: Story = {
  args: {
    ...WithIllustration.args,
    is5050: true
  }
};

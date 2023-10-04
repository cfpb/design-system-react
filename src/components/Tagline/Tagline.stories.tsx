import type { Meta, StoryObj } from '@storybook/react';
import { Tagline } from '~/src/index';

const meta: Meta<typeof Tagline> = {
  title: 'Components (Draft)/Taglines',
  component: Tagline,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - Tagline component

Source: https://cfpb.github.io/design-system/patterns/taglines
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardTagline: Story = {
  render: properties => (
    <Tagline {...properties}>
      <>
        An official website of the{' '}
        <span className='u-nowrap'>United States government</span>
      </>
    </Tagline>
  )
};

export const LargeTagline: Story = {
  ...StandardTagline,
  args: { isLarge: true }
};

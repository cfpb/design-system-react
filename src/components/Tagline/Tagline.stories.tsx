import type { Meta, StoryObj } from '@storybook/react';
import { Tagline } from '~/src/index';

const meta: Meta<typeof Tagline> = {
  title: 'Components (Verified)/Taglines',
  component: Tagline,
  parameters: {
    docs: {
      description: {
        component: `

Taglines are short paragraphs of text with a USA flag to their left.

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
StandardTagline.storyName = 'Standard tagline';

export const LargeTagline: Story = {
  ...StandardTagline,
  args: { isLarge: true }
};
LargeTagline.storyName = 'Large tagline';

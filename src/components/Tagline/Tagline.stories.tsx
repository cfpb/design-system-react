import type { Meta, StoryObj } from '@storybook/react';
import { Tagline } from '~/src/index';

const meta: Meta<typeof Tagline> = {
  title: 'Components (Verified)/Taglines',
  tags: ['autodocs'],
  component: Tagline,
  parameters: {
    docs: {
      description: {
        component: `

Taglines are short paragraphs of text with the USA flag to their left that are used in the header and footer across consumerfinance.gov.

Source: https://cfpb.github.io/design-system/components/taglines
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

import { CfpbTagline } from '@cfpb/cfpb-design-system';
import type { Meta, StoryObj } from '@storybook/react-vite';

CfpbTagline.init();

interface TaglineStoryProperties {
  slotText: string;
  slotSpanText: string;
  isLarge?: boolean;
}

const meta = {
  title: 'Components (Verified)/Taglines',
  tags: ['autodocs'],
  argTypes: {
    slotText: {
      control: 'text',
      description: 'Leading default slot content',
    },
    slotSpanText: {
      control: 'text',
      description:
        'Adds <span className="u-nowrap">No-wrap span content inside the default slot</span>',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `

Taglines are short paragraphs of text with the USA flag to their left that are used in the header and footer across consumerfinance.gov.

Source: https://cfpb.github.io/design-system/components/taglines
`,
      },
    },
  },
  render: ({
    slotText,
    slotSpanText,
    ...properties
  }: TaglineStoryProperties) => (
    <cfpb-tagline {...properties}>
      {slotText} <span className='u-nowrap'>{slotSpanText}</span>
    </cfpb-tagline>
  ),
} satisfies Meta<TaglineStoryProperties>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardTagline: Story = {
  name: 'Standard tagline',
  args: {
    slotText: 'An official website of the',
    slotSpanText: 'United States government',
  },
};

export const LargeTagline: Story = {
  ...StandardTagline,
  name: 'Large tagline',
  args: {
    ...StandardTagline.args,
    isLarge: true,
  },
};

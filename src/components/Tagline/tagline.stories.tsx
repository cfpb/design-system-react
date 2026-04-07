import type { Meta, StoryObj } from '@storybook/react-vite';
import { CfpbTagline } from '../../elements/cfpb-tagline';

CfpbTagline.init();

const meta: Meta<typeof CfpbTagline> = {
  title: 'Components (Verified)/Taglines',
  tags: ['autodocs'],
  component: CfpbTagline,
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardTagline: Story = {
  render: (properties) => <cfpb-tagline {...properties}></cfpb-tagline>,
};
StandardTagline.storyName = 'Standard tagline';

export const LargeTagline: Story = {
  ...StandardTagline,
  args: { isLarge: true },
};
LargeTagline.storyName = 'Large tagline';

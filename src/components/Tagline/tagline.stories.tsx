import { CfpbTagline } from '@cfpb/cfpb-design-system';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { HTMLAttributes, ReactElement } from 'react';

CfpbTagline.init();

type TaglineProps = HTMLAttributes<HTMLElement> & { isLarge?: boolean };

const TaglineComponent = (props: TaglineProps): ReactElement => (
  <cfpb-tagline {...props}></cfpb-tagline>
);

const meta = {
  title: 'Components (Verified)/Taglines',
  tags: ['autodocs', 'web-component'],
  component: TaglineComponent,
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
} satisfies Meta<typeof TaglineComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardTagline: Story = {
  render: (properties) => <cfpb-tagline {...properties}></cfpb-tagline>,
};
StandardTagline.name = 'Standard tagline';

export const LargeTagline: Story = {
  ...StandardTagline,
  args: { isLarge: true },
};
LargeTagline.name = 'Large tagline';

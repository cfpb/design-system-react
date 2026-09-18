import { CfpbTagline } from '@cfpb/cfpb-design-system';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { HTMLAttributes, ReactElement } from 'react';

type TaglineProperties = HTMLAttributes<HTMLElement> & { isLarge?: boolean };

const TaglineComponent = (properties: TaglineProperties): ReactElement => {
  CfpbTagline.init();

  return <cfpb-tagline {...properties}></cfpb-tagline>;
};

const taglineSource = (isLarge?: boolean): string =>
  isLarge ? '<cfpb-tagline isLarge></cfpb-tagline>' : '<cfpb-tagline></cfpb-tagline>';

const meta = {
  title: 'Components (Verified)/Taglines',
  tags: ['autodocs', 'web-component'],
  component: TaglineComponent,
  parameters: {
    docs: {
      // Skip Storybook's React JSX printer (it infers `<a />` from HTMLAttributes
      // on the wrapper) and show the custom element consumers actually write.
      source: {
        type: 'code',
        language: 'jsx',
        transform: (_code: string, { args }: { args: TaglineProperties }) =>
          taglineSource(args.isLarge),
      },
      description: {
        component: `

Taglines are short paragraphs of text with the USA flag to their left that are used in the header and footer across consumerfinance.gov.

Use the \`<cfpb-tagline>\` web component after calling \`CfpbTagline.init()\`.

Source: https://cfpb.github.io/design-system/components/taglines
`,
      },
    },
  },
} satisfies Meta<typeof TaglineComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {};

export const Large: Story = {
  args: { isLarge: true },
};

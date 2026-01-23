import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '~/src/index';

const meta: Meta<typeof Divider> = {
  title: 'Components (Draft)/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A component to provide a horizontal rule for separating content.

<a href="https://cfpb.github.io/design-system/development/blocks#content-dividers">
https://cfpb.github.io/design-system/development/blocks#content-dividers
</a>
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ExampleUsage30px: Story = {
  args: {
    className: 'u-mb30 u-mt30'
  },
  render: arguments_ => (
    <>
      This content is above the divider by 30px
      <Divider {...arguments_} />
      This content is below the divider by 30px
    </>
  )
};

export const ExampleUsage45px: Story = {
  args: {
    className: 'u-mb45 u-mt45'
  },
  render: arguments_ => (
    <>
      This content is above the divider by 45px
      <Divider {...arguments_} />
      This content is below the divider by 45px
    </>
  )
};

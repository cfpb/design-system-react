import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '~/src/index';

const meta: Meta<typeof Divider> = {
  title: 'Components (Draft)/Dividers',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Dividers create visual separation between content sections by rendering a horizontal line.

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

export const ExampleUsage: Story = {
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

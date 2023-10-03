import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '~/src/index';

const meta: Meta<typeof Divider> = {
  title: 'Components (Draft)/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Divider component

A component to provide a horizontal rule for separating content.
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
    className: 'u-mb45 u-mt45'
  },
  render: arguments_ => (
    <>
      Content above
      <Divider {...arguments_} />
      Content below
    </>
  )
};

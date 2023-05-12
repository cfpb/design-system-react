import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
  argTypes: {
    isDisabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  },
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - Radio component

Source: https://cfpb.github.io/design-system/components/expandables
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultRadio: Story = {
  args: { id:'testRadio', label: 'Default Radio', name: 'Radio select' }
}

export const RadioWithHelper: Story = {
  args: {
    ...DefaultRadio.args,
    id: 'RadioWithHelper',
    helperText: 'This is optional helper text for the radio'
  }
}

export const LargeRadio: Story = {
  args: {
    ...DefaultRadio.args,
    id: 'LargeRadio',
    isLarge: true
  }
}

export const LargeRadioWithHelper: Story = {
  args: {
    ...DefaultRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText: 'This is optional helper text for the large radio'
  }
}
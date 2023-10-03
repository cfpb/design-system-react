import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '~/src/index';

const meta: Meta<typeof TextInput> = {
  title: 'Components (Draft)/Text inputs',
  component: TextInput,
  argTypes: {
    width: { control: 'select' },
    isDisabled: { control: 'boolean' }
  },
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - TextInput component

Source: https://cfpb.github.io/design-system/components/text-inputs
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'Default',
    name: 'Default',
    placeholder: 'Placeholder text',
    width: 'default',
    type: 'text'
  }
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    id: 'FullWidth',
    name: 'FullWidth',
    width: 'full'
  }
};

export const SuccessType: Story = {
  args: {
    ...Default.args,
    id: 'SuccessType',
    name: 'SuccessType',
    notificationType: 'success',
    textNotification: 'This is a success message'
  }
};

export const WarningType: Story = {
  args: {
    ...Default.args,
    id: 'WarningType',
    name: 'WarningType',
    notificationType: 'warning',
    textNotification: 'This is a warning message'
  }
};

export const ErrorType: Story = {
  args: {
    ...Default.args,
    id: 'ErrorType',
    name: 'ErrorType',
    notificationType: 'error',
    textNotification: 'This is an error message'
  }
};

/* eslint-disable react/jsx-handler-names */
import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

/**
Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use [radio buttons](https://cfpb.github.io/design-system/components/radio-buttons) when the user can choose only one option from a list.

Source: https://cfpb.github.io/design-system/components/checkboxes
*/
const meta: Meta<typeof Checkbox> = {
  title: 'Components (Verified)/Checkboxes/Validation Status',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

function CheckboxWrapper({ ...arguments_ }): JSX.Element {
  const [, updateArguments] = useArgs();

  return (
    <Checkbox
      {...arguments_}
      checked={arguments_.checked}
      onChange={(): void => {
        updateArguments({
          checked: !arguments_.checked
        });
      }}
    />
  );
}

export const Success: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Success',
  args: {
    id: 'success',
    name: 'success',
    label: 'Success',
    status: 'success'
  }
};

export const Warning: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Warning',
  args: {
    id: 'warning',
    name: 'warning',
    label: 'Warning',
    status: 'warning'
  }
};

export const Error: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Error',
  args: {
    id: 'error',
    name: 'error',
    label: 'Error',
    status: 'error'
  }
};

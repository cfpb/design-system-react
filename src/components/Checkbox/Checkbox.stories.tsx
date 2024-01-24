/* eslint-disable react/jsx-handler-names */
import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

/**
Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use [radio buttons](https://cfpb.github.io/design-system/components/radio-buttons) when the user can choose only one option from a list.

Source: https://cfpb.github.io/design-system/components/checkboxes
*/
const meta: Meta<typeof Checkbox> = {
  title: 'Components (Verified)/Checkboxes',
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
        console.log('clicked');
        updateArguments({
          checked: !arguments_.checked
        });
      }}
    />
  );
}

export const Enabled: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'enabled',
    label: 'Enabled',
    checked: false
  }
};

export const Hover: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'hover',
    inputClassName: 'hover',
    label: 'Hover'
  }
};

export const Focus: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'focus',
    inputClassName: 'focus',
    label: 'Focus'
  }
};

export const Selected: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Selected',
  args: {
    id: 'selected',
    label: 'Selected',
    checked: true
  }
};

export const Disabled: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'disabled',
    label: 'Disabled',
    checked: false,
    disabled: true
  }
};

export const Disabledselected: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled/selected',
  args: {
    id: 'disabled/selected',
    label: 'Disabled/selected',
    checked: true,
    disabled: true
  }
};

export const Success: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Success',
  args: {
    id: 'success',
    label: 'Success',
    status: 'success'
  }
};

export const Warning: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Warning',
  args: {
    id: 'warning',
    label: 'Warning',
    status: 'warning'
  }
};

export const Error: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Error',
  args: {
    id: 'error',
    label: 'Error',
    status: 'error'
  }
};

export const WithHelperText: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'WithHelper',
    label: 'With helper text',
    helperText: 'This is optional helper text'
  }
};

export const LargeTargetArea: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Large target area',
  args: {
    id: 'LargeTargetArea',
    label: 'Large target area',
    isLarge: true
  }
};

export const LargeTargetAreaWithHelperText: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Large target area helper text',
  args: {
    id: 'LargeWithHelperText',
    label: 'Large target area helper text',
    isLarge: true,
    helperText: 'This is optional helper text'
  }
};

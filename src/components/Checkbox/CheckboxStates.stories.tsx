/* eslint-disable react/jsx-handler-names */
import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

/**
Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use [radio buttons](https://cfpb.github.io/design-system/components/radio-buttons) when the user can choose only one option from a list.

Source: https://cfpb.github.io/design-system/components/checkboxes
*/
const meta: Meta<typeof Checkbox> = {
  title: 'Components (Verified)/Checkboxes/States',
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

export const Default: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Default',
  args: {
    id: 'default',
    name: 'default',
    label: 'Default',
    checked: false
  }
};

export const Hover: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'hover',
    name: 'hover',
    inputClassName: 'hover',
    label: 'Hover'
  }
};

export const Focus: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'focus',
    name: 'focus',
    inputClassName: 'focus',
    label: 'Focus'
  }
};

export const Selected: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Selected',
  args: {
    id: 'selected',
    name: 'selected',
    label: 'Selected',
    checked: true
  }
};

export const Disabledselected: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled/selected',
  args: {
    id: 'disabled/selected',
    name: 'disabled/selected',
    label: 'Disabled/selected',
    checked: true,
    disabled: true
  }
};

/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxTestWrapper } from './Checkbox.utils';

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

export const StandardCheckbox: Story = {
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Standard checkbox',
  args: {
    id: 'standard',
    name: 'standard',
    label: 'Standard checkbox',
    checked: false
  }
};

export const StandardCheckboxWithHelperText: Story = {
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Standard checkbox with helper text',
  args: {
    ...StandardCheckbox.args,
    id: 'StandardCheckboxWithHelper',
    name: 'StandardCheckboxWithHelper',
    label: 'Standard checkbox with helper text',
    helperText: 'This is optional helper text'
  }
};

export const LargeTargetAreaCheckbox: Story = {
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Large target area checkbox',
  args: {
    ...StandardCheckbox.args,
    id: 'LargeTargetAreaCheckbox',
    name: 'LargeTargetAreaCheckbox',
    label: 'Large target area checkbox',
    isLarge: true
  }
};

export const LargeTargetAreaCheckboxWithHelperText: Story = {
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Large target area checkbox helper text',
  args: {
    ...StandardCheckbox.args,
    id: 'LargeCheckboxWithHelperText',
    name: 'LargeCheckboxWithHelperText',
    label: 'Large target area checkbox helper text',
    isLarge: true,
    helperText: 'This is optional helper text'
  }
};

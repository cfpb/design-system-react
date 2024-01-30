/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { CheckboxWrapper } from './Checkbox.utils';

/**
Source: https://cfpb.github.io/design-system/components/checkboxes
*/
const meta: Meta<typeof Checkbox> = {
  title: 'Components (Verified)/Checkboxes/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

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
    label: 'Label',
    helperText: 'This is optional helper text'
  }
};

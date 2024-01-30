/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { CheckboxWrapper } from './Checkbox.utils';

/**
Source: https://cfpb.github.io/design-system/components/checkboxes
*/
const meta: Meta<typeof Checkbox> = {
  title: 'Components (Verified)/Checkboxes/Large target area',
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
    id: 'Enabled',
    label: 'Enabled',
    isLarge: true
  }
};

export const Hover: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'hover',
    label: 'Hover',
    inputClassName: 'hover',
    isLarge: true
  }
};

export const Focus: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'focus',
    label: 'Focus',
    inputClassName: 'focus',
    isLarge: true
  }
};

export const Selected: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Selected',
  args: {
    id: 'selected',
    label: 'Selected',
    isLarge: true,
    checked: true
  }
};

export const Disabled: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'disabled',
    label: 'Disabled',
    isLarge: true,
    disabled: true
  }
};

export const DisabledSelected: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled/Selected',
  args: {
    id: 'disabled/selected',
    label: 'Disabled/Selected',
    isLarge: true,
    disabled: true,
    checked: true
  }
};

export const WithHelperText: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'withHelperText',
    label: 'Label',
    isLarge: true,
    helperText: 'This is optional helper text'
  }
};

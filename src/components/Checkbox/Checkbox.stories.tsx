import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../index';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    isDisabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
  args: { id: 'default', name: 'default', label: 'Default checkbox' }
};

export const CheckboxWithHelper: Story = {
  args: {
    ...DefaultCheckbox.args,
    id: 'CheckboxWithHelper',
    name: 'CheckboxWithHelper',
    label: 'Checkbox With Helper',
    helperText: 'This is optional helper text for the checkbox'
  }
};

export const LargeCheckbox: Story = {
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckbox',
    name: 'LargeCheckbox',
    label: 'Large Checkbox',
    isLarge: true
  }
};

export const LargeCheckboxWithHelper: Story = {
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckboxWithHelper',
    name: 'LargeCheckboxWithHelper',
    label: 'Large Checkbox With Helper',
    isLarge: true,
    helperText: 'This is optional helper text for the large checkbox'
  }
};

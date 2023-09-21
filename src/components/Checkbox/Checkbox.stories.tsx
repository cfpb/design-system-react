/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '~/src/index';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArguments = {
  id: 'default',
  name: 'default',
  label: 'Default checkbox'
};

const SampleCheckbox = ({ ...arguments_ }): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  const onHandleClick = (): void =>
    setChecked((previous: boolean): boolean => !previous);

  return (
    <Checkbox
      checked={checked}
      onChange={onHandleClick}
      {...defaultArguments}
      {...arguments_}
    />
  );
};

export const DefaultCheckbox: Story = {
  render: () => <SampleCheckbox />
};

const CheckboxWithHelperArguments = {
  id: 'CheckboxWithHelper',
  name: 'CheckboxWithHelper',
  label: 'Checkbox With Helper',
  helperText: 'This is optional helper text for the checkbox'
};

export const CheckboxWithHelper: Story = {
  render: () => <SampleCheckbox {...CheckboxWithHelperArguments} />
};

const LargeCheckboxArguments = {
  id: 'LargeCheckbox',
  name: 'LargeCheckbox',
  label: 'Large Checkbox',
  isLarge: true
};

export const LargeCheckbox: Story = {
  render: () => <SampleCheckbox {...LargeCheckboxArguments} />
};

const LargeCheckboxHelperArguments = {
  id: 'LargeCheckbox',
  name: 'LargeCheckbox',
  label: 'Large Checkbox',
  isLarge: true
};

export const LargeCheckboxHelper: Story = {
  render: () => <SampleCheckbox {...LargeCheckboxHelperArguments} />
};

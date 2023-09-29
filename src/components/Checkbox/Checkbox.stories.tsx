/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

import { useArgs } from '@storybook/client-api';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `Checkbox Component`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

interface CheckboxWrapperProperties {
  id: string;
  label: string;
}

function CheckboxWrapper({
  id,
  label,
  ...arguments_
}: CheckboxWrapperProperties): JSX.Element {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const [{ checked }, updateArgs] = useArgs();
  return (
    <Checkbox
      {...arguments_}
      id={id}
      label={label}
      onChange={(): void =>
        updateArgs({
          checked: !checked
        })
      }
    />
  );
}

export const DefaultCheckbox: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Default checkbox',
  args: {
    id: 'default',
    name: 'default',
    label: 'Default checkbox',
    checked: false
  }
};

export const CheckboxWithHelper: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...DefaultCheckbox.args,
    id: 'CheckboxWithHelper',
    name: 'CheckboxWithHelper',
    label: 'Checkbox With Helper',
    helperText: 'This is optional helper text for the checkbox'
  }
};

export const LargeCheckbox: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckbox',
    name: 'LargeCheckbox',
    label: 'Large Checkbox',
    isLarge: true
  }
};

export const LargeCheckboxWithHelper: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckboxWithHelper',
    name: 'LargeCheckboxWithHelper',
    label: 'Large Checkbox With Helper',
    isLarge: true,
    helperText: 'This is optional helper text for the large checkbox'
  }
};

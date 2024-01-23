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
        updateArguments({
          checked: !arguments_.checked
        });
      }}
    />
  );
}

export const WithHelperText: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'WithHelper',
    name: 'WithHelper',
    label: 'With helper text',
    helperText: 'This is optional helper text'
  }
};

export const LargeTargetArea: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Large target area',
  args: {
    id: 'LargeTargetArea',
    name: 'LargeTargetArea',
    label: 'Large target area',
    isLarge: true
  }
};

export const LargeTargetAreaWithHelperText: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Large target area helper text',
  args: {
    id: 'LargeWithHelperText',
    name: 'LargeWithHelperText',
    label: 'Large target area helper text',
    isLarge: true,
    helperText: 'This is optional helper text'
  }
};

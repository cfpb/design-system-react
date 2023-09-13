/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

import { useArgs } from '@storybook/client-api';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkboxes',
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

export const StandardCheckbox: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Standard checkbox',
  args: {
    id: 'standard',
    name: 'standard',
    label: 'Standard checkbox',
    checked: false
  }
};

export const StandardCheckboxWithHelperText: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...StandardCheckbox.args,
    id: 'StandardCheckboxWithHelper',
    name: 'StandardCheckboxWithHelper',
    label: 'Standard checkbox with helper',
    helperText: 'This is optional helper text for the checkbox'
  }
};

export const LargeTargetAreaCheckbox: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...StandardCheckbox.args,
    id: 'LargeTargetAreaCheckbox',
    name: 'LargeTargetAreaCheckbox',
    label: 'Large target area checkbox',
    isLarge: true
  }
};

export const LargeTargetAreaCheckboxWithHelperText: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...StandardCheckbox.args,
    id: 'LargeCheckboxWithHelperText',
    name: 'LargeCheckboxWithHelperText',
    label: 'Large target area checkbox helper text',
    isLarge: true,
    helperText: 'This is optional helper text for the large checkbox'
  }
};

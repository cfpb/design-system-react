/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

import { useArgs } from '@storybook/client-api';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkboxes',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  },
  parameters: {
    docs: {
      description: {
        component: `
Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use [radio buttons](https://cfpb.github.io/design-system/components/radio-buttons) when the user can choose only one option from a list.

Source: https://cfpb.github.io/design-system/components/checkboxes
`
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
  name: 'Standard checkbox with helper text',
  args: {
    ...StandardCheckbox.args,
    id: 'StandardCheckboxWithHelper',
    name: 'StandardCheckboxWithHelper',
    label: 'Standard checkbox with helper text',
    helperText: 'This is optional helper text for the standard checkbox'
  }
};

export const LargeTargetAreaCheckbox: Story = {
  render: _arguments => CheckboxWrapper(_arguments),
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
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Large target area checkbox helper text',
  args: {
    ...StandardCheckbox.args,
    id: 'LargeCheckboxWithHelperText',
    name: 'LargeCheckboxWithHelperText',
    label: 'Large target area checkbox helper text',
    isLarge: true,
    helperText:
      'This is optional helper text for the large target area checkbox'
  }
};

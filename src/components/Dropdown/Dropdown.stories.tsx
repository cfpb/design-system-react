/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';
import type { SelectOption } from './Dropdown.types';
import { MockOptions } from './utils';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdowns',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
Dropdowns allow the user to choose from a finite list of options. They are not always the best choice from a usability perspective; see the [use cases documentation](https://cfpb.github.io/design-system/components/dropdowns-and-multiselects#use-cases) for more details.

Source: https://cfpb.github.io/design-system/components/dropdowns-and-multiselects
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const LAST_ELEMENT = -1;

export const DefaultDropdown: Story = {
  name: 'Default dropdown',
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions
  }
};

export const WithError: Story = {
  name: 'With error',
  args: {
    ...DefaultDropdown.args,
    id: 'with-default',
    error: true,
    label: 'With Error'
  }
};

export const WithDefaultValue: Story = {
  name: 'With default value',
  args: {
    ...DefaultDropdown.args,
    id: 'with-default',
    value: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
};

export const Disabled: Story = {
  args: {
    ...DefaultDropdown.args,
    id: 'disabled',
    label: 'Disabled',
    isDisabled: true
  }
};

export const MultiSelect: Story = {
  name: 'Multi-select',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
};

export const MultiSelectWithDefaultValue: Story = {
  name: 'Multi-select with default value',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
};

export const MultiSelectWithCheckboxes: Story = {
  name: 'Multi-select with checkboxes',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom',
    withCheckbox: true
  }
};

export const MultiSelectWithPillsAlignedBottom: Story = {
  name: 'Multi-select with pills bottom-aligned',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
};

export const MultiSelectWithoutPills: Story = {
  name: 'Multi-select without pills',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'hide',
    withCheckbox: true
  }
};

export const MultiSelectWithoutClearAllButton: Story = {
  name: 'Multi-select without clear all button',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom',
    withCheckbox: true,
    showClearAllSelectedButton: false
  }
};

interface ControlledArguments {
  options: SelectOption[];
}
const ControlledDropdown = ({
  options,
  ...arguments_
}: ControlledArguments): JSX.Element => {
  const [selected, setSelected] = useState([options[0]]);

  return (
    <>
      <div className='m-btn-group u-mb30'>
        <Button
          label='Add all options'
          onClick={(): void => setSelected([...options])}
        />
        <Button
          label='Clear all options'
          appearance='warning'
          onClick={(): void => setSelected([])}
        />
      </div>
      <Dropdown
        id='controlled-dropdown'
        options={options}
        showClearAllSelectedButton={false}
        onSelect={(newValue): void => setSelected(newValue)}
        value={selected}
        {...arguments_}
      />
    </>
  );
};

export const AsAControlledComponent: Story = {
  name: 'As a controlled component',
  render: arguments_ => <ControlledDropdown {...arguments_} />,
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
};

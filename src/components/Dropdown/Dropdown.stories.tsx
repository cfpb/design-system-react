/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';
import type { SelectOption } from './Dropdown.types';
import { MockOptions } from './utils';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - Dropdown component

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
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions
  }
};

export const WithDefaultValue: Story = {
  args: {
    ...DefaultDropdown.args,
    id: 'with-default',
    defaultValue: MockOptions.at(LAST_ELEMENT),
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
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
};

export const MultiSelectWithDefaultValue: Story = {
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
};

export const MultiSelectWithCheckboxes: Story = {
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom',
    withCheckbox: true
  }
};

export const MultiSelectWithPillsAlignedBottom: Story = {
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
};

export const MultiSelectWithoutPills: Story = {
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'hide',
    withCheckbox: true
  }
};

export const MultiSelectWithoutClearAllButton: Story = {
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
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
  render: arguments_ => <ControlledDropdown {...arguments_} />,
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
};

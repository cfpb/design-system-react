/* eslint-disable react/jsx-handler-names */
import { useArgs, useState } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Buttons/Button';
import { Dropdown } from './Dropdown';
import { MockOptions } from './utils';

/**
 * Dropdowns allow the user to choose from a finite list of options. They are not always the best choice from a usability perspective; see the <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects#use-cases'>use cases documentation</a> for more details.
 *
 * Source: <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects' target='_blank'>https://cfpb.github.io/design-system/components/dropdowns-and-multiselects</a>
 */
const meta: Meta<typeof Dropdown> = {
  title: 'Components (Draft)/Dropdowns',
  tags: ['autodocs'],
  component: Dropdown
};

export default meta;

type Story = StoryObj<typeof meta>;

const LAST_ELEMENT = -1;

function DropdownWrapper({ ...arguments_ }): JSX.Element {
  const [selected, updateSelected] = useState(arguments_.value);
  const [, updateArguments] = useArgs();

  return (
    <Dropdown
      {...arguments_}
      value={selected}
      onSelect={(newValue): void => {
        updateSelected(newValue);
        updateArguments({
          value: newValue
        });
      }}
    />
  );
}

export const DefaultDropdown: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Default dropdown',
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions,
    value: [MockOptions[0]]
  }
};

export const WithError: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With error',
  args: {
    ...DefaultDropdown.args,
    id: 'WithError',
    error: true,
    label: 'With Error'
  }
};

export const WithDefaultValue: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With default value',
  args: {
    ...DefaultDropdown.args,
    id: 'WithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
};

export const Disabled: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  args: {
    ...DefaultDropdown.args,
    id: 'Disabled',
    label: 'Disabled',
    isDisabled: true
  }
};

export const MultiSelect: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'MultiSelect',
    isMulti: true,
    label: 'Multi-select'
  }
};

export const MultiSelectWithDefaultValue: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with default value (and pills above)',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithDefaultValue',
    isMulti: true,
    label: 'Multi-select with default value (and pills above)'
  }
};

export const MultiSelectWithCheckboxes: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with checkboxes',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxes',
    isMulti: true,
    label: 'Multi-select with checkboxes',
    pillAlign: 'bottom',
    withCheckbox: true
  }
};

export const MultiSelectWithPillsAlignedBottom: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with pills bottom-aligned',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithPillsAlignedBottom',
    isMulti: true,
    label: 'Multi-select with pills bottom-aligned',
    pillAlign: 'bottom'
  }
};

export const MultiSelectWithCheckboxesWithoutPills: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with checkboxes, without pills',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesWithoutPills',
    isMulti: true,
    label: 'Multi-select with checkboxes, without pills',
    pillAlign: 'hide',
    withCheckbox: true
  }
};

export const MultiSelectWithCheckboxesWithoutClearAllButton: Story = {
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with checkboxes, without bottom clear all button',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesWithoutClearAllButton',
    isMulti: true,
    label: 'Multi-select with checkboxes, without clear all button',
    pillAlign: 'bottom',
    withCheckbox: true,
    showClearAllSelectedButton: false
  }
};

function AsAControlled({ ...arguments_ }): JSX.Element {
  const [selected, updateSelected] = useState(arguments_.value);
  const [, updateArguments] = useArgs();

  return (
    <>
      <div className='m-btn-group u-mb30'>
        <Button
          label='Add all options'
          onClick={(): void => {
            updateSelected([...MockOptions]);
            updateArguments({ value: [...MockOptions] });
          }}
        />
        <Button
          label='Clear all options'
          appearance='warning'
          onClick={(): void => {
            updateSelected([]);
            updateArguments({ value: [] });
          }}
        />
      </div>
      <Dropdown
        {...arguments_}
        value={selected}
        showClearAllSelectedButton={false}
        onSelect={(newValue): void => {
          updateSelected(newValue);
          updateArguments({
            value: newValue
          });
        }}
      />
    </>
  );
}

export const AsAControlledComponent: Story = {
  name: 'As a controlled component',
  render: _arguments => AsAControlled(_arguments),
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'AsAControlledComponent',
    isMulti: true,
    label: 'As a controlled component',
    pillAlign: 'bottom'
  }
};

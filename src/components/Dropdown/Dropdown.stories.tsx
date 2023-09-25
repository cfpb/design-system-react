/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';
import { MockOptions } from './utils';

import { useArgs } from '@storybook/client-api';

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

function DropdownWrapper({ options, ...arguments_ }): JSX.Element {
  const [, updateArgs] = useArgs();
  return (
    <Dropdown
      {...arguments_}
      id='controlled-dropdown'
      options={options}
      onSelect={(newValue): void => {
        updateArgs({
          value: newValue
        });
      }}
    />
  );
}

export const DefaultDropdown: Story = {
  render: _args => DropdownWrapper(_args),
  name: 'Default dropdown',
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    isClearable: true,
    options: MockOptions,
    value: [MockOptions[0]]
  }
};

export const WithoutInlineClearAll: Story = {
  render: _args => DropdownWrapper(_args),
  args: {
    ...DefaultDropdown.args,
    label: 'Without Inline Clear All',
    id: 'WithoutInlineClearAll',
    options: MockOptions,
    isClearable: false
  }
};

export const WithError: Story = {
  render: _args => DropdownWrapper(_args),
  name: 'With error',
  args: {
    ...DefaultDropdown.args,
    id: 'WithError',
    error: true,
    label: 'With Error'
  }
};

export const WithDefaultValue: Story = {
  render: _args => DropdownWrapper(_args),
  name: 'With default value',
  args: {
    ...DefaultDropdown.args,
    id: 'WithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
};

export const Disabled: Story = {
  render: _args => DropdownWrapper(_args),
  args: {
    ...DefaultDropdown.args,
    id: 'Disabled',
    label: 'Disabled',
    isDisabled: true
  }
};

export const MultiSelect: Story = {
  render: _args => DropdownWrapper(_args),
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
  render: _args => DropdownWrapper(_args),
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
  render: _args => DropdownWrapper(_args),
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
  render: _args => DropdownWrapper(_args),
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

export const MultiSelectWithPillsAlignedBottomInlineClearAllOff: Story = {
  render: _args => DropdownWrapper(_args),
  name: "Multi-select with pills bottom-aligned, inline 'Clear All' Off",
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithPillsAlignedBottom',
    isMulti: true,
    label: 'Multi-select with pills bottom-aligned',
    pillAlign: 'bottom',
    isClearable: false
  }
};

export const MultiSelectWithCheckboxesWithoutPills: Story = {
  render: _args => DropdownWrapper(_args),
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
  render: _args => DropdownWrapper(_args),
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

function AsAControlled({ options, ...arguments_ }): JSX.Element {
  const [, updateArgs] = useArgs();
  return (
    <>
      <div className='m-btn-group u-mb30'>
        <Button
          label='Add all options'
          onClick={(): void => updateArgs({ value: [...MockOptions] })}
        />
        <Button
          label='Clear all options'
          appearance='warning'
          onClick={(): void => updateArgs({ value: [] })}
        />
      </div>
      <Dropdown
        {...arguments_}
        id='controlled-dropdown'
        options={options}
        showClearAllSelectedButton={false}
        onSelect={(newValue): void =>
          updateArgs({
            value: newValue
          })
        }
      />
    </>
  );
}

export const AsAControlledComponent: Story = {
  name: 'As a controlled component',
  render: _args => AsAControlled(_args),
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

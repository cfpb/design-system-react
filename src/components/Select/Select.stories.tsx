/* eslint-disable react/jsx-handler-names */
import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Buttons/Button';
import Select from './Select';
import { MockOptions } from './utils';

/**
 * Selects allow the user to choose from a finite list of options. They are not always the best choice from a usability perspective; see the <a href='https://cfpb.github.io/design-system/components/selects#use-cases'>use cases documentation</a> for more details.
 *
 * Source: <a href='https://cfpb.github.io/design-system/components/selects' target='_blank'>https://cfpb.github.io/design-system/components/selects</a>
 */
const meta: Meta<typeof Select> = {
  title: 'Components (Draft)/Selects',
  component: Select
};

export default meta;

type Story = StoryObj<typeof meta>;

const LAST_ELEMENT = -1;

function SelectWrapper({ ...arguments_ }): JSX.Element {
  const [{ value }, updateArguments] = useArgs();
  console.log(value);

  return (
    <Select
      {...arguments_}
      value={value}
      onSelect={(newValue): void => {
        updateArguments({
          value: newValue
        });
      }}
    />
  );
}

export const DefaultSelect: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Default select',
  args: {
    label: '',
    id: 'select',
    options: MockOptions
  }
};

export const WithError: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'With error',
  args: {
    ...DefaultSelect.args,
    id: 'WithError',
    error: true
    // label: 'With Error'
  }
};

export const WithDefaultValue: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'With default value',
  args: {
    ...DefaultSelect.args,
    id: 'WithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT)
    // label: 'With Default Value'
  }
};

export const Disabled: Story = {
  render: _arguments => SelectWrapper(_arguments),
  args: {
    ...DefaultSelect.args,
    id: 'Disabled',
    // label: 'Disabled',
    isDisabled: true
  }
};

export const MultiSelect: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multi-select',
  args: {
    ...DefaultSelect.args,
    options: [...MockOptions],
    id: 'MultiSelect',
    isMulti: true
    // label: 'Multi-select'
  }
};

export const MultiSelectWithDefaultValue: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multi-select with default value (and pills above)',
  args: {
    ...DefaultSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithDefaultValue',
    isMulti: true
    // label: 'Multi-select with default value (and pills above)'
  }
};

export const MultiSelectWithCheckboxes: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multi-select with checkboxes',
  args: {
    ...DefaultSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxes',
    isMulti: true,
    // label: 'Multi-select with checkboxes',
    pillAlign: 'bottom',
    withCheckbox: true
  }
};

export const MultiSelectWithPillsAlignedBottom: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multi-select with pills bottom-aligned',
  args: {
    ...DefaultSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithPillsAlignedBottom',
    isMulti: true,
    // label: 'Multi-select with pills bottom-aligned',
    pillAlign: 'bottom',
    showClearAllSelectedButton: true
  }
};

export const MultiSelectWithCheckboxesWithoutPills: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multi-select with checkboxes, without pills',
  args: {
    ...DefaultSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesWithoutPills',
    isMulti: true,
    // label: 'Multi-select with checkboxes, without pills',
    pillAlign: 'hide',
    withCheckbox: true
  }
};

export const MultiSelectWithCheckboxesWithoutClearAllButton: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multi-select with checkboxes',
  args: {
    ...DefaultSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesWithoutClearAllButton',
    isMulti: true,
    // label: 'Multi-select with checkboxes, without clear all button',
    pillAlign: 'bottom',
    withCheckbox: true,
    showClearAllSelectedButton: false
  }
};

function AsAControlled({ ...arguments_ }): JSX.Element {
  const [{ value }, updateArguments] = useArgs();

  return (
    <>
      <div className='m-btn-group u-mb30'>
        <Button
          label='Add all options'
          onClick={(): void => {
            updateArguments({ value: [...MockOptions] });
          }}
        />
        <Button
          label='Clear all options'
          appearance='warning'
          onClick={(): void => {
            updateArguments({ value: [] });
          }}
        />
      </div>
      <Select
        {...arguments_}
        value={value}
        showClearAllSelectedButton={false}
        onSelect={(newValue): void => {
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
    ...DefaultSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'AsAControlledComponent',
    isMulti: true,
    // label: 'As a controlled component',
    pillAlign: 'bottom'
  }
};

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

export const SingleSelect: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Single select',
  args: {
    label: '',
    id: 'select',
    options: MockOptions
  }
};

export const SingleSelectWithError: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Single select with error',
  args: {
    ...DefaultSelect.args,
    id: 'WithError',
    error: true
  }
};

export const SingleSelectWithDefaultValue: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Single select default value',
  args: {
    ...DefaultSelect.args,
    id: 'SingleSelectWithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT)
  }
};

export const SingleSelectDisabled: Story = {
  render: _arguments => SelectWrapper(_arguments),
  args: {
    ...DefaultSelect.args,
    id: 'SingleSelectDisabled',
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
    pillAlign: 'hide',
    withCheckbox: true
  }
};

export const MultiSelectWithCheckboxesWithoutClearAllButton: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multi-select with checkboxes, without bottom clear all button',
  args: {
    ...DefaultSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesWithoutClearAllButton',
    isMulti: true,
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
    pillAlign: 'bottom'
  }
};

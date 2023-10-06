/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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
  const [value, setValue] = useState();

  return (
    <div style={{ minHeight: '16rem' }}>
      <Select
        {...arguments_}
        value={value}
        onSelect={(newValue): void => {
          setValue(newValue);
        }}
      />
    </div>
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
    ...SingleSelect.args,
    id: 'WithError',
    error: true
  }
};

export const SingleSelectWithDefaultValue: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Single select default value',
  args: {
    ...SingleSelect.args,
    id: 'SingleSelectWithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT)
  }
};

export const SingleSelectDisabled: Story = {
  render: _arguments => SelectWrapper(_arguments),
  args: {
    ...SingleSelect.args,
    id: 'SingleSelectDisabled',
    isDisabled: true
  }
};

export const MultiSelectWithCheckboxesTagsAbove: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multiselect (tags above)',
  args: {
    ...SingleSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesTagsBelow',
    isMulti: true,
    pillAlign: 'top',
    withCheckbox: true,
    showClearAllSelectedButton: false
  }
};

export const MultiSelectWithCheckboxesTagsBelow: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Multiselect (tags below)',
  args: {
    ...SingleSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesTagsBelow',
    isMulti: true,
    pillAlign: 'bottom',
    withCheckbox: true,
    showClearAllSelectedButton: false
  }
};

function AsAControlled({ ...arguments_ }): JSX.Element {
  const [value, setValue] = useState();

  return (
    <div style={{ minHeight: '15rem' }}>
      <div className='m-btn-group u-mb30'>
        <Button
          label='Add all options'
          onClick={(): void => {
            setValue([...MockOptions]);
          }}
        />
        <Button
          label='Clear all options'
          appearance='warning'
          onClick={(): void => {
            setValue([]);
          }}
        />
      </div>
      <Select
        {...arguments_}
        value={value}
        showClearAllSelectedButton={false}
        onSelect={(newValue): void => {
          setValue(newValue);
        }}
      />
    </div>
  );
}

export const AsAControlledComponent: Story = {
  name: 'As a controlled component',
  render: _arguments => AsAControlled(_arguments),
  args: {
    ...SingleSelect.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'AsAControlledComponent',
    isMulti: true,
    pillAlign: 'bottom',
    showClearAllSelectedButton: false
  }
};

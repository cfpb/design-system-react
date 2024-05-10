import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select, SelectSingle } from '~/src/index';
import type { SelectOption, SelectProperties } from './Select';
import { SingleSelectOptions } from './testUtils';

const meta: Meta<typeof SelectSingle> = {
  title: 'Components (Draft)/Selects/Single select',
  tags: ['autodocs'],
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    isMulti: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

function SelectWrapper({ ...arguments_ }: SelectProperties): JSX.Element {
  const [selected, setSelected] = useState<string>('');

  const onHandleChange = (
    newValue: SelectOption | SelectOption[] | undefined
  ): void => {
    // Just to resolve TypeScript since we are using Select in single format
    if (Array.isArray(newValue)) return;
    setSelected(newValue?.value ?? '');
  };

  return (
    <SelectSingle {...arguments_} value={selected} onChange={onHandleChange} />
  );
}

export const SingleSelect: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
};

export const SingleSelectHover: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
};

export const SingleSelectFocus: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
};

export const SingleSelectDisabled: Story = {
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
};

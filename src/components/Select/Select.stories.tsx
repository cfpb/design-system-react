import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select, SelectSingle } from '~/src/index';
import type { SelectOption } from './Select';
import { SingleSelectOptions } from './testUtils';

const meta: Meta<typeof Select> = {
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

function SelectWrapper({ ...arguments_ }): JSX.Element {
  const [selected, setSelected] = useState<string | undefined>();

  const onHandleChange = (newValue: SelectOption | undefined): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSelected(newValue?.value ?? '');
  };

  return (
    <SelectSingle
      {...arguments_}
      value={selected.value}
      onChange={onHandleChange}
    />
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

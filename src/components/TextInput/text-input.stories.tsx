import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { Button, Icon, TextInput } from '~/src/index';
import type { TextInputProperties } from './text-input';

const meta: Meta<typeof TextInput> = {
  title: 'Components (Verified)/Text inputs/Text input',
  tags: ['autodocs'],
  component: TextInput,
  argTypes: {
    isFullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('Enabled');
    await userEvent.click(input);
    await expect(input).toHaveFocus();
  },
};

export const Hover: Story = {
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover',
  },
  render: (_arguments) => <TextInput {..._arguments} className='hover' />,
};

export const Focus: Story = {
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus',
  },
  render: (_arguments) => <TextInput {..._arguments} className='focus' />,
};

export const Disabled: Story = {
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true,
  },
};

export const Success: Story = {
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error',
  },
};

export const FullWidth: Story = {
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true,
  },
};

export const SearchInput: Story = {
  name: 'Search input',
  args: {
    ...Enabled.args,
    value: '',
    placeholder: 'Enter your search term(s)',
    name: 'SearchInput',
    id: 'SearchInput',
    type: 'search',
    isFullWidth: false,
    className: 'a-text-input__full',
  },
  render: (args) => {
    const { value: initialValue, ...restArgs } = args as TextInputProperties & {
      value: string;
    };
    const [value, setValue] = useState(initialValue ?? '');
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onReset={() => setValue('')}
      >
        <div className='o-search-input'>
          <div className='o-search-input__input'>
            <label
              htmlFor='SearchInput'
              className='o-search-input__input-label'
              aria-label='Search for a term'
            >
              <Icon name='search' />
            </label>
            <TextInput
              {...restArgs}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type='reset'
              aria-label='Clear search'
              title='Clear search'
            >
              <Icon name='error' />
            </button>
          </div>
          <Button type='submit' aria-label='Search for term(s)' label='Search' />
        </div>
      </form>
    );
  },
};

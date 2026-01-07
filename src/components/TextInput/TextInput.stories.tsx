import type { Meta, StoryObj } from '@storybook/react';
import { Icon, TextInput } from '~/src/index';

const meta: Meta<typeof TextInput> = {
  title: 'Components (Verified)/Text inputs/Text input',
  tags: ['autodocs'],
  component: TextInput,
  argTypes: {
    isFullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text'
  }
};

export const Hover: Story = {
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
};

export const Focus: Story = {
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
};

export const Disabled: Story = {
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
};

export const Success: Story = {
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
};

export const Warning: Story = {
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
};

export const Error: Story = {
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
};

export const FullWidth: Story = {
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
};

export const searchInput: Story = {
  name: 'Search input',
  args: {
    ...Enabled.args,
    value:
      "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",
    name: 'SearchInput',
    id: 'SearchInput',
    type: 'search',
    isFullWidth: true
  },
  render: _arguments => (
    <div className='o-search-input'>
      <div className='o-search-input__input'>
        <label
          htmlFor='SearchInput'
          className='o-search-input__input-label'
          aria-label='Search for a term'
        >
          <Icon name='search' />
        </label>
        <TextInput {..._arguments} />
        <button type='reset' aria-label='Clear search' title='Clear search'>
          <Icon name='error' />
        </button>
      </div>
      <button className='a-btn' type='submit' aria-label='Search for term(s)'>
        Search
      </button>
    </div>
  )
};

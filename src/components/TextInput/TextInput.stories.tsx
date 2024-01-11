import type { Meta, StoryObj } from '@storybook/react';
import { Button, Icon, TextInput } from '~/src/index';

const meta: Meta<typeof TextInput> = {
  title: 'Components (Verified)/Text inputs',
  component: TextInput,
  argTypes: {
    isFullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Default',
    id: 'Default',
    value: 'Default',
    type: 'text'
  }
};

export const Hover: Story = {
  args: {
    ...Default.args,
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
};

export const Focus: Story = {
  args: {
    ...Default.args,
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    value: 'Disabled',
    disabled: true
  }
};

export const Success: Story = {
  args: {
    ...Default.args,
    value: 'Success',
    status: 'success'
  }
};

export const Warning: Story = {
  args: {
    ...Default.args,
    value: 'Warning',
    status: 'warning'
  }
};

export const Error: Story = {
  args: {
    ...Default.args,
    value: 'Error',
    status: 'error'
  }
};

export const FullWidth: Story = {
  name: 'Text input (full width)',
  args: {
    ...Default.args,
    value: 'Input text',
    isFullWidth: true
  }
};

export const WithButton: Story = {
  name: 'Text input (with button)',
  args: {
    ...Default.args,
    value: ''
  },
  render: _arguments => (
    <div className='o-form__input-w-btn'>
      <div className='o-form__input-w-btn_input-container'>
        <TextInput {..._arguments} />
      </div>
      <div className='o-form__input-w-btn_btn-container'>
        <Button label='Search' />
      </div>
    </div>
  )
};

export const WithButtonInsideText: Story = {
  name: 'Button inside text input',
  args: {
    ...Default.args,
    value:
      "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
  },
  render: _arguments => (
    <div className='m-btn-inside-input'>
      <TextInput {..._arguments} />
      <button className='a-btn a-btn__link'>
        <Icon name='error' />
      </button>
    </div>
  )
};

export const WithButtonInsideButton: Story = {
  name: 'Button inside text input with another button',
  args: {
    ...Default.args,
    value:
      "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
  },
  render: _arguments => (
    <div className='o-form__input-w-btn'>
      <div className='o-form__input-w-btn_input-container'>
        <div className='m-btn-inside-input'>
          <TextInput {..._arguments} />
          <button className='a-btn a-btn__link'>
            <Icon name='error' />
          </button>
        </div>
      </div>
      <div className='o-form__input-w-btn_btn-container'>
        <button className='a-btn'>Search</button>
      </div>
    </div>
  )
};

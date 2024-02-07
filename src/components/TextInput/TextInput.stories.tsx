import type { Meta, StoryObj } from '@storybook/react';
import { Button, Icon, TextInput } from '~/src/index';

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

export const WithButton: Story = {
  name: 'With button',
  args: {
    ...Enabled.args,
    name: 'withButton',
    id: 'withButton',
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
  name: 'Button inside',
  args: {
    ...Enabled.args,
    value:
      "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",
    name: 'ButtonInside',
    id: 'ButtonInside'
  },
  render: _arguments => (
    <div className='m-btn-inside-input'>
      <TextInput {..._arguments} />
      <button type='button' className='a-btn a-btn__link'>
        <Icon name='error' />
      </button>
    </div>
  )
};

export const WithButtonInsideButton: Story = {
  name: 'Button inside (with button)',
  args: {
    ...Enabled.args,
    value:
      "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",
    name: 'ButtonInsideButton',
    id: 'ButtonInsideButton'
  },
  render: _arguments => (
    <div className='o-form__input-w-btn'>
      <div className='o-form__input-w-btn_input-container'>
        <div className='m-btn-inside-input'>
          <TextInput {..._arguments} />
          <button type='button' className='a-btn a-btn__link'>
            <Icon name='error' />
          </button>
        </div>
      </div>
      <div className='o-form__input-w-btn_btn-container'>
        <button type='button' className='a-btn'>
          Search
        </button>
      </div>
    </div>
  )
};

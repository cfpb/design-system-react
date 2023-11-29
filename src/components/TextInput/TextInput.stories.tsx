import type { Meta, StoryObj } from '@storybook/react';
import { Button, TextInput } from '~/src/index';

const meta: Meta<typeof TextInput> = {
  title: 'Components (Draft)/Text inputs',
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
    id: 'Default',
    name: 'Default',
    value: 'Default',
    type: 'text'
  }
};

export const Hover: Story = {
  render: _arguments => <TextInput {..._arguments} className='hover' />,
  name: 'Hover',
  args: {
    ...Default.args,
    value: 'Hover'
  }
};

export const Focus: Story = {
  render: _arguments => <TextInput {..._arguments} className='focus' />,
  name: 'Focus',
  args: {
    ...Default.args,
    value: 'Focus'
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Default.args,
    value: 'Disabled',
    disabled: true
  }
};

export const Success: Story = {
  name: 'Success',
  args: {
    ...Default.args,
    value: 'Success',
    status: 'success'
  }
};

export const Warning: Story = {
  name: 'Warning',
  args: {
    ...Default.args,
    value: 'Warning',
    status: 'warning'
  }
};

export const Error: Story = {
  name: 'Error',
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
  render: _arguments => (
    <div className='o-form__input-w-btn'>
      <div className='o-form__input-w-btn_input-container'>
        <TextInput {..._arguments} />
      </div>
      <div className='o-form__input-w-btn_btn-container'>
        <Button label='Search' />
      </div>
    </div>
  ),
  name: 'Text input (with button)',
  args: {
    ...Default.args,
    value: ''
  }
};

export const WithButtonInsideText: Story = {
  render: _arguments => (
    <div className='m-btn-inside-input'>
      <TextInput {..._arguments} />
      <button className='a-btn a-btn__link'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='cf-icon-svg cf-icon-svg__error'
          viewBox='0 0 12 19'
        >
          <path d='M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z' />
        </svg>
        <span className='u-visually-hidden'>Clear</span>
      </button>
    </div>
  ),
  name: 'Button inside text input',
  args: {
    ...Default.args,
    value:
      "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
  }
};

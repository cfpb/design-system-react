import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components (Verified)/TextArea',
  tags: ['autodocs'],
  component: TextArea,
  argTypes: {
    isFullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    placeholder: 'Enabled'
  }
};

export const Hover: Story = {
  args: {
    placeholder: 'Hover',
    className: 'hover'
  }
};

export const Focus: Story = {
  args: {
    placeholder: 'Focus',
    className: 'focus'
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    isDisabled: true
  }
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Full width',
    isFullWidth: true
  }
};

export const Success: Story = {
  args: {
    placeholder: 'Success',
    className: 'a-text-input__success'
  }
};

export const Warning: Story = {
  args: {
    placeholder: 'Warning',
    className: 'a-text-input__warning'
  }
};

export const Error: Story = {
  args: {
    placeholder: 'Error',
    className: 'a-text-input__error'
  }
};

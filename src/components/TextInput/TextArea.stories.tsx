import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components (Verified)/Text inputs/Text area',
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
    id: 'Enabled',
    placeholder: 'Enabled',
    name: 'Enabled'
  }
};

export const Hover: Story = {
  args: {
    id: 'Hover',
    placeholder: 'Hover',
    name: 'Hover',
    className: 'hover'
  }
};

export const Focus: Story = {
  args: {
    id: 'Focus',
    placeholder: 'Focus',
    name: 'Focus',
    className: 'focus'
  }
};

export const Disabled: Story = {
  args: {
    id: 'Disabled',
    placeholder: 'Disabled',
    name: 'Disabled',
    isDisabled: true
  }
};

export const Success: Story = {
  args: {
    id: 'Success',
    placeholder: 'Success',
    name: 'Success',
    className: 'a-text-input__success'
  }
};

export const Warning: Story = {
  args: {
    id: 'Warning',
    placeholder: 'Warning',
    name: 'Warning',
    className: 'a-text-input__warning'
  }
};

export const Error: Story = {
  args: {
    id: 'Error',
    placeholder: 'Error',
    name: 'Error',
    className: 'a-text-input__error'
  }
};

export const FullWidth: Story = {
  args: {
    id: 'Full width',
    placeholder: 'Full width',
    name: 'Full width',
    isFullWidth: true
  }
};
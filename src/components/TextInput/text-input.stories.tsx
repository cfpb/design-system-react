import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { TextInput } from '~/src/index';

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

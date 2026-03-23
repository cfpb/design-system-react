import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import Checkbox from './checkbox';
import { CheckboxTestWrapper, CheckboxWrapper } from './checkbox.utils';

/**
Source: https://cfpb.github.io/design-system/components/checkboxes
*/
const meta: Meta<typeof Checkbox> = {
  title: 'Components (Verified)/Checkboxes/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    isLarge: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  render: (_arguments) => <CheckboxTestWrapper {..._arguments} />,
  args: {
    id: 'enabled',
    label: 'Enabled',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => expect(canvas.getByRole('checkbox')).not.toBeChecked());
    await userEvent.click(canvas.getByRole('checkbox'));
    await waitFor(() => expect(canvas.getByRole('checkbox')).toBeChecked());
  },
};

export const Hover: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  args: {
    id: 'hover',
    inputClassName: 'hover',
    label: 'Hover',
  },
};

export const Focus: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  args: {
    id: 'focus',
    inputClassName: 'focus',
    label: 'Focus',
  },
};

export const Selected: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  args: {
    id: 'selected',
    label: 'Selected',
    checked: true,
  },
};

export const Disabled: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  args: {
    id: 'disabled',
    label: 'Disabled',
    checked: false,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    await expect(checkbox).toBeDisabled();
    await expect(checkbox).not.toBeChecked();
  },
};

export const Disabledselected: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  name: 'Disabled/selected',
  args: {
    id: 'disabled/selected',
    label: 'Disabled/selected',
    checked: true,
    disabled: true,
  },
};

export const Success: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  args: {
    id: 'success',
    label: 'Success',
    status: 'success',
  },
};

export const Warning: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  args: {
    id: 'warning',
    label: 'Warning',
    status: 'warning',
  },
};

export const Error: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  args: {
    id: 'error',
    label: 'Error',
    status: 'error',
  },
};

export const WithHelperText: Story = {
  render: (_arguments) => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'WithHelper',
    label: 'Label',
    helperText: 'This is optional helper text',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '~/src/index';

const meta: Meta<typeof Select> = {
  title: 'Components (Verified)/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    isMulti: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const DemoOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
  { value: 'option7', label: 'Option 7' }
];

export const SingleSelect: Story = {
  name: 'Single select',
  args: {
    id: 'singleSelect',
    label: 'Default',
    options: DemoOptions
  }
};

export const Multiselect: Story = {
  args: {
    id: 'multiSelect',
    label: 'Label',
    isMulti: true,
    options: DemoOptions
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '~/src/index';
import { MultipleSelectOptions } from './testUtils';

const meta: Meta<typeof Select> = {
  title: 'Components (Draft)/Selects/Multiselect',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isMulti: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'multiSelect',
    label: 'Label',
    isMulti: true,
    options: MultipleSelectOptions,
    disabled: true
  },
  render: (arguments_) => <div style={{ minHeight: '200px' }}>
    <Select {...arguments_} />
  </div>
};

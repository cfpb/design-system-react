import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '~/src/index';
import { MultipleSelectOptions } from './testUtils';

const meta: Meta<typeof Select> = {
  title: 'Components (Draft)/Selects/Multiple',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isMulti: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    id: 'multiSelect',
    label: 'Enabled',
    isMulti: true,
    options: MultipleSelectOptions,
    disabled: true
  }
};

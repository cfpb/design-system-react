import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '~/src/index';
import { DemoOptions } from './testUtils';

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

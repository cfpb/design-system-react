import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '~/src/index';
import { DemoOptions } from './testUtils';

const meta: Meta<typeof Select> = {
  title: 'Components (Draft)/Selects/Single',
  tags: ['autodocs'],
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    isMulti: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Default',
    options: DemoOptions
  }
};

export const SingleSelectHover: Story = {
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Default',
    options: DemoOptions,
    className: 'hover'
  }
};

export const SingleSelectFocus: Story = {
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Default',
    options: DemoOptions,
    className: 'focus'
  }
};

export const SingleSelectDisabled: Story = {
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Default',
    options: DemoOptions,
    disabled: true
  }
};
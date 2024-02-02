import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '~/src/index';
import { SingleSelectOptions } from './testUtils';

const meta: Meta<typeof Select> = {
  title: 'Components (Draft)/Selects/Single select',
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
    label: 'Enabled',
    options: SingleSelectOptions
  }
};

export const SingleSelectHover: Story = {
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
};

export const SingleSelectFocus: Story = {
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
};

export const SingleSelectDisabled: Story = {
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
};

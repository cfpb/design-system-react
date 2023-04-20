import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta = {
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - Dropdown component

Source: https://cfpb.github.io/design-system/components/dropdowns-and-multiselects
`
      }
    }
  }
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const LAST_ELEMENT = -1;

const options = [
  { value: 'value1', label: 'Option A' },
  { value: 'value2', label: 'Option B' },
  { value: 'value3', label: 'Option C' }
];


export const DefaultDropdown: Story = {
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options
  }
};

export const WithDefaultValue: Story = {
  args:{
  ...DefaultDropdown.args,
  id: 'with-default',
  defaultValue: options.at(LAST_ELEMENT),
  label: 'With Default Value'
  }
};

export const Disabled: Story = {
  args:{
  ...DefaultDropdown.args,
  id: 'disabled',
  label: 'Disabled',
  isDisabled: true
}};

export const MultiSelect: Story = {
  args:{
  ...DefaultDropdown.args,
  options: [
    ...options,
    {
      value: 'long',
      label:
        'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
    }
  ],
  id: 'multi',
  isMulti: true,
  label: 'Multi-select'
}};

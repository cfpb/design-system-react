import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '.';

const meta: Meta<typeof Dropdown> = {
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
};

export default meta;

type Story = StoryObj<typeof meta>;

const LAST_ELEMENT = -1;

export const MockOptions = [
  { value: 'value1', label: 'Option A' },
  { value: 'value2', label: 'Option B' },
  { value: 'value3', label: 'Option C' }
];

export const DefaultDropdown: Story = {
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions
  }
};

export const WithDefaultValue: Story = {
  args: {
    ...DefaultDropdown.args,
    id: 'with-default',
    defaultValue: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
};

export const Disabled: Story = {
  args: {
    ...DefaultDropdown.args,
    id: 'disabled',
    label: 'Disabled',
    isDisabled: true
  }
};

export const MultiSelect: Story = {
  args: {
    ...DefaultDropdown.args,
    options: [
      ...MockOptions,
      {
        value: 'long',
        label:
          'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
      }
    ],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
};

export const MultiSelectWithDefaultValue: Story = {
  args: {
    ...DefaultDropdown.args,
    options: [
      ...MockOptions,
      {
        value: 'long',
        label:
          'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
      }
    ],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
};

import type { ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
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

const LAST_ELEMENT = -1;

const options = [
  { value: 'value1', label: 'Option A' },
  { value: 'value2', label: 'Option B' },
  { value: 'value3', label: 'Option C' }
];

const Template: ComponentStory<typeof Dropdown> = arguments_ => (
  <Dropdown {...arguments_} id='testDropdown' />
);

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  label: 'Default Dropdown',
  id: 'dropdown',
  options
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...DefaultDropdown.args,
  id: 'with-default',
  defaultValue: options.at(LAST_ELEMENT),
  label: 'With Default Value'
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultDropdown.args,
  id: 'disabled',
  label: 'Disabled',
  isDisabled: true
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
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
};

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

const options = [
  { value: 'value1', label: 'Option A' },
  { value: 'value2', label: 'Option B' },
  { value: 'value3', label: 'Option C' }
];

const Template: ComponentStory<typeof Dropdown> = arguments_ => (
  <Dropdown {...arguments_} id='testDropdown' />
);

export const defaultDropdown = Template.bind({});
defaultDropdown.args = {
  label: 'Default Dropdown',
  id: 'dropdown',
  options
};

export const withDefaultValue = Template.bind({});
withDefaultValue.args = {
  ...defaultDropdown.args,
  id: 'with-default',
  defaultValue: options.at(-1),
  label: 'With Default Value'
};

export const multiSelect = Template.bind({});
multiSelect.args = {
  ...defaultDropdown.args,
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

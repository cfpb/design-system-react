import React from 'react';

import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Dropdown component

Source: https://designsystem.digital.gov/components/dropdown
`
      }
    }
  }
};

const options = [
  <option key='placeholder'>- Select - </option>,
  <option key='opt-1' value='value1'>
    Option A
  </option>,
  <option key='opt-2' value='value2'>
    Option B
  </option>,
  <option key='opt-3' value='value3'>
    Option C
  </option>
];

export const defaultDropdown = (): React.ReactElement => (
  <Dropdown id='default-dropdown' name='input-dropdown'>
    {options}
  </Dropdown>
);

export const withDefaultValue = (): React.ReactElement => (
  <Dropdown
    id='with-value-dropdown'
    name='input-dropdown'
    defaultValue='value2'
  >
    {options}
  </Dropdown>
);

export const withLabel = (): React.ReactElement => (
  <Dropdown id='labeled-dropdown' name='input-dropdown' label='Dropdown label'>
    {options}
  </Dropdown>
);

export const disabled = (): React.ReactElement => (
  <Dropdown
    id='disabled-dropdown'
    name='input-dropdown'
    disabled
    label='Disabled'
  >
    {options}
  </Dropdown>
);

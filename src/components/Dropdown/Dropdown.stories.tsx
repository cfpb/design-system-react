/* eslint-disable react/jsx-handler-names */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';
import { MockOptions } from './utils';

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

export const MultiSelectWithPillsAlignedBottom: Story = {
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
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
};

const ControlledDropdown = arguments_ => {
  const [selected, setSelected] = useState([arguments_.options[0]]);
  return (
    <>
      <div className='m-btn-group u-mb30'>
        <Button
          label='Add all options'
          onClick={(): void => setSelected([...arguments_.options])}
        />
        <Button
          label='Clear all options'
          appearance='warning'
          onClick={(): void => setSelected([])}
        />
      </div>
      <Dropdown
        {...arguments_}
        onSelect={(newValue): void => setSelected(newValue)}
        value={selected}
      />
    </>
  );
};

export const AsAControlledComponent: Story = {
  render: arguments_ => <ControlledDropdown {...arguments_} />,
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
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
};

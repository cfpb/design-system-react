import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDisabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = arguments_ => (
  <Checkbox {...arguments_} id='testCheckbox' />
);

export const DefaultCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCheckbox.args = { label: 'Default checkbox' };

export const CheckboxWithHelper = Template.bind({});
CheckboxWithHelper.args = {
  ...DefaultCheckbox.args,
  helperText: 'This is optional helper text for the checkbox'
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  ...DefaultCheckbox.args,
  isLarge: true
};

export const LargeCheckboxWithHelper = Template.bind({});
LargeCheckboxWithHelper.args = {
  ...DefaultCheckbox.args,
  isLarge: true,
  helperText: 'This is optional helper text for the large checkbox'
};

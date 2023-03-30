import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Radio } from './Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDisabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = arguments_ => (
  <Radio {...arguments_} id='testRadio' />
);

export const DefaultRadio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultRadio.args = { label: 'Default Radio' };

export const RadioWithHelper = Template.bind({});
RadioWithHelper.args = {
  ...DefaultRadio.args,
  helperText: 'This is optional helper text for the radio'
};

export const LargeRadio = Template.bind({});
LargeRadio.args = {
  ...DefaultRadio.args,
  isLarge: true
};

export const LargeRadioWithHelper = Template.bind({});
LargeRadioWithHelper.args = {
  ...DefaultRadio.args,
  isLarge: true,
  helperText: 'This is optional helper text for the large radio'
};

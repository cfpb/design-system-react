import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput } from './TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TextInput',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: { control: 'select' },
    isDisabled: { control: 'boolean' }
  }
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = arguments_ => (
  <div className='m-form-field'>
    <TextInput {...arguments_} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: 'Placeholder text',
  width: 'default'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  width: 'full'
};

export const SuccessType = Template.bind({});
SuccessType.args = {
  ...Default.args,
  notificationType: 'success',
  textNotification: 'This is a success message'
};

export const WarningType = Template.bind({});
WarningType.args = {
  ...Default.args,
  notificationType: 'warning',
  textNotification: 'This is a warning message'
};

export const ErrorType = Template.bind({});
ErrorType.args = {
  ...Default.args,
  notificationType: 'error',
  textNotification: 'This is an error message'
};

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    isDisabled: { control: 'boolean' }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = arguments_ => (
  <Button {...arguments_} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  appearance: 'primary',
  size: 'default'
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  appearance: 'secondary'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  appearance: 'warning'
};

export const Super = Template.bind({});
Super.args = {
  ...Primary.args,
  size: 'super'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  size: 'full'
};

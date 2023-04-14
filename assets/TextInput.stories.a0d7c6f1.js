var a=Object.defineProperty;var o=(e,i)=>a(e,"name",{value:i,configurable:!0});import{T as r}from"./TextInput.3e91200d.js";import{j as s}from"./jsx-runtime.a3ae9b37.js";import"./Icon.ed1004f2.js";import"./index.cfa9e344.js";import"./iframe.a55327b3.js";const x={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{default:{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}},"full-width":{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}},"success-type":{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}},"warning-type":{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}},"error-type":{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}}}}},title:"Components/TextInput",component:r,argTypes:{width:{control:"select"},isDisabled:{control:"boolean"}}},t=o(e=>s("div",{className:"m-form-field",children:s(r,{...e})}),"Template"),n=t.bind({});n.args={placeholder:"Placeholder text",width:"default"};const c=t.bind({});c.args={...n.args,width:"full"};const l=t.bind({});l.args={...n.args,notificationType:"success",textNotification:"This is a success message"};const p=t.bind({});p.args={...n.args,notificationType:"warning",textNotification:"This is a warning message"};const d=t.bind({});d.args={...n.args,notificationType:"error",textNotification:"This is an error message"};const h=["Default","FullWidth","SuccessType","WarningType","ErrorType"];export{n as Default,d as ErrorType,c as FullWidth,l as SuccessType,p as WarningType,h as __namedExportsOrder,x as default};
//# sourceMappingURL=TextInput.stories.a0d7c6f1.js.map

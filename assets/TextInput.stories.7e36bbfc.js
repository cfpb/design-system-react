var a=Object.defineProperty;var o=(t,l)=>a(t,"name",{value:l,configurable:!0});import{T as n}from"./TextInput.1285bccf.js";import{j as e}from"./jsx-runtime.bea7bf86.js";import"./iframe.019e007a.js";const m={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{default:{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}},"full-width":{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}}}}},title:"Components/TextInput",component:n,argTypes:{width:{control:"select"},isDisabled:{control:"boolean"}}},r=o(t=>e("div",{className:"m-form-field",children:e(n,{...t})}),"Template"),s=r.bind({});s.args={placeholder:"Placeholder text",width:"default"};const i=r.bind({});i.args={...s.args,width:"full"};const f=["Default","FullWidth"];export{s as Default,i as FullWidth,f as __namedExportsOrder,m as default};
//# sourceMappingURL=TextInput.stories.7e36bbfc.js.map

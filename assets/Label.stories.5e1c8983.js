var a=Object.defineProperty;var e=(t,r)=>a(t,"name",{value:r,configurable:!0});import{L as o}from"./Label.d4cb79fa.js";import{T as s}from"./TextInput.c1c93c62.js";import{b as p,F as l,j as n}from"./jsx-runtime.b60c1158.js";import"./Icon.2ce81f29.js";import"./index.cfa9e344.js";import"./iframe.c705b88a.js";const L={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label } from './Label';
import { TextInput } from './TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inline: { control: 'boolean' }
  }
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = arguments_ => (
  <>
    <Label {...arguments_} htmlFor='testInput'>
      Text input label
    </Label>
    <TextInput
      id='testInput'
      name='testInput'
      type='text'
      placeholder='Example input'
    />
  </>
);

export const LabelHeading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LabelHeading.args = {};
`,locationsMap:{"label-heading":{startLoc:{col:47,line:17},endLoc:{col:1,line:29},startBody:{col:47,line:17},endBody:{col:1,line:29}}}}},title:"Components/Label",component:o,argTypes:{inline:{control:"boolean"}}},i=e(t=>p(l,{children:[n(o,{...t,htmlFor:"testInput",children:"Text input label"}),n(s,{id:"testInput",name:"testInput",type:"text",placeholder:"Example input"})]}),"Template"),m=i.bind({});m.args={};const T=["LabelHeading"];export{m as LabelHeading,T as __namedExportsOrder,L as default};
//# sourceMappingURL=Label.stories.5e1c8983.js.map

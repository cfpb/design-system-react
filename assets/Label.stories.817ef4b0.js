var a=Object.defineProperty;var e=(t,r)=>a(t,"name",{value:r,configurable:!0});import{L as o}from"./Label.1d54e59b.js";import{T as s}from"./TextInput.730db0a6.js";import{b as p,F as l,j as n}from"./jsx-runtime.a5b1be0a.js";import"./Icon.5f215216.js";import"./iframe.c029265c.js";const x={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{"label-heading":{startLoc:{col:47,line:17},endLoc:{col:1,line:29},startBody:{col:47,line:17},endBody:{col:1,line:29}}}}},title:"Components/Label",component:o,argTypes:{inline:{control:"boolean"}}},i=e(t=>p(l,{children:[n(o,{...t,htmlFor:"testInput",children:"Text input label"}),n(s,{id:"testInput",name:"testInput",type:"text",placeholder:"Example input"})]}),"Template"),m=i.bind({});m.args={};const L=["LabelHeading"];export{m as LabelHeading,L as __namedExportsOrder,x as default};
//# sourceMappingURL=Label.stories.817ef4b0.js.map

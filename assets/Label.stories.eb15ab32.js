var a=Object.defineProperty;var e=(t,r)=>a(t,"name",{value:r,configurable:!0});import{L as o}from"./Label.c987f678.js";import{T as s}from"./TextInput.1f99710e.js";import{b as p,F as l,j as n}from"./jsx-runtime.c8b0a09d.js";import"./Icon.0090dfe5.js";import"./iframe.42f00b97.js";const x={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
//# sourceMappingURL=Label.stories.eb15ab32.js.map

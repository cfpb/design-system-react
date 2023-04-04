var c=Object.defineProperty;var o=(e,n)=>c(e,"name",{value:n,configurable:!0});import{j as a,b as m,F as d}from"./jsx-runtime.bea7bf86.js";import{T as b}from"./TextInput.1285bccf.js";import"./iframe.019e007a.js";const u=["a-label"],t=o(({children:e,inline:n=!1,htmlFor:s,className:r,...l})=>{const p=[...u,n?"":"a-label__heading"],i=[r,...p].join(" ");return a("label",{...l,className:i,htmlFor:s,children:e})},"Label");try{t.displayName="Label",t.__docgenInfo={description:"",displayName:"Label",props:{inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const h={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{"label-heading":{startLoc:{col:47,line:17},endLoc:{col:1,line:29},startBody:{col:47,line:17},endBody:{col:1,line:29}}}}},title:"Components/Label",component:t,argTypes:{inline:{control:"boolean"}}},g=o(e=>m(d,{children:[a(t,{...e,htmlFor:"testInput",children:"Text input label"}),a(b,{id:"testInput",name:"testInput",type:"text",placeholder:"Example input"})]}),"Template"),y=g.bind({});y.args={};const T=["LabelHeading"];export{y as LabelHeading,T as __namedExportsOrder,h as default};
//# sourceMappingURL=Label.stories.9b9f8a6a.js.map

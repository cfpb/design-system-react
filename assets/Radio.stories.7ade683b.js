var h=Object.defineProperty;var n=(e,r)=>h(e,"name",{value:r,configurable:!0});import{b as s,j as i}from"./jsx-runtime.fed2d1b6.js";import"./iframe.a8b4a234.js";const R=["a-radio"],y=["m-form-field m-form-field__radio"],o=n(({id:e,name:r,helperText:l,className:d,isDisabled:p=!1,isLarge:c=!1,label:g,inputRef:u})=>{const m=[...R,d].join(" "),f=[...y,c?"m-form-field__lg-target":""].join(" ");return s("div",{className:f,children:[i("input",{id:e,type:"radio",name:r,className:m,ref:u,disabled:p}),s("label",{className:"a-label",htmlFor:e,children:[g,l?i("small",{className:"a-label_helper",children:l}):void 0]})]})},"Radio");try{o.displayName="Radio",o.__docgenInfo={description:"",displayName:"Radio",props:{helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}}}}}catch{}const j={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{"default-radio":{startLoc:{col:47,line:17},endLoc:{col:1,line:19},startBody:{col:47,line:17},endBody:{col:1,line:19}},"radio-with-helper":{startLoc:{col:47,line:17},endLoc:{col:1,line:19},startBody:{col:47,line:17},endBody:{col:1,line:19}},"large-radio":{startLoc:{col:47,line:17},endLoc:{col:1,line:19},startBody:{col:47,line:17},endBody:{col:1,line:19}},"large-radio-with-helper":{startLoc:{col:47,line:17},endLoc:{col:1,line:19},startBody:{col:47,line:17},endBody:{col:1,line:19}}}}},title:"Components/Radio",component:o,argTypes:{isDisabled:{control:"boolean"},isLarge:{control:"boolean"}}},a=n(e=>i(o,{...e,id:"testRadio"}),"Template"),t=a.bind({});t.args={label:"Default Radio"};const b=a.bind({});b.args={...t.args,helperText:"This is optional helper text for the radio"};const L=a.bind({});L.args={...t.args,isLarge:!0};const x=a.bind({});x.args={...t.args,isLarge:!0,helperText:"This is optional helper text for the large radio"};const H=["DefaultRadio","RadioWithHelper","LargeRadio","LargeRadioWithHelper"];export{t as DefaultRadio,L as LargeRadio,x as LargeRadioWithHelper,b as RadioWithHelper,H as __namedExportsOrder,j as default};
//# sourceMappingURL=Radio.stories.7ade683b.js.map

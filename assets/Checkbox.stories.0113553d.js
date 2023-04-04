var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{b as c,j as l}from"./jsx-runtime.bea7bf86.js";import"./iframe.019e007a.js";const g=["a-checkbox"],f=["m-form-field m-form-field__checkbox"],o=r(({id:e,name:a,helperText:s,className:i,isDisabled:p=!1,isLarge:d=!1,label:h,inputRef:b})=>{const u=[...g,i].join(" "),x=[...f,d?"m-form-field__lg-target":""].join(" ");return c("div",{className:x,children:[l("input",{id:e,type:"checkbox",name:a,className:u,ref:b,disabled:p}),c("label",{className:"a-label",htmlFor:e,children:[h,s?l("small",{className:"a-label_helper",children:s}):void 0]})]})},"Checkbox");try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}}}}}catch{}const D={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDisabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = arguments_ => (
  <Checkbox {...arguments_} id='testCheckbox' />
);

export const DefaultCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCheckbox.args = { label: 'Default checkbox' };

export const CheckboxWithHelper = Template.bind({});
CheckboxWithHelper.args = {
  ...DefaultCheckbox.args,
  helperText: 'This is optional helper text for the checkbox'
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  ...DefaultCheckbox.args,
  isLarge: true
};

export const LargeCheckboxWithHelper = Template.bind({});
LargeCheckboxWithHelper.args = {
  ...DefaultCheckbox.args,
  isLarge: true,
  helperText: 'This is optional helper text for the large checkbox'
};
`,locationsMap:{"default-checkbox":{startLoc:{col:50,line:17},endLoc:{col:1,line:19},startBody:{col:50,line:17},endBody:{col:1,line:19}},"checkbox-with-helper":{startLoc:{col:50,line:17},endLoc:{col:1,line:19},startBody:{col:50,line:17},endBody:{col:1,line:19}},"large-checkbox":{startLoc:{col:50,line:17},endLoc:{col:1,line:19},startBody:{col:50,line:17},endBody:{col:1,line:19}},"large-checkbox-with-helper":{startLoc:{col:50,line:17},endLoc:{col:1,line:19},startBody:{col:50,line:17},endBody:{col:1,line:19}}}}},title:"Components/Checkbox",component:o,argTypes:{isDisabled:{control:"boolean"},isLarge:{control:"boolean"}}},t=r(e=>l(o,{...e,id:"testCheckbox"}),"Template"),n=t.bind({});n.args={label:"Default checkbox"};const k=t.bind({});k.args={...n.args,helperText:"This is optional helper text for the checkbox"};const C=t.bind({});C.args={...n.args,isLarge:!0};const y=t.bind({});y.args={...n.args,isLarge:!0,helperText:"This is optional helper text for the large checkbox"};const j=["DefaultCheckbox","CheckboxWithHelper","LargeCheckbox","LargeCheckboxWithHelper"];export{k as CheckboxWithHelper,n as DefaultCheckbox,C as LargeCheckbox,y as LargeCheckboxWithHelper,j as __namedExportsOrder,D as default};
//# sourceMappingURL=Checkbox.stories.0113553d.js.map

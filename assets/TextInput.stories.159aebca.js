var y=Object.defineProperty;var o=(e,n)=>y(e,"name",{value:n,configurable:!0});import{j as l}from"./jsx-runtime.c24f8f73.js";import"./iframe.f59f7361.js";const g=["a-text-input"],x={default:[],full:["a-text-input__full"]};function t({id:e,name:n,type:r,className:i,width:d="default",isDisabled:p=!1,inputRef:u,...c}){const f=[...g,...x[d]],m=[i,...f].join(" ");return l("input",{"data-testid":"textInput",className:m,disabled:p,id:e,name:n,type:r,ref:u,...c})}o(t,"TextInput");try{t.displayName="TextInput",t.__docgenInfo={description:"",displayName:"TextInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"default"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"TextInputReference"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}}}}}catch{}const _={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{default:{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}},"full-width":{startLoc:{col:51,line:17},endLoc:{col:1,line:21},startBody:{col:51,line:17},endBody:{col:1,line:21}}}}},title:"Components/TextInput",component:t,argTypes:{width:{control:"select"},isDisabled:{control:"boolean"}}},a=o(e=>l("div",{className:"m-form-field",children:l(t,{...e})}),"Template"),s=a.bind({});s.args={placeholder:"Placeholder text",width:"default"};const h=a.bind({});h.args={...s.args,width:"full"};const w=["Default","FullWidth"];export{s as Default,h as FullWidth,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=TextInput.stories.159aebca.js.map

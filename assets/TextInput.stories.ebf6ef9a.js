var y=Object.defineProperty;var n=(e,o)=>y(e,"name",{value:o,configurable:!0});import{j as l}from"./jsx-runtime.42c63f9e.js";import"./iframe.faade7a4.js";const g=["text-black","placeholder-gray","py-1","px-2","border","border-gray-60"],b=["hover:border-pacific","hover:outline-1","hover:outline-pacific","hover:outline"],h=["focus:border-pacific","focus:outline-1","focus:outline-pacific","focus:outline-dotted","focus:outline-offset-2","focus:shadow-glow"],x={default:[],full:["w-full"]},T=["disabled:bg-gray-20","disabled:text-gray","disabled:cursor-not-allowed","disabled:outline-0","disabled:border-gray-60"];function t({id:e,name:o,type:r,className:i,width:d="default",isDisabled:u=!1,inputRef:c,...p}){const f=[...g,...b,...h,...T,...x[d]],m=[i,...f].join(" ");return l("input",{"data-testid":"textInput",className:m,disabled:u,id:e,name:o,type:r,ref:c,...p})}n(t,"TextInput");try{t.displayName="TextInput",t.__docgenInfo={description:"",displayName:"TextInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"default"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"TextInputReference"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}}}}}catch{}const v={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
  <TextInput {...arguments_} />
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
`,locationsMap:{default:{startLoc:{col:51,line:17},endLoc:{col:1,line:19},startBody:{col:51,line:17},endBody:{col:1,line:19}},"full-width":{startLoc:{col:51,line:17},endLoc:{col:1,line:19},startBody:{col:51,line:17},endBody:{col:1,line:19}}}}},title:"Components/TextInput",component:t,argTypes:{width:{control:"select"},isDisabled:{control:"boolean"}}},s=n(e=>l(t,{...e}),"Template"),a=s.bind({});a.args={placeholder:"Placeholder text",width:"default"};const I=s.bind({});I.args={...a.args,width:"full"};const D=["Default","FullWidth"];export{a as Default,I as FullWidth,D as __namedExportsOrder,v as default};
//# sourceMappingURL=TextInput.stories.ebf6ef9a.js.map

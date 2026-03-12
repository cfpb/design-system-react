import{T as i}from"./text-area-CR70XH6r.js";import"./jsx-runtime-u17CrQMm.js";import"./index-CcAgj1t7.js";import"./iframe-C1Fjx0nV.js";import"./preload-helper-PPVm8Dsz.js";const{expect:m,userEvent:u,within:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components (Verified)/Text inputs/Text area",tags:["autodocs"],component:i,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},e={args:{id:"Enabled",placeholder:"Enabled",name:"Enabled"},play:async({canvasElement:d})=>{const l=p(d).getByRole("textbox");await u.type(l,"Sample comment"),m(l).toHaveValue("Sample comment")}},a={args:{id:"Hover",placeholder:"Hover",name:"Hover",className:"hover"}},r={args:{id:"Focus",placeholder:"Focus",name:"Focus",className:"focus"}},s={args:{id:"Disabled",placeholder:"Disabled",name:"Disabled",isDisabled:!0}},n={args:{id:"Success",placeholder:"Success",name:"Success",status:"success"}},o={args:{id:"Warning",placeholder:"Warning",name:"Warning",status:"warning"}},c={args:{id:"Error",placeholder:"Error",name:"Error",status:"error"}},t={args:{id:"Full width",placeholder:"Full width",name:"Full width",isFullWidth:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Enabled',
    placeholder: 'Enabled',
    name: 'Enabled'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await userEvent.type(textbox, 'Sample comment');
    expect(textbox).toHaveValue('Sample comment');
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Hover',
    placeholder: 'Hover',
    name: 'Hover',
    className: 'hover'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Focus',
    placeholder: 'Focus',
    name: 'Focus',
    className: 'focus'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Disabled',
    placeholder: 'Disabled',
    name: 'Disabled',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Success',
    placeholder: 'Success',
    name: 'Success',
    status: 'success'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Warning',
    placeholder: 'Warning',
    name: 'Warning',
    status: 'warning'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Error',
    placeholder: 'Error',
    name: 'Error',
    status: 'error'
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Full width',
    placeholder: 'Full width',
    name: 'Full width',
    isFullWidth: true
  }
}`,...t.parameters?.docs?.source}}};const F=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth"];export{s as Disabled,e as Enabled,c as Error,r as Focus,t as FullWidth,a as Hover,n as Success,o as Warning,F as __namedExportsOrder,x as default};

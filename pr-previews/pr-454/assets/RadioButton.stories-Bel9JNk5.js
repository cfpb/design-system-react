/* empty css                */import{R}from"./TextIntroduction-D2z2XICC.js";import"./Dropdown-CcXW3sd0.js";import"./Checkbox-uScmMply.js";import"./Well-mGyiCRe5.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-ZDMBHX8g.js";import"./jsx-runtime-Wp9Qcrv3.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-CM1H8Tzm.js";const A={title:"Components (Verified)/Radio buttons",tags:["autodocs"],component:R,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:`Use radio buttons when the user can select exactly one option from a group. Avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically. Use [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when the user can select more than one option from a group.

Source: https://cfpb.github.io/design-system/components/radio-buttons`}}}},b="This is optional helper text",a={name:"Standard radio button",args:{id:"testRadio",label:"Standard radio button",name:"Radio select"}},r={name:"Standard radio button with helper text",args:{...a.args,id:"StandardRadioWithHelper",helperText:b}},e={name:"Large target area radio button",args:{...a.args,id:"LargeRadio",isLarge:!0,label:"Large target area radio button"}},t={name:"Large target area radio button with helper text",args:{...e.args,id:"LargeRadioWithHelper",isLarge:!0,helperText:b}};var o,n,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Standard radio button',
  args: {
    id: 'testRadio',
    label: 'Standard radio button',
    name: 'Radio select'
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Standard radio button with helper text',
  args: {
    ...StandardRadio.args,
    id: 'StandardRadioWithHelper',
    helperText
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Large target area radio button',
  args: {
    ...StandardRadio.args,
    id: 'LargeRadio',
    isLarge: true,
    label: 'Large target area radio button'
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Large target area radio button with helper text',
  args: {
    ...LargeRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const B=["StandardRadio","StandardRadioWithHelper","LargeRadio","LargeRadioWithHelper"];export{e as LargeRadio,t as LargeRadioWithHelper,a as StandardRadio,r as StandardRadioWithHelper,B as __namedExportsOrder,A as default};

/* empty css                */import{R}from"./Well.9b80cdca.js";import"./Dropdown.cb55dbcb.js";import"./Checkbox.adabeb2b.js";import"./ExpandableGroup.60ffd0aa.js";import"./Icon.ad55ad7e.js";import"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.130b0b6c.js";import"../sb-preview/runtime.js";const B={title:"Components (Verified)/Radio buttons",tags:["autodocs"],component:R,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:`Use radio buttons when the user can select exactly one option from a group. Avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically. Use [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when the user can select more than one option from a group.

Source: https://cfpb.github.io/design-system/components/radio-buttons`}}}},b="This is optional helper text",a={name:"Standard radio button",args:{id:"testRadio",label:"Standard radio button",name:"Radio select"}},r={name:"Standard radio button with helper text",args:{...a.args,id:"StandardRadioWithHelper",helperText:b}},e={name:"Large target area radio button",args:{...a.args,id:"LargeRadio",isLarge:!0,label:"Large target area radio button"}},t={name:"Large target area radio button with helper text",args:{...e.args,id:"LargeRadioWithHelper",isLarge:!0,helperText:b}};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Standard radio button',
  args: {
    id: 'testRadio',
    label: 'Standard radio button',
    name: 'Radio select'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var s,d,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const C=["StandardRadio","StandardRadioWithHelper","LargeRadio","LargeRadioWithHelper"];export{e as LargeRadio,t as LargeRadioWithHelper,a as StandardRadio,r as StandardRadioWithHelper,C as __namedExportsOrder,B as default};
//# sourceMappingURL=RadioButton.stories.e6f94902.js.map
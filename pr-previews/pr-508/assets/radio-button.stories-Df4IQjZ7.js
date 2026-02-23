import"./iframe-DgODeb6B.js";import{R as n}from"./text-introduction-BJFnjuR7.js";import"./checkbox-BeZjmoy4.js";import"./icon-weBmmX91.js";import"./well-CVZaQlu1.js";import"./paragraph-DDr16k6S.js";import"./summary-uVBhsHKo.js";import"./text-area-C_Xpqt-x.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-u17CrQMm.js";import"./index-TOAkBczq.js";const R={title:"Components (Verified)/Radio buttons",tags:["autodocs"],component:n,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:`Use radio buttons when the user can select exactly one option from a group. Avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically. Use [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when the user can select more than one option from a group.

Source: https://cfpb.github.io/design-system/components/radio-buttons`}}}},o="This is optional helper text",a={name:"Standard radio button",args:{id:"testRadio",label:"Standard radio button",name:"Radio select"}},r={name:"Standard radio button with helper text",args:{...a.args,id:"StandardRadioWithHelper",helperText:o}},e={name:"Large target area radio button",args:{...a.args,id:"LargeRadio",isLarge:!0,label:"Large target area radio button"}},t={name:"Large target area radio button with helper text",args:{...e.args,id:"LargeRadioWithHelper",isLarge:!0,helperText:o}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Standard radio button',
  args: {
    id: 'testRadio',
    label: 'Standard radio button',
    name: 'Radio select'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Standard radio button with helper text',
  args: {
    ...StandardRadio.args,
    id: 'StandardRadioWithHelper',
    helperText
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Large target area radio button',
  args: {
    ...StandardRadio.args,
    id: 'LargeRadio',
    isLarge: true,
    label: 'Large target area radio button'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Large target area radio button with helper text',
  args: {
    ...LargeRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText
  }
}`,...t.parameters?.docs?.source}}};const L=["StandardRadio","StandardRadioWithHelper","LargeRadio","LargeRadioWithHelper"];export{e as LargeRadio,t as LargeRadioWithHelper,a as StandardRadio,r as StandardRadioWithHelper,L as __namedExportsOrder,R as default};

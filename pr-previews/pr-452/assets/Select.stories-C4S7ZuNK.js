import{j as m}from"./jsx-runtime-BLchON5X.js";import{r as S}from"./index-D_VgsJHj.js";/* empty css                */import{S as d,l as g}from"./TextIntroduction-BtBHat2F.js";import"./Dropdown-CfUxnFmE.js";import"./Checkbox-C8PZvyyp.js";import"./Well-XpBeq6ld.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Ddz0oDhE.js";import{S as a}from"./testUtils-CMDZRPRi.js";import"./index-kA4PVysc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-6tNKdD3S.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-FP1pvDI1.js";const C={title:"Components (Draft)/Selects/Single select",tags:["autodocs"],component:d,argTypes:{disabled:{control:"boolean"},isMulti:{control:"boolean"}}};function o({...e}){const[i,c]=S.useState(""),p=l=>{Array.isArray(l)||c(l?.value??"")};return m.jsx(g,{...e,value:i,onChange:p})}const r={render:e=>o(e),name:"Enabled",args:{id:"singleSelect",label:"Enabled",options:a}},n={render:e=>o(e),name:"Hover",args:{id:"singleSelect",label:"Hover",options:a,className:"hover"}},s={render:e=>o(e),name:"Focus",args:{id:"singleSelect",label:"Focus",options:a,className:"focus"}},t={render:e=>o(e),name:"Disabled",args:{id:"singleSelect",label:"Disabled",options:a,disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const A=["SingleSelect","SingleSelectHover","SingleSelectFocus","SingleSelectDisabled"];export{r as SingleSelect,t as SingleSelectDisabled,s as SingleSelectFocus,n as SingleSelectHover,A as __namedExportsOrder,C as default};

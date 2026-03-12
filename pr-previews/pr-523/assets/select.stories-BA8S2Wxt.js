import{j as m}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-C1Fjx0nV.js";import{S as d,n as g}from"./text-introduction-DO6dbPKh.js";import"./checkbox-DMrXPKMj.js";import"./icon-DgNA2ciD.js";import"./link-D2VXf1jz.js";import"./well-BSinepsg.js";import"./paragraph-BrOTU1oo.js";import"./secondary-nav-BRzj2-Uh.js";import"./summary-CXQrXsfd.js";import"./text-area-CR70XH6r.js";import{S as t}from"./test-utils-CMDZRPRi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcAgj1t7.js";const j={title:"Components (Draft)/Selects/Single select",tags:["autodocs"],component:d,argTypes:{disabled:{control:"boolean"},isMulti:{control:"boolean"}}};function o({...e}){const[c,i]=S.useState(""),p=l=>{Array.isArray(l)||i(l?.value??"")};return m.jsx(g,{...e,value:c,onChange:p})}const r={render:e=>o(e),name:"Enabled",args:{id:"singleSelect",label:"Enabled",options:t}},n={render:e=>o(e),name:"Hover",args:{id:"singleSelect",label:"Hover",options:t,className:"hover"}},s={render:e=>o(e),name:"Focus",args:{id:"singleSelect",label:"Focus",options:t,className:"focus"}},a={render:e=>o(e),name:"Disabled",args:{id:"singleSelect",label:"Disabled",options:t,disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const y=["SingleSelect","SingleSelectHover","SingleSelectFocus","SingleSelectDisabled"];export{r as SingleSelect,a as SingleSelectDisabled,s as SingleSelectFocus,n as SingleSelectHover,y as __namedExportsOrder,j as default};

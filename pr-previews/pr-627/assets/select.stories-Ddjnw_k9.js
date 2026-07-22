import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{i,n as a,r as o,t as s}from"./select-BznogPnJ.js";import{n as c,r as l}from"./test-utilities-B9dsBHqO.js";function u({...e}){let[t,n]=(0,d.useState)(``),r=e=>{Array.isArray(e)||n(e?.value??``)};return(0,f.jsx)(o,{...e,value:t,onChange:r})}var d,f,p,m,h,g,_,v;e((()=>{d=t(n(),1),a(),i(),l(),f=r(),p={title:`Components (Draft)/Selects/Single select`,tags:[`autodocs`],component:s,argTypes:{disabled:{control:`boolean`},isMulti:{control:`boolean`}}},m={render:e=>u(e),name:`Enabled`,args:{id:`singleSelect`,label:`Enabled`,options:c}},h={render:e=>u(e),name:`Hover`,args:{id:`singleSelect`,label:`Hover`,options:c,className:`hover`}},g={render:e=>u(e),name:`Focus`,args:{id:`singleSelect`,label:`Focus`,options:c,className:`focus`}},_={render:e=>u(e),name:`Disabled`,args:{id:`singleSelect`,label:`Disabled`,options:c,disabled:!0}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v=[`SingleSelect`,`SingleSelectHover`,`SingleSelectFocus`,`SingleSelectDisabled`]}))();export{m as SingleSelect,_ as SingleSelectDisabled,g as SingleSelectFocus,h as SingleSelectHover,v as __namedExportsOrder,p as default};
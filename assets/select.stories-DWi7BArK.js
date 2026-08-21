import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a,t as o}from"./select-BLw_57z2.js";import{n as s,r as c}from"./test-utilities-4Te-BJTF.js";function l({...e}){let[t,n]=(0,u.useState)(``),r=e=>{Array.isArray(e)||n(e?.value??``)};return(0,d.jsx)(a,{...e,value:t,onChange:r})}var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=t(),i(),r(),c(),d=n(),f={title:`Components (Draft)/Selects/Single select`,tags:[`autodocs`],component:o,argTypes:{disabled:{control:`boolean`},isMulti:{control:`boolean`}}},p={render:e=>l(e),name:`Enabled`,args:{id:`singleSelect`,label:`Enabled`,options:s}},m={render:e=>l(e),name:`Hover`,args:{id:`singleSelect`,label:`Hover`,options:s,className:`hover`}},h={render:e=>l(e),name:`Focus`,args:{id:`singleSelect`,label:`Focus`,options:s,className:`focus`}},g={render:e=>l(e),name:`Disabled`,args:{id:`singleSelect`,label:`Disabled`,options:s,disabled:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_=[`SingleSelect`,`SingleSelectHover`,`SingleSelectFocus`,`SingleSelectDisabled`]})))()}v();export{p as SingleSelect,g as SingleSelectDisabled,h as SingleSelectFocus,m as SingleSelectHover,_ as __namedExportsOrder,f as default};
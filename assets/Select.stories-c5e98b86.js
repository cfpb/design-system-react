import{j as x}from"./jsx-runtime-eba35cff.js";import{r as F}from"./index-9053fc1e.js";/* empty css                */import{S as O,l as W}from"./TextIntroduction-ed53788c.js";import"./Dropdown-6a8553fc.js";import"./Checkbox-7e7ab2e2.js";import"./ExpandableGroup-3773f0a5.js";import"./Icon-a1f52d1d.js";import"./Well-11b17e27.js";import"./Paragraph-18b341b1.js";import"./TextArea-441eb386.js";import{S as a}from"./testUtils-a101b82b.js";import"./_commonjsHelpers-725317a4.js";import"./index-798a71e2.js";import"./index-eeaea43d.js";import"./iframe-5b7f846e.js";const K={title:"Components (Draft)/Selects/Single select",tags:["autodocs"],component:O,argTypes:{disabled:{control:"boolean"},isMulti:{control:"boolean"}}};function l({...e}){const[D,E]=F.useState(""),H=r=>{Array.isArray(r)||E((r==null?void 0:r.value)??"")};return x.jsx(W,{...e,value:D,onChange:H})}const s={render:e=>l(e),name:"Enabled",args:{id:"singleSelect",label:"Enabled",options:a}},n={render:e=>l(e),name:"Hover",args:{id:"singleSelect",label:"Hover",options:a,className:"hover"}},t={render:e=>l(e),name:"Focus",args:{id:"singleSelect",label:"Focus",options:a,className:"focus"}},o={render:e=>l(e),name:"Disabled",args:{id:"singleSelect",label:"Disabled",options:a,disabled:!0}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,S,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
}`,...(d=(S=n.parameters)==null?void 0:S.docs)==null?void 0:d.source}}};var g,u,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,v,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const L=["SingleSelect","SingleSelectHover","SingleSelectFocus","SingleSelectDisabled"];export{s as SingleSelect,o as SingleSelectDisabled,t as SingleSelectFocus,n as SingleSelectHover,L as __namedExportsOrder,K as default};

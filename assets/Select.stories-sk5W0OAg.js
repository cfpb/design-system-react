import{j as x}from"./jsx-runtime-Wp9Qcrv3.js";import{r as F}from"./index-KmaxkdDD.js";/* empty css                */import{S as O,l as W}from"./TextIntroduction-BI_P_ROG.js";import"./Dropdown-DYjP2NxQ.js";import"./Checkbox-PbiD6xC7.js";import"./Well-CYH3hM8Q.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-CGa-TkRs.js";import{S as o}from"./testUtils-CMDZRPRi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-vOfTgWyt.js";const I={title:"Components (Draft)/Selects/Single select",tags:["autodocs"],component:O,argTypes:{disabled:{control:"boolean"},isMulti:{control:"boolean"}}};function l({...e}){const[D,E]=F.useState(""),H=r=>{Array.isArray(r)||E((r==null?void 0:r.value)??"")};return x.jsx(W,{...e,value:D,onChange:H})}const s={render:e=>l(e),name:"Enabled",args:{id:"singleSelect",label:"Enabled",options:o}},n={render:e=>l(e),name:"Hover",args:{id:"singleSelect",label:"Hover",options:o,className:"hover"}},t={render:e=>l(e),name:"Focus",args:{id:"singleSelect",label:"Focus",options:o,className:"focus"}},a={render:e=>l(e),name:"Disabled",args:{id:"singleSelect",label:"Disabled",options:o,disabled:!0}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,S,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,v,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,...(_=(v=a.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const J=["SingleSelect","SingleSelectHover","SingleSelectFocus","SingleSelectDisabled"];export{s as SingleSelect,a as SingleSelectDisabled,t as SingleSelectFocus,n as SingleSelectHover,J as __namedExportsOrder,I as default};

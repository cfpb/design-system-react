import{j as O}from"./index.7eca609e.js";import{r as E}from"./index.ca1bfdbe.js";/* empty css                */import{S as W,k as h}from"./TextIntroduction.2a206dde.js";import"./Dropdown.d184a5f8.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.9139cae2.js";import"./Icon.28948e61.js";import"./Well.e7055d12.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import{S as a}from"./testUtils.c94c26c8.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.946277fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.67af5abc.js";import"./index.f108a8f5.js";import"./iframe.14d753f4.js";import"../sb-preview/runtime.js";const Q={title:"Components (Draft)/Selects/Single select",tags:["autodocs"],component:W,argTypes:{disabled:{control:"boolean"},isMulti:{control:"boolean"}}};function l({...e}){const[H,x]=E.exports.useState(""),F=r=>{var i;Array.isArray(r)||x((i=r==null?void 0:r.value)!=null?i:"")};return O.exports.jsx(h,{...e,value:H,onChange:F})}const s={render:e=>l(e),name:"Enabled",args:{id:"singleSelect",label:"Enabled",options:a}},n={render:e=>l(e),name:"Hover",args:{id:"singleSelect",label:"Hover",options:a,className:"hover"}},t={render:e=>l(e),name:"Focus",args:{id:"singleSelect",label:"Focus",options:a,className:"focus"}},o={render:e=>l(e),name:"Disabled",args:{id:"singleSelect",label:"Disabled",options:a,disabled:!0}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var S,d,g;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,b,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,_,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,...(D=(_=o.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const U=["SingleSelect","SingleSelectHover","SingleSelectFocus","SingleSelectDisabled"];export{s as SingleSelect,o as SingleSelectDisabled,t as SingleSelectFocus,n as SingleSelectHover,U as __namedExportsOrder,Q as default};

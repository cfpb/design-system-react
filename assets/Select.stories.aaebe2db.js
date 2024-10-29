import{j as O}from"./index.7eca609e.js";import{r as E}from"./index.ca1bfdbe.js";/* empty css                */import{S as W,m as h}from"./TextIntroduction.f20d8508.js";import"./Dropdown.732db256.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.d79b99de.js";import"./Icon.4a209334.js";import"./Well.44588516.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import{S as a}from"./testUtils.c94c26c8.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.24c2c4ec.js";import"./index.49a47dde.js";import"./iframe.86548b81.js";import"../sb-preview/runtime.js";const P={title:"Components (Draft)/Selects/Single select",tags:["autodocs"],component:W,argTypes:{disabled:{control:"boolean"},isMulti:{control:"boolean"}}};function l({...e}){const[H,x]=E.exports.useState(""),F=r=>{var i;Array.isArray(r)||x((i=r==null?void 0:r.value)!=null?i:"")};return O.exports.jsx(h,{...e,value:H,onChange:F})}const s={render:e=>l(e),name:"Enabled",args:{id:"singleSelect",label:"Enabled",options:a}},n={render:e=>l(e),name:"Hover",args:{id:"singleSelect",label:"Hover",options:a,className:"hover"}},t={render:e=>l(e),name:"Focus",args:{id:"singleSelect",label:"Focus",options:a,className:"focus"}},o={render:e=>l(e),name:"Disabled",args:{id:"singleSelect",label:"Disabled",options:a,disabled:!0}};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var S,d,g;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(_=o.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Q=["SingleSelect","SingleSelectHover","SingleSelectFocus","SingleSelectDisabled"];export{s as SingleSelect,o as SingleSelectDisabled,t as SingleSelectFocus,n as SingleSelectHover,Q as __namedExportsOrder,P as default};

import{j as r}from"./jsx-runtime-Wp9Qcrv3.js";import{D,M as t,B as W}from"./Dropdown-CexMNvIj.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-livxNL0y.js";import"./Checkbox-uScmMply.js";import"./index-DUolvyrz.js";import"./Icon-C1dHVwIg.js";import"./iframe-ozxYjCQ9.js";const{useArgs:ee,useState:te}=__STORYBOOK_MODULE_PREVIEW_API__,me={title:"Components (Draft)/Dropdowns",tags:["autodocs"],component:D,parameters:{docs:{description:{component:`Dropdowns allow the user to choose from a finite list of options. They are not always the best choice from a usability perspective; see the <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects#use-cases'>use cases documentation</a> for more details.

Source: <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects' target='_blank'>https://cfpb.github.io/design-system/components/dropdowns-and-multiselects</a>`}}}},oe=-1;function l({...e}){const[w,s]=te(e.value),[,n]=ee();return r.jsx(D,{...e,value:w,onSelect:a=>{s(a),n({value:a})}})}const o={render:e=>l(e),name:"Default dropdown",args:{label:"Default Dropdown",id:"dropdown",options:t,value:[t[0]]}},i={render:e=>l(e),name:"With error",args:{...o.args,id:"WithError",error:!0,label:"With Error"}},u={render:e=>l(e),name:"With default value",args:{...o.args,id:"WithDefaultValue",value:t.at(oe),label:"With Default Value"}},c={render:e=>l(e),args:{...o.args,id:"Disabled",label:"Disabled",isDisabled:!0}},p={render:e=>l(e),name:"Multi-select",args:{...o.args,options:[...t],id:"MultiSelect",isMulti:!0,label:"Multi-select"}},d={render:e=>l(e),name:"Multi-select with default value (and pills above)",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithDefaultValue",isMulti:!0,label:"Multi-select with default value (and pills above)"}},m={render:e=>l(e),name:"Multi-select with checkboxes",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxes",isMulti:!0,label:"Multi-select with checkboxes",pillAlign:"bottom",withCheckbox:!0}},h={render:e=>l(e),name:"Multi-select with pills bottom-aligned",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithPillsAlignedBottom",isMulti:!0,label:"Multi-select with pills bottom-aligned",pillAlign:"bottom"}},g={render:e=>l(e),name:"Multi-select with checkboxes, without pills",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxesWithoutPills",isMulti:!0,label:"Multi-select with checkboxes, without pills",pillAlign:"hide",withCheckbox:!0}},b={render:e=>l(e),name:"Multi-select with checkboxes, without bottom clear all button",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxesWithoutClearAllButton",isMulti:!0,label:"Multi-select with checkboxes, without clear all button",pillAlign:"bottom",withCheckbox:!0,showClearAllSelectedButton:!1}};function le({...e}){const[w,s]=te(e.value),[,n]=ee();return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"m-btn-group u-mb30",children:[r.jsx(W,{label:"Add all options",onClick:()=>{s([...t]),n({value:[...t]})}}),r.jsx(W,{label:"Clear all options",appearance:"warning",onClick:()=>{s([]),n({value:[]})}})]}),r.jsx(D,{...e,value:w,showClearAllSelectedButton:!1,onSelect:a=>{s(a),n({value:a})}})]})}const M={name:"As a controlled component",render:e=>le(e),args:{...o.args,options:[...t],value:[t[0]],id:"AsAControlledComponent",isMulti:!0,label:"As a controlled component",pillAlign:"bottom"}};var f,k,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Default dropdown',
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions,
    value: [MockOptions[0]]
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,x,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With error',
  args: {
    ...DefaultDropdown.args,
    id: 'WithError',
    error: true,
    label: 'With Error'
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,_,O;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With default value',
  args: {
    ...DefaultDropdown.args,
    id: 'WithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
}`,...(O=(_=u.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var E,B,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  args: {
    ...DefaultDropdown.args,
    id: 'Disabled',
    label: 'Disabled',
    isDisabled: true
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,j,y;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'MultiSelect',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(y=(j=p.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var T,L,N;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with default value (and pills above)',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithDefaultValue',
    isMulti: true,
    label: 'Multi-select with default value (and pills above)'
  }
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,I,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with checkboxes',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxes',
    isMulti: true,
    label: 'Multi-select with checkboxes',
    pillAlign: 'bottom',
    withCheckbox: true
  }
}`,...(F=(I=m.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var K,U,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with pills bottom-aligned',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithPillsAlignedBottom',
    isMulti: true,
    label: 'Multi-select with pills bottom-aligned',
    pillAlign: 'bottom'
  }
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var q,z,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with checkboxes, without pills',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesWithoutPills',
    isMulti: true,
    label: 'Multi-select with checkboxes, without pills',
    pillAlign: 'hide',
    withCheckbox: true
  }
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,Q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select with checkboxes, without bottom clear all button',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'MultiSelectWithCheckboxesWithoutClearAllButton',
    isMulti: true,
    label: 'Multi-select with checkboxes, without clear all button',
    pillAlign: 'bottom',
    withCheckbox: true,
    showClearAllSelectedButton: false
  }
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'As a controlled component',
  render: _arguments => AsAControlled(_arguments),
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    value: [MockOptions[0]],
    id: 'AsAControlledComponent',
    isMulti: true,
    label: 'As a controlled component',
    pillAlign: 'bottom'
  }
}`,...($=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const he=["DefaultDropdown","WithError","WithDefaultValue","Disabled","MultiSelect","MultiSelectWithDefaultValue","MultiSelectWithCheckboxes","MultiSelectWithPillsAlignedBottom","MultiSelectWithCheckboxesWithoutPills","MultiSelectWithCheckboxesWithoutClearAllButton","AsAControlledComponent"];export{M as AsAControlledComponent,o as DefaultDropdown,c as Disabled,p as MultiSelect,m as MultiSelectWithCheckboxes,b as MultiSelectWithCheckboxesWithoutClearAllButton,g as MultiSelectWithCheckboxesWithoutPills,d as MultiSelectWithDefaultValue,h as MultiSelectWithPillsAlignedBottom,u as WithDefaultValue,i as WithError,he as __namedExportsOrder,me as default};

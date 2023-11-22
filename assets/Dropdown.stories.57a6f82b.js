import{D,M as t,B as W}from"./Dropdown.3168c236.js";import{j as M,a as f,F as le}from"./jsx-runtime.54133100.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./Checkbox.ad7351d6.js";import"./index.cfa9e344.js";import"./Icon.42c00050.js";import"./iframe.83bf366e.js";import"../sb-preview/runtime.js";const{useArgs:te,useState:oe}=__STORYBOOK_MODULE_CLIENT_API__,be={title:"Components (Draft)/Dropdowns",component:D,parameters:{docs:{description:{component:`Dropdowns allow the user to choose from a finite list of options. They are not always the best choice from a usability perspective; see the <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects#use-cases'>use cases documentation</a> for more details.

Source: <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects' target='_blank'>https://cfpb.github.io/design-system/components/dropdowns-and-multiselects</a>`}}}},re=-1;function l({...e}){const[w,r]=oe(e.value),[,s]=te();return M(D,{...e,value:w,onSelect:n=>{r(n),s({value:n})}})}const o={render:e=>l(e),name:"Default dropdown",args:{label:"Default Dropdown",id:"dropdown",options:t,value:[t[0]]}},a={render:e=>l(e),name:"With error",args:{...o.args,id:"WithError",error:!0,label:"With Error"}},i={render:e=>l(e),name:"With default value",args:{...o.args,id:"WithDefaultValue",value:t.at(re),label:"With Default Value"}},u={render:e=>l(e),args:{...o.args,id:"Disabled",label:"Disabled",isDisabled:!0}},c={render:e=>l(e),name:"Multi-select",args:{...o.args,options:[...t],id:"MultiSelect",isMulti:!0,label:"Multi-select"}},p={render:e=>l(e),name:"Multi-select with default value (and pills above)",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithDefaultValue",isMulti:!0,label:"Multi-select with default value (and pills above)"}},d={render:e=>l(e),name:"Multi-select with checkboxes",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxes",isMulti:!0,label:"Multi-select with checkboxes",pillAlign:"bottom",withCheckbox:!0}},m={render:e=>l(e),name:"Multi-select with pills bottom-aligned",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithPillsAlignedBottom",isMulti:!0,label:"Multi-select with pills bottom-aligned",pillAlign:"bottom"}},h={render:e=>l(e),name:"Multi-select with checkboxes, without pills",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxesWithoutPills",isMulti:!0,label:"Multi-select with checkboxes, without pills",pillAlign:"hide",withCheckbox:!0}},g={render:e=>l(e),name:"Multi-select with checkboxes, without bottom clear all button",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxesWithoutClearAllButton",isMulti:!0,label:"Multi-select with checkboxes, without clear all button",pillAlign:"bottom",withCheckbox:!0,showClearAllSelectedButton:!1}};function se({...e}){const[w,r]=oe(e.value),[,s]=te();return f(le,{children:[f("div",{className:"m-btn-group u-mb30",children:[M(W,{label:"Add all options",onClick:()=>{r([...t]),s({value:[...t]})}}),M(W,{label:"Clear all options",appearance:"warning",onClick:()=>{r([]),s({value:[]})}})]}),M(D,{...e,value:w,showClearAllSelectedButton:!1,onSelect:n=>{r(n),s({value:n})}})]})}const b={name:"As a controlled component",render:e=>se(e),args:{...o.args,options:[...t],value:[t[0]],id:"AsAControlledComponent",isMulti:!0,label:"As a controlled component",pillAlign:"bottom"}};var k,S,A;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Default dropdown',
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions,
    value: [MockOptions[0]]
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var C,v,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With error',
  args: {
    ...DefaultDropdown.args,
    id: 'WithError',
    error: true,
    label: 'With Error'
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var _,O,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With default value',
  args: {
    ...DefaultDropdown.args,
    id: 'WithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
}`,...(E=(O=i.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var B,P,V;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  args: {
    ...DefaultDropdown.args,
    id: 'Disabled',
    label: 'Disabled',
    isDisabled: true
  }
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var T,y,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'MultiSelect',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(L=(y=c.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var N,j,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(j=p.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var I,K,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(K=d.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,Y,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var z,G,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Me=["DefaultDropdown","WithError","WithDefaultValue","Disabled","MultiSelect","MultiSelectWithDefaultValue","MultiSelectWithCheckboxes","MultiSelectWithPillsAlignedBottom","MultiSelectWithCheckboxesWithoutPills","MultiSelectWithCheckboxesWithoutClearAllButton","AsAControlledComponent"];export{b as AsAControlledComponent,o as DefaultDropdown,u as Disabled,c as MultiSelect,d as MultiSelectWithCheckboxes,g as MultiSelectWithCheckboxesWithoutClearAllButton,h as MultiSelectWithCheckboxesWithoutPills,p as MultiSelectWithDefaultValue,m as MultiSelectWithPillsAlignedBottom,i as WithDefaultValue,a as WithError,Me as __namedExportsOrder,be as default};
//# sourceMappingURL=Dropdown.stories.57a6f82b.js.map

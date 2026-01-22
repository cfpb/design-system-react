import{j as l}from"./jsx-runtime-BLchON5X.js";import{D,M as t,B as W}from"./Dropdown-BAS5xsjk.js";import"./index-kA4PVysc.js";import"./index-D_VgsJHj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./Checkbox-C8PZvyyp.js";import"./index-6tNKdD3S.js";import"./iframe-ChmeYw71.js";const{useArgs:f,useState:k}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Components (Draft)/Dropdowns",tags:["autodocs"],component:D,parameters:{docs:{description:{component:`Dropdowns allow the user to choose from a finite list of options. They are not always the best choice from a usability perspective; see the <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects#use-cases'>use cases documentation</a> for more details.

Source: <a href='https://cfpb.github.io/design-system/components/dropdowns-and-multiselects' target='_blank'>https://cfpb.github.io/design-system/components/dropdowns-and-multiselects</a>`}}}},S=-1;function r({...e}){const[w,s]=k(e.value),[,n]=f();return l.jsx(D,{...e,value:w,onSelect:a=>{s(a),n({value:a})}})}const o={render:e=>r(e),name:"Default dropdown",args:{label:"Default Dropdown",id:"dropdown",options:t,value:[t[0]]}},i={render:e=>r(e),name:"With error",args:{...o.args,id:"WithError",error:!0,label:"With Error"}},u={render:e=>r(e),name:"With default value",args:{...o.args,id:"WithDefaultValue",value:t.at(S),label:"With Default Value"}},c={render:e=>r(e),args:{...o.args,id:"Disabled",label:"Disabled",isDisabled:!0}},p={render:e=>r(e),name:"Multi-select",args:{...o.args,options:[...t],id:"MultiSelect",isMulti:!0,label:"Multi-select"}},d={render:e=>r(e),name:"Multi-select with default value (and pills above)",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithDefaultValue",isMulti:!0,label:"Multi-select with default value (and pills above)"}},m={render:e=>r(e),name:"Multi-select with checkboxes",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxes",isMulti:!0,label:"Multi-select with checkboxes",pillAlign:"bottom",withCheckbox:!0}},h={render:e=>r(e),name:"Multi-select with pills bottom-aligned",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithPillsAlignedBottom",isMulti:!0,label:"Multi-select with pills bottom-aligned",pillAlign:"bottom"}},g={render:e=>r(e),name:"Multi-select with checkboxes, without pills",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxesWithoutPills",isMulti:!0,label:"Multi-select with checkboxes, without pills",pillAlign:"hide",withCheckbox:!0}},b={render:e=>r(e),name:"Multi-select with checkboxes, without bottom clear all button",args:{...o.args,options:[...t],value:[t[0]],id:"MultiSelectWithCheckboxesWithoutClearAllButton",isMulti:!0,label:"Multi-select with checkboxes, without clear all button",pillAlign:"bottom",withCheckbox:!0,showClearAllSelectedButton:!1}};function A({...e}){const[w,s]=k(e.value),[,n]=f();return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"m-btn-group u-mb30",children:[l.jsx(W,{label:"Add all options",onClick:()=>{s([...t]),n({value:[...t]})}}),l.jsx(W,{label:"Clear all options",appearance:"warning",onClick:()=>{s([]),n({value:[]})}})]}),l.jsx(D,{...e,value:w,showClearAllSelectedButton:!1,onSelect:a=>{s(a),n({value:a})}})]})}const M={name:"As a controlled component",render:e=>A(e),args:{...o.args,options:[...t],value:[t[0]],id:"AsAControlledComponent",isMulti:!0,label:"As a controlled component",pillAlign:"bottom"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Default dropdown',
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions,
    value: [MockOptions[0]]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With error',
  args: {
    ...DefaultDropdown.args,
    id: 'WithError',
    error: true,
    label: 'With Error'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'With default value',
  args: {
    ...DefaultDropdown.args,
    id: 'WithDefaultValue',
    value: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  args: {
    ...DefaultDropdown.args,
    id: 'Disabled',
    label: 'Disabled',
    isDisabled: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _arguments => DropdownWrapper(_arguments),
  name: 'Multi-select',
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'MultiSelect',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const T=["DefaultDropdown","WithError","WithDefaultValue","Disabled","MultiSelect","MultiSelectWithDefaultValue","MultiSelectWithCheckboxes","MultiSelectWithPillsAlignedBottom","MultiSelectWithCheckboxesWithoutPills","MultiSelectWithCheckboxesWithoutClearAllButton","AsAControlledComponent"];export{M as AsAControlledComponent,o as DefaultDropdown,c as Disabled,p as MultiSelect,m as MultiSelectWithCheckboxes,b as MultiSelectWithCheckboxesWithoutClearAllButton,g as MultiSelectWithCheckboxesWithoutPills,d as MultiSelectWithDefaultValue,h as MultiSelectWithPillsAlignedBottom,u as WithDefaultValue,i as WithError,T as __namedExportsOrder,y as default};

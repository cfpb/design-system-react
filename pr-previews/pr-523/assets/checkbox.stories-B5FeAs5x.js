import{j as k}from"./jsx-runtime-u17CrQMm.js";import{C}from"./checkbox-MVDFLC6V.js";import{C as r,a as _}from"./checkbox.utils-B_4KQG-R.js";import"./index-B2uN3kL5.js";import"./iframe-CpPqn2aa.js";import"./preload-helper-PPVm8Dsz.js";const{expect:u,userEvent:h,waitFor:g,within:x}=__STORYBOOK_MODULE_TEST__,B={title:"Components (Verified)/Checkboxes/Checkbox",tags:["autodocs"],component:C,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:"Source: https://cfpb.github.io/design-system/components/checkboxes"}}}},s={render:e=>k.jsx(_,{...e}),name:"Enabled",args:{id:"enabled",label:"Enabled"},play:async({canvasElement:e})=>{const a=x(e);await g(()=>u(a.getByRole("checkbox")).not.toBeChecked()),await h.click(a.getByRole("checkbox")),await g(()=>u(a.getByRole("checkbox")).toBeChecked())}},n={render:e=>r(e),name:"Hover",args:{id:"hover",inputClassName:"hover",label:"Hover"}},c={render:e=>r(e),name:"Focus",args:{id:"focus",inputClassName:"focus",label:"Focus"}},t={render:e=>r(e),name:"Selected",args:{id:"selected",label:"Selected",checked:!0}},o={render:e=>r(e),name:"Disabled",args:{id:"disabled",label:"Disabled",checked:!1,disabled:!0},play:async({canvasElement:e})=>{const b=x(e).getByRole("checkbox");await h.click(b),u(b).toBeDisabled(),u(b).not.toBeChecked()}},d={render:e=>r(e),name:"Disabled/selected",args:{id:"disabled/selected",label:"Disabled/selected",checked:!0,disabled:!0}},l={render:e=>r(e),name:"Success",args:{id:"success",label:"Success",status:"success"}},i={render:e=>r(e),name:"Warning",args:{id:"warning",label:"Warning",status:"warning"}},p={render:e=>r(e),name:"Error",args:{id:"error",label:"Error",status:"error"}},m={render:e=>r(e),name:"With helper text",args:{id:"WithHelper",label:"Label",helperText:"This is optional helper text"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: _arguments => <CheckboxTestWrapper {..._arguments} />,
  name: 'Enabled',
  args: {
    id: 'enabled',
    label: 'Enabled'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => expect(canvas.getByRole('checkbox')).not.toBeChecked());
    await userEvent.click(canvas.getByRole('checkbox'));
    await waitFor(() => expect(canvas.getByRole('checkbox')).toBeChecked());
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'hover',
    inputClassName: 'hover',
    label: 'Hover'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'focus',
    inputClassName: 'focus',
    label: 'Focus'
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Selected',
  args: {
    id: 'selected',
    label: 'Selected',
    checked: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'disabled',
    label: 'Disabled',
    checked: false,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(checkbox).toBeDisabled();
    expect(checkbox).not.toBeChecked();
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled/selected',
  args: {
    id: 'disabled/selected',
    label: 'Disabled/selected',
    checked: true,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Success',
  args: {
    id: 'success',
    label: 'Success',
    status: 'success'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Warning',
  args: {
    id: 'warning',
    label: 'Warning',
    status: 'warning'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Error',
  args: {
    id: 'error',
    label: 'Error',
    status: 'error'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'WithHelper',
    label: 'Label',
    helperText: 'This is optional helper text'
  }
}`,...m.parameters?.docs?.source}}};const D=["Enabled","Hover","Focus","Selected","Disabled","Disabledselected","Success","Warning","Error","WithHelperText"];export{o as Disabled,d as Disabledselected,s as Enabled,p as Error,c as Focus,n as Hover,t as Selected,l as Success,i as Warning,m as WithHelperText,D as __namedExportsOrder,B as default};

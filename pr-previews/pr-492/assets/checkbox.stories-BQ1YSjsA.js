import{j as k}from"./jsx-runtime-u17CrQMm.js";import{C}from"./checkbox-DOQ6Pv1h.js";import{C as a,a as _}from"./checkbox.utils-D3n50yV4.js";import"./index-BqV2d7t5.js";import"./iframe-rUo5TuFQ.js";import"./preload-helper-PPVm8Dsz.js";const{expect:u,userEvent:h,waitFor:g,within:x}=__STORYBOOK_MODULE_TEST__,B={title:"Components (Verified)/Checkboxes/Checkbox",tags:["autodocs"],component:C,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:"Source: https://cfpb.github.io/design-system/components/checkboxes"}}}},n={render:e=>k.jsx(_,{...e}),name:"Enabled",args:{id:"enabled",label:"Enabled"},play:async({canvasElement:e})=>{const r=x(e);await g(()=>u(r.getByRole("checkbox",{name:/enabled/i})).not.toBeChecked()),await h.click(r.getByRole("checkbox",{name:/enabled/i})),await g(()=>u(r.getByRole("checkbox",{name:/enabled/i})).toBeChecked())}},s={render:e=>a(e),name:"Hover",args:{id:"hover",inputClassName:"hover",label:"Hover"}},c={render:e=>a(e),name:"Focus",args:{id:"focus",inputClassName:"focus",label:"Focus"}},t={render:e=>a(e),name:"Selected",args:{id:"selected",label:"Selected",checked:!0}},o={render:e=>a(e),name:"Disabled",args:{id:"disabled",label:"Disabled",checked:!1,disabled:!0},play:async({canvasElement:e})=>{const b=x(e).getByRole("checkbox",{name:/disabled/i});await h.click(b),u(b).toBeDisabled(),u(b).not.toBeChecked()}},d={render:e=>a(e),name:"Disabled/selected",args:{id:"disabled/selected",label:"Disabled/selected",checked:!0,disabled:!0}},l={render:e=>a(e),name:"Success",args:{id:"success",label:"Success",status:"success"}},i={render:e=>a(e),name:"Warning",args:{id:"warning",label:"Warning",status:"warning"}},m={render:e=>a(e),name:"Error",args:{id:"error",label:"Error",status:"error"}},p={render:e=>a(e),name:"With helper text",args:{id:"WithHelper",label:"Label",helperText:"This is optional helper text"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: /enabled/i
    })).not.toBeChecked());
    await userEvent.click(canvas.getByRole('checkbox', {
      name: /enabled/i
    }));
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: /enabled/i
    })).toBeChecked());
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'hover',
    inputClassName: 'hover',
    label: 'Hover'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const checkbox = canvas.getByRole('checkbox', {
      name: /disabled/i
    });
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Error',
  args: {
    id: 'error',
    label: 'Error',
    status: 'error'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'WithHelper',
    label: 'Label',
    helperText: 'This is optional helper text'
  }
}`,...p.parameters?.docs?.source}}};const D=["Enabled","Hover","Focus","Selected","Disabled","Disabledselected","Success","Warning","Error","WithHelperText"];export{o as Disabled,d as Disabledselected,n as Enabled,m as Error,c as Focus,s as Hover,t as Selected,l as Success,i as Warning,p as WithHelperText,D as __namedExportsOrder,B as default};

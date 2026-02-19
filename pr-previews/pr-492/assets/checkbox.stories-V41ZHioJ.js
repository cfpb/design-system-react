import{C as x}from"./checkbox-D1W6yVVa.js";import{C as a}from"./checkbox.utils-CX7c68zd.js";import"./jsx-runtime-u17CrQMm.js";import"./index-D9x_oo6z.js";import"./iframe-C5txrvMP.js";import"./preload-helper-PPVm8Dsz.js";const{expect:s,userEvent:h,waitFor:g,within:k}=__STORYBOOK_MODULE_TEST__,W={title:"Components (Verified)/Checkboxes/Checkbox",tags:["autodocs"],component:x,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:"Source: https://cfpb.github.io/design-system/components/checkboxes"}}}},c={render:e=>a(e),name:"Enabled",args:{id:"enabled",label:"Enabled",checked:!0},play:async({canvasElement:e})=>{const n=k(e),r=n.getByRole("checkbox",{name:/enabled/i});await g(()=>s(n.getByRole("checkbox",{name:/enabled/i})).toBeChecked()),await h.click(r),await g(()=>s(n.getByRole("checkbox",{name:/enabled/i})).not.toBeChecked()),await h.click(r),await g(()=>s(n.getByRole("checkbox",{name:/enabled/i})).toBeChecked())}},t={render:e=>a(e),name:"Hover",args:{id:"hover",inputClassName:"hover",label:"Hover"}},o={render:e=>a(e),name:"Focus",args:{id:"focus",inputClassName:"focus",label:"Focus"}},d={render:e=>a(e),name:"Selected",args:{id:"selected",label:"Selected",checked:!0}},l={render:e=>a(e),name:"Disabled",args:{id:"disabled",label:"Disabled",checked:!1,disabled:!0},play:async({canvasElement:e})=>{const r=k(e).getByRole("checkbox",{name:/disabled/i});await h.click(r),s(r).toBeDisabled(),s(r).not.toBeChecked()}},i={render:e=>a(e),name:"Disabled/selected",args:{id:"disabled/selected",label:"Disabled/selected",checked:!0,disabled:!0}},m={render:e=>a(e),name:"Success",args:{id:"success",label:"Success",status:"success"}},p={render:e=>a(e),name:"Warning",args:{id:"warning",label:"Warning",status:"warning"}},b={render:e=>a(e),name:"Error",args:{id:"error",label:"Error",status:"error"}},u={render:e=>a(e),name:"With helper text",args:{id:"WithHelper",label:"Label",helperText:"This is optional helper text"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'enabled',
    label: 'Enabled',
    checked: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /enabled/i
    });
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: /enabled/i
    })).toBeChecked());
    await userEvent.click(checkbox);
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: /enabled/i
    })).not.toBeChecked());
    await userEvent.click(checkbox);
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: /enabled/i
    })).toBeChecked());
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'hover',
    inputClassName: 'hover',
    label: 'Hover'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'focus',
    inputClassName: 'focus',
    label: 'Focus'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Selected',
  args: {
    id: 'selected',
    label: 'Selected',
    checked: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled/selected',
  args: {
    id: 'disabled/selected',
    label: 'Disabled/selected',
    checked: true,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Success',
  args: {
    id: 'success',
    label: 'Success',
    status: 'success'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Warning',
  args: {
    id: 'warning',
    label: 'Warning',
    status: 'warning'
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Error',
  args: {
    id: 'error',
    label: 'Error',
    status: 'error'
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'WithHelper',
    label: 'Label',
    helperText: 'This is optional helper text'
  }
}`,...u.parameters?.docs?.source}}};const B=["Enabled","Hover","Focus","Selected","Disabled","Disabledselected","Success","Warning","Error","WithHelperText"];export{l as Disabled,i as Disabledselected,c as Enabled,b as Error,o as Focus,t as Hover,d as Selected,m as Success,p as Warning,u as WithHelperText,B as __namedExportsOrder,W as default};

import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./checkbox-C42VzH10.js";import{n as i,r as a,t as o}from"./checkbox.utils-BVBFhyf8.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{n(),a(),s=t(),{expect:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components (Verified)/Checkboxes/Checkbox`,tags:[`autodocs`],component:r,argTypes:{disabled:{control:`boolean`},isLarge:{control:`boolean`}},parameters:{docs:{description:{component:`Source: https://cfpb.github.io/design-system/components/checkboxes`}}}},p={render:e=>(0,s.jsx)(o,{...e}),args:{id:`enabled`,label:`Enabled`},play:async({canvasElement:e})=>{let t=d(e);await u(()=>c(t.getByRole(`checkbox`)).not.toBeChecked()),await l.click(t.getByRole(`checkbox`)),await u(()=>c(t.getByRole(`checkbox`)).toBeChecked())}},m={render:e=>i(e),args:{id:`hover`,inputClassName:`hover`,label:`Hover`}},h={render:e=>i(e),args:{id:`focus`,inputClassName:`focus`,label:`Focus`}},g={render:e=>i(e),args:{id:`selected`,label:`Selected`,checked:!0}},_={render:e=>i(e),args:{id:`disabled`,label:`Disabled`,checked:!1,disabled:!0},play:async({canvasElement:e})=>{let t=d(e).getByRole(`checkbox`);await l.click(t),await c(t).toBeDisabled(),await c(t).not.toBeChecked()}},v={render:e=>i(e),name:`Disabled/selected`,args:{id:`disabled/selected`,label:`Disabled/selected`,checked:!0,disabled:!0}},y={render:e=>i(e),args:{id:`success`,label:`Success`,status:`success`}},b={render:e=>i(e),args:{id:`warning`,label:`Warning`,status:`warning`}},x={render:e=>i(e),args:{id:`error`,label:`Error`,status:`error`}},S={render:e=>i(e),name:`With helper text`,args:{id:`WithHelper`,label:`Label`,helperText:`This is optional helper text`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: _arguments => <CheckboxTestWrapper {..._arguments} />,
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    id: 'hover',
    inputClassName: 'hover',
    label: 'Hover'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    id: 'focus',
    inputClassName: 'focus',
    label: 'Focus'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    id: 'selected',
    label: 'Selected',
    checked: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
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
    await expect(checkbox).toBeDisabled();
    await expect(checkbox).not.toBeChecked();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Disabled/selected',
  args: {
    id: 'disabled/selected',
    label: 'Disabled/selected',
    checked: true,
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    id: 'success',
    label: 'Success',
    status: 'success'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    id: 'warning',
    label: 'Warning',
    status: 'warning'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    id: 'error',
    label: 'Error',
    status: 'error'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'With helper text',
  args: {
    id: 'WithHelper',
    label: 'Label',
    helperText: 'This is optional helper text'
  }
}`,...S.parameters?.docs?.source}}},C=[`Enabled`,`Hover`,`Focus`,`Selected`,`Disabled`,`Disabledselected`,`Success`,`Warning`,`Error`,`WithHelperText`]}))();export{_ as Disabled,v as Disabledselected,p as Enabled,x as Error,h as Focus,m as Hover,g as Selected,y as Success,b as Warning,S as WithHelperText,C as __namedExportsOrder,f as default};
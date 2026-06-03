import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,t as r}from"./src-DD6f9HK4.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),i=t(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components (Verified)/Text inputs/Text input`,tags:[`autodocs`],component:n,argTypes:{isFullWidth:{control:`boolean`},isDisabled:{control:`boolean`}}},l={args:{name:`Enabled`,id:`Enabled`,value:`Enabled`,type:`text`},play:async({canvasElement:e})=>{let t=s(e).getByRole(`textbox`);await a(t).toHaveValue(`Enabled`),await o.click(t),await a(t).toHaveFocus()}},u={args:{...l.args,name:`Hover`,id:`Hover`,value:`Hover`},render:e=>(0,i.jsx)(n,{...e,className:`hover`})},d={args:{...l.args,name:`Focus`,id:`Focus`,value:`Focus`},render:e=>(0,i.jsx)(n,{...e,className:`focus`})},f={args:{...l.args,value:`Disabled`,name:`Disabled`,id:`Disabled`,disabled:!0}},p={args:{...l.args,value:`Success`,name:`Success`,id:`Success`,status:`success`}},m={args:{...l.args,value:`Warning`,name:`Warning`,id:`Warning`,status:`warning`}},h={args:{...l.args,value:`Error`,name:`Error`,id:`Error`,status:`error`}},g={name:`Full width`,args:{...l.args,value:`Input text`,name:`fullWidth`,id:`fullWidth`,isFullWidth:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('Enabled');
    await userEvent.click(input);
    await expect(input).toHaveFocus();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Enabled`,`Hover`,`Focus`,`Disabled`,`Success`,`Warning`,`Error`,`FullWidth`]}))();export{f as Disabled,l as Enabled,h as Error,d as Focus,g as FullWidth,u as Hover,p as Success,m as Warning,_ as __namedExportsOrder,c as default};
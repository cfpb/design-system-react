import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./text-area-dwr5K2pF.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),{expect:r,userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components (Verified)/Text inputs/Text area`,tags:[`autodocs`],component:n,argTypes:{isFullWidth:{control:`boolean`},isDisabled:{control:`boolean`}}},s={args:{id:`Enabled`,placeholder:`Enabled`,name:`Enabled`},play:async({canvasElement:e})=>{let t=a(e).getByRole(`textbox`);await i.type(t,`Sample comment`),await r(t).toHaveValue(`Sample comment`)}},c={args:{id:`Hover`,placeholder:`Hover`,name:`Hover`,className:`hover`}},l={args:{id:`Focus`,placeholder:`Focus`,name:`Focus`,className:`focus`}},u={args:{id:`Disabled`,placeholder:`Disabled`,name:`Disabled`,isDisabled:!0}},d={args:{id:`Success`,placeholder:`Success`,name:`Success`,status:`success`}},f={args:{id:`Warning`,placeholder:`Warning`,name:`Warning`,status:`warning`}},p={args:{id:`Error`,placeholder:`Error`,name:`Error`,status:`error`}},m={args:{id:`Full width`,placeholder:`Full width`,name:`Full width`,isFullWidth:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Enabled',
    placeholder: 'Enabled',
    name: 'Enabled'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await userEvent.type(textbox, 'Sample comment');
    await expect(textbox).toHaveValue('Sample comment');
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Hover',
    placeholder: 'Hover',
    name: 'Hover',
    className: 'hover'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Focus',
    placeholder: 'Focus',
    name: 'Focus',
    className: 'focus'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Disabled',
    placeholder: 'Disabled',
    name: 'Disabled',
    isDisabled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Success',
    placeholder: 'Success',
    name: 'Success',
    status: 'success'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Warning',
    placeholder: 'Warning',
    name: 'Warning',
    status: 'warning'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Error',
    placeholder: 'Error',
    name: 'Error',
    status: 'error'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'Full width',
    placeholder: 'Full width',
    name: 'Full width',
    isFullWidth: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Enabled`,`Hover`,`Focus`,`Disabled`,`Success`,`Warning`,`Error`,`FullWidth`]}))();export{u as Disabled,s as Enabled,p as Error,l as Focus,m as FullWidth,c as Hover,d as Success,f as Warning,h as __namedExportsOrder,o as default};
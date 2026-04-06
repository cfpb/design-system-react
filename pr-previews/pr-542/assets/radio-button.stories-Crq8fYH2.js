import{n as e}from"./chunk-BneVvdWh.js";import{c as t,t as n}from"./src-BCdnlM6G.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),{expect:r,userEvent:i,waitFor:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components (Verified)/Radio buttons`,tags:[`autodocs`],component:t,argTypes:{disabled:{control:`boolean`},isLarge:{control:`boolean`}},parameters:{docs:{description:{component:`Use radio buttons when the user can select exactly one option from a group. Avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically. Use [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when the user can select more than one option from a group.

Source: https://cfpb.github.io/design-system/components/radio-buttons`}}}},c=`This is optional helper text`,l={name:`Standard radio button`,args:{id:`testRadio`,label:`Standard radio button`,name:`Radio select`},play:async({canvasElement:e})=>{let t=o(e).getByRole(`radio`,{name:/standard radio button/i});await a(()=>r(t).not.toBeChecked()),await i.click(t),await a(()=>r(t).toBeChecked())}},u={name:`Standard radio button with helper text`,args:{...l.args,id:`StandardRadioWithHelper`,helperText:c}},d={name:`Large target area radio button`,args:{...l.args,id:`LargeRadio`,isLarge:!0,label:`Large target area radio button`}},f={name:`Large target area radio button with helper text`,args:{...d.args,id:`LargeRadioWithHelper`,isLarge:!0,helperText:c}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Standard radio button',
  args: {
    id: 'testRadio',
    label: 'Standard radio button',
    name: 'Radio select'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole('radio', {
      name: /standard radio button/i
    });
    await waitFor(() => expect(radio).not.toBeChecked());
    await userEvent.click(radio);
    await waitFor(() => expect(radio).toBeChecked());
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Standard radio button with helper text',
  args: {
    ...StandardRadio.args,
    id: 'StandardRadioWithHelper',
    helperText
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Large target area radio button',
  args: {
    ...StandardRadio.args,
    id: 'LargeRadio',
    isLarge: true,
    label: 'Large target area radio button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Large target area radio button with helper text',
  args: {
    ...LargeRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText
  }
}`,...f.parameters?.docs?.source}}},p=[`StandardRadio`,`StandardRadioWithHelper`,`LargeRadio`,`LargeRadioWithHelper`]}))();export{d as LargeRadio,f as LargeRadioWithHelper,l as StandardRadio,u as StandardRadioWithHelper,p as __namedExportsOrder,s as default};
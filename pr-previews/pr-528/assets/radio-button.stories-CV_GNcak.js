import"./iframe-4_qSzndm.js";import{R as c}from"./text-introduction-DXFKnura.js";import"./checkbox-DtVGmlob.js";import"./icon-BAFyrtX8.js";import"./well-BiXkwFb_.js";import"./paragraph-B6CQaslf.js";import"./summary-Cju1BQwv.js";import"./text-area-D9FI8clx.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-u17CrQMm.js";import"./index-C54KSNba.js";const{expect:n,userEvent:p,waitFor:i,within:m}=__STORYBOOK_MODULE_TEST__,k={title:"Components (Verified)/Radio buttons",tags:["autodocs"],component:c,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:`Use radio buttons when the user can select exactly one option from a group. Avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically. Use [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when the user can select more than one option from a group.

Source: https://cfpb.github.io/design-system/components/radio-buttons`}}}},s="This is optional helper text",a={name:"Standard radio button",args:{id:"testRadio",label:"Standard radio button",name:"Radio select"},play:async({canvasElement:d})=>{const o=m(d).getByRole("radio",{name:/standard radio button/i});await i(()=>n(o).not.toBeChecked()),await p.click(o),await i(()=>n(o).toBeChecked())}},t={name:"Standard radio button with helper text",args:{...a.args,id:"StandardRadioWithHelper",helperText:s}},e={name:"Large target area radio button",args:{...a.args,id:"LargeRadio",isLarge:!0,label:"Large target area radio button"}},r={name:"Large target area radio button with helper text",args:{...e.args,id:"LargeRadioWithHelper",isLarge:!0,helperText:s}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Standard radio button with helper text',
  args: {
    ...StandardRadio.args,
    id: 'StandardRadioWithHelper',
    helperText
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Large target area radio button',
  args: {
    ...StandardRadio.args,
    id: 'LargeRadio',
    isLarge: true,
    label: 'Large target area radio button'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Large target area radio button with helper text',
  args: {
    ...LargeRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText
  }
}`,...r.parameters?.docs?.source}}};const W=["StandardRadio","StandardRadioWithHelper","LargeRadio","LargeRadioWithHelper"];export{e as LargeRadio,r as LargeRadioWithHelper,a as StandardRadio,t as StandardRadioWithHelper,W as __namedExportsOrder,k as default};

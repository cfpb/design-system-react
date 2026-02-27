import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DILqAliF.js";import{F as l,R as o}from"./text-introduction-BYcAL3R3.js";import{C as i}from"./checkbox-DPJUhDNT.js";import"./icon-DPgyV4G6.js";import"./well-cbMtCfl-.js";import"./paragraph-BrZLxpVy.js";import"./summary-D67rTK0v.js";import"./text-area-Bb-qRvWW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwSx5kgU.js";const{expect:t,userEvent:u,waitFor:s,within:p}=__STORYBOOK_MODULE_TEST__,N={title:"Components (Verified)/Fieldsets",tags:["autodocs"],component:l,argTypes:{legend:{control:"text"},legendHelperText:{control:"text"},isInline:{control:"boolean"}},parameters:{docs:{description:{component:`
The fieldset element is used to group several controls as well as labels within a web form.
A fieldset includes each of the following: Legend, Block helper text (if necessary), Inline labels, and a set of controls such as checkboxes or radio buttons.

Source: https://cfpb.github.io/design-system/components/fieldsets
`}}}},r="Use block helper text for instructions",d={name:"Fieldset with checkboxes",args:{legend:"Basic legend",legendHelperText:r},render:a=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(l,{...a,children:[e.jsx(i,{id:"fieldset-checkbox-1",name:"test_checkbox",label:"Option 1"}),e.jsx(i,{id:"fieldset-checkbox-2",name:"test_checkbox",label:"Option 2"})]})})}),play:async({canvasElement:a})=>{const n=p(a).getAllByRole("checkbox");await s(()=>t(n[0]).not.toBeChecked()),await s(()=>t(n[1]).not.toBeChecked()),await u.click(n[0]),await s(()=>t(n[0]).toBeChecked()),t(n[1]).not.toBeChecked(),await u.click(n[1]),await s(()=>t(n[1]).toBeChecked()),t(n[0]).toBeChecked()}},m={name:"Inline layout with checkboxes",args:{legend:"Basic legend",legendHelperText:r,isInline:!0},render:a=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(l,{...a,children:[e.jsx(i,{id:"fieldset-inline-cb-1",name:"test_inline_cb",label:"Option 1"}),e.jsx(i,{id:"fieldset-inline-cb-2",name:"test_inline_cb",label:"Option 2"})]})})})},g={name:"Inline layout with radio buttons",args:{legend:"Basic legend",legendHelperText:r,isInline:!0},render:a=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(l,{...a,children:[e.jsx(o,{id:"fieldset-inline-r1",name:"test_inline_radio",label:"Choice A"}),e.jsx(o,{id:"fieldset-inline-r2",name:"test_inline_radio",label:"Choice B"})]})})})},h={name:"Fieldset with radio buttons",args:{legend:"Basic legend",legendHelperText:r},render:a=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(l,{...a,children:[e.jsx(o,{id:"fieldset-radio-1",name:"test_radio",label:"Choice A"}),e.jsx(o,{id:"fieldset-radio-2",name:"test_radio",label:"Choice B"})]})})}),play:async({canvasElement:a})=>{const _=p(a),n=_.getByRole("radio",{name:/choice a/i}),c=_.getByRole("radio",{name:/choice b/i});await s(()=>t(n).not.toBeChecked()),await s(()=>t(c).not.toBeChecked()),await u.click(n),await s(()=>t(n).toBeChecked()),t(c).not.toBeChecked(),await u.click(c),await s(()=>t(c).toBeChecked()),t(n).not.toBeChecked()}},b={name:"Large target fieldset with checkboxes",args:{legend:"Basic legend",legendHelperText:r},render:a=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(l,{...a,children:[e.jsx(i,{id:"fieldset-checkbox-lg-1",name:"test_checkbox_lg",label:"Inline label",isLarge:!0}),e.jsx(i,{id:"fieldset-checkbox-lg-2",name:"test_checkbox_lg",label:"Inline label",isLarge:!0}),e.jsx(i,{id:"fieldset-checkbox-lg-3",name:"test_checkbox_lg",label:"Inline label",isLarge:!0}),e.jsx(i,{id:"fieldset-checkbox-lg-4",name:"test_checkbox_lg",label:"Inline label",isLarge:!0})]})})})},x={name:"Large target fieldset with radio buttons",args:{legend:"Basic legend",legendHelperText:r},render:a=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(l,{...a,children:[e.jsx(o,{id:"fieldset-radio-lg-1",name:"test_radio_lg",label:"Inline label",isLarge:!0,value:"1"}),e.jsx(o,{id:"fieldset-radio-lg-2",name:"test_radio_lg",label:"Inline label",isLarge:!0,value:"0"}),e.jsx(o,{id:"fieldset-radio-lg-3",name:"test_radio_lg",label:"Inline label",isLarge:!0,value:"0"}),e.jsx(o,{id:"fieldset-radio-lg-4",name:"test_radio_lg",label:"Inline label",isLarge:!0,value:"0"})]})})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Fieldset with checkboxes',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Option 1' />
          <Checkbox id='fieldset-checkbox-2' name='test_checkbox' label='Option 2' />
        </Fieldset>
      </div>
    </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');
    await waitFor(() => expect(checkboxes[0]).not.toBeChecked());
    await waitFor(() => expect(checkboxes[1]).not.toBeChecked());
    await userEvent.click(checkboxes[0]);
    await waitFor(() => expect(checkboxes[0]).toBeChecked());
    expect(checkboxes[1]).not.toBeChecked();
    await userEvent.click(checkboxes[1]);
    await waitFor(() => expect(checkboxes[1]).toBeChecked());
    expect(checkboxes[0]).toBeChecked();
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Inline layout with checkboxes',
  args: {
    legend: 'Basic legend',
    legendHelperText,
    isInline: true
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <Checkbox id='fieldset-inline-cb-1' name='test_inline_cb' label='Option 1' />
          <Checkbox id='fieldset-inline-cb-2' name='test_inline_cb' label='Option 2' />
        </Fieldset>
      </div>
    </form>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Inline layout with radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText,
    isInline: true
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton id='fieldset-inline-r1' name='test_inline_radio' label='Choice A' />
          <RadioButton id='fieldset-inline-r2' name='test_inline_radio' label='Choice B' />
        </Fieldset>
      </div>
    </form>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Fieldset with radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton id='fieldset-radio-1' name='test_radio' label='Choice A' />
          <RadioButton id='fieldset-radio-2' name='test_radio' label='Choice B' />
        </Fieldset>
      </div>
    </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioA = canvas.getByRole('radio', {
      name: /choice a/i
    });
    const radioB = canvas.getByRole('radio', {
      name: /choice b/i
    });
    await waitFor(() => expect(radioA).not.toBeChecked());
    await waitFor(() => expect(radioB).not.toBeChecked());
    await userEvent.click(radioA);
    await waitFor(() => expect(radioA).toBeChecked());
    expect(radioB).not.toBeChecked();
    await userEvent.click(radioB);
    await waitFor(() => expect(radioB).toBeChecked());
    expect(radioA).not.toBeChecked();
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Large target fieldset with checkboxes',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <Checkbox id='fieldset-checkbox-lg-1' name='test_checkbox_lg' label='Inline label' isLarge />
          <Checkbox id='fieldset-checkbox-lg-2' name='test_checkbox_lg' label='Inline label' isLarge />
          <Checkbox id='fieldset-checkbox-lg-3' name='test_checkbox_lg' label='Inline label' isLarge />
          <Checkbox id='fieldset-checkbox-lg-4' name='test_checkbox_lg' label='Inline label' isLarge />
        </Fieldset>
      </div>
    </form>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Large target fieldset with radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton id='fieldset-radio-lg-1' name='test_radio_lg' label='Inline label' isLarge value='1' />
          <RadioButton id='fieldset-radio-lg-2' name='test_radio_lg' label='Inline label' isLarge value='0' />
          <RadioButton id='fieldset-radio-lg-3' name='test_radio_lg' label='Inline label' isLarge value='0' />
          <RadioButton id='fieldset-radio-lg-4' name='test_radio_lg' label='Inline label' isLarge value='0' />
        </Fieldset>
      </div>
    </form>
}`,...x.parameters?.docs?.source}}};const R=["WithCheckboxes","InlineLayoutWithCheckboxes","InlineLayoutWithRadioButtons","WithRadioButtons","LargeTargetWithCheckboxes","LargeTargetWithRadioButtons"];export{m as InlineLayoutWithCheckboxes,g as InlineLayoutWithRadioButtons,b as LargeTargetWithCheckboxes,x as LargeTargetWithRadioButtons,d as WithCheckboxes,h as WithRadioButtons,R as __namedExportsOrder,N as default};

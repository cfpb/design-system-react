import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-Bxd1owZZ.js";import{F as c,R as n}from"./text-introduction-BIMdRmF9.js";import{C as i}from"./checkbox-CjGR6wUQ.js";import"./icon-CUxU2D8B.js";import"./well-BP-Tqt01.js";import"./paragraph-lccxCxvY.js";import"./summary-CMKzpxZP.js";import"./text-area-DripMmj_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTkqkgwX.js";const{expect:t,userEvent:h,waitFor:s,within:k}=__STORYBOOK_MODULE_TEST__,R={title:"Components (Draft)/Fieldsets",tags:["autodocs"],component:c,argTypes:{legend:{control:"text"},legendHelperText:{control:"text"},isInline:{control:"boolean"}},parameters:{docs:{description:{component:`
The fieldset component is used to group several controls as well as labels within a web form. A fieldset includes a legend, block helper text (if necessary), labels, and a set of controls, such as checkboxes or radio buttons.

Source: https://cfpb.github.io/design-system/components/fieldsets
`}}}},b="Use block helper text for instructions.",r={name:"With checkboxes",args:{legend:"Basic legend",legendHelperText:b},render:o=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(c,{...o,children:[e.jsx(i,{id:"fieldset-checkbox-1",name:"test_checkbox",label:"Label"}),e.jsx(i,{id:"fieldset-checkbox-2",name:"test_checkbox",label:"Label"})]})})}),play:async({canvasElement:o})=>{const a=k(o).getAllByRole("checkbox");await s(()=>t(a[0]).not.toBeChecked()),await s(()=>t(a[1]).not.toBeChecked()),await h.click(a[0]),await s(()=>t(a[0]).toBeChecked()),t(a[1]).not.toBeChecked(),await h.click(a[1]),await s(()=>t(a[1]).toBeChecked()),t(a[0]).toBeChecked()}},d={name:"With radio buttons",args:{legend:"Basic legend",legendHelperText:b},render:o=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(c,{...o,children:[e.jsx(n,{id:"fieldset-radio-1",name:"test_radio",label:"Inline label"}),e.jsx(n,{id:"fieldset-radio-2",name:"test_radio",label:"Inline label"})]})})}),play:async({canvasElement:o})=>{const x=k(o),a=x.getByRole("radio",{name:/choice a/i}),l=x.getByRole("radio",{name:/choice b/i});await s(()=>t(a).not.toBeChecked()),await s(()=>t(l).not.toBeChecked()),await h.click(a),await s(()=>t(a).toBeChecked()),t(l).not.toBeChecked(),await h.click(l),await s(()=>t(l).toBeChecked()),t(a).not.toBeChecked()}},m={name:"With checkboxes",args:{legend:"Basic legend",legendHelperText:b},render:o=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(c,{...o,children:[e.jsx(i,{id:"fieldset-checkbox-lg-1",name:"test_checkbox_lg",label:"Label",isLarge:!0}),e.jsx(i,{id:"fieldset-checkbox-lg-2",name:"test_checkbox_lg",label:"Label",isLarge:!0}),e.jsx(i,{id:"fieldset-checkbox-lg-3",name:"test_checkbox_lg",label:"Label",isLarge:!0}),e.jsx(i,{id:"fieldset-checkbox-lg-4",name:"test_checkbox_lg",label:"Label",isLarge:!0})]})})})},g={name:"With radio buttons",args:{legend:"Basic legend",legendHelperText:b},render:o=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(c,{...o,children:[e.jsx(n,{id:"fieldset-radio-lg-1",name:"test_radio_lg",label:"Label",isLarge:!0,value:"1"}),e.jsx(n,{id:"fieldset-radio-lg-2",name:"test_radio_lg",label:"Label",isLarge:!0,value:"0"}),e.jsx(n,{id:"fieldset-radio-lg-3",name:"test_radio_lg",label:"Label",isLarge:!0,value:"0"}),e.jsx(n,{id:"fieldset-radio-lg-4",name:"test_radio_lg",label:"Label",isLarge:!0,value:"0"})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With checkboxes',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
          <Checkbox id='fieldset-checkbox-2' name='test_checkbox' label='Label' />
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton id='fieldset-radio-1' name='test_radio' label='Inline label' />
          <RadioButton id='fieldset-radio-2' name='test_radio' label='Inline label' />
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With checkboxes',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <Checkbox id='fieldset-checkbox-lg-1' name='test_checkbox_lg' label='Label' isLarge />
          <Checkbox id='fieldset-checkbox-lg-2' name='test_checkbox_lg' label='Label' isLarge />
          <Checkbox id='fieldset-checkbox-lg-3' name='test_checkbox_lg' label='Label' isLarge />
          <Checkbox id='fieldset-checkbox-lg-4' name='test_checkbox_lg' label='Label' isLarge />
        </Fieldset>
      </div>
    </form>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton id='fieldset-radio-lg-1' name='test_radio_lg' label='Label' isLarge value='1' />
          <RadioButton id='fieldset-radio-lg-2' name='test_radio_lg' label='Label' isLarge value='0' />
          <RadioButton id='fieldset-radio-lg-3' name='test_radio_lg' label='Label' isLarge value='0' />
          <RadioButton id='fieldset-radio-lg-4' name='test_radio_lg' label='Label' isLarge value='0' />
        </Fieldset>
      </div>
    </form>
}`,...g.parameters?.docs?.source}}};const y=["WithCheckboxes","WithRadioButtons","LargeTargetWithCheckboxes","LargeTargetWithRadioButtons"];export{m as LargeTargetWithCheckboxes,g as LargeTargetWithRadioButtons,r as WithCheckboxes,d as WithRadioButtons,y as __namedExportsOrder,R as default};

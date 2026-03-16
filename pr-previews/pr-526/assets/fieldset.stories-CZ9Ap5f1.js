import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DcUbj10U.js";import{F as i,R as n}from"./text-introduction-Cik14ZiC.js";import{C as r}from"./checkbox-GrssopVy.js";import"./icon-BGVZktfj.js";import"./well-BwdtWYg6.js";import"./paragraph-BL9eCQvf.js";import"./summary-DH9gf7Ab.js";import"./text-area-D-moBrph.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QuFOqCHZ.js";const{expect:a,userEvent:h,waitFor:s,within:k}=__STORYBOOK_MODULE_TEST__,y={title:"Components (Draft)/Fieldsets",tags:["autodocs"],component:i,argTypes:{legend:{control:"text"},legendHelperText:{control:"text"},isInline:{control:"boolean"}},parameters:{docs:{description:{component:`
The fieldset component is used to group several controls as well as labels within a web form. A fieldset includes a legend, block helper text (if necessary), labels, and a set of controls, such as checkboxes or radio buttons.

Source: https://cfpb.github.io/design-system/components/fieldsets
`}}}},x="Use block helper text for instructions.",d={name:"With checkboxes",args:{legend:"Basic legend",legendHelperText:x},render:t=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(i,{...t,children:[e.jsx(r,{id:"fieldset-checkbox-1",name:"test_checkbox",label:"Label"}),e.jsx(r,{id:"fieldset-checkbox-2",name:"test_checkbox",label:"Label"})]})})}),play:async({canvasElement:t})=>{const o=k(t).getAllByRole("checkbox");await s(()=>a(o[0]).not.toBeChecked()),await s(()=>a(o[1]).not.toBeChecked()),await h.click(o[0]),await s(()=>a(o[0]).toBeChecked()),await a(o[1]).not.toBeChecked(),await h.click(o[1]),await s(()=>a(o[1]).toBeChecked()),await a(o[0]).toBeChecked()}},m={name:"With radio buttons",args:{legend:"Basic legend",legendHelperText:x},render:t=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(i,{...t,children:[e.jsx(n,{id:"fieldset-radio-1",name:"test_radio",label:"Label"}),e.jsx(n,{id:"fieldset-radio-2",name:"test_radio",label:"Label"})]})})}),play:async({canvasElement:t})=>{const o=k(t).queryAllByRole("radio",{name:/label/i}),l=o[0],c=o[1];await s(()=>a(l).not.toBeChecked()),await s(()=>a(c).not.toBeChecked()),await h.click(l),await s(()=>a(l).toBeChecked()),await a(c).not.toBeChecked(),await h.click(c),await s(()=>a(c).toBeChecked()),await a(l).not.toBeChecked()}},g={name:"Large target area with checkboxes",args:{legend:"Basic legend",legendHelperText:x},render:t=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(i,{...t,children:[e.jsx(r,{id:"fieldset-checkbox-lg-1",name:"test_checkbox_lg",label:"Label",isLarge:!0}),e.jsx(r,{id:"fieldset-checkbox-lg-2",name:"test_checkbox_lg",label:"Label",isLarge:!0}),e.jsx(r,{id:"fieldset-checkbox-lg-3",name:"test_checkbox_lg",label:"Label",isLarge:!0}),e.jsx(r,{id:"fieldset-checkbox-lg-4",name:"test_checkbox_lg",label:"Label",isLarge:!0})]})})})},b={name:"Large target area with radio buttons",args:{legend:"Basic legend",legendHelperText:x},render:t=>e.jsx("form",{className:"o-form",children:e.jsx("div",{className:"o-form__group",children:e.jsxs(i,{...t,children:[e.jsx(n,{id:"fieldset-radio-lg-1",name:"test_radio_lg",label:"Label",isLarge:!0,value:"1"}),e.jsx(n,{id:"fieldset-radio-lg-2",name:"test_radio_lg",label:"Label",isLarge:!0,value:"0"}),e.jsx(n,{id:"fieldset-radio-lg-3",name:"test_radio_lg",label:"Label",isLarge:!0,value:"0"}),e.jsx(n,{id:"fieldset-radio-lg-4",name:"test_radio_lg",label:"Label",isLarge:!0,value:"0"})]})})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    await expect(checkboxes[1]).not.toBeChecked();
    await userEvent.click(checkboxes[1]);
    await waitFor(() => expect(checkboxes[1]).toBeChecked());
    await expect(checkboxes[0]).toBeChecked();
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText
  },
  render: arguments_ => <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton id='fieldset-radio-1' name='test_radio' label='Label' />
          <RadioButton id='fieldset-radio-2' name='test_radio' label='Label' />
        </Fieldset>
      </div>
    </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioButtons = canvas.queryAllByRole('radio', {
      name: /label/i
    });
    const radioA = radioButtons[0];
    const radioB = radioButtons[1];
    await waitFor(() => expect(radioA).not.toBeChecked());
    await waitFor(() => expect(radioB).not.toBeChecked());
    await userEvent.click(radioA);
    await waitFor(() => expect(radioA).toBeChecked());
    await expect(radioB).not.toBeChecked();
    await userEvent.click(radioB);
    await waitFor(() => expect(radioB).toBeChecked());
    await expect(radioA).not.toBeChecked();
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Large target area with checkboxes',
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Large target area with radio buttons',
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
}`,...b.parameters?.docs?.source}}};const N=["WithCheckboxes","WithRadioButtons","LargeTargetWithCheckboxes","LargeTargetWithRadioButtons"];export{g as LargeTargetWithCheckboxes,b as LargeTargetWithRadioButtons,d as WithCheckboxes,m as WithRadioButtons,N as __namedExportsOrder,y as default};

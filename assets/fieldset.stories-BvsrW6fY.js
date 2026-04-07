import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CWHGkrjl.js";import{C as n,c as r,t as i}from"./src-Bk1oFcNy.js";import{t as a}from"./checkbox-D2tUIfSO.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),o=t(),{expect:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components (Draft)/Fieldsets`,tags:[`autodocs`],component:n,argTypes:{legend:{control:`text`},legendHelperText:{control:`text`},isInline:{control:`boolean`}},parameters:{docs:{description:{component:`
The fieldset component is used to group several controls as well as labels within a web form. A fieldset includes a legend, block helper text (if necessary), labels, and a set of controls, such as checkboxes or radio buttons.

Source: https://cfpb.github.io/design-system/components/fieldsets
`}}}},f=`Use block helper text for instructions.`,p={name:`With checkboxes`,args:{legend:`Basic legend`,legendHelperText:f},render:e=>(0,o.jsx)(`form`,{className:`o-form`,children:(0,o.jsx)(`div`,{className:`o-form__group`,children:(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(a,{id:`fieldset-checkbox-1`,name:`test_checkbox`,label:`Label`}),(0,o.jsx)(a,{id:`fieldset-checkbox-2`,name:`test_checkbox`,label:`Label`})]})})}),play:async({canvasElement:e})=>{let t=u(e).getAllByRole(`checkbox`);await l(()=>s(t[0]).not.toBeChecked()),await l(()=>s(t[1]).not.toBeChecked()),await c.click(t[0]),await l(()=>s(t[0]).toBeChecked()),await s(t[1]).not.toBeChecked(),await c.click(t[1]),await l(()=>s(t[1]).toBeChecked()),await s(t[0]).toBeChecked()}},m={name:`With radio buttons`,args:{legend:`Basic legend`,legendHelperText:f},render:e=>(0,o.jsx)(`form`,{className:`o-form`,children:(0,o.jsx)(`div`,{className:`o-form__group`,children:(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(r,{id:`fieldset-radio-1`,name:`test_radio`,label:`Label`}),(0,o.jsx)(r,{id:`fieldset-radio-2`,name:`test_radio`,label:`Label`})]})})}),play:async({canvasElement:e})=>{let t=u(e).queryAllByRole(`radio`,{name:/label/i}),n=t[0],r=t[1];await l(()=>s(n).not.toBeChecked()),await l(()=>s(r).not.toBeChecked()),await c.click(n),await l(()=>s(n).toBeChecked()),await s(r).not.toBeChecked(),await c.click(r),await l(()=>s(r).toBeChecked()),await s(n).not.toBeChecked()}},h={name:`Large target area with checkboxes`,args:{legend:`Basic legend`,legendHelperText:f},render:e=>(0,o.jsx)(`form`,{className:`o-form`,children:(0,o.jsx)(`div`,{className:`o-form__group`,children:(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(a,{id:`fieldset-checkbox-lg-1`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0}),(0,o.jsx)(a,{id:`fieldset-checkbox-lg-2`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0}),(0,o.jsx)(a,{id:`fieldset-checkbox-lg-3`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0}),(0,o.jsx)(a,{id:`fieldset-checkbox-lg-4`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0})]})})})},g={name:`Large target area with radio buttons`,args:{legend:`Basic legend`,legendHelperText:f},render:e=>(0,o.jsx)(`form`,{className:`o-form`,children:(0,o.jsx)(`div`,{className:`o-form__group`,children:(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(r,{id:`fieldset-radio-lg-1`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`1`}),(0,o.jsx)(r,{id:`fieldset-radio-lg-2`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`0`}),(0,o.jsx)(r,{id:`fieldset-radio-lg-3`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`0`}),(0,o.jsx)(r,{id:`fieldset-radio-lg-4`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`0`})]})})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`WithCheckboxes`,`WithRadioButtons`,`LargeTargetWithCheckboxes`,`LargeTargetWithRadioButtons`]}))();export{h as LargeTargetWithCheckboxes,g as LargeTargetWithRadioButtons,p as WithCheckboxes,m as WithRadioButtons,_ as __namedExportsOrder,d as default};
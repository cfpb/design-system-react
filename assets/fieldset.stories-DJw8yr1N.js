import{i as e}from"./preload-helper-7yf7uBoM.js";import{t}from"./jsx-runtime-DvpvSDnr.js";import{n,t as r}from"./checkbox-D8F5x3Cq.js";import{n as i,t as a}from"./fieldset-DlL85GL_.js";import{n as o,t as s}from"./radio-button-B6nbYP6I.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i(),o(),c=t(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components (Draft)/Fieldsets`,tags:[`autodocs`],component:a,argTypes:{legend:{control:`text`},legendHelperText:{control:`text`},isInline:{control:`boolean`}},parameters:{docs:{description:{component:`
The fieldset component is used to group several controls as well as labels within a web form. A fieldset includes a legend, block helper text (if necessary), labels, and a set of controls, such as checkboxes or radio buttons.

Source: https://cfpb.github.io/design-system/components/fieldsets
`}}}},m=`Use block helper text for instructions.`,h={name:`With checkboxes`,args:{legend:`Basic legend`,legendHelperText:m},render:e=>(0,c.jsx)(`form`,{className:`o-form`,children:(0,c.jsx)(`div`,{className:`o-form__group`,children:(0,c.jsxs)(a,{...e,children:[(0,c.jsx)(r,{id:`fieldset-checkbox-1`,name:`test_checkbox`,label:`Label`}),(0,c.jsx)(r,{id:`fieldset-checkbox-2`,name:`test_checkbox`,label:`Label`})]})})}),play:async({canvasElement:e})=>{let t=f(e).getAllByRole(`checkbox`);await d(()=>l(t[0]).not.toBeChecked()),await d(()=>l(t[1]).not.toBeChecked()),await u.click(t[0]),await d(()=>l(t[0]).toBeChecked()),await l(t[1]).not.toBeChecked(),await u.click(t[1]),await d(()=>l(t[1]).toBeChecked()),await l(t[0]).toBeChecked()}},g={name:`With radio buttons`,args:{legend:`Basic legend`,legendHelperText:m},render:e=>(0,c.jsx)(`form`,{className:`o-form`,children:(0,c.jsx)(`div`,{className:`o-form__group`,children:(0,c.jsxs)(a,{...e,children:[(0,c.jsx)(s,{id:`fieldset-radio-1`,name:`test_radio`,label:`Label`}),(0,c.jsx)(s,{id:`fieldset-radio-2`,name:`test_radio`,label:`Label`})]})})}),play:async({canvasElement:e})=>{let t=f(e).queryAllByRole(`radio`,{name:/label/i}),n=t[0],r=t[1];await d(()=>l(n).not.toBeChecked()),await d(()=>l(r).not.toBeChecked()),await u.click(n),await d(()=>l(n).toBeChecked()),await l(r).not.toBeChecked(),await u.click(r),await d(()=>l(r).toBeChecked()),await l(n).not.toBeChecked()}},_={name:`Large target area with checkboxes`,args:{legend:`Basic legend`,legendHelperText:m},render:e=>(0,c.jsx)(`form`,{className:`o-form`,children:(0,c.jsx)(`div`,{className:`o-form__group`,children:(0,c.jsxs)(a,{...e,children:[(0,c.jsx)(r,{id:`fieldset-checkbox-lg-1`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0}),(0,c.jsx)(r,{id:`fieldset-checkbox-lg-2`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0}),(0,c.jsx)(r,{id:`fieldset-checkbox-lg-3`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0}),(0,c.jsx)(r,{id:`fieldset-checkbox-lg-4`,name:`test_checkbox_lg`,label:`Label`,isLarge:!0})]})})})},v={name:`Large target area with radio buttons`,args:{legend:`Basic legend`,legendHelperText:m},render:e=>(0,c.jsx)(`form`,{className:`o-form`,children:(0,c.jsx)(`div`,{className:`o-form__group`,children:(0,c.jsxs)(a,{...e,children:[(0,c.jsx)(s,{id:`fieldset-radio-lg-1`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`1`}),(0,c.jsx)(s,{id:`fieldset-radio-lg-2`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`0`}),(0,c.jsx)(s,{id:`fieldset-radio-lg-3`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`0`}),(0,c.jsx)(s,{id:`fieldset-radio-lg-4`,name:`test_radio_lg`,label:`Label`,isLarge:!0,value:`0`})]})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`WithCheckboxes`,`WithRadioButtons`,`LargeTargetWithCheckboxes`,`LargeTargetWithRadioButtons`]}))();export{_ as LargeTargetWithCheckboxes,v as LargeTargetWithRadioButtons,h as WithCheckboxes,g as WithRadioButtons,y as __namedExportsOrder,p as default};
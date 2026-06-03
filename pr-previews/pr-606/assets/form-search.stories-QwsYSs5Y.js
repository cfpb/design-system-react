import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-CnPKFcMr.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./form-search-BT0J6XrX.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{o=t(n(),1),i(),s=r(),{expect:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d=e=>{console.log(`FormSearch submit:`,e)},f=e=>(0,s.jsx)(a,{...e,onSubmit:t=>{d(t),e.onSubmit?.(t)}}),p=[{label:`How do I add money to my prepaid card?`},{label:`What are credit card “add-on products?”`},{label:`How do I qualify for an advertised 0% auto financing?`},{label:`Can I make additional payments on my student loan?`},{label:`How do I tell if I have a fixed or adjustable rate mortgage?`}],m={title:`Components (Draft)/Form search`,tags:[`autodocs`,`web-component`],component:a,parameters:{docs:{description:{component:"\nMinimal wrapper around the DS `<cfpb-form-search>` web component: search field,\nclear control, optional typeahead (hidden `<ul>` slot), and submit button.\nUse `onChange` / `onSubmit` for app logic; wrap in a parent `<form>` only when\nyou need native form submission.\n\n**App setup:** call `setSharedConfig({ iconPath: '/your/icons/' })` from\n`@cfpb/cfpb-design-system` before rendering (icons load from that URL). Storybook\nconfigures this in `.storybook/preview.js`.\n\nSource: [Reference for custom elements — Search widget](https://cfpb.github.io/design-system/components/reference-for-custom-elements)\n        "}}},argTypes:{showSubmitButton:{control:`boolean`},disabled:{control:`boolean`},maxlength:{control:{type:`number`,min:1,max:500}},value:{control:!1,table:{disable:!0}},defaultValue:{control:`text`},onChange:{action:`changed`},onSubmit:{action:`submitted`}},render:e=>(0,s.jsx)(f,{...e})},h={args:{name:`q`,placeholder:`Enter your search term(s)`,submitLabel:`Search`}},g={render:e=>{let{defaultValue:t=``,...n}=e,[r,i]=(0,o.useState)(t);return(0,s.jsx)(a,{...n,onChange:i,onSubmit:t=>{d(t),e.onSubmit?.(t)},value:r})},args:{...h.args,defaultValue:`mortgage`}},_={name:`With typeahead`,args:{...h.args,suggestions:p},play:async({canvasElement:e})=>{let t=u(e),n=t.getByRole(`searchbox`);await l.click(n),await l.type(n,`pre`),await c(t.getByText(p[0].label)).toBeVisible()}},v={name:`Custom submit button`,args:{...h.args,submitLabel:`Find answers`,submitAriaLabel:`Find answers to your question`}},y={name:`Without submit button`,args:{...h.args,showSubmitButton:!1}},b={args:{...h.args,disabled:!0}},x={name:`Validation error`,args:{...h.args,defaultValue:`a`.repeat(80)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'q',
    placeholder: 'Enter your search term(s)',
    submitLabel: 'Search'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      defaultValue = '',
      ...rest
    } = args;
    const [value, setValue] = useState(defaultValue);
    return <FormSearch {...rest} onChange={setValue} onSubmit={next => {
      logSubmit(next);
      args.onSubmit?.(next);
    }} value={value} />;
  },
  args: {
    ...Default.args,
    defaultValue: 'mortgage'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With typeahead',
  args: {
    ...Default.args,
    suggestions: SAMPLE_SUGGESTIONS
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox');
    await userEvent.click(input);
    await userEvent.type(input, 'pre');
    await expect(canvas.getByText(SAMPLE_SUGGESTIONS[0].label)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Custom submit button',
  args: {
    ...Default.args,
    submitLabel: 'Find answers',
    submitAriaLabel: 'Find answers to your question'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Without submit button',
  args: {
    ...Default.args,
    showSubmitButton: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Validation error',
  args: {
    ...Default.args,
    defaultValue: 'a'.repeat(80)
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Controlled`,`WithTypeahead`,`CustomSubmitButton`,`WithoutSubmitButton`,`Disabled`,`ValidationError`]}))();export{g as Controlled,v as CustomSubmitButton,h as Default,b as Disabled,x as ValidationError,_ as WithTypeahead,y as WithoutSubmitButton,S as __namedExportsOrder,m as default};
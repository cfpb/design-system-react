import{i as e}from"./preload-helper-7yf7uBoM.js";import{t}from"./jsx-runtime-DvpvSDnr.js";import{r as n,t as r}from"./link-DUNBvsp1.js";import{n as i,t as a}from"./button-CPEI89CG.js";import{n as o,t as s}from"./button-group-Bvr6aRuD.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{i(),n(),o(),c=t(),{expect:l,fn:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components (Verified)/Buttons`,component:a,tags:[`autodocs`],argTypes:{appearance:{control:`select`},size:{control:`select`},disabled:{control:`boolean`}},parameters:{docs:{description:{component:`Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},m={args:{label:`Primary`,appearance:`primary`,size:`default`,disabled:!1,isLink:!1,iconLeft:void 0,iconRight:void 0,onClick:u()},play:async({canvasElement:e,args:t})=>{let n=f(e).getByRole(`button`,{name:/primary/i});await d.click(n),await l(t.onClick).toHaveBeenCalledTimes(1)}},h={args:{...m.args,label:`Secondary`,appearance:`secondary`}},g={args:{...m.args,label:`Disabled`,disabled:!0,onClick:u()},play:async({canvasElement:e,args:t})=>{let n=f(e).getByRole(`button`,{name:/disabled/i});await d.click(n),await l(n).toBeDisabled(),await l(t.onClick).not.toHaveBeenCalled()}},_={args:{...m.args,label:`Destructive`,appearance:`warning`}},v={name:`With icon`,args:{...m.args},render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s,{children:[(0,c.jsx)(a,{...e,label:`Go back`,iconLeft:`left`,appearance:`secondary`}),(0,c.jsx)(a,{...e,label:`Continue`,iconRight:`right`,appearance:`secondary`})]}),(0,c.jsx)(`br`,{}),(0,c.jsx)(a,{iconRight:`upload`,label:`Upload file`})]})},y={name:`With animated icon`,args:{...m.args,label:`Submit your complaint`},render:e=>(0,c.jsx)(a,{...e,iconRight:`updating`})},b={name:`Button group`,render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s,{children:[(0,c.jsx)(a,{...e,appearance:`secondary`,label:`Go back`,iconLeft:`left`},`Go back`),(0,c.jsx)(a,{...e,label:`Continue`,iconRight:`right`},`Continue`)]}),(0,c.jsx)(`br`,{}),(0,c.jsxs)(s,{children:[(0,c.jsx)(a,{...e,label:`Submit`},`Submit`),(0,c.jsx)(a,{appearance:`warning`,isLink:!0,...e,label:`Clear form`},`Clear form`)]})]})},x={name:`Full-width (on x-small screens)`,args:{...m.args,label:`Full-width`,appearance:`primary`,size:`full`}},S={name:`Button link`,render:e=>(0,c.jsxs)(s,{children:[(0,c.jsx)(r,{isButton:!0,href:`/`,label:`Link styled as a button`,iconRight:`download`}),(0,c.jsx)(a,{isLink:!0,...e,label:`Button styled as a link`,iconRight:`download`},`1`)]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    isLink: false,
    iconLeft: undefined,
    iconRight: undefined,
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /primary/i
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Secondary',
    appearance: 'secondary'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Disabled',
    disabled: true,
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /disabled/i
    });
    await userEvent.click(button);
    await expect(button).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Destructive',
    appearance: 'warning'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <>
      <ButtonGroup>
        <Button {...arguments_} label='Go back' iconLeft='left' appearance='secondary' />
        <Button {...arguments_} label='Continue' iconRight='right' appearance='secondary' />
      </ButtonGroup>
      <br />
      <Button iconRight='upload' label='Upload file' />
    </>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <>
      <ButtonGroup>
        <Button key='Go back' {...arguments_} appearance='secondary' label='Go back' iconLeft='left' />
        <Button key='Continue' {...arguments_} label='Continue' iconRight='right' />
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button key='Submit' {...arguments_} label='Submit' />
        <Button appearance='warning' isLink key='Clear form' {...arguments_} label='Clear form' />
      </ButtonGroup>
    </>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Full-width',
    appearance: 'primary',
    size: 'full'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Button link',
  render: arguments_ => <ButtonGroup>
      <Link isButton href='/' label='Link styled as a button' iconRight='download' />
      <Button isLink key='1' {...arguments_} label='Button styled as a link' iconRight='download' />
    </ButtonGroup>
}`,...S.parameters?.docs?.source}}},C=[`Primary`,`Secondary`,`Disabled`,`Destructive`,`StaticIconButtons`,`AnimatedIconButtons`,`ButtonsGroup`,`FullWidthOnSmallScreens`,`ButtonLink`]}))();export{y as AnimatedIconButtons,S as ButtonLink,b as ButtonsGroup,_ as Destructive,g as Disabled,x as FullWidthOnSmallScreens,m as Primary,h as Secondary,v as StaticIconButtons,C as __namedExportsOrder,p as default};
import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{D as n,E as r,O as i,t as a}from"./src-DlmHJ0JR.js";import{t as o}from"./link-Diz5FX1i.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),n(),s=t(),{expect:c,fn:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components (Verified)/Buttons`,component:i,tags:[`autodocs`],argTypes:{appearance:{control:`select`},size:{control:`select`},disabled:{control:`boolean`}},parameters:{docs:{description:{component:`Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},p={args:{label:`Primary`,appearance:`primary`,size:`default`,disabled:!1,isLink:!1,iconLeft:void 0,iconRight:void 0,onClick:l()},play:async({canvasElement:e,args:t})=>{let n=d(e).getByRole(`button`,{name:/primary/i});await u.click(n),await c(t.onClick).toHaveBeenCalledTimes(1)}},m={args:{...p.args,label:`Secondary`,appearance:`secondary`}},h={args:{...p.args,label:`Disabled`,disabled:!0,onClick:l()},play:async({canvasElement:e,args:t})=>{let n=d(e).getByRole(`button`,{name:/disabled/i});await u.click(n),await c(n).toBeDisabled(),await c(t.onClick).not.toHaveBeenCalled()}},g={args:{...p.args,label:`Destructive`,appearance:`warning`}},_={name:`With icon`,args:{...p.args},render:e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{...e,label:`Go back`,iconLeft:`left`,appearance:`secondary`}),(0,s.jsx)(i,{...e,label:`Continue`,iconRight:`right`,appearance:`secondary`})]}),(0,s.jsx)(`br`,{}),(0,s.jsx)(i,{iconRight:`upload`,label:`Upload file`})]})},v={name:`With animated icon`,args:{...p.args,label:`Submit your complaint`},render:e=>(0,s.jsx)(i,{...e,iconRight:`updating`})},y={name:`Button group`,render:e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{...e,appearance:`secondary`,label:`Go back`,iconLeft:`left`},`Go back`),(0,s.jsx)(i,{...e,label:`Continue`,iconRight:`right`},`Continue`)]}),(0,s.jsx)(`br`,{}),(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{...e,label:`Submit`},`Submit`),(0,s.jsx)(i,{appearance:`warning`,isLink:!0,...e,label:`Clear form`},`Clear form`)]})]})},b={name:`Full-width (on x-small screens)`,args:{...p.args,label:`Resize to mobile to see effect`,appearance:`primary`,size:`full`}},x={name:`Button link`,render:e=>(0,s.jsxs)(r,{children:[(0,s.jsx)(o,{isButton:!0,href:`/`,label:`Link styled as a button`,iconRight:`download`}),(0,s.jsx)(i,{isLink:!0,...e,label:`Button styled as a link`,iconRight:`download`},`1`)]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Secondary',
    appearance: 'secondary'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Destructive',
    appearance: 'warning'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Resize to mobile to see effect',
    appearance: 'primary',
    size: 'full'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Button link',
  render: arguments_ => <ButtonGroup>
      <Link isButton href='/' label='Link styled as a button' iconRight='download' />
      <Button isLink key='1' {...arguments_} label='Button styled as a link' iconRight='download' />
    </ButtonGroup>
}`,...x.parameters?.docs?.source}}},S=[`Primary`,`Secondary`,`Disabled`,`Destructive`,`StaticIconButtons`,`AnimatedIconButtons`,`ButtonsGroup`,`FullWidthOnSmallScreens`,`ButtonLink`]}))();export{v as AnimatedIconButtons,x as ButtonLink,y as ButtonsGroup,g as Destructive,h as Disabled,b as FullWidthOnSmallScreens,p as Primary,m as Secondary,_ as StaticIconButtons,S as __namedExportsOrder,f as default};
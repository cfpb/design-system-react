import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-tEbbRMzx.js";import{a,b as d}from"./text-introduction-DQL0iq01.js";import"./checkbox-C8rzXBX6.js";import"./icon-pOAErhaX.js";import{L as k}from"./well-zk6IHKs1.js";import"./paragraph-CYyVNnu8.js";import"./summary-DXlTxOSc.js";import"./text-area-BUwafVJd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TQTtFu7W.js";const{expect:b,fn:y,userEvent:h,within:B}=__STORYBOOK_MODULE_TEST__,E={title:"Components (Verified)/Buttons",component:a,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},t={args:{label:"Primary",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0,onClick:y()},play:async({canvasElement:n,args:g})=>{const r=B(n).getByRole("button",{name:/primary/i});await h.click(r),b(g.onClick).toHaveBeenCalledTimes(1)}},o={args:{...t.args,label:"Secondary",appearance:"secondary"}},s={args:{...t.args,label:"Disabled",disabled:!0,onClick:y()},play:async({canvasElement:n,args:g})=>{const r=B(n).getByRole("button",{name:/disabled/i});await h.click(r),b(r).toBeDisabled(),b(g.onClick).not.toHaveBeenCalled()}},i={args:{...t.args,label:"Destructive",appearance:"warning"}},c={name:"With icon",args:{...t.args},render:n=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(a,{...n,label:"Go back",iconLeft:"left",appearance:"secondary"}),e.jsx(a,{...n,label:"Continue",iconRight:"right",appearance:"secondary"})]}),e.jsx("br",{}),e.jsx(a,{iconRight:"upload",label:"Upload file"})]})},l={name:"With animated icon",args:{...t.args,label:"Submit your complaint"},render:n=>e.jsx(a,{...n,iconRight:"updating"})},u={name:"Button group",render:n=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(a,{...n,appearance:"secondary",label:"Go back",iconLeft:"left"},"Go back"),e.jsx(a,{...n,label:"Continue",iconRight:"right"},"Continue")]}),e.jsx("br",{}),e.jsxs(d,{children:[e.jsx(a,{...n,label:"Submit"},"Submit"),e.jsx(a,{appearance:"warning",asLink:!0,...n,label:"Clear form"},"Clear form")]})]})},p={name:"Full-width (on x-small screens)",args:{...t.args,label:"Resize to mobile to see effect",appearance:"primary",size:"full"}},m={name:"Button link",render:n=>e.jsxs(d,{children:[e.jsx(k,{asButton:!0,href:"/",label:"Link styled as a button",iconRight:"download"}),e.jsx(a,{asLink:!0,...n,label:"Button styled as a link",iconRight:"download"},"1")]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
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
    expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Secondary',
    appearance: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    expect(button).toBeDisabled();
    expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Destructive',
    appearance: 'warning'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <>
      <ButtonGroup>
        <Button key='Go back' {...arguments_} appearance='secondary' label='Go back' iconLeft='left' />
        <Button key='Continue' {...arguments_} label='Continue' iconRight='right' />
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button key='Submit' {...arguments_} label='Submit' />
        <Button appearance='warning' asLink key='Clear form' {...arguments_} label='Clear form' />
      </ButtonGroup>
    </>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Resize to mobile to see effect',
    appearance: 'primary',
    size: 'full'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Button link',
  render: arguments_ => <ButtonGroup>
      <Link asButton href='/' label='Link styled as a button' iconRight='download' />
      <Button asLink key='1' {...arguments_} label='Button styled as a link' iconRight='download' />
    </ButtonGroup>
}`,...m.parameters?.docs?.source}}};const P=["Primary","Secondary","Disabled","Destructive","StaticIconButtons","AnimatedIconButtons","ButtonsGroup","FullWidthOnSmallScreens","ButtonLink"];export{l as AnimatedIconButtons,m as ButtonLink,u as ButtonsGroup,i as Destructive,s as Disabled,p as FullWidthOnSmallScreens,t as Primary,o as Secondary,c as StaticIconButtons,P as __namedExportsOrder,E as default};

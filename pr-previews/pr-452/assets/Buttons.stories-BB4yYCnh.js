import{j as e}from"./jsx-runtime-BLchON5X.js";/* empty css                */import{c as p}from"./TextIntroduction-DUkKXHvK.js";import{B as n,I as d}from"./Dropdown-BT6K47fQ.js";import"./Checkbox-Caysy1F0.js";import{L as g,a as b}from"./Well-B2cr-7Hx.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Bg_-DZq5.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-D-Yp4Rm0.js";const v={title:"Components (Verified)/Buttons",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},r={args:{label:"Primary",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},t={args:{...r.args,label:"Secondary",appearance:"secondary"}},o={args:{...r.args,label:"Disabled",disabled:!0}},s={args:{...r.args,label:"Destructive",appearance:"warning"}},i={name:"With icon",args:{...r.args},render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(n,{...a,label:"Go back",iconLeft:"left",appearance:"secondary"}),e.jsx(n,{...a,label:"Continue",iconRight:"right",appearance:"secondary"})]}),e.jsx("br",{}),e.jsx(n,{iconRight:"upload",label:"Upload file"})]})},c={name:"With animated icon",args:{...r.args,label:"Submit your complaint"},render:a=>e.jsx(n,{...a,iconRight:"updating"})},l={name:"Button group",render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(n,{...a,appearance:"secondary",label:"Go back",iconLeft:"left"},"Go back"),e.jsx(n,{...a,label:"Continue",iconRight:"right"},"Continue")]}),e.jsx("br",{}),e.jsxs(p,{children:[e.jsx(n,{...a,label:"Submit"},"Submit"),e.jsx(n,{appearance:"warning",asLink:!0,...a,label:"Clear form"},"Clear form")]})]})},u={name:"Full-width (on x-small screens)",args:{...r.args,label:"Resize to mobile to see effect",appearance:"primary",size:"full"}},m={name:"Button link",render:a=>e.jsxs(p,{children:[e.jsxs(g,{className:"a-btn",href:"/",children:[e.jsx(b,{children:"Link styled as a button"}),e.jsx(d,{name:"download"})]}),e.jsx(n,{asLink:!0,...a,label:"Button styled as a link",iconRight:"download"},"1")]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Secondary',
    appearance: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Disabled',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Destructive',
    appearance: 'warning'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Resize to mobile to see effect',
    appearance: 'primary',
    size: 'full'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Button link',
  render: arguments_ => <ButtonGroup>
      <Link className='a-btn' href='/'>
        <LinkText>Link styled as a button</LinkText>
        <Icon name='download' />
      </Link>
      <Button asLink key='1' {...arguments_} label='Button styled as a link' iconRight='download' />
    </ButtonGroup>
}`,...m.parameters?.docs?.source}}};const D=["Primary","Secondary","Disabled","Destructive","StaticIconButtons","AnimatedIconButtons","ButtonsGroup","FullWidthOnSmallScreens","ButtonLink"];export{c as AnimatedIconButtons,m as ButtonLink,l as ButtonsGroup,s as Destructive,o as Disabled,u as FullWidthOnSmallScreens,r as Primary,t as Secondary,i as StaticIconButtons,D as __namedExportsOrder,v as default};

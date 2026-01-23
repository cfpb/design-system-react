import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{d as p}from"./TextIntroduction-CpnYInEn.js";import{B as n,I as E}from"./Dropdown-Do24foa2.js";import"./Checkbox-uScmMply.js";import{L as N,a as U}from"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-byJ3EejR.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-DqaBWQeW.js";const ne={title:"Components (Verified)/Buttons",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},r={args:{label:"Primary",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},t={args:{...r.args,label:"Secondary",appearance:"secondary"}},o={args:{...r.args,label:"Disabled",disabled:!0}},s={args:{...r.args,label:"Destructive",appearance:"warning"}},i={name:"With icon",args:{...r.args},render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(n,{...a,label:"Go back",iconLeft:"left",appearance:"secondary"}),e.jsx(n,{...a,label:"Continue",iconRight:"right",appearance:"secondary"})]}),e.jsx("br",{}),e.jsx(n,{iconRight:"upload",label:"Upload file"})]})},c={name:"With animated icon",args:{...r.args,label:"Submit your complaint"},render:a=>e.jsx(n,{...a,iconRight:"updating"})},l={name:"Button group",render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(n,{...a,appearance:"secondary",label:"Go back",iconLeft:"left"},"Go back"),e.jsx(n,{...a,label:"Continue",iconRight:"right"},"Continue")]}),e.jsx("br",{}),e.jsxs(p,{children:[e.jsx(n,{...a,label:"Submit"},"Submit"),e.jsx(n,{appearance:"warning",asLink:!0,...a,label:"Clear form"},"Clear form")]})]})},u={name:"Full-width (on x-small screens)",args:{...r.args,label:"Resize to mobile to see effect",appearance:"primary",size:"full"}},m={name:"Button link",render:a=>e.jsxs(p,{children:[e.jsxs(N,{className:"a-btn",href:"/",children:[e.jsx(U,{children:"Link styled as a button"}),e.jsx(E,{name:"download"})]}),e.jsx(n,{asLink:!0,...a,label:"Button styled as a link",iconRight:"download"},"1")]})};var d,g,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,f,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Secondary',
    appearance: 'secondary'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,k,x;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Disabled',
    disabled: true
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,L,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Destructive',
    appearance: 'warning'
  }
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var G,R,C;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var _,w,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var v,D,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var z,F,W;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Resize to mobile to see effect',
    appearance: 'primary',
    size: 'full'
  }
}`,...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var T,O,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Button link',
  render: arguments_ => <ButtonGroup>
      <Link className='a-btn' href='/'>
        <LinkText>Link styled as a button</LinkText>
        <Icon name='download' />
      </Link>
      <Button asLink key='1' {...arguments_} label='Button styled as a link' iconRight='download' />
    </ButtonGroup>
}`,...(A=(O=m.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const re=["Primary","Secondary","Disabled","Destructive","StaticIconButtons","AnimatedIconButtons","ButtonsGroup","FullWidthOnSmallScreens","ButtonLink"];export{c as AnimatedIconButtons,m as ButtonLink,l as ButtonsGroup,s as Destructive,o as Disabled,u as FullWidthOnSmallScreens,r as Primary,t as Secondary,i as StaticIconButtons,re as __namedExportsOrder,ne as default};

import{j as r}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as D}from"./TextIntroduction-DOJGGODb.js";import{B as n}from"./Dropdown-nMNb3moL.js";import"./Checkbox-uScmMply.js";import"./ExpandableGroup-IiPNHecH.js";import"./Icon-Bg-l_S92.js";import"./Well-DdbSBrlA.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-BRKi8Ft9.js";const X={title:"Components (Verified)/Buttons",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},e={args:{label:"Button",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},t={args:{...e.args,appearance:"secondary"}},s={args:{...e.args,disabled:!0}},o={args:{...e.args,appearance:"warning"}},i={name:"With icon",args:{...e.args},render:a=>r.jsxs(D,{children:[r.jsx(n,{...a,label:"Back",iconLeft:"left"}),r.jsx(n,{...a,label:"Next",iconRight:"right"})]})},c={name:"With animated icon",args:{...e.args,label:"Submit your complaint"},render:a=>r.jsx(n,{...a,iconRight:"updating"})},m={name:"Button group",render:a=>r.jsxs(D,{children:[r.jsx(n,{...a,label:"Yes"},"Yes"),r.jsx(n,{...a,label:"No"},"No"),r.jsx(n,{...a,label:"Maybe So"},"Maybe so")]})},p={name:"Full-width (on x-small screens)",args:{...e.args,label:"Button",appearance:"primary",size:"full"}};var u,l,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,b,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,B,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var S,x,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var k,_,P;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var G,R,v;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(v=(R=c.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var L,N,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe so' {...arguments_} label='Maybe So' />
    </ButtonGroup>
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var z,I,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const Z=["Primary","Secondary","Disabled","Destructive","StaticIconButtons","AnimatedIconButtons","ButtonsGroup","FullWidthOnSmallScreens"];export{c as AnimatedIconButtons,m as ButtonsGroup,o as Destructive,s as Disabled,p as FullWidthOnSmallScreens,e as Primary,t as Secondary,i as StaticIconButtons,Z as __namedExportsOrder,X as default};

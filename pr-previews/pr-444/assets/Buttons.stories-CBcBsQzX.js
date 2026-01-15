import{j as r}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as D}from"./TextIntroduction-Bstxs7Zo.js";import{B as n}from"./Dropdown-B6xjHWB2.js";import"./Checkbox-uScmMply.js";import"./ExpandableGroup-B-nqpYqT.js";import"./Icon-DrPd1Ij2.js";import"./Well-Bfy2vVI4.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-ZDMBHX8g.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-BZIwhJs7.js";const X={title:"Components (Verified)/Buttons",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, <a href="https://cfpb.github.io/design-system/components/links" target="_blank">links</a> should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},e={args:{label:"Button",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},t={args:{...e.args,appearance:"secondary"}},s={args:{...e.args,disabled:!0}},o={args:{...e.args,appearance:"warning"}},i={name:"With icon",args:{...e.args},render:a=>r.jsxs(D,{children:[r.jsx(n,{...a,label:"Back",iconLeft:"left"}),r.jsx(n,{...a,label:"Next",iconRight:"right"})]})},c={name:"With animated icon",args:{...e.args,label:"Submit your complaint"},render:a=>r.jsx(n,{...a,iconRight:"updating"})},p={name:"Button group",render:a=>r.jsxs(D,{children:[r.jsx(n,{...a,label:"Yes"},"Yes"),r.jsx(n,{...a,label:"No"},"No"),r.jsx(n,{...a,label:"Maybe So"},"Maybe So")]})},m={name:"Full width (on x-small screens)",args:{...e.args,label:"Button",appearance:"primary",size:"full"}};var u,l,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,f,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,x,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,_,P;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var G,R,L;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(L=(R=c.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var N,W,v;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe So' {...arguments_} label='Maybe So' />
    </ButtonGroup>
}`,...(v=(W=p.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var z,I,w;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Full width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
}`,...(w=(I=m.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const Z=["Primary","Secondary","Disabled","Destructive","StaticIconButtons","AnimatedIconButtons","ButtonsGroup","FullWidthOnSmallScreens"];export{c as AnimatedIconButtons,p as ButtonsGroup,o as Destructive,s as Disabled,m as FullWidthOnSmallScreens,e as Primary,t as Secondary,i as StaticIconButtons,Z as __namedExportsOrder,X as default};

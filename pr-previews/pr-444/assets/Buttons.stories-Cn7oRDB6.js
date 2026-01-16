import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as p}from"./TextIntroduction-DSW2Zlwc.js";import{B as r}from"./Dropdown-CdQkMC_z.js";import"./Checkbox-uScmMply.js";import"./ExpandableGroup-2Yk9s-Ct.js";import{I as O}from"./Icon-BoyTgjCy.js";import{L as A,a as E}from"./Well-gJoKksGL.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-byJ3EejR.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-B7HMSWCU.js";const te={title:"Components (Verified)/Buttons",component:r,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},n={args:{label:"Button",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},t={args:{...n.args,appearance:"secondary"}},s={args:{...n.args,disabled:!0}},o={args:{...n.args,appearance:"warning"}},i={name:"With icon",args:{...n.args},render:a=>e.jsxs(p,{children:[e.jsx(r,{...a,label:"Back",iconLeft:"left"}),e.jsx(r,{...a,label:"Next",iconRight:"right"})]})},c={name:"With animated icon",args:{...n.args,label:"Submit your complaint"},render:a=>e.jsx(r,{...a,iconRight:"updating"})},l={name:"Button group",render:a=>e.jsxs(p,{children:[e.jsx(r,{...a,label:"Yes"},"Yes"),e.jsx(r,{...a,label:"No"},"No"),e.jsx(r,{...a,label:"Maybe So"},"Maybe so")]})},u={name:"Full-width (on x-small screens)",args:{...n.args,label:"Button",appearance:"primary",size:"full"}},m={name:"Button link",render:a=>e.jsxs(p,{children:[e.jsxs(A,{className:"a-btn",children:[e.jsx(E,{children:"Link styled as a button"}),e.jsx(O,{name:"download"})]}),e.jsx(r,{asLink:!0,...a,label:"Button styled as a link",iconRight:"download"},"1")]})};var d,g,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var B,h,y;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,k,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,L,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(j=(L=o.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,G,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
}`,...(R=(G=i.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var w,I,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,v,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe so' {...arguments_} label='Maybe So' />
    </ButtonGroup>
}`,...(W=(v=l.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var z,T,D;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var F,M,Y;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Button link',
  render: arguments_ => <ButtonGroup>
      <Link className='a-btn'>
        <LinkText>Link styled as a button</LinkText>
        <Icon name='download' />
      </Link>
      <Button asLink key='1' {...arguments_} label='Button styled as a link' iconRight='download' />
    </ButtonGroup>
}`,...(Y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};const se=["Primary","Secondary","Disabled","Destructive","StaticIconButtons","AnimatedIconButtons","ButtonsGroup","FullWidthOnSmallScreens","ButtonLink"];export{c as AnimatedIconButtons,m as ButtonLink,l as ButtonsGroup,o as Destructive,s as Disabled,u as FullWidthOnSmallScreens,n as Primary,t as Secondary,i as StaticIconButtons,se as __namedExportsOrder,te as default};

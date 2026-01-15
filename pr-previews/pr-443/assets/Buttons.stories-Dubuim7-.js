import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as m}from"./TextIntroduction-CGWCMLZA.js";import{B as n}from"./Dropdown-D7xgvMGk.js";import"./Checkbox-PbiD6xC7.js";import"./ExpandableGroup-Bpazd6ch.js";import"./Icon-Dn-vjceH.js";import"./Well-DdbSBrlA.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-e7KR3_L7.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-D4e-hSRy.js";const ae={title:"Components (Verified)/Buttons",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, <a href="https://cfpb.github.io/design-system/components/links" target="_blank">links</a> should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},a={args:{label:"Button",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},t={args:{...a.args,appearance:"secondary"}},s={args:{...a.args,disabled:!0}},o={args:{...a.args,appearance:"warning"}},i={name:"Destructive action",args:{...a.args,label:"Destructive action",appearance:"warning",size:"default",asLink:!0},render:r=>e.jsxs(m,{children:[e.jsx(n,{label:"Action"}),e.jsx(n,{label:"Destructive action",...r})]})},c={name:"Full width (on x-small screens)",args:{...a.args,label:"Button",appearance:"primary",size:"full"}},u={name:"Button group",render:r=>e.jsxs(m,{children:[e.jsx(n,{...r,label:"Yes"},"Yes"),e.jsx(n,{...r,label:"No"},"No"),e.jsx(n,{...r,label:"Maybe So"},"Maybe So")]})},l={name:"With icon",args:{...a.args},render:r=>e.jsxs(m,{children:[e.jsx(n,{...r,label:"Back",iconLeft:"left"}),e.jsx(n,{...r,label:"Next",iconRight:"right"})]})},p={name:"With animated icon",args:{...a.args,label:"Submit your complaint"},render:r=>e.jsx(n,{...r,iconRight:"updating"})};var d,g,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,B,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var f,S,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var j,k,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var D,_,G;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Destructive action',
  args: {
    ...Primary.args,
    label: 'Destructive action',
    appearance: 'warning',
    size: 'default',
    asLink: true
  },
  render: arguments_ => <ButtonGroup>
      <Button label='Action' />
      <Button label={'Destructive action'} {...arguments_} />
    </ButtonGroup>
}`,...(G=(_=i.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var P,L,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Full width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var R,w,A;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe So' {...arguments_} label='Maybe So' />
    </ButtonGroup>
}`,...(A=(w=u.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var N,W,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
}`,...(I=(W=l.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var F,M,Y;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(Y=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};const re=["Primary","Secondary","Disabled","Destructive","DestructiveAction","FullWidthOnSmallScreens","ButtonsGroup","StaticIconButtons","AnimatedIconButtons"];export{p as AnimatedIconButtons,u as ButtonsGroup,o as Destructive,i as DestructiveAction,s as Disabled,c as FullWidthOnSmallScreens,a as Primary,t as Secondary,l as StaticIconButtons,re as __namedExportsOrder,ae as default};

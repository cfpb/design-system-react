import{j as e}from"./index.7eca609e.js";/* empty css                */import{c as l}from"./TextIntroduction.f2af4f4d.js";import{B as t}from"./Dropdown.4fe1bd26.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.87f134ef.js";import"./Icon.d6b273da.js";import"./Well.e7055d12.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.946277fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.67af5abc.js";import"./index.f108a8f5.js";import"./iframe.fde415cf.js";import"../sb-preview/runtime.js";const te={title:"Components (Verified)/Buttons",component:t,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, <a href="https://cfpb.github.io/design-system/components/links" target="_blank">links</a> should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},r={args:{label:"Button",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},n={args:{...r.args,appearance:"secondary"}},s={args:{...r.args,disabled:!0}},o={args:{...r.args,appearance:"warning"}},i={name:"Destructive action",args:{...r.args,label:"Destructive action",appearance:"warning",size:"default",asLink:!0},render:a=>e.exports.jsxs(l,{children:[e.exports.jsx(t,{label:"Action"}),"\xA0",e.exports.jsx(t,{...a})]})},c={name:"Full width (on x-small screens)",args:{...r.args,label:"Button",appearance:"primary",size:"full"}},p={name:"Button group",render:a=>e.exports.jsxs(l,{children:[e.exports.jsx(t,{...a,label:"Yes"},"Yes"),e.exports.jsx(t,{...a,label:"No"},"No"),e.exports.jsx(t,{...a,label:"Maybe So"},"Maybe So")]})},u={name:"With icon",args:{...r.args},render:a=>e.exports.jsxs(l,{children:[e.exports.jsx(t,{...a,label:"Back",iconLeft:"left"}),e.exports.jsx(t,{...a,label:"Next",iconRight:"right"})]})},m={name:"With animated icon",args:{...r.args,label:"Submit your complaint"},render:a=>e.exports.jsx(t,{...a,iconRight:"updating"})};var d,g,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,B,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(y=(B=n.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var f,x,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,k,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(_=(k=o.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var v,D,G;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      &nbsp;
      <Button {...arguments_} />
    </ButtonGroup>
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var P,L,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Full width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var A,R,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe So' {...arguments_} label='Maybe So' />
    </ButtonGroup>
}`,...(w=(R=p.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var N,W,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
}`,...(I=(W=u.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var F,M,Y;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(Y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};const ne=["Primary","Secondary","Disabled","Destructive","DestructiveAction","FullWidthOnSmallScreens","ButtonsGroup","StaticIconButtons","AnimatedIconButtons"];export{m as AnimatedIconButtons,p as ButtonsGroup,o as Destructive,i as DestructiveAction,s as Disabled,c as FullWidthOnSmallScreens,r as Primary,n as Secondary,u as StaticIconButtons,ne as __namedExportsOrder,te as default};

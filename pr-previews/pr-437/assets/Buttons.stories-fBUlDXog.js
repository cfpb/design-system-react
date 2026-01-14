import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as d}from"./TextIntroduction-_XWeEWgC.js";import{B as t}from"./Dropdown-D4N4kWIW.js";import"./Checkbox-uScmMply.js";import"./ExpandableGroup-Pk5e7fIE.js";import{I as C}from"./Icon-BnZBDUpy.js";import{L as V}from"./Well-D6T-ZqGb.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-ZDMBHX8g.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-CZrsSq3Q.js";const ie={title:"Components (Verified)/Buttons",component:t,tags:["autodocs"],argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, <a href="https://cfpb.github.io/design-system/components/links" target="_blank">links</a> should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},n={args:{label:"Button",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},r={args:{...n.args,appearance:"secondary"}},s={args:{...n.args,disabled:!0}},o={args:{...n.args,appearance:"warning"}},i={name:"Destructive action",args:{...n.args,label:"Destructive action",appearance:"warning",size:"default",asLink:!0},render:a=>e.jsxs(d,{children:[e.jsx(t,{label:"Action"}),e.jsx(t,{label:"Destructive action",...a})]})},c={name:"Full width (on x-small screens)",args:{...n.args,label:"Button",appearance:"primary",size:"full"}},l={name:"Button link",render:a=>e.jsxs(d,{children:[e.jsxs(V,{asButton:!0,hasIcon:!0,href:"http://example.com",...a,children:[e.jsx("span",{children:"Link styled as a button"}),e.jsx(C,{name:"download"})]},"Link styled as a button"),e.jsx(t,{asLink:!0,...a,label:"Button styled as a link",iconRight:"download"},"Button styled as a link")]})},u={name:"Button group",render:a=>e.jsxs(d,{children:[e.jsx(t,{...a,label:"Yes"},"Yes"),e.jsx(t,{...a,label:"No"},"No"),e.jsx(t,{...a,label:"Maybe So"},"Maybe So")]})},p={name:"With icon",args:{...n.args},render:a=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(t,{...a,label:"Back",iconLeft:"left"}),e.jsx(t,{...a,label:"Next",iconRight:"right"})]}),e.jsx("br",{}),e.jsx(t,{label:"Upload file",iconRight:"upload"})]})},m={name:"With animated icon",args:{...n.args,label:"Submit your complaint"},render:a=>e.jsx(t,{...a,iconRight:"updating"})};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var B,y,f;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,x,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,L,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var v,D,G;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var R,w,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Full width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var P,z,A;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Button link',
  render: arguments_ => <ButtonGroup>
      <Link asButton hasIcon href='http://example.com' key='Link styled as a button' {...arguments_}>
        <span>Link styled as a button</span>
        <Icon name='download' />
      </Link>
      <Button asLink key='Button styled as a link' {...arguments_} label='Button styled as a link' iconRight='download' />
    </ButtonGroup>
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var N,W,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe So' {...arguments_} label='Maybe So' />
    </ButtonGroup>
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var M,Y,O;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <>
      <ButtonGroup>
        <Button {...arguments_} label='Back' iconLeft='left' />
        <Button {...arguments_} label='Next' iconRight='right' />
      </ButtonGroup>
      <br />
      <Button label='Upload file' iconRight='upload' />
    </>
}`,...(O=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var E,T,U;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(U=(T=m.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const ce=["Primary","Secondary","Disabled","Destructive","DestructiveAction","FullWidthOnSmallScreens","ButtonLink","ButtonsGroup","StaticIconButtons","AnimatedIconButtons"];export{m as AnimatedIconButtons,l as ButtonLink,u as ButtonsGroup,o as Destructive,i as DestructiveAction,s as Disabled,c as FullWidthOnSmallScreens,n as Primary,r as Secondary,p as StaticIconButtons,ce as __namedExportsOrder,ie as default};

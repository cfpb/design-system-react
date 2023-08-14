import{g as s,h as a}from"./Well.2db23307.js";import"./Dropdown.2b540f0c.js";import"./ExpandableGroup.78261938.js";import{I as u}from"./Icon.1313dab3.js";import{j as r,a as d}from"./jsx-runtime.5f84dc07.js";import"./extends.cc011e2f.js";import"./floating-ui.dom.esm.1a703617.js";import"./index.40d0d0b8.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.1de0cd5f.js";import"../sb-preview/runtime.js";const M={component:s,parameters:{docs:{description:{component:`
### CFPB DS Link component

https://cfpb.github.io/design-system/components/links
`}}}},e={args:{href:"#",children:r(a,{children:"Link Text"})}},i={args:{...e.args,type:"list"}},o={args:{...e.args,type:"destructive"}},t={args:{...e.args,hasIcon:!0,type:"list"},render:n=>d(s,{...n,children:[r(a,{children:"Document link"})," ",r(u,{name:"document"})]})},c={args:{...t.args,noWrap:!0},render:n=>d(s,{...n,children:[r(a,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati incidunt explicabo, odio delectus quia magnam non . teeeeext"}),r(u,{name:"document"})]})},m={args:{...e.args,isJump:!0},render:n=>d(s,{...n,children:[r(a,{children:"Jump link"}),r(u,{name:"right"})]})},p={args:{...e.args,isJumpLeft:!0},render:n=>d(s,{...n,children:[r(u,{name:"left"}),r(a,{children:"Jump link"})]})};var g,l,L;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: <LinkText>Link Text</LinkText>
  }
}`,...(L=(l=e.parameters)==null?void 0:l.docs)==null?void 0:L.source}}};var k,h,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'list'
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,I,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'destructive'
  }
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,J,_;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hasIcon: true,
    type: 'list'
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Document link</LinkText> <Icon name='document' />
    </Link>
}`,...(_=(J=t.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var W,S,y;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    noWrap: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        incidunt explicabo, odio delectus quia magnam non . teeeeext
      </LinkText>

      <Icon name='document' />
    </Link>
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,v,j;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>
      <Icon name='right' />
    </Link>
}`,...(j=(v=m.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var O,q,N;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      <LinkText>Jump link</LinkText>
    </Link>
}`,...(N=(q=p.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const Q=["Default","ListLink","Destructive","WithIcon","WithIconNoWrapping","JumpLink","JumpLinkIconLeft"];export{e as Default,o as Destructive,m as JumpLink,p as JumpLinkIconLeft,i as ListLink,t as WithIcon,c as WithIconNoWrapping,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=Link.stories.e6cf098e.js.map

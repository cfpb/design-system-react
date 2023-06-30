import{e as s,f as a}from"./Well.08580746.js";import"./Dropdown.7b0955ce.js";import"./ExpandableGroup.ceebfd12.js";import{I as u}from"./Icon.7b8e40bf.js";import{j as n,a as d}from"./jsx-runtime.3c5b5edf.js";import"./isNativeReflectConstruct.eb2b9305.js";import"./index.c8a4389a.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.0592c687.js";import"../sb-preview/runtime.js";const K={component:s,parameters:{docs:{description:{component:`
### CFPB DS Link component

https://cfpb.github.io/design-system/components/links
`}}}},e={args:{href:"#",children:n(a,{children:"Link Text"})}},i={args:{...e.args,type:"list"}},o={args:{...e.args,type:"destructive"}},t={args:{...e.args,hasIcon:!0,type:"list"},render:r=>d(s,{...r,children:[n(a,{children:"Document link"})," ",n(u,{name:"document"})]})},c={args:{...t.args,noWrap:!0},render:r=>d(s,{...r,children:[n(a,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati incidunt explicabo, odio delectus quia magnam non . teeeeext"}),n(u,{name:"document"})]})},m={args:{...e.args,isJump:!0},render:r=>d(s,{...r,children:[n(a,{children:"Jump link"}),n(u,{name:"right"})]})},p={args:{...e.args,isJumpLeft:!0},render:r=>d(s,{...r,children:[n(u,{name:"left"}),n(a,{children:"Jump link"})]})};var g,l,L;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: <LinkText>Link Text</LinkText>
  }
}`,...(L=(l=e.parameters)==null?void 0:l.docs)==null?void 0:L.source}}};var k,h,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'list'
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,I,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(q=p.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const M=["Default","ListLink","Destructive","WithIcon","WithIconNoWrapping","JumpLink","JumpLinkIconLeft"];export{e as Default,o as Destructive,m as JumpLink,p as JumpLinkIconLeft,i as ListLink,t as WithIcon,c as WithIconNoWrapping,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Link.stories.1685a2aa.js.map

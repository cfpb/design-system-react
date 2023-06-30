import{I as p}from"./Icon.574d4adb.js";import{L as s,a}from"./Link.785ba0e1.js";import{j as n,a as d}from"./jsx-runtime.3c5b5edf.js";import"./index.cfa9e344.js";import"./iframe.751255b8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.712cc82f.js";const A={component:s,parameters:{docs:{description:{component:`
### CFPB DS Link component

https://cfpb.github.io/design-system/components/links
`}}}},e={args:{href:"#",children:n(a,{children:"Link Text"})}},i={args:{...e.args,type:"list"}},o={args:{...e.args,type:"destructive"}},t={args:{...e.args,hasIcon:!0,type:"list"},render:r=>d(s,{...r,children:[n(a,{children:"Document link"})," ",n(p,{name:"document"})]})},c={args:{...t.args,noWrap:!0},render:r=>d(s,{...r,children:[n(a,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati incidunt explicabo, odio delectus quia magnam non . teeeeext"}),n(p,{name:"document"})]})},m={args:{...e.args,isJump:!0},render:r=>d(s,{...r,children:[n(a,{children:"Jump link"}),n(p,{name:"right"})]})},u={args:{...e.args,isJumpLeft:!0},render:r=>d(s,{...r,children:[n(p,{name:"left"}),n(a,{children:"Jump link"})]})};var g,l,L;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(v=m.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var O,q,N;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      <LinkText>Jump link</LinkText>
    </Link>
}`,...(N=(q=u.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const G=["Default","ListLink","Destructive","WithIcon","WithIconNoWrapping","JumpLink","JumpLinkIconLeft"];export{e as Default,o as Destructive,m as JumpLink,u as JumpLinkIconLeft,i as ListLink,t as WithIcon,c as WithIconNoWrapping,G as __namedExportsOrder,A as default};
//# sourceMappingURL=Link.stories.909bb58e.js.map

import{h as t,i as a,L as C,g as N,D as B}from"./Well.f855fcfb.js";import"./Dropdown.68d2f0ae.js";import"./Checkbox.86ef18cf.js";import"./ExpandableGroup.26055576.js";import{I as p}from"./Icon.045269e6.js";import{j as e,a as d}from"./jsx-runtime.54133100.js";import"./index.cfa9e344.js";import"./extends.cc011e2f.js";import"./isNativeReflectConstruct.c66bbbb3.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.1195f0cd.js";import"../sb-preview/runtime.js";const V={component:t,parameters:{docs:{description:{component:`
### CFPB DS Link component

https://cfpb.github.io/design-system/components/links
`}}}},r={args:{href:"#",children:e(a,{children:"Link Text"})}},i={args:{...r.args},render:n=>e(C,{isLinks:!0,children:e(N,{...n})})},o={args:{...r.args},render:n=>e(B,{...n})},s={args:{...r.args,hasIcon:!0,type:"default"},render:n=>d(t,{...n,children:[e(a,{children:"Download file"})," ",e(p,{name:"download"})]})},c={args:{...s.args,noWrap:!0},render:n=>d(t,{...n,children:[e(a,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati incidunt explicabo, odio delectus quia magnam non . teeeeext"}),e(p,{name:"document"})]})},m={args:{...r.args,isJump:!0},render:n=>d(t,{...n,children:[e(a,{children:"Jump link"}),e(p,{name:"right"})]})},u={args:{...r.args,isJumpLeft:!0},render:n=>d(t,{...n,children:[e(p,{name:"left"}),e(a,{children:"Jump link"})]})};var g,l,L;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: <LinkText>Link Text</LinkText>
  }
}`,...(L=(l=r.parameters)==null?void 0:l.docs)==null?void 0:L.source}}};var k,h,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: arguments_ => <List isLinks>
      <ListLinkComponent {...arguments_} />
    </List>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,D,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var _,T,J;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hasIcon: true,
    type: 'default'
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Download file</LinkText> <Icon name='download' />
    </Link>
}`,...(J=(T=s.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var W,S,b;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,w,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>
      <Icon name='right' />
    </Link>
}`,...(j=(w=m.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var y,O,q;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      <LinkText>Jump link</LinkText>
    </Link>
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const X=["Default","ListLink","Destructive","WithIcon","WithIconNoWrapping","JumpLink","JumpLinkIconLeft"];export{r as Default,o as Destructive,m as JumpLink,u as JumpLinkIconLeft,i as ListLink,s as WithIcon,c as WithIconNoWrapping,X as __namedExportsOrder,V as default};
//# sourceMappingURL=Link.stories.a2523f83.js.map

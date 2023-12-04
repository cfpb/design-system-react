/* empty css                */import{L as r,g as B,i as h,D as H,j as t}from"./Well.1aaf8769.js";import"./Dropdown.d7e6072a.js";import"./Checkbox.ad7351d6.js";import"./ExpandableGroup.ff58de01.js";import{I as a}from"./Icon.486f9235.js";import{a as i,j as n,F as C}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.6ef72950.js";import"../sb-preview/runtime.js";const $={title:"Components (Verified)/Links",component:r},o={args:{href:"#",children:"Link Text"}},c={name:"Inline links",render:()=>i("p",{children:["Here's the ",n(r,{href:"/#",children:"default link style"}),". For reference, here's the"," ",n(r,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",n(r,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",n(r,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",n(r,{href:"/#",className:"visited",children:"visited link style"}),"."]})},m={name:"List links",args:{...o.args},render:e=>i(B,{isLinks:!0,children:[n(h,{...e,children:"List link 1"}),n(h,{...e,children:"List link 2"})]})},l={name:"Destructive links",args:{...o.args,children:"Destructive link"},render:e=>n(H,{...e})},s={name:"Link with icon",args:{...o.args,hasIcon:!0},render:e=>i(C,{children:["The document icon should emphasize a link that contains a"," ",i(r,{...e,children:[n(t,{children:"file or document"})," ",n(a,{name:"download"})]}),". Use the external link icon to emphasize"," ",i(r,{...e,children:[n(t,{children:"a non-CFPB webpage"})," ",n(a,{name:"external-link"})]})," ","for further details."]})},u={name:"Non-wrapping link with icon",args:{...s.args,noWrap:!0},render:e=>i(C,{children:["The document icon should emphasize a link that contains a"," ",i(r,{...e,children:[n(t,{children:"file or document"})," ",n(a,{name:"download"})]}),"."]})},k={name:"Jump link",args:{...o.args,isJump:!0},render:e=>i(r,{...e,children:[n(t,{children:"Jump link"}),"\xA0",n(a,{name:"right"})]})},d={name:"Jump link with icon on left",args:{...o.args,isJumpLeft:!0},render:e=>i(r,{...e,children:[n(a,{name:"left"}),"\xA0",n(t,{children:"Jump link with icon on left"})]})};var p,L,g;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Inline links',
  render: () => <p>
      Here&apos;s the <Link href='/#'>default link style</Link>. For reference,
      here&apos;s the{' '}
      <Link href='/#' className='hover'>
        hover link style
      </Link>
      . Train your eyes on the{' '}
      <Link href='/#' className='focus'>
        focused link style
      </Link>
      . Jump to the{' '}
      <Link href='/#' className='active'>
        active link style
      </Link>
      . We&apos;ve all been to the{' '}
      <Link href='/#' className='visited'>
        visited link style
      </Link>
      .
    </p>
}`,...(g=(L=c.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var f,v,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>List link 1</ListLink>
      <ListLink {...arguments_}>List link 2</ListLink>
    </List>
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var I,J,T;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(T=(J=l.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var w,D,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Link with icon',
  args: {
    ...DefaultArguments.args,
    hasIcon: true
  },
  render: arguments_ => <>
      The document icon should emphasize a link that contains a{' '}
      <Link {...arguments_}>
        <LinkText>file or document</LinkText> <Icon name='download' />
      </Link>
      . Use the external link icon to emphasize{' '}
      <Link {...arguments_}>
        <LinkText>a non-CFPB webpage</LinkText> <Icon name='external-link' />
      </Link>{' '}
      for further details.
    </>
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var _,N,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Non-wrapping link with icon',
  args: {
    ...LinkWithIcon.args,
    noWrap: true
  },
  render: arguments_ => <>
      The document icon should emphasize a link that contains a{' '}
      <Link {...arguments_}>
        <LinkText>file or document</LinkText> <Icon name='download' />
      </Link>
      .
    </>
}`,...(W=(N=u.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var A,S,b;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>&nbsp;
      <Icon name='right' />
    </Link>
}`,...(b=(S=k.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var z,F,j;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      &nbsp;<LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...(j=(F=d.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const nn=["Inline","ListLinks","Destructive","LinkWithIcon","LinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft"];export{l as Destructive,c as Inline,k as JumpLink,d as JumpLinkIconLeft,s as LinkWithIcon,u as LinkWithIconNoWrapping,m as ListLinks,nn as __namedExportsOrder,$ as default};
//# sourceMappingURL=Link.stories.cde26693.js.map

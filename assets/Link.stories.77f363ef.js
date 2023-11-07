/* empty css                */import"./Well.ea54efd7.js";import"./Dropdown.a9b968bd.js";import"./Checkbox.fe2d0150.js";import"./ExpandableGroup.a04d87df.js";import{I as i}from"./Icon.e5ec578e.js";import{a,j as n,F as j}from"./jsx-runtime.54133100.js";import{b as r,L as B,d as k,D as H,e as s}from"./TextIntroduction.84e2ef5f.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.d0cd645b.js";import"../sb-preview/runtime.js";const nn={title:"Components (Draft)/Links",component:r},o={args:{href:"#",children:"Link Text"}},l={name:"Inline links",render:()=>a("p",{children:["Here's the ",n(r,{href:"/#",children:"default link style"}),". For reference, here's the"," ",n(r,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",n(r,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",n(r,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",n(r,{href:"/#",className:"visited",children:"visited link style"}),"."]})},c={name:"Call-to-action links",args:{...o.args},render:e=>a(B,{isLinks:!0,children:[n(k,{...e,children:"Sample call-to-action link"}),n(k,{...e,children:"Another sample call-to-action link"})]})},m={name:"Destructive links",args:{...o.args,children:"Sample destructive link"},render:e=>n(H,{...e})},t={name:"Standard link with icon",args:{...o.args,hasIcon:!0},render:e=>a(j,{children:["The document icon should emphasize a link that contains a"," ",a(r,{...e,children:[n(s,{children:"file or document"})," ",n(i,{name:"download"})]}),". Use the external link icon to emphasize"," ",a(r,{...e,children:[n(s,{children:"a non-CFPB webpage"})," ",n(i,{name:"external-link"})]})," ","for further details."]})},d={name:"Non-wrapping icon links",args:{...t.args,noWrap:!0},render:e=>a(j,{children:["The document icon should emphasize a link that contains a"," ",a(r,{...e,children:[n(s,{children:"file or document"})," ",n(i,{name:"download"})]}),"."]})},u={name:"Jump link",args:{...o.args,isJump:!0},render:e=>a(r,{...e,children:[n(s,{children:"Default jump link"}),"\xA0",n(i,{name:"right"})]})},p={name:"Jump link with icon on left",args:{...o.args,isJumpLeft:!0},render:e=>a(r,{...e,children:[n(i,{name:"left"}),"\xA0",n(s,{children:"Jump link with icon on left"})]})};var h,L,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(L=l.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var f,v,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Call-to-action links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>Sample call-to-action link</ListLink>
      <ListLink {...arguments_}>Another sample call-to-action link</ListLink>
    </List>
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var I,T,S;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Sample destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var D,J,w;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Standard link with icon',
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
}`,...(w=(J=t.parameters)==null?void 0:J.docs)==null?void 0:w.source}}};var y,_,A;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Non-wrapping icon links',
  args: {
    ...StandardLinkWithIcon.args,
    noWrap: true
  },
  render: arguments_ => <>
      The document icon should emphasize a link that contains a{' '}
      <Link {...arguments_}>
        <LinkText>file or document</LinkText> <Icon name='download' />
      </Link>
      .
    </>
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var N,W,b;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Default jump link</LinkText>&nbsp;
      <Icon name='right' />
    </Link>
}`,...(b=(W=u.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var C,z,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      &nbsp;<LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...(F=(z=p.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const en=["Inline","CallToAction","Destructive","StandardLinkWithIcon","StandardLinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft"];export{c as CallToAction,m as Destructive,l as Inline,u as JumpLink,p as JumpLinkIconLeft,t as StandardLinkWithIcon,d as StandardLinkWithIconNoWrapping,en as __namedExportsOrder,nn as default};
//# sourceMappingURL=Link.stories.77f363ef.js.map

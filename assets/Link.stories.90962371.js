import{L as r,a as U,h,D as E,i as s,B as O}from"./Well.e4dc9050.js";/* empty css                */import"./Dropdown.51036178.js";import"./Checkbox.adabeb2b.js";import"./ExpandableGroup.54048ccb.js";import{I as a}from"./Icon.f601679c.js";import{a as i,j as e,F as P}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.034b3e74.js";import"../sb-preview/runtime.js";const te={title:"Components (Verified)/Links",tags:["autodocs"],component:r},o={args:{href:"#",children:"Link Text"}},c={name:"Inline links",render:()=>i("p",{children:["Here's the ",e(r,{href:"/#",children:"default link style"}),". For reference, here's the"," ",e(r,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",e(r,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",e(r,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",e(r,{href:"/#",className:"visited",children:"visited link style"}),"."]})},m={name:"List links",args:{...o.args},render:n=>i(U,{isLinks:!0,children:[e(h,{...n,children:"List link 1"}),e(h,{...n,children:"List link 2"})]})},l={name:"Destructive links",args:{...o.args,children:"Destructive link"},render:n=>e(E,{...n})},t={name:"Link with icon",args:{...o.args,hasIcon:!0},render:n=>i(P,{children:["The document icon should emphasize a link that contains a"," ",i(r,{...n,children:[e(s,{children:"file or document"})," ",e(a,{name:"download"})]}),". Use the external link icon to emphasize"," ",i(r,{...n,children:[e(s,{children:"a non-CFPB webpage"})," ",e(a,{name:"external-link"})]})," ","for further details."]})},u={name:"Non-wrapping link with icon",args:{...t.args,noWrap:!0},render:n=>i(P,{children:["The document icon should emphasize a link that contains a"," ",i(r,{...n,children:[e(s,{children:"file or document"})," ",e(a,{name:"download"})]}),"."]})},k={name:"Jump link",args:{...o.args,isJump:!0},render:n=>i(r,{...n,children:[e(s,{children:"Jump link"}),"\xA0",e(a,{name:"right"})]})},d={name:"Jump link with icon on left",args:{...o.args,isJumpLeft:!0},render:n=>i(r,{...n,children:[e(a,{name:"left"}),"\xA0",e(s,{children:"Jump link with icon on left"})]})},p={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>e(O,{children:e("p",{children:e(r,{href:"/#",isRouterLink:!0,children:"Link using React Router Link"})})})};var L,g,f;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>List link 1</ListLink>
      <ListLink {...arguments_}>List link 2</ListLink>
    </List>
}`,...(R=(x=m.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var I,w,J;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(J=(w=l.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};var T,y,D;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var _,W,N;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(W=u.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var S,A,b;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>&nbsp;
      <Icon name='right' />
    </Link>
}`,...(b=(A=k.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var z,B,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      &nbsp;<LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var j,C,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Link using React Router Link',
  parameters: {
    docs: {
      description: {
        story: 'See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information'
      }
    }
  },
  render: () => <BrowserRouter>
      <p>
        <Link href='/#' isRouterLink>
          Link using React Router Link
        </Link>
      </p>
    </BrowserRouter>
}`,...(H=(C=p.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const se=["Inline","ListLinks","Destructive","LinkWithIcon","LinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft","LinkWithReactRouterLink"];export{l as Destructive,c as Inline,k as JumpLink,d as JumpLinkIconLeft,t as LinkWithIcon,u as LinkWithIconNoWrapping,p as LinkWithReactRouterLink,m as ListLinks,se as __namedExportsOrder,te as default};
//# sourceMappingURL=Link.stories.90962371.js.map

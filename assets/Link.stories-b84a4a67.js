import{j as e}from"./jsx-runtime-eba35cff.js";import{L as r,a as E,c as p,D as H,d as i,B as P}from"./Well-11b17e27.js";/* empty css                */import"./TextIntroduction-ed53788c.js";import"./Dropdown-6a8553fc.js";import"./Checkbox-7e7ab2e2.js";import"./ExpandableGroup-3773f0a5.js";import{I as t}from"./Icon-a1f52d1d.js";import"./Paragraph-18b341b1.js";import"./TextArea-441eb386.js";import"./index-9053fc1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-eeaea43d.js";import"./index-798a71e2.js";import"./iframe-5b7f846e.js";const se={title:"Components (Verified)/Links",tags:["autodocs"],component:r},a={args:{href:"#",children:"Link Text"}},o={name:"Inline links",render:()=>e.jsxs("p",{children:["Here's the ",e.jsx(r,{href:"/#",children:"default link style"}),". For reference, here's the"," ",e.jsx(r,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",e.jsx(r,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",e.jsx(r,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",e.jsx(r,{href:"/#",className:"visited",children:"visited link style"}),"."]})},c={name:"List links",args:{...a.args},render:n=>e.jsxs(E,{isLinks:!0,children:[e.jsx(p,{...n,children:"List link 1"}),e.jsx(p,{...n,children:"List link 2"})]})},m={name:"Destructive links",args:{...a.args,children:"Destructive link"},render:n=>e.jsx(H,{...n})},s={name:"Link with icon",args:{...a.args,hasIcon:!0},render:n=>e.jsxs(e.Fragment,{children:["The document icon should emphasize a link that contains a"," ",e.jsxs(r,{...n,children:[e.jsx(i,{children:"file or document"})," ",e.jsx(t,{name:"download"})]}),". Use the external link icon to emphasize"," ",e.jsxs(r,{...n,children:[e.jsx(i,{children:"a non-CFPB webpage"})," ",e.jsx(t,{name:"external-link"})]})," ","for further details."]})},l={name:"Non-wrapping link with icon",args:{...s.args,noWrap:!0},render:n=>e.jsxs(e.Fragment,{children:["The document icon should emphasize a link that contains a"," ",e.jsxs(r,{...n,children:[e.jsx(i,{children:"file or document"})," ",e.jsx(t,{name:"download"})]}),"."]})},u={name:"Jump link",args:{...a.args,isJump:!0},render:n=>e.jsxs(r,{...n,children:[e.jsx(i,{children:"Jump link"})," ",e.jsx(t,{name:"right"})]})},k={name:"Jump link with icon on left",args:{...a.args,isJumpLeft:!0},render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{name:"left"})," ",e.jsx(i,{children:"Jump link with icon on left"})]})},d={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>e.jsx(P,{children:e.jsx("p",{children:e.jsx(r,{href:"/#",isRouterLink:!0,children:"Link using React Router Link"})})})};var h,L,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var f,x,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>List link 1</ListLink>
      <ListLink {...arguments_}>List link 2</ListLink>
    </List>
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,R,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(I=(R=m.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var w,J,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(J=s.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var y,D,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var W,N,S;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>&nbsp;
      <Icon name='right' />
    </Link>
}`,...(S=(N=u.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var b,z,A;k.parameters={...k.parameters,docs:{...(b=k.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      &nbsp;<LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...(A=(z=k.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,F,C;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(F=d.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const ie=["Inline","ListLinks","Destructive","LinkWithIcon","LinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft","LinkWithReactRouterLink"];export{m as Destructive,o as Inline,u as JumpLink,k as JumpLinkIconLeft,s as LinkWithIcon,l as LinkWithIconNoWrapping,d as LinkWithReactRouterLink,c as ListLinks,ie as __namedExportsOrder,se as default};

import{j as e}from"./index.7eca609e.js";import{b as r,L as H,d,D as P,e as t,B as U}from"./Well.e7055d12.js";/* empty css                */import"./TextIntroduction.9da59396.js";import"./Dropdown.2a262cd5.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.5c530165.js";import{I as i}from"./Icon.499534c0.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.946277fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.67af5abc.js";import"./index.f108a8f5.js";import"./iframe.3da43df6.js";import"../sb-preview/runtime.js";const ie={title:"Components (Verified)/Links",tags:["autodocs"],component:r},o={args:{href:"#",children:"Link Text"}},a={name:"Inline links",render:()=>e.exports.jsxs("p",{children:["Here's the ",e.exports.jsx(r,{href:"/#",children:"default link style"}),". For reference, here's the"," ",e.exports.jsx(r,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",e.exports.jsx(r,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",e.exports.jsx(r,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",e.exports.jsx(r,{href:"/#",className:"visited",children:"visited link style"}),"."]})},c={name:"List links",args:{...o.args},render:n=>e.exports.jsxs(H,{isLinks:!0,children:[e.exports.jsx(d,{...n,children:"List link 1"}),e.exports.jsx(d,{...n,children:"List link 2"})]})},m={name:"Destructive links",args:{...o.args,children:"Destructive link"},render:n=>e.exports.jsx(P,{...n})},s={name:"Link with icon",args:{...o.args,hasIcon:!0},render:n=>e.exports.jsxs(e.exports.Fragment,{children:["The document icon should emphasize a link that contains a"," ",e.exports.jsxs(r,{...n,children:[e.exports.jsx(t,{children:"file or document"})," ",e.exports.jsx(i,{name:"download"})]}),". Use the external link icon to emphasize"," ",e.exports.jsxs(r,{...n,children:[e.exports.jsx(t,{children:"a non-CFPB webpage"})," ",e.exports.jsx(i,{name:"external-link"})]})," ","for further details."]})},p={name:"Non-wrapping link with icon",args:{...s.args,noWrap:!0},render:n=>e.exports.jsxs(e.exports.Fragment,{children:["The document icon should emphasize a link that contains a"," ",e.exports.jsxs(r,{...n,children:[e.exports.jsx(t,{children:"file or document"})," ",e.exports.jsx(i,{name:"download"})]}),"."]})},l={name:"Jump link",args:{...o.args,isJump:!0},render:n=>e.exports.jsxs(r,{...n,children:[e.exports.jsx(t,{children:"Jump link"}),"\xA0",e.exports.jsx(i,{name:"right"})]})},u={name:"Jump link with icon on left",args:{...o.args,isJumpLeft:!0},render:n=>e.exports.jsxs(r,{...n,children:[e.exports.jsx(i,{name:"left"}),"\xA0",e.exports.jsx(t,{children:"Jump link with icon on left"})]})},k={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>e.exports.jsx(U,{children:e.exports.jsx("p",{children:e.exports.jsx(r,{href:"/#",isRouterLink:!0,children:"Link using React Router Link"})})})};var h,L,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(L=a.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var g,f,j;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>List link 1</ListLink>
      <ListLink {...arguments_}>List link 2</ListLink>
    </List>
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,R,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(J=s.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var y,D,_;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(D=p.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var W,N,S;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>&nbsp;
      <Icon name='right' />
    </Link>
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var A,b,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      &nbsp;<LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...(z=(b=u.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var B,F,C;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(F=k.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const oe=["Inline","ListLinks","Destructive","LinkWithIcon","LinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft","LinkWithReactRouterLink"];export{m as Destructive,a as Inline,l as JumpLink,u as JumpLinkIconLeft,s as LinkWithIcon,p as LinkWithIconNoWrapping,k as LinkWithReactRouterLink,c as ListLinks,oe as __namedExportsOrder,ie as default};

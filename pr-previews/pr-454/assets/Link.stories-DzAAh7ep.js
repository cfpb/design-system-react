import{j as n}from"./jsx-runtime-Wp9Qcrv3.js";import{L as r,b as E,d as p,a as s,D as H,B as P}from"./Well-DMVuktKN.js";/* empty css                */import"./TextIntroduction-C2u3Z6e9.js";import{I as t}from"./Dropdown-BPquQnvN.js";import"./Checkbox-uScmMply.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-CKaCfP7D.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-XmDEAOo_.js";import"./index-DUolvyrz.js";import"./iframe-0qPzN9zE.js";const en={title:"Components (Verified)/Links",tags:["autodocs"],component:r},a={args:{href:"#",children:"Link Text"}},o={name:"Inline links",render:()=>n.jsxs("p",{children:["Here's the ",n.jsx(r,{href:"/#",children:"default link style"}),". For reference, here's the"," ",n.jsx(r,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",n.jsx(r,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",n.jsx(r,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",n.jsx(r,{href:"/#",className:"visited",children:"visited link style"}),"."]})},c={name:"List links",args:{...a.args},render:e=>n.jsxs(E,{isLinks:!0,children:[n.jsx(p,{...e,children:n.jsx(s,{children:"List link 1"})}),n.jsx(p,{...e,children:n.jsx(s,{children:"List link 2"})})]})},m={name:"Destructive links",args:{...a.args,children:"Destructive link"},render:e=>n.jsx(H,{...e})},i={name:"Link with icon",args:{...a.args,hasIcon:!0},render:e=>n.jsxs(n.Fragment,{children:["The document icon should emphasize a link that contains a"," ",n.jsxs(r,{...e,children:[n.jsx(s,{children:"file or document"})," ",n.jsx(t,{name:"download"})]}),". Use the external link icon to emphasize"," ",n.jsxs(r,{...e,children:[n.jsx(s,{children:"a non-CFPB webpage"})," ",n.jsx(t,{name:"external-link"})]})," ","for further details."]})},l={name:"Non-wrapping link with icon",args:{...i.args,noWrap:!0},render:e=>n.jsxs(n.Fragment,{children:["The document icon should emphasize a link that contains a"," ",n.jsxs(r,{...e,children:[n.jsx(s,{children:"file or document"})," ",n.jsx(t,{name:"download"})]}),"."]})},u={name:"Jump link",args:{...a.args,isJump:!0},render:e=>n.jsxs(r,{...e,children:[n.jsx(s,{children:"Jump link"}),n.jsx(t,{name:"right"})]})},k={name:"Jump link with icon on left",args:{...a.args,isJump:!0},render:e=>n.jsxs(r,{...e,children:[n.jsx(t,{name:"left"}),n.jsx(s,{children:"Jump link with icon on left"})]})},d={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>n.jsx(P,{children:n.jsx("p",{children:n.jsx(r,{href:"/#",isRouterLink:!0,children:n.jsx(s,{children:"Link using React Router Link"})})})})};var h,L,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var x,f,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>
        <LinkText>List link 1</LinkText>
      </ListLink>
      <ListLink {...arguments_}>
        <LinkText>List link 2</LinkText>
      </ListLink>
    </List>
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var T,v,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(R=(v=m.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var I,w,J;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(J=(w=i.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};var y,D,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      <LinkText>Jump link</LinkText>
      <Icon name='right' />
    </Link>
}`,...(S=(N=u.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var z,A,B;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      <LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...(B=(A=k.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,b,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
          <LinkText>Link using React Router Link</LinkText>
        </Link>
      </p>
    </BrowserRouter>
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const rn=["Inline","ListLinks","Destructive","LinkWithIcon","LinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft","LinkWithReactRouterLink"];export{m as Destructive,o as Inline,u as JumpLink,k as JumpLinkIconLeft,i as LinkWithIcon,l as LinkWithIconNoWrapping,d as LinkWithReactRouterLink,c as ListLinks,rn as __namedExportsOrder,en as default};

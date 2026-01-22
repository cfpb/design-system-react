import{j as n}from"./jsx-runtime-BLchON5X.js";/* empty css                */import"./TextIntroduction-CY3_wILz.js";import{I as t}from"./Dropdown-BAS5xsjk.js";import"./Checkbox-C8PZvyyp.js";import{L as r,b as h,d as p,a as s,D as L,B as g}from"./Well-XpBeq6ld.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Ddz0oDhE.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-ChmeYw71.js";const z={title:"Components (Verified)/Links",tags:["autodocs"],component:r},a={args:{href:"#",children:"Link Text"}},o={name:"Inline links",render:()=>n.jsxs("p",{children:["Here's the ",n.jsx(r,{href:"/#",children:"default link style"}),". For reference, here's the"," ",n.jsx(r,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",n.jsx(r,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",n.jsx(r,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",n.jsx(r,{href:"/#",className:"visited",children:"visited link style"}),"."]})},c={name:"List links",args:{...a.args},render:e=>n.jsxs(h,{isLinks:!0,children:[n.jsx(p,{...e,children:n.jsx(s,{children:"List link 1"})}),n.jsx(p,{...e,children:n.jsx(s,{children:"List link 2"})})]})},m={name:"Destructive links",args:{...a.args,children:"Destructive link"},render:e=>n.jsx(L,{...e})},i={name:"Link with icon",args:{...a.args,hasIcon:!0},render:e=>n.jsxs(n.Fragment,{children:["The document icon should emphasize a link that contains a"," ",n.jsxs(r,{...e,children:[n.jsx(s,{children:"file or document"})," ",n.jsx(t,{name:"download"})]}),". Use the external link icon to emphasize"," ",n.jsxs(r,{...e,children:[n.jsx(s,{children:"a non-CFPB webpage"})," ",n.jsx(t,{name:"external-link"})]})," ","for further details."]})},l={name:"Non-wrapping link with icon",args:{...i.args,noWrap:!0},render:e=>n.jsxs(n.Fragment,{children:["The document icon should emphasize a link that contains a"," ",n.jsxs(r,{...e,children:[n.jsx(s,{children:"file or document"})," ",n.jsx(t,{name:"download"})]}),"."]})},u={name:"Jump link",args:{...a.args,isJump:!0},render:e=>n.jsxs(r,{...e,children:[n.jsx(s,{children:"Jump link"}),n.jsx(t,{name:"right"})]})},k={name:"Jump link with icon on left",args:{...a.args,isJump:!0},render:e=>n.jsxs(r,{...e,children:[n.jsx(t,{name:"left"}),n.jsx(s,{children:"Jump link with icon on left"})]})},d={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>n.jsx(g,{children:n.jsx("p",{children:n.jsx(r,{href:"/#",isRouterLink:!0,children:n.jsx(s,{children:"Link using React Router Link"})})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>
      <Icon name='right' />
    </Link>
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      <LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...k.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const A=["Inline","ListLinks","Destructive","LinkWithIcon","LinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft","LinkWithReactRouterLink"];export{m as Destructive,o as Inline,u as JumpLink,k as JumpLinkIconLeft,i as LinkWithIcon,l as LinkWithIconNoWrapping,d as LinkWithReactRouterLink,c as ListLinks,A as __namedExportsOrder,z as default};

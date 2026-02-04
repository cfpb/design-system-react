import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";import{L as n,a as t,b as _,d as h,D as H,B as N}from"./Well-11qJzUyd.js";/* empty css                */import{H as p}from"./TextIntroduction-BU9D7tNt.js";import{I as r}from"./Dropdown-BCJylzgk.js";import"./Checkbox-uScmMply.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-XmDEAOo_.js";import"./index-DUolvyrz.js";import"./iframe-Biij4O4J.js";const Q={title:"Components (Verified)/Links",tags:["autodocs"],component:n},m={args:{href:"#",children:"Link Text"}},i={parameters:{docs:{description:{story:"Inline links appear within a line of text or other inline elements. Inline links are underlined and retain a consistent appearance across all screen widths."}}},render:()=>e.jsxs("p",{children:["Here's the ",e.jsx(n,{href:"/#",children:"default link style"}),". For reference, here's the"," ",e.jsx(n,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",e.jsx(n,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",e.jsx(n,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",e.jsx(n,{href:"/#",className:"visited",children:"visited link style"}),"."]})},a={args:{...m.args,isJump:!0},parameters:{docs:{description:{story:"Standalone links sit on their own line. At larger screen widths, standalone links are medium weight and underlined. At smaller screen widths, standalone links convert to full block links with top and bottom borders that have a finger-friendly touch area."}}},render:s=>e.jsx(n,{...s,children:e.jsx(t,{children:"Standalone link"})})},o={name:"With icon",args:{...m.args,hasIcon:!0},parameters:{docs:{description:{story:"Each icon should be used exclusively and consistently for one action. An icon should appear after the text it represents. The only exception is a link that takes a user to a previous step or page, where the icon should appear before the link’s text. Icons should never be underlined."}}},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"4",children:"Inline"}),e.jsxs("p",{children:["The document icon should emphasize a link that contains a"," ",e.jsxs(n,{...s,children:[e.jsx(t,{children:"file or document"})," ",e.jsx(r,{name:"download"})]}),". The external link icon is used to emphasize a link to a"," ",e.jsxs(n,{...s,children:[e.jsx(t,{children:"a non-CFPB webpage"})," ",e.jsx(r,{name:"external-link"})]}),"."]}),e.jsx(p,{type:"4",children:"Standalone"}),e.jsx("p",{children:e.jsxs(n,{hasIcon:!0,isJump:!0,href:"https://www.example.com",children:[e.jsx(r,{name:"left"}),e.jsx(t,{children:"Go back"})]})}),e.jsx("p",{children:e.jsxs(n,{hasIcon:!0,isJump:!0,href:"https://www.example.com",children:[e.jsx(t,{children:"Continue"}),e.jsx(r,{name:"right"})]})}),e.jsx("p",{children:e.jsxs(n,{hasIcon:!0,isJump:!0,href:"https://www.example.com",children:[e.jsx(t,{children:"External link"}),e.jsx(r,{name:"external-link"})]})}),e.jsx("p",{children:e.jsxs(n,{hasIcon:!0,isJump:!0,href:"https://www.example.com",children:[e.jsx(t,{children:"Document or file"}),e.jsx(r,{name:"document"})]})})]})},l={name:"List",args:{...m.args},parameters:{docs:{description:{story:"A list link is an item in a set of two or more stacked standalone links. Items in a link list are medium weight and are underlined at larger screen widths. At smaller screen widths, they convert to full block links with a top and bottom border."}}},render:s=>e.jsxs(_,{isLinks:!0,children:[e.jsx(h,{...s,children:e.jsx(t,{children:"List item 1"})}),e.jsx(h,{...s,children:e.jsx(t,{children:"List item 2"})}),e.jsx(h,{...s,children:e.jsx(t,{children:"List item 3"})})]})},c={args:{...m.args,children:"Destructive link"},parameters:{docs:{description:{story:"A destructive action is an action that will lead to data loss, for example, deleting data from a form or removing a file that was previously uploaded. Although a destructive action can be styled as a button, we recommend using the destructive link style (shown below) to ensure consistency across cf.gov products."}}},render:s=>e.jsx(H,{...s})},d={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>e.jsx(N,{children:e.jsx("p",{children:e.jsx(n,{href:"/#",isRouterLink:!0,children:e.jsx(t,{children:"Link using React Router Link"})})})})};var u,k,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Inline links appear within a line of text or other inline elements. ' + 'Inline links are underlined and retain a consistent appearance across ' + 'all screen widths.'
      }
    }
  },
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var L,f,g;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Standalone links sit on their own line. At larger screen widths, ' + 'standalone links are medium weight and underlined. At smaller ' + 'screen widths, standalone links convert to full block links with ' + 'top and bottom borders that have a finger-friendly touch area.'
      }
    }
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Standalone link</LinkText>
    </Link>
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,j,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...DefaultArguments.args,
    hasIcon: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Each icon should be used exclusively and consistently for one ' + 'action. An icon should appear after the text it represents. The ' + 'only exception is a link that takes a user to a previous step or ' + 'page, where the icon should appear before the link’s text. Icons ' + 'should never be underlined.'
      }
    }
  },
  render: arguments_ => <>
      <Heading type='4'>Inline</Heading>
      <p>
        The document icon should emphasize a link that contains a{' '}
        <Link {...arguments_}>
          <LinkText>file or document</LinkText> <Icon name='download' />
        </Link>
        . The external link icon is used to emphasize a link to a{' '}
        <Link {...arguments_}>
          <LinkText>a non-CFPB webpage</LinkText> <Icon name='external-link' />
        </Link>
        .
      </p>
      <Heading type='4'>Standalone</Heading>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <Icon name='left' />
          <LinkText>Go back</LinkText>
        </Link>
      </p>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <LinkText>Continue</LinkText>
          <Icon name='right' />
        </Link>
      </p>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <LinkText>External link</LinkText>
          <Icon name='external-link' />
        </Link>
      </p>
      <p>
        <Link hasIcon isJump href='https://www.example.com'>
          <LinkText>Document or file</LinkText>
          <Icon name='document' />
        </Link>
      </p>
    </>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var v,I,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  parameters: {
    docs: {
      description: {
        story: 'A list link is an item in a set of two or more stacked standalone links. Items in a link list are medium weight and are underlined at larger screen widths. At smaller screen widths, they convert to full block links with a top and bottom border.'
      }
    }
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>
        <LinkText>List item 1</LinkText>
      </ListLink>
      <ListLink {...arguments_}>
        <LinkText>List item 2</LinkText>
      </ListLink>
      <ListLink {...arguments_}>
        <LinkText>List item 3</LinkText>
      </ListLink>
    </List>
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var b,R,A;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  parameters: {
    docs: {
      description: {
        story: 'A destructive action is an action that will lead to data loss, ' + 'for example, deleting data from a form or removing a file that ' + 'was previously uploaded. Although a destructive action can be ' + 'styled as a button, we recommend using the destructive link ' + 'style (shown below) to ensure consistency across cf.gov products.'
      }
    }
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var S,D,J;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Link using React Router Link',
  parameters: {
    docs: {
      description: {
        story: 'See [React Router Link docs](https://reactrouter.com/en/main/components/link) ' + 'for usage information'
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
}`,...(J=(D=d.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};const U=["Inline","Standalone","WithIcon","Listlink","Destructive","LinkWithReactRouterLink"];export{c as Destructive,i as Inline,d as LinkWithReactRouterLink,l as Listlink,a as Standalone,o as WithIcon,U as __namedExportsOrder,Q as default};

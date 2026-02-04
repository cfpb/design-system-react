import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";import{L as n,H as m,g as J,o as h,f as d,p as _}from"./Well-mO58T28K.js";/* empty css                */import"./Dropdown-BY0cU0ya.js";import"./Checkbox-PbiD6xC7.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-e7KR3_L7.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-CK_xvA6B.js";const q={title:"Components (Verified)/Links",tags:["autodocs"],component:n},s={args:{href:"#",children:"Link Text"}},r={parameters:{docs:{description:{story:"Inline links appear within a line of text or other inline elements. Inline links are underlined and retain a consistent appearance across all screen widths."}}},render:()=>e.jsxs("p",{children:["Here's the"," ",e.jsx(n,{href:"/#",label:"default link style"}),". For reference, here's the"," ",e.jsx(n,{href:"/#",label:"hover link style",className:"hover"}),". Train your eyes on the"," ",e.jsx(n,{href:"/#",label:"focused link style",className:"focus"}),". Jump to the ",e.jsx(n,{href:"/#",label:"active link style",className:"active"}),". We've all been to the"," ",e.jsx(n,{href:"/#",label:"visited link style",className:"visited"}),"."]})},i={parameters:{docs:{description:{story:"Standalone links sit on their own line. At larger screen widths, standalone links are medium weight and underlined. At smaller screen widths, standalone links convert to full block links with top and bottom borders that have a finger-friendly touch area."}}},render:t=>e.jsx(n,{...t,href:"/#",isJump:!0,label:"Standalone link"})},a={name:"With icon",args:{...s.args},parameters:{docs:{description:{story:"Each icon should be used exclusively and consistently for one action. An icon should appear after the text it represents. The only exception is a link that takes a user to a previous step or page, where the icon should appear before the link’s text. Icons should never be underlined."}}},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"4",children:"Inline"}),e.jsxs("p",{children:["The document icon should emphasize a link that contains a"," ",e.jsx(n,{href:s.args.href,label:"file or document",iconRight:"download"}),". The external link icon is used to emphasize a link to a"," ",e.jsx(n,{href:s.args.href,label:"non-CFPB webpage",iconRight:"external-link"}),"."]}),e.jsx(m,{type:"4",children:"Standalone"}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",iconLeft:"left",label:"Go back"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Continue",iconRight:"right"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"External link",iconRight:"external-link"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Document or file",iconRight:"document"})})]})},o={name:"List",args:{...s.args},parameters:{docs:{description:{story:"A list link is an item in a set of two or more stacked standalone links. Items in a link list are medium weight and are underlined at larger screen widths. At smaller screen widths, they convert to full block links with a top and bottom border."}}},render:t=>e.jsxs(J,{isLinks:!0,children:[e.jsx(h,{...t,children:e.jsx(d,{children:"List item 1"})}),e.jsx(h,{...t,children:e.jsx(d,{children:"List item 2"})}),e.jsx(h,{...t,children:e.jsx(d,{children:"List item 3"})})]})},l={args:{...s.args},parameters:{docs:{description:{story:"A destructive action is an action that will lead to data loss, for example, deleting data from a form or removing a file that was previously uploaded. Although a destructive action can be styled as a button, we recommend using the destructive link style (shown below) to ensure consistency across cf.gov products."}}},render:t=>e.jsx(n,{href:"/#",type:"destructive",label:"Destructive link"})},c={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>e.jsx(_,{children:e.jsx("p",{children:e.jsx(n,{href:"/#",isRouterLink:!0,children:e.jsx(d,{children:"Link using React Router Link"})})})})};var p,u,k;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Inline links appear within a line of text or other inline elements. ' + 'Inline links are underlined and retain a consistent appearance across ' + 'all screen widths.'
      }
    }
  },
  render: () => <p>
      Here&apos;s the{' '}
      <Link href='/#' label='default link style' />
      . For reference, here&apos;s the{' '}
      <Link href='/#' label='hover link style' className='hover' />. Train your
      eyes on the{' '}
      <Link href='/#' label='focused link style' className='focus' />. Jump to
      the <Link href='/#' label='active link style' className='active' />.
      We&apos;ve all been to the{' '}
      <Link href='/#' label='visited link style' className='visited' />.
    </p>
}`,...(k=(u=r.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var f,g,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Standalone links sit on their own line. At larger screen widths, ' + 'standalone links are medium weight and underlined. At smaller ' + 'screen widths, standalone links convert to full block links with ' + 'top and bottom borders that have a finger-friendly touch area.'
      }
    }
  },
  render: arguments_ => <Link {...arguments_} href='/#' isJump label='Standalone link' />
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var L,w,b;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...DefaultArguments.args
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
        <Link href={DefaultArguments.args.href} label='file or document' iconRight='download' />
        . The external link icon is used to emphasize a link to a{' '}
        <Link href={DefaultArguments.args.href} label='non-CFPB webpage' iconRight='external-link' />
        .
      </p>
      <Heading type='4'>Standalone</Heading>
      <p>
        <Link isJump href='https://www.example.com' iconLeft='left' label='Go back' />
      </p>
      <p>
        <Link isJump href='https://www.example.com' label='Continue' iconRight='right' />
      </p>
      <p>
        <Link isJump href='https://www.example.com' label='External link' iconRight='external-link' />
      </p>
      <p>
        <Link isJump href='https://www.example.com' label='Document or file' iconRight='document' />
      </p>
    </>
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,v,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var R,A,T;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  parameters: {
    docs: {
      description: {
        story: 'A destructive action is an action that will lead to data loss, ' + 'for example, deleting data from a form or removing a file that ' + 'was previously uploaded. Although a destructive action can be ' + 'styled as a button, we recommend using the destructive link ' + 'style (shown below) to ensure consistency across cf.gov products.'
      }
    }
  },
  render: arguments_ => <Link href='/#' type='destructive' label='Destructive link' />
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var S,I,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const K=["Inline","Standalone","WithIcon","Listlink","Destructive","LinkWithReactRouterLink"];export{l as Destructive,r as Inline,c as LinkWithReactRouterLink,o as Listlink,i as Standalone,a as WithIcon,K as __namedExportsOrder,q as default};

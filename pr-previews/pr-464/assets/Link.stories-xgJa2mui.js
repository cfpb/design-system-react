import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";import{L as n,H as d,f as J,n as c,o as H}from"./Well-D0PMtYwf.js";/* empty css                */import"./Dropdown-BIiEH40C.js";import"./Checkbox-uScmMply.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-byJ3EejR.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-UB2n-ReR.js";const q={title:"Components (Verified)/Links",tags:["autodocs"],component:n},t={args:{href:"#",children:"Link Text"}},r={parameters:{docs:{description:{story:"Inline links appear within a line of text or other inline elements. Inline links are underlined and retain a consistent appearance across all screen widths."}}},render:()=>e.jsxs("p",{children:["Here's the default ",e.jsx(n,{href:"/#",label:"inline link"})," style."]})},s={parameters:{docs:{description:{story:"Standalone links sit on their own line. At larger screen widths, standalone links are medium weight and underlined. At smaller screen widths, standalone links convert to full block links with top and bottom borders that have a finger-friendly touch area."}}},render:D=>e.jsx(n,{...D,href:"/#",isJump:!0,label:"Standalone link"})},i={name:"With icon",args:{...t.args},parameters:{docs:{description:{story:"Each icon should be used exclusively and consistently for one action. An icon should appear after the text it represents. The only exception is a link that takes a user to a previous step or page, where the icon should appear before the link’s text. Icons should never be underlined."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{type:"4",children:"Inline"}),e.jsxs("p",{children:["The document icon should emphasize a link that contains a"," ",e.jsx(n,{href:t.args.href,label:"file or document",iconRight:"download"}),". The external link icon is used to emphasize a link to a"," ",e.jsx(n,{href:t.args.href,label:"non-CFPB webpage",iconRight:"external-link"}),"."]}),e.jsx(d,{type:"4",children:"Standalone"}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",iconLeft:"left",label:"Go back"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Continue",iconRight:"right"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"External link",iconRight:"external-link"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Document or file",iconRight:"document"})})]})},a={name:"List",args:{...t.args},parameters:{docs:{description:{story:"A list link is an item in a set of two or more stacked standalone links. Items in a link list are medium weight and are underlined at larger screen widths. At smaller screen widths, they convert to full block links with a top and bottom border."}}},render:()=>e.jsxs(J,{isLinks:!0,children:[e.jsx(c,{href:"/#",label:"List item 1"}),e.jsx(c,{href:"/#",label:"List item 2"}),e.jsx(c,{href:"/#",label:"List item 3"})]})},o={args:{...t.args},parameters:{docs:{description:{story:"A destructive action is an action that will lead to data loss, for example, deleting data from a form or removing a file that was previously uploaded. Although a destructive action can be styled as a button, we recommend using the destructive link style (shown below) to ensure consistency across cf.gov products."}}},render:()=>e.jsx(n,{href:"/#",type:"destructive",label:"Destructive link"})},l={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/en/main/components/link) for usage information"}}},render:()=>e.jsx(H,{children:e.jsx(n,{href:"/#",label:"Link using React Router Link",isRouterLink:!0})})};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Inline links appear within a line of text or other inline elements. ' + 'Inline links are underlined and retain a consistent appearance across ' + 'all screen widths.'
      }
    }
  },
  render: () => <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,k,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Standalone links sit on their own line. At larger screen widths, ' + 'standalone links are medium weight and underlined. At smaller ' + 'screen widths, standalone links convert to full block links with ' + 'top and bottom borders that have a finger-friendly touch area.'
      }
    }
  },
  render: arguments_ => <Link {...arguments_} href='/#' isJump label='Standalone link' />
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,w,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  render: () => <>
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
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var L,b,y;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  render: () => <List isLinks>
      <ListLink href='/#' label='List item 1' />
      <ListLink href='/#' label='List item 2' />
      <ListLink href='/#' label='List item 3' />
    </List>
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var R,v,j;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
  render: () => <Link href='/#' type='destructive' label='Destructive link' />
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var A,S,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Link using React Router Link',
  parameters: {
    docs: {
      description: {
        story: 'See [React Router Link docs](https://reactrouter.com/en/main/components/link) ' + 'for usage information'
      }
    }
  },
  render: () => <BrowserRouter>
      <Link href='/#' label='Link using React Router Link' isRouterLink />
    </BrowserRouter>
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const K=["Inline","Standalone","WithIcon","Listlink","Destructive","LinkWithReactRouterLink"];export{o as Destructive,r as Inline,l as LinkWithReactRouterLink,a as Listlink,s as Standalone,i as WithIcon,K as __namedExportsOrder,q as default};

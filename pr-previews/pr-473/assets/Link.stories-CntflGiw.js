import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";import{L as n,H as m,g as A,h as c,x as I}from"./Well-DjykqKwW.js";/* empty css                */import"./Checkbox-uScmMply.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-CKaCfP7D.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./iframe-DEbAY2dl.js";import"./index-XmDEAOo_.js";const V={title:"Components (Verified)/Links",tags:["autodocs"],component:n},r={args:{href:"#",children:"Link Text"}},t={render:()=>e.jsxs("p",{children:["Here's the default ",e.jsx(n,{href:"/#",label:"inline link"})," style."]})},s={render:v=>e.jsx(n,{...v,href:"/#",isJump:!0,label:"Standalone link"})},i={name:"With icon",args:{...r.args},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"4",children:"Inline"}),e.jsxs("p",{children:["The document icon should emphasize a link that contains a"," ",e.jsx(n,{href:r.args.href,label:"file or document",iconRight:"download"}),". The external link icon is used to emphasize a link to a"," ",e.jsx(n,{href:r.args.href,label:"non-CFPB webpage",iconRight:"external-link"}),"."]}),e.jsx(m,{type:"4",children:"Standalone"}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",iconLeft:"left",label:"Go back"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Continue",iconRight:"right"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"External link",iconRight:"external-link"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Document or file",iconRight:"document"})})]})},a={name:"List",args:{...r.args},render:()=>e.jsxs(A,{isLinks:!0,children:[e.jsx(c,{href:"/#",label:"List item 1"}),e.jsx(c,{href:"/#",label:"List item 2"}),e.jsx(c,{href:"/#",label:"List item 3"})]})},o={args:{...r.args},render:()=>e.jsx(n,{href:"/#",type:"destructive",label:"Destructive link"})},l={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information"}}},render:()=>e.jsx(I,{children:e.jsx(n,{href:"/#",label:"Link using React Router Link",isRouterLink:!0})})};var p,u,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,g,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: arguments_ => <Link {...arguments_} href='/#' isJump label='Standalone link' />
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var L,f,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...DefaultArguments.args
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
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var R,w,b;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink href='/#' label='List item 1' />
      <ListLink href='/#' label='List item 2' />
      <ListLink href='/#' label='List item 3' />
    </List>
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var j,S,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link href='/#' type='destructive' label='Destructive link' />
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var y,J,H;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Link using React Router Link',
  parameters: {
    docs: {
      description: {
        story: 'See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information'
      }
    }
  },
  render: () => <BrowserRouter>
      <Link href='/#' label='Link using React Router Link' isRouterLink />
    </BrowserRouter>
}`,...(H=(J=l.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};const q=["Inline","Standalone","WithIcon","Listlink","Destructive","LinkWithReactRouterLink"];export{o as Destructive,t as Inline,l as LinkWithReactRouterLink,a as Listlink,s as Standalone,i as WithIcon,q as __namedExportsOrder,V as default};

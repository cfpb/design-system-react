import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as n,B as u,a as h,b as c}from"./well-DyAHkmHH.js";import"./iframe-DNKNhVql.js";import{H as m}from"./text-introduction-Dgk0RP50.js";import"./checkbox-CPtKPBzl.js";import"./icon-Cdne-nou.js";import"./paragraph-CEFrK_os.js";import"./summary-Buuvvhus.js";import"./text-area-_X0VZmEi.js";import"./index-C9PSBpnD.js";import"./preload-helper-PPVm8Dsz.js";const D={title:"Components (Verified)/Links",tags:["autodocs"],component:n},r={args:{href:"#",children:"Link Text"}},t={render:()=>e.jsxs("p",{children:["Here's the default ",e.jsx(n,{href:"/#",label:"inline link"})," style."]})},s={render:p=>e.jsx(n,{...p,href:"/#",isJump:!0,label:"Standalone link"})},i={name:"With icon",args:{...r.args},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"4",children:"Inline"}),e.jsxs("p",{children:["The document icon should emphasize a link that contains a"," ",e.jsx(n,{href:r.args.href,label:"file or document",iconRight:"download"}),". The external link icon is used to emphasize a link to a"," ",e.jsx(n,{href:r.args.href,label:"non-CFPB webpage",iconRight:"external-link"}),"."]}),e.jsx(m,{type:"4",children:"Standalone"}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",iconLeft:"left",label:"Go back"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Continue",iconRight:"right"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"External link",iconRight:"external-link"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Document or file",iconRight:"document"})})]})},a={name:"List",args:{...r.args},render:()=>e.jsxs(h,{isLinks:!0,children:[e.jsx(c,{href:"/#",label:"List item 1"}),e.jsx(c,{href:"/#",label:"List item 2"}),e.jsx(c,{href:"/#",label:"List item 3"})]})},o={args:{...r.args},render:()=>e.jsx(n,{href:"/#",type:"destructive",label:"Destructive link"})},l={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information"}}},render:()=>e.jsx(u,{children:e.jsx(n,{href:"/#",label:"Link using React Router Link",isRouterLink:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Link {...arguments_} href='/#' isJump label='Standalone link' />
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink href='/#' label='List item 1' />
      <ListLink href='/#' label='List item 2' />
      <ListLink href='/#' label='List item 3' />
    </List>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link href='/#' type='destructive' label='Destructive link' />
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const y=["Inline","Standalone","WithIcon","Listlink","Destructive","LinkWithReactRouterLink"];export{o as Destructive,t as Inline,l as LinkWithReactRouterLink,a as Listlink,s as Standalone,i as WithIcon,y as __namedExportsOrder,D as default};

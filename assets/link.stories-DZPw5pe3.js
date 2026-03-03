import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as n,B as h,a as d,b as m}from"./well-DZalMf3h.js";import"./iframe-BC_1xP-X.js";import{H as p}from"./text-introduction-C7QsSbUT.js";import"./checkbox-D6p2RWTQ.js";import"./icon-BFxWMRN0.js";import"./paragraph-ClZ5MvqR.js";import"./summary-DDXwJulH.js";import"./text-area-Dudps5HC.js";import"./index-CwbbfbY6.js";import"./preload-helper-lKO2eUTi.js";const{expect:k,within:g}=__STORYBOOK_MODULE_TEST__,J={title:"Components (Verified)/Links",tags:["autodocs"],component:n},t={args:{href:"#",children:"Link Text"}},r={render:()=>e.jsxs("p",{children:["Here's the default ",e.jsx(n,{href:"/#",label:"inline link"})," style."]})},i={render:c=>e.jsx(n,{...c,href:"/#",isJump:!0,label:"Standalone link"}),play:async({canvasElement:c})=>{const u=g(c).getByRole("link",{name:/standalone link/i});await k(u).toHaveAttribute("href","/#")}},s={name:"With icon",args:{...t.args},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"4",children:"Inline"}),e.jsxs("p",{children:["The document icon should emphasize a link that contains a"," ",e.jsx(n,{href:t.args.href,label:"file or document",iconRight:"download"}),". The external link icon is used to emphasize a link to a"," ",e.jsx(n,{href:t.args.href,label:"non-CFPB webpage",iconRight:"external-link"}),"."]}),e.jsx(p,{type:"4",children:"Standalone"}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",iconLeft:"left",label:"Go back"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Continue",iconRight:"right"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"External link",iconRight:"external-link"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Document or file",iconRight:"document"})})]})},a={name:"List",args:{...t.args},render:()=>e.jsxs(d,{isLinks:!0,children:[e.jsx(m,{href:"/#",label:"List item 1"}),e.jsx(m,{href:"/#",label:"List item 2"}),e.jsx(m,{href:"/#",label:"List item 3"})]})},o={args:{...t.args},render:()=>e.jsx(n,{href:"/#",type:"destructive",label:"Destructive link"})},l={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information"}}},render:()=>e.jsx(h,{children:e.jsx(n,{href:"/#",label:"Link using React Router Link",isRouterLink:!0})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Link {...arguments_} href='/#' isJump label='Standalone link' />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: /standalone link/i
    });
    await expect(link).toHaveAttribute('href', '/#');
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const _=["Inline","Standalone","WithIcon","Listlink","Destructive","LinkWithReactRouterLink"];export{o as Destructive,r as Inline,l as LinkWithReactRouterLink,a as Listlink,i as Standalone,s as WithIcon,_ as __namedExportsOrder,J as default};

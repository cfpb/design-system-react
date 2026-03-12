import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as n,B as g,a as x,b as m}from"./well-N9_K1ONS.js";import"./iframe-D626VO1_.js";import{H as d}from"./text-introduction-BIBDYHHD.js";import"./checkbox-CWOxmNp1.js";import"./icon-CxXF_xf4.js";import"./paragraph-DpL2481e.js";import"./summary-DlbamOn5.js";import"./text-area-FQIso8xL.js";import"./index-BYM_ODtw.js";import"./preload-helper-PPVm8Dsz.js";const{expect:k,within:f}=__STORYBOOK_MODULE_TEST__,_={title:"Components (Verified)/Links",tags:["autodocs"],component:n,argTypes:{href:{control:"text"},label:{control:"text"},isButton:{control:"boolean"},isJump:{control:"boolean"},isRouterLink:{control:"boolean"},appearance:{control:"select",options:["primary","secondary","warning","destructive"]},iconLeft:{control:"text"},iconRight:{control:"text"},children:{control:"text"}}},t={args:{href:"/#",label:"Link Text",isButton:!1,isJump:!1,isRouterLink:!1,appearance:"primary",iconLeft:void 0,iconRight:void 0,children:void 0}},a={args:{...t.args},render:r=>r.isRouterLink?e.jsx(g,{children:e.jsx(n,{...r})}):e.jsx(n,{...r}),play:async({canvasElement:r,args:u})=>{const L=f(r).getByRole("link");await k(L).toHaveAttribute("href",u.href)}},s={render:()=>e.jsxs("p",{children:["Here's the default ",e.jsx(n,{href:"/#",label:"inline link"})," style."]})},i={render:r=>e.jsx(n,{...r,href:"/#",isJump:!0,label:"Standalone link"}),play:async({canvasElement:r})=>{const h=f(r).getByRole("link",{name:/standalone link/i});await k(h).toHaveAttribute("href","/#")}},o={name:"With icon",args:{...t.args},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{type:"4",children:"Inline"}),e.jsxs("p",{children:["The document icon should emphasize a link that contains a"," ",e.jsx(n,{href:t.args.href,label:"file or document",iconRight:"download"}),". The external link icon is used to emphasize a link to a"," ",e.jsx(n,{href:t.args.href,label:"non-CFPB webpage",iconRight:"external-link"}),"."]}),e.jsx(d,{type:"4",children:"Standalone"}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",iconLeft:"left",label:"Go back"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Continue",iconRight:"right"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"External link",iconRight:"external-link"})}),e.jsx("p",{children:e.jsx(n,{isJump:!0,href:"https://www.example.com",label:"Document or file",iconRight:"document"})})]})},l={name:"List",args:{...t.args},render:()=>e.jsxs(x,{isLinks:!0,children:[e.jsx(m,{href:"/#",label:"List item 1"}),e.jsx(m,{href:"/#",label:"List item 2"}),e.jsx(m,{href:"/#",label:"List item 3"})]})},c={args:{...t.args},render:()=>e.jsx(n,{href:"/#",appearance:"warning",label:"Destructive link"})},p={name:"Link using React Router Link",parameters:{docs:{description:{story:"See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information"}}},render:()=>e.jsx(g,{children:e.jsx(n,{href:"/#",label:"Link using React Router Link",isRouterLink:!0})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => arguments_.isRouterLink ? <BrowserRouter>
        <Link {...arguments_} />
      </BrowserRouter> : <Link {...arguments_} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('href', args.href);
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink href='/#' label='List item 1' />
      <ListLink href='/#' label='List item 2' />
      <ListLink href='/#' label='List item 3' />
    </List>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link href='/#' appearance='warning' label='Destructive link' />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const A=["Configurable","Inline","Standalone","WithIcon","Listlink","Destructive","LinkWithReactRouterLink"];export{a as Configurable,c as Destructive,s as Inline,p as LinkWithReactRouterLink,l as Listlink,i as Standalone,o as WithIcon,A as __namedExportsOrder,_ as default};

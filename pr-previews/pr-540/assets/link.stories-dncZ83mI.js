import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{i as n}from"./well-BKUK7r0_.js";import{m as r,t as i}from"./src-DQPlPYZ6.js";import{c as a,n as o,s,t as c}from"./link-CW61Bz9G.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{s(),i(),l=t(),{expect:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components (Verified)/Links`,tags:[`autodocs`],component:c},p={args:{href:`#`,children:`Link Text`}},m={render:()=>(0,l.jsxs)(`p`,{children:[`Here's the default `,(0,l.jsx)(c,{href:`/#`,label:`inline link`}),` style.`]})},h={render:e=>(0,l.jsx)(c,{...e,href:`/#`,isJump:!0,label:`Standalone link`}),play:async({canvasElement:e})=>{await u(d(e).getByRole(`link`,{name:/standalone link/i})).toHaveAttribute(`href`,`/#`)}},g={name:`With icon`,args:{...p.args},render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{type:`4`,children:`Inline`}),(0,l.jsxs)(`p`,{children:[`The document icon should emphasize a link that contains a`,` `,(0,l.jsx)(c,{href:p.args.href,label:`file or document`,iconRight:`download`}),`. The external link icon is used to emphasize a link to a`,` `,(0,l.jsx)(c,{href:p.args.href,label:`non-CFPB webpage`,iconRight:`external-link`}),`.`]}),(0,l.jsx)(r,{type:`4`,children:`Standalone`}),(0,l.jsx)(`p`,{children:(0,l.jsx)(c,{isJump:!0,href:`https://www.example.com`,iconLeft:`left`,label:`Go back`})}),(0,l.jsx)(`p`,{children:(0,l.jsx)(c,{isJump:!0,href:`https://www.example.com`,label:`Continue`,iconRight:`right`})}),(0,l.jsx)(`p`,{children:(0,l.jsx)(c,{isJump:!0,href:`https://www.example.com`,label:`External link`,iconRight:`external-link`})}),(0,l.jsx)(`p`,{children:(0,l.jsx)(c,{isJump:!0,href:`https://www.example.com`,label:`Document or file`,iconRight:`document`})})]})},_={name:`List`,args:{...p.args},render:()=>(0,l.jsxs)(n,{isLinks:!0,children:[(0,l.jsx)(o,{href:`/#`,label:`List item 1`}),(0,l.jsx)(o,{href:`/#`,label:`List item 2`}),(0,l.jsx)(o,{href:`/#`,label:`List item 3`})]})},v={args:{...p.args},render:()=>(0,l.jsx)(c,{href:`/#`,type:`destructive`,label:`Destructive link`})},y={name:`Link using React Router Link`,parameters:{docs:{description:{story:`See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information`}}},render:()=>(0,l.jsx)(a,{children:(0,l.jsx)(c,{href:`/#`,label:`Link using React Router Link`,isRouterLink:!0})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink href='/#' label='List item 1' />
      <ListLink href='/#' label='List item 2' />
      <ListLink href='/#' label='List item 3' />
    </List>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link href='/#' type='destructive' label='Destructive link' />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Inline`,`Standalone`,`WithIcon`,`Listlink`,`Destructive`,`LinkWithReactRouterLink`]}))();export{v as Destructive,m as Inline,y as LinkWithReactRouterLink,_ as Listlink,h as Standalone,g as WithIcon,b as __namedExportsOrder,f as default};
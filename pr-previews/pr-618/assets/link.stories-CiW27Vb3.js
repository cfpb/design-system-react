import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./list-BM4vTaBY.js";import{c as i,n as a,r as o,s,t as c}from"./link-DxOcvXZ5.js";import{n as l,t as u}from"./heading-DlqVg8CH.js";var d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{s(),l(),o(),n(),d=t(),{expect:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components (Verified)/Links`,tags:[`autodocs`],component:c},h={args:{href:`#`,children:`Link Text`}},g={render:()=>(0,d.jsxs)(`p`,{children:[`Here's the default `,(0,d.jsx)(c,{href:`/#`,label:`inline link`}),` style.`]})},_={render:e=>(0,d.jsx)(c,{...e,href:`/#`,isJump:!0,label:`Standalone link`}),play:async({canvasElement:e})=>{await f(p(e).getByRole(`link`,{name:/standalone link/i})).toHaveAttribute(`href`,`/#`)}},v={name:`With icon`,args:{...h.args},render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{type:`4`,children:`Inline`}),(0,d.jsxs)(`p`,{children:[`The document icon should emphasize a link that contains a`,` `,(0,d.jsx)(c,{href:h.args.href,label:`file or document`,iconRight:`download`}),`. The external link icon is used to emphasize a link to a`,` `,(0,d.jsx)(c,{href:h.args.href,label:`non-CFPB webpage`,iconRight:`external-link`}),`.`]}),(0,d.jsx)(u,{type:`4`,children:`Standalone`}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,href:`https://www.example.com`,iconLeft:`left`,label:`Go back`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,href:`https://www.example.com`,label:`Continue`,iconRight:`right`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,href:`https://www.example.com`,label:`External link`,iconRight:`external-link`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,href:`https://www.example.com`,label:`Document or file`,iconRight:`document`})})]})},y={name:`List`,args:{...h.args},render:()=>(0,d.jsxs)(r,{isLinks:!0,children:[(0,d.jsx)(a,{href:`/#`,label:`List item 1`}),(0,d.jsx)(a,{href:`/#`,label:`List item 2`}),(0,d.jsx)(a,{href:`/#`,label:`List item 3`})]})},b={args:{...h.args},render:()=>(0,d.jsx)(c,{href:`/#`,type:`destructive`,label:`Destructive link`})},x={name:`Link using React Router Link`,parameters:{docs:{description:{story:`See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information`}}},render:()=>(0,d.jsx)(i,{children:(0,d.jsx)(c,{href:`/#`,label:`Link using React Router Link`,isRouterLink:!0})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink href='/#' label='List item 1' />
      <ListLink href='/#' label='List item 2' />
      <ListLink href='/#' label='List item 3' />
    </List>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link href='/#' type='destructive' label='Destructive link' />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Inline`,`Standalone`,`WithIcon`,`Listlink`,`Destructive`,`LinkWithReactRouterLink`]}))();export{b as Destructive,g as Inline,x as LinkWithReactRouterLink,y as Listlink,_ as Standalone,v as WithIcon,S as __namedExportsOrder,m as default};
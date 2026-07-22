import{i as e}from"./preload-helper-7yf7uBoM.js";import{t}from"./jsx-runtime-DvpvSDnr.js";import{n,t as r}from"./list-ZRiACndC.js";import{c as i,n as a,r as o,s,t as c}from"./link-DUNBvsp1.js";import{n as l,t as u}from"./heading-BlHAIyea.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{l(),o(),n(),i(),d=t(),{expect:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components (Verified)/Links`,tags:[`autodocs`],component:c,excludeStories:[`CustomLinkComponent`]},h={args:{to:`#`,children:`Link Text`}},g={render:()=>(0,d.jsxs)(`p`,{children:[`Here's the default `,(0,d.jsx)(c,{to:`/#`,label:`inline link`}),` style.`]})},_={render:e=>(0,d.jsx)(c,{...e,to:`/#`,isJump:!0,label:`Standalone link`}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`link`,{name:/standalone link/i});await f(t).toHaveAttribute(`to`,`/#`)}},v={name:`With icon`,args:{...h.args},render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{type:`4`,children:`Inline`}),(0,d.jsxs)(`p`,{children:[`The document icon should emphasize a link that contains a`,` `,(0,d.jsx)(c,{to:h.args.to,label:`file or document`,iconRight:`download`}),`. The external link icon is used to emphasize a link to a`,` `,(0,d.jsx)(c,{to:h.args.to,label:`non-CFPB webpage`,iconRight:`external-link`}),`.`]}),(0,d.jsx)(u,{type:`4`,children:`Standalone`}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,iconLeft:`left`,label:`Go back`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,label:`Continue`,iconRight:`right`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,label:`External link`,iconRight:`external-link`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,label:`Document or file`,iconRight:`document`})})]})},y={name:`List`,args:{...h.args},render:()=>(0,d.jsxs)(r,{isLinks:!0,children:[(0,d.jsx)(a,{to:`/#`,label:`List item 1`}),(0,d.jsx)(a,{to:`/#`,label:`List item 2`}),(0,d.jsx)(a,{to:`/#`,label:`List item 3`})]})},b={args:{...h.args},render:()=>(0,d.jsx)(c,{to:`/#`,type:`destructive`,label:`Destructive link`})},x=({to:e,children:t,...n})=>(0,d.jsx)(`a`,{href:e,...n,"data-link-component":`custom`,children:t}),S={name:`Link using custom component`,decorators:[e=>(0,d.jsx)(s,{value:{LinkComponent:x},children:(0,d.jsx)(e,{})})],render:()=>(0,d.jsx)(c,{to:`/#`,label:`Link using custom link component`})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link to='/#' label='inline link' /> style.
    </p>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Link {...arguments_} to='/#' isJump label='Standalone link' />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: /standalone link/i
    });
    await expect(link).toHaveAttribute('to', '/#');
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
        <Link to={DefaultArguments.args.to} label='file or document' iconRight='download' />
        . The external link icon is used to emphasize a link to a{' '}
        <Link to={DefaultArguments.args.to} label='non-CFPB webpage' iconRight='external-link' />
        .
      </p>
      <Heading type='4'>Standalone</Heading>
      <p>
        <Link isJump to='https://www.example.com' iconLeft='left' label='Go back' />
      </p>
      <p>
        <Link isJump to='https://www.example.com' label='Continue' iconRight='right' />
      </p>
      <p>
        <Link isJump to='https://www.example.com' label='External link' iconRight='external-link' />
      </p>
      <p>
        <Link isJump to='https://www.example.com' label='Document or file' iconRight='document' />
      </p>
    </>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink to='/#' label='List item 1' />
      <ListLink to='/#' label='List item 2' />
      <ListLink to='/#' label='List item 3' />
    </List>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link to='/#' type='destructive' label='Destructive link' />
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Link using custom component',
  decorators: [Story => <DSRContext value={{
    LinkComponent: CustomLinkComponent
  }}>
        <Story />
      </DSRContext>],
  render: () => <Link to='/#' label='Link using custom link component' />
}`,...S.parameters?.docs?.source},description:{story:`You can configure the DSR to use a router library's link component by wrapping your app
in the DSRContext provider and setting a \`LinkComponent\` value.
Your custom link component will be output instead of the default anchor element
everywhere the DSR's Link component is used.

Example usage:

 \\<DSRContext value={{LinkComponent: YourRouterLinkComponent}} >
   App content
 \\</DSRContext>`,...S.parameters?.docs?.description}}},C=[`Inline`,`Standalone`,`WithIcon`,`Listlink`,`Destructive`,`LinkWithCustomLinkComponent`]}))();export{b as Destructive,g as Inline,S as LinkWithCustomLinkComponent,y as Listlink,_ as Standalone,v as WithIcon,C as __namedExportsOrder,m as default};
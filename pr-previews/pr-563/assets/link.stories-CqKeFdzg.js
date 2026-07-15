import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{i as n}from"./well-DsLnX2AQ.js";import{S as r,t as i}from"./src-BkQc_UNl.js";import{n as a,s as o,t as s}from"./link-D827tUs0.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{i(),c=t(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components (Verified)/Links`,tags:[`autodocs`],component:s,excludeStories:[`CustomLinkComponent`]},f={args:{to:`#`,children:`Link Text`}},p={render:()=>(0,c.jsxs)(`p`,{children:[`Here's the default `,(0,c.jsx)(s,{to:`/#`,label:`inline link`}),` style.`]})},m={render:e=>(0,c.jsx)(s,{...e,to:`/#`,isJump:!0,label:`Standalone link`}),play:async({canvasElement:e})=>{let t=u(e).getByRole(`link`,{name:/standalone link/i});await l(t).toHaveAttribute(`to`,`/#`)}},h={name:`With icon`,args:{...f.args},render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{type:`4`,children:`Inline`}),(0,c.jsxs)(`p`,{children:[`The document icon should emphasize a link that contains a`,` `,(0,c.jsx)(s,{to:f.args.to,label:`file or document`,iconRight:`download`}),`. The external link icon is used to emphasize a link to a`,` `,(0,c.jsx)(s,{to:f.args.to,label:`non-CFPB webpage`,iconRight:`external-link`}),`.`]}),(0,c.jsx)(r,{type:`4`,children:`Standalone`}),(0,c.jsx)(`p`,{children:(0,c.jsx)(s,{isJump:!0,to:`https://www.example.com`,iconLeft:`left`,label:`Go back`})}),(0,c.jsx)(`p`,{children:(0,c.jsx)(s,{isJump:!0,to:`https://www.example.com`,label:`Continue`,iconRight:`right`})}),(0,c.jsx)(`p`,{children:(0,c.jsx)(s,{isJump:!0,to:`https://www.example.com`,label:`External link`,iconRight:`external-link`})}),(0,c.jsx)(`p`,{children:(0,c.jsx)(s,{isJump:!0,to:`https://www.example.com`,label:`Document or file`,iconRight:`document`})})]})},g={name:`List`,args:{...f.args},render:()=>(0,c.jsxs)(n,{isLinks:!0,children:[(0,c.jsx)(a,{to:`/#`,label:`List item 1`}),(0,c.jsx)(a,{to:`/#`,label:`List item 2`}),(0,c.jsx)(a,{to:`/#`,label:`List item 3`})]})},_={args:{...f.args},render:()=>(0,c.jsx)(s,{to:`/#`,type:`destructive`,label:`Destructive link`})},v=({to:e,children:t,...n})=>(0,c.jsx)(`a`,{href:e,...n,"data-link-component":`custom`,children:t}),y={name:`Link using custom component`,decorators:[e=>(0,c.jsx)(o,{value:{LinkComponent:v},children:(0,c.jsx)(e,{})})],render:()=>(0,c.jsx)(s,{to:`/#`,label:`Link using custom link component`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link to='/#' label='inline link' /> style.
    </p>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink to='/#' label='List item 1' />
      <ListLink to='/#' label='List item 2' />
      <ListLink to='/#' label='List item 3' />
    </List>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link to='/#' type='destructive' label='Destructive link' />
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Link using custom component',
  decorators: [Story => <DSRContext value={{
    LinkComponent: CustomLinkComponent
  }}>
        <Story />
      </DSRContext>],
  render: () => <Link to='/#' label='Link using custom link component' />
}`,...y.parameters?.docs?.source},description:{story:`You can configure the DSR to use a router library's link component by wrapping your app
in the DSRContext provider and setting a \`LinkComponent\` value. 
Your custom link component will be output instead of the default anchor element 
everywhere the DSR's Link component is used.
 
Example usage:

 \\<DSRContext value={{LinkComponent: YourRouterLinkComponent}} >
   App content
 \\</DSRContext>`,...y.parameters?.docs?.description}}},b=[`Inline`,`Standalone`,`WithIcon`,`Listlink`,`Destructive`,`LinkWithCustomLinkComponent`]}))();export{_ as Destructive,p as Inline,y as LinkWithCustomLinkComponent,g as Listlink,m as Standalone,h as WithIcon,b as __namedExportsOrder,d as default};
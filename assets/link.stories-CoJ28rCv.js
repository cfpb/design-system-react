import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./list-CkV9etkY.js";import{c as i,n as a,r as o,s,t as c}from"./link-6ajnRUpC.js";import{n as l,t as u}from"./heading-CvNMdgoP.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),o(),n(),i(),d=t(),{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components (Verified)/Links`,tags:[`autodocs`],component:c,excludeStories:[`CustomLinkComponent`]},g={args:{to:`#`,children:`Link Text`}},_={render:()=>(0,d.jsxs)(`p`,{children:[`Here's the default `,(0,d.jsx)(c,{to:`/#`,label:`inline link`}),` style.`]})},v={render:e=>(0,d.jsx)(c,{...e,to:`/#`,isJump:!0,label:`Standalone link`}),play:async({canvasElement:e})=>{let t=m(e).getByRole(`link`,{name:/standalone link/i});await f(t).toHaveAttribute(`to`,`/#`);let n=location.href;await p.click(t),await f(location.href).toBe(n)}},y={name:`With icon`,args:{...g.args},render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{type:`4`,children:`Inline`}),(0,d.jsxs)(`p`,{children:[`The document icon should emphasize a link that contains a`,` `,(0,d.jsx)(c,{to:g.args.to,label:`file or document`,iconRight:`download`}),`. The external link icon is used to emphasize a link to a`,` `,(0,d.jsx)(c,{to:g.args.to,label:`non-CFPB webpage`,iconRight:`external-link`}),`.`]}),(0,d.jsx)(u,{type:`4`,children:`Standalone`}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,iconLeft:`left`,label:`Go back`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,label:`Continue`,iconRight:`right`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,label:`External link`,iconRight:`external-link`})}),(0,d.jsx)(`p`,{children:(0,d.jsx)(c,{isJump:!0,to:`https://www.example.com`,label:`Document or file`,iconRight:`document`})})]})},b={name:`List`,args:{...g.args},render:()=>(0,d.jsxs)(r,{isLinks:!0,children:[(0,d.jsx)(a,{to:`/#`,label:`List item 1`}),(0,d.jsx)(a,{to:`/#`,label:`List item 2`}),(0,d.jsx)(a,{to:`/#`,label:`List item 3`})]})},x={args:{...g.args},render:()=>(0,d.jsx)(c,{to:`/#`,type:`destructive`,label:`Destructive link`})},S=({to:e,children:t,...n})=>(0,d.jsx)(`a`,{href:e,...n,"data-link-component":`custom`,children:t}),C={name:`Link using custom component`,decorators:[e=>(0,d.jsx)(s,{value:{LinkComponent:S},children:(0,d.jsx)(e,{})})],render:()=>(0,d.jsx)(c,{to:`/#`,label:`Link using custom link component`})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <p>
      Here&apos;s the default <Link to='/#' label='inline link' /> style.
    </p>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Link {...arguments_} to='/#' isJump label='Standalone link' />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: /standalone link/i
    });
    await expect(link).toHaveAttribute('to', '/#');
    const initialHref = location.href;
    await userEvent.click(link);
    await expect(location.href).toBe(initialHref);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'List',
  args: {
    ...DefaultArguments.args
  },
  render: () => <List isLinks>
      <ListLink to='/#' label='List item 1' />
      <ListLink to='/#' label='List item 2' />
      <ListLink to='/#' label='List item 3' />
    </List>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultArguments.args
  },
  render: () => <Link to='/#' type='destructive' label='Destructive link' />
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Link using custom component',
  decorators: [Story => <DSRContext value={{
    LinkComponent: CustomLinkComponent
  }}>
        <Story />
      </DSRContext>],
  render: () => <Link to='/#' label='Link using custom link component' />
}`,...C.parameters?.docs?.source},description:{story:`You can configure the DSR to use a router library's link component by wrapping your app
in the DSRContext provider and setting a \`LinkComponent\` value.
Your custom link component will be output instead of the default anchor element
everywhere the DSR's Link component is used.

Example usage:

 \\<DSRContext value={{LinkComponent: YourRouterLinkComponent}} >
   App content
 \\</DSRContext>`,...C.parameters?.docs?.description}}},w=[`Inline`,`Standalone`,`WithIcon`,`Listlink`,`Destructive`,`LinkWithCustomLinkComponent`]})))()}T();export{x as Destructive,_ as Inline,C as LinkWithCustomLinkComponent,b as Listlink,v as Standalone,y as WithIcon,w as __namedExportsOrder,h as default};
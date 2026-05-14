import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BX9360Lk.js";import{m as n,t as r}from"./src-Cto28jwc.js";import{t as i}from"./icon-Dm0QEvkA.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{r(),a=t(),{expect:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components (Verified)/Headings`,tags:[`autodocs`],component:n,argTypes:{type:{control:{type:`select`}}},parameters:{docs:{description:{component:`A successful type hierarchy establishes the order of importance of elements on a page. Consistent scaling, weights, and capitalization are used to create distinction between headings and provide users with familiar focus points when scanning text.

Source: <a href='https://cfpb.github.io/design-system/foundation/headings' target='_blank'> https://cfpb.github.io/design-system/foundation/headings</a>`}}}},l={name:`H1`,args:{children:`Heading 1`}},u={name:`H2`,args:{type:`2`,children:`Heading 2`}},d={name:`H3`,args:{type:`3`,children:`Heading 3`}},f={name:`H4`,args:{type:`4`,children:`Heading 4`}},p={name:`H5`,args:{type:`5`,children:`Heading 5`}},m={args:{type:`display`,children:`Display`}},h={args:{type:`eyebrow`,children:`Eyebrow`},render:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{...e}),(0,a.jsx)(`div`,{className:`h1`,children:`Heading 1`})]}),play:async({canvasElement:e})=>{let t=s(e).getByText(/Heading 1/i);await document.fonts.ready,await o(document.fonts.check(`16px "Source Sans 3 Variable"`)).toBe(!0),await o(globalThis.getComputedStyle(t).fontFamily).toContain(`Source Sans 3 Variable`)}},g={args:{type:`slug`,children:`Slug`}},_={args:{type:`2`},render:e=>(0,a.jsxs)(n,{...e,children:[(0,a.jsx)(i,{name:`help`}),` Information`]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'H1',
  args: {
    children: 'Heading 1'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'H2',
  args: {
    type: '2',
    children: 'Heading 2'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'H3',
  args: {
    type: '3',
    children: 'Heading 3'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'H4',
  args: {
    type: '4',
    children: 'Heading 4'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'H5',
  args: {
    type: '5',
    children: 'Heading 5'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'display',
    children: 'Display'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'eyebrow',
    children: 'Eyebrow'
  },
  render: arguments_ => <>
      <Heading {...arguments_} />
      <div className='h1'>Heading 1</div>
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textElement = canvas.getByText(/Heading 1/i);

    // Wait for all fonts in the document to finish loading
    await document.fonts.ready;
    // Check if your specific font is loaded and active
    const isFontLoaded = document.fonts.check('16px "Source Sans 3 Variable"');
    // Assert that the font is correctly loaded
    await expect(isFontLoaded).toBe(true);
    // Alternative: Assert the computed style of the element
    const computedStyle = globalThis.getComputedStyle(textElement);
    await expect(computedStyle.fontFamily).toContain('Source Sans 3 Variable');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'slug',
    children: 'Slug'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: '2'
  },
  render: arguments_ => <Heading {...arguments_}>
      <Icon name='help' /> Information
    </Heading>
}`,..._.parameters?.docs?.source}}},v=[`H1`,`H2`,`H3`,`H4`,`H5`,`Display`,`Eyebrow`,`Slug`,`WithIcon`]}))();export{m as Display,h as Eyebrow,l as H1,u as H2,d as H3,f as H4,p as H5,g as Slug,_ as WithIcon,v as __namedExportsOrder,c as default};
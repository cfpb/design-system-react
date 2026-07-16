import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{E as n,t as r}from"./src-DWYkP6Ui.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{r(),i=t(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components (Verified)/Headings`,tags:[`autodocs`],component:n,argTypes:{type:{control:{type:`select`}}},parameters:{docs:{description:{component:`A successful type hierarchy establishes the order of importance of elements on a page. Consistent scaling, weights, and capitalization are used to create distinction between headings and provide users with familiar focus points when scanning text.

Source: <a href='https://cfpb.github.io/design-system/foundation/headings' target='_blank'> https://cfpb.github.io/design-system/foundation/headings</a>`}}}},c={name:`H1`,args:{children:`Heading 1`}},l={name:`H2`,args:{type:`2`,children:`Heading 2`}},u={name:`H3`,args:{type:`3`,children:`Heading 3`}},d={name:`H4`,args:{type:`4`,children:`Heading 4`}},f={name:`H5`,args:{type:`5`,children:`Heading 5`}},p={args:{type:`display`,children:`Display`}},m={args:{type:`eyebrow`,children:`Eyebrow`},render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...e}),(0,i.jsx)(`div`,{className:`h1`,children:`Heading 1`})]}),play:async({canvasElement:e})=>{let t=o(e).getByText(/Heading 1/i);await document.fonts.ready;let n=document.fonts.check(`16px "Source Sans 3 Variable"`);await a(n).toBe(!0);let r=getComputedStyle(t);await a(r.fontFamily).toContain(`Source Sans 3 Variable`)}},h={args:{type:`slug`,children:`Slug`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'H1',
  args: {
    children: 'Heading 1'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'H2',
  args: {
    type: '2',
    children: 'Heading 2'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'H3',
  args: {
    type: '3',
    children: 'Heading 3'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'H4',
  args: {
    type: '4',
    children: 'Heading 4'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'H5',
  args: {
    type: '5',
    children: 'Heading 5'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'display',
    children: 'Display'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    const computedStyle = getComputedStyle(textElement);
    await expect(computedStyle.fontFamily).toContain('Source Sans 3 Variable');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'slug',
    children: 'Slug'
  }
}`,...h.parameters?.docs?.source}}},g=[`H1`,`H2`,`H3`,`H4`,`H5`,`Display`,`Eyebrow`,`Slug`]}))();export{p as Display,m as Eyebrow,c as H1,l as H2,u as H3,d as H4,f as H5,h as Slug,g as __namedExportsOrder,s as default};
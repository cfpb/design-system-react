import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{f as n,i as r,s as i}from"./well-Dqi5yO6O.js";import{t as a}from"./src-Dx-IFQea.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(),s={title:`Components (Draft)/Lists`,component:n,argTypes:{},tags:[`autodocs`],parameters:{docs:{description:{component:`
Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.

Source: https://cfpb.github.io/design-system/components/lists
`}}}},c={name:`Unordered`,args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:`List item 1`}),(0,o.jsx)(i,{children:`List item 2`}),(0,o.jsx)(i,{children:`List item 3`})]})}},l={name:`Ordered`,args:{...c.args,isOrdered:!0}},u={name:`Unstyled`,args:{...c.args,isUnstyled:!0}},d={name:`Horizontal`,args:{...c.args,isHorizontal:!0}},f={name:`Link`,args:{isLinks:!0,children:(0,o.jsxs)(o.Fragment,{children:[`The`,` `,(0,o.jsx)(r,{label:`list links`,href:`./?path=/docs/components-verified-links--listlink`}),` `,`component presents each list item as a standalone link, which converts to a touch-friendly link with a large tap area at smaller screen widths.`]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Unordered',
  args: {
    children: <>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </>
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Ordered',
  args: {
    ...Unordered.args,
    isOrdered: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Unstyled',
  args: {
    ...Unordered.args,
    isUnstyled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    ...Unordered.args,
    isHorizontal: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Link',
  args: {
    isLinks: true,
    children: <>
        The{' '}
        <Link label='list links' href='./?path=/docs/components-verified-links--listlink' />{' '}
        component presents each list item as a standalone link, which converts
        to a touch-friendly link with a large tap area at smaller screen widths.
      </>
  }
}`,...f.parameters?.docs?.source}}},p=[`Unordered`,`Ordered`,`Unstyled`,`Horizontal`,`Links`]}))();export{d as Horizontal,f as Links,l as Ordered,c as Unordered,u as Unstyled,p as __namedExportsOrder,s as default};
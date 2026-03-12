import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-AfzBf5NC.js";import"./text-introduction-AKq8KN8H.js";import"./checkbox-DfaDh2id.js";import"./icon-CTTbupwO.js";import{b as i,L as o}from"./link-CU6T8aDt.js";import{L as m}from"./well-C8JmS2Te.js";import"./paragraph-D9qVgrmw.js";import"./secondary-nav-CIpS-w1W.js";import"./summary-BIiTuPJy.js";import"./text-area-BY5EMo-9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DrXO6aM4.js";const b={title:"Components (Draft)/Lists",component:m,argTypes:{},tags:["autodocs"],parameters:{docs:{description:{component:`
Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.

Source: https://cfpb.github.io/design-system/components/lists
`}}}},r={name:"Unordered",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"List item 1"}),e.jsx(i,{children:"List item 2"}),e.jsx(i,{children:"List item 3"})]})}},s={name:"Ordered",args:{...r.args,isOrdered:!0}},t={name:"Unstyled",args:{...r.args,isUnstyled:!0}},n={name:"Horizontal",args:{...r.args,isHorizontal:!0}},a={name:"Link",args:{isLinks:!0,children:e.jsxs(e.Fragment,{children:["The"," ",e.jsx(o,{label:"list links",href:"./?path=/docs/components-verified-links--listlink"})," ","component presents each list item as a standalone link, which converts to a touch-friendly link with a large tap area at smaller screen widths."]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Unordered',
  args: {
    children: <>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Ordered',
  args: {
    ...Unordered.args,
    isOrdered: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Unstyled',
  args: {
    ...Unordered.args,
    isUnstyled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    ...Unordered.args,
    isHorizontal: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const j=["Unordered","Ordered","Unstyled","Horizontal","Links"];export{n as Horizontal,a as Links,s as Ordered,r as Unordered,t as Unstyled,j as __namedExportsOrder,b as default};

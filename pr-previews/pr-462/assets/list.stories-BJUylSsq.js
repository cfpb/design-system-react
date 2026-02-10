import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-vsmRSv6I.js";import{d as o,y as i,c as m}from"./well-BYSArmCd.js";import"./checkbox-CMQFkb0g.js";import"./paragraph-DV1wR8Xo.js";import"./text-area-Dr2tZ5vE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2wWT90W.js";const f={title:"Components (Draft)/Lists",component:o,argTypes:{},tags:["autodocs"],parameters:{docs:{description:{component:`
Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.

Source: https://cfpb.github.io/design-system/components/lists
`}}}},r={name:"Unordered",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"List item 1"}),e.jsx(i,{children:"List item 2"}),e.jsx(i,{children:"List item 3"})]})}},s={name:"Ordered",args:{...r.args,isOrdered:!0}},n={name:"Unstyled",args:{...r.args,isUnstyled:!0}},t={name:"Horizontal",args:{...r.args,isHorizontal:!0}},a={name:"Link",args:{isLinks:!0,children:e.jsxs(e.Fragment,{children:["Link lists is where each item in a list is a jump link, which converts to a finger-friendly link with a large tap area on smaller screens. See example on the"," ",e.jsx(m,{label:"links",href:"./?path=/docs/components-verified-links--listlink"})," ","page."]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Unstyled',
  args: {
    ...Unordered.args,
    isUnstyled: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    ...Unordered.args,
    isHorizontal: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Link',
  args: {
    isLinks: true,
    children: <>
        Link lists is where each item in a list is a jump link, which converts
        to a finger-friendly link with a large tap area on smaller screens. See
        example on the{' '}
        <Link label='links' href='./?path=/docs/components-verified-links--listlink' />{' '}
        page.
      </>
  }
}`,...a.parameters?.docs?.source}}};const k=["Unordered","Ordered","Unstyled","Horizontal","Links"];export{t as Horizontal,a as Links,s as Ordered,r as Unordered,n as Unstyled,k as __namedExportsOrder,f as default};

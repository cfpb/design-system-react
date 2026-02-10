import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-Dis8Twvc.js";import{d as o,y as i,c as d}from"./well-C4FzGCHh.js";import"./checkbox-Bp5Iyaf5.js";import"./paragraph-CiBxSuRq.js";import"./text-area-Cygh7JX2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA5owvr1.js";const k={title:"Components (Draft)/Lists",component:o,argTypes:{},tags:["autodocs"],parameters:{docs:{description:{component:`
Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.

Source: https://cfpb.github.io/design-system/components/lists
`}}}},r={name:"Unordered",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"List item 1"}),e.jsx(i,{children:"List item 2"}),e.jsx(i,{children:"List item 3"})]})}},s={name:"Ordered",args:{...r.args,isOrdered:!0}},t={name:"Unstyled",args:{...r.args,isUnstyled:!0}},n={name:"Horizontal",args:{...r.args,isHorizontal:!0}},a={name:"Link",args:{isLinks:!0,children:e.jsxs(e.Fragment,{children:["In the list link component each list item is a standalone link, which converts to a touch-friendly link with a large tap area at smaller screen widths. See example on the"," ",e.jsx(d,{label:"links",href:"./?path=/docs/components-verified-links--listlink"})," ","page."]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        In the list link component each list item is a standalone link, which converts
        to a touch-friendly link with a large tap area at smaller screen widths. See
        example on the{' '}
        <Link label='links' href='./?path=/docs/components-verified-links--listlink' />{' '}
        page.
      </>
  }
}`,...a.parameters?.docs?.source}}};const f=["Unordered","Ordered","Unstyled","Horizontal","Links"];export{n as Horizontal,a as Links,s as Ordered,r as Unordered,t as Unstyled,f as __namedExportsOrder,k as default};

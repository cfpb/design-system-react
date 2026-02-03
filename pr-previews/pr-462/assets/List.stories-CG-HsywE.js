import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import"./TextIntroduction-B0tWrCPH.js";import"./Dropdown-DtI7ixLG.js";import"./Checkbox-uScmMply.js";import{b as I,c as a,d as o,a as m}from"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-byJ3EejR.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-B-dU0p66.js";const D={title:"Components (Draft)/Lists",component:I,tags:["autodocs"],parameters:{docs:{description:{component:`
Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.

Source: https://cfpb.github.io/design-system/components/lists
`}}}},t={name:"Bulleted",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"List item 1"}),e.jsx(a,{children:"List item 2"}),e.jsx(a,{children:"List item 3"})]})}},r={name:"Numbered",args:{...t.args,isOrdered:!0}},s={name:"Unstyled",args:{...t.args,isUnstyled:!0}},n={name:"Horizontal",args:{...t.args,isHorizontal:!0}},i={name:"Link",args:{isLinks:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"list",href:"#",children:e.jsx(m,{children:"List item 1"})}),e.jsx(o,{type:"list",href:"#",children:e.jsx(m,{children:"List item 2"})}),e.jsx(o,{type:"list",href:"#",children:e.jsx(m,{children:"List item 3"})})]})}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Bulleted',
  args: {
    children: <>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </>
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,L,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Numbered',
  args: {
    ...Unordered.args,
    isOrdered: true
  }
}`,...(u=(L=r.parameters)==null?void 0:L.docs)==null?void 0:u.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Unstyled',
  args: {
    ...Unordered.args,
    isUnstyled: true
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,f,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    ...Unordered.args,
    isHorizontal: true
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,U,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Link',
  args: {
    isLinks: true,
    children: <>
        <ListLink type='list' href='#'>
          <LinkText>List item 1</LinkText>
        </ListLink>
        <ListLink type='list' href='#'>
          <LinkText>List item 2</LinkText>
        </ListLink>
        <ListLink type='list' href='#'>
          <LinkText>List item 3</LinkText>
        </ListLink>
      </>
  }
}`,...(b=(U=i.parameters)==null?void 0:U.docs)==null?void 0:b.source}}};const R=["Unordered","Ordered","Unstyled","Horizontal","Links"];export{n as Horizontal,i as Links,r as Ordered,t as Unordered,s as Unstyled,R as __namedExportsOrder,D as default};

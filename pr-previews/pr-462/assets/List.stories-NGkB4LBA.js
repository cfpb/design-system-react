import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import"./TextIntroduction-DPZWYhxT.js";import"./Dropdown-BH8E_3uo.js";import"./Checkbox-PbiD6xC7.js";import{b as H,c as o,d as m,a as d}from"./Well-11qJzUyd.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-e7KR3_L7.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-CYVmrzMS.js";const G={title:"Components (Draft)/Lists",component:H,tags:["autodocs"],parameters:{docs:{description:{component:`
Lists are an effective way to visually highlight important information so that it can be more easily scanned and read. Before writing a list, it’s important to identify the best style needed for the information being presented.
Source: https://cfpb.github.io/design-system/components/lists
`}}}},r={name:"Bulleted",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"List item 1"}),e.jsx(o,{children:"List item 2"}),e.jsx(o,{children:"List item 3"})]})}},s={name:"Numbered",args:{...r.args,isOrdered:!0}},t={name:"Unstyled",args:{...r.args,isUnstyled:!0}},n={name:"Horizontal",args:{...r.args,isHorizontal:!0}},i={name:"Spaced",args:{...r.args,isSpaced:!0}},a={name:"Link",args:{isLinks:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"list",href:"#",children:e.jsx(d,{children:"List item 1"})}),e.jsx(m,{type:"list",href:"#",children:e.jsx(d,{children:"List item 2"})}),e.jsx(m,{type:"list",href:"#",children:e.jsx(d,{children:"List item 3"})})]})}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Bulleted',
  args: {
    children: <>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </>
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var L,u,g;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Numbered',
  args: {
    ...Unordered.args,
    isOrdered: true
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Unstyled',
  args: {
    ...Unordered.args,
    isUnstyled: true
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,y,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    ...Unordered.args,
    isHorizontal: true
  }
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,U,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Spaced',
  args: {
    ...Unordered.args,
    isSpaced: true
  }
}`,...(b=(U=i.parameters)==null?void 0:U.docs)==null?void 0:b.source}}};var I,T,z;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(T=a.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const J=["Unordered","Ordered","Unstyled","Horizontal","Spaced","Links"];export{n as Horizontal,a as Links,s as Ordered,i as Spaced,r as Unordered,t as Unstyled,J as __namedExportsOrder,G as default};

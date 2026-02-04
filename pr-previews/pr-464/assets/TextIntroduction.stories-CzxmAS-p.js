import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";import{r as g}from"./index-KmaxkdDD.js";/* empty css                */import{o as h,f as b,I as t,g as I,h as T}from"./Well-mO58T28K.js";import"./Dropdown-BY0cU0ya.js";import"./Checkbox-PbiD6xC7.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-e7KR3_L7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-CK_xvA6B.js";const m="Heading 1",l="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",u="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",p=e.jsx(h,{href:"/#",children:e.jsx(b,{children:"Call-to-action link"})},"example1"),L={heading:m,subheading:l,description:u,callToAction:p},y={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:t},i={name:"Standard text introduction",args:{...L}},n={render:x=>e.jsxs(t.Container,{...x,children:[e.jsx(t.Heading,{children:m}),e.jsx(t.Subheading,{children:l}),e.jsx(t.Description,{children:u}),e.jsx(I,{isLinks:!0,children:e.jsx(T,{children:g.cloneElement(p,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};var o,r,a;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Standard text introduction',
  args: {
    ...placeholders
  }
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var s,d,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: _arguments => <TextIntroduction.Container {..._arguments}>
      <TextIntroduction.Heading>{heading}</TextIntroduction.Heading>
      <TextIntroduction.Subheading>{subheading}</TextIntroduction.Subheading>
      <TextIntroduction.Description>{description}</TextIntroduction.Description>
      <List isLinks>
        <ListItem>{cloneElement(callToAction, {
          type: 'list'
        })}</ListItem>
      </List>
    </TextIntroduction.Container>,
  name: 'Flexible text introduction',
  args: {}
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const A=["Standard","Flexible"];export{n as Flexible,i as Standard,A as __namedExportsOrder,y as default};

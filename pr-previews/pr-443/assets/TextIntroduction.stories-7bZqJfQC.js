import{j as t}from"./jsx-runtime-Wp9Qcrv3.js";import{r as g}from"./index-KmaxkdDD.js";/* empty css                */import{p as e}from"./TextIntroduction-BtMSH5P-.js";import"./Dropdown-BmXO-uKD.js";import"./Checkbox-OZJMjJUS.js";import"./ExpandableGroup-b0BLEmuV.js";import"./Icon-C339-c-6.js";import{c as h,d as b,a as T,b as I}from"./Well-DdbSBrlA.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-D9u4rNk9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-DxkMVVsK.js";const m="Heading 1",l="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",u="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",p=t.jsx(h,{href:"/#",children:t.jsx(b,{children:"Call-to-action link"})},"example1"),L={heading:m,subheading:l,description:u,callToAction:p},O={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:e},i={name:"Standard text introduction",args:{...L}},n={render:x=>t.jsxs(e.Container,{...x,children:[t.jsx(e.Heading,{children:m}),t.jsx(e.Subheading,{children:l}),t.jsx(e.Description,{children:u}),t.jsx(T,{isLinks:!0,children:t.jsx(I,{children:g.cloneElement(p,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};var o,r,a;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const R=["Standard","Flexible"];export{n as Flexible,i as Standard,R as __namedExportsOrder,O as default};

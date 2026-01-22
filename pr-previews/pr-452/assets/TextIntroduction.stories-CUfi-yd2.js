import{j as t}from"./jsx-runtime-BLchON5X.js";import{r as c}from"./index-D_VgsJHj.js";/* empty css                */import{s as e}from"./TextIntroduction-DUkKXHvK.js";import"./Dropdown-BT6K47fQ.js";import"./Checkbox-Caysy1F0.js";import{d as m,a as l,b as u,c as p}from"./Well-B2cr-7Hx.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Bg_-DZq5.js";import"./index-kA4PVysc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-6tNKdD3S.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-D-Yp4Rm0.js";const o="Heading 1",r="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",a="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",s=t.jsx(m,{href:"/#",children:t.jsx(l,{children:"Call-to-action link"})},"example1"),x={heading:o,subheading:r,description:a,callToAction:s},F={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:e},i={name:"Standard text introduction",args:{...x}},n={render:d=>t.jsxs(e.Container,{...d,children:[t.jsx(e.Heading,{children:o}),t.jsx(e.Subheading,{children:r}),t.jsx(e.Description,{children:a}),t.jsx(u,{isLinks:!0,children:t.jsx(p,{children:c.cloneElement(s,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Standard text introduction',
  args: {
    ...placeholders
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const H=["Standard","Flexible"];export{n as Flexible,i as Standard,H as __namedExportsOrder,F as default};

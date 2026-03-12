import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-C1Fjx0nV.js";import{q as t}from"./text-introduction-DO6dbPKh.js";import"./checkbox-DMrXPKMj.js";import"./icon-DgNA2ciD.js";import{a as m,b as l}from"./link-D2VXf1jz.js";import{L as u}from"./well-BSinepsg.js";import"./paragraph-BrOTU1oo.js";import"./secondary-nav-BRzj2-Uh.js";import"./summary-CXQrXsfd.js";import"./text-area-CR70XH6r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcAgj1t7.js";const o="Heading 1",r="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",a="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",s=e.jsx(m,{href:"/#",label:"Call-to-action link"},"example1"),p={heading:o,subheading:r,description:a,callToAction:s},D={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:t},i={name:"Standard text introduction",args:{...p}},n={render:d=>e.jsxs(t.Container,{...d,children:[e.jsx(t.Heading,{children:o}),e.jsx(t.Subheading,{children:r}),e.jsx(t.Description,{children:a}),e.jsx(u,{isLinks:!0,children:e.jsx(l,{children:c.cloneElement(s,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const E=["Standard","Flexible"];export{n as Flexible,i as Standard,E as __namedExportsOrder,D as default};

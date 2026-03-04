import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-BwLsRwcM.js";import{q as t}from"./text-introduction-D09V2PNd.js";import"./checkbox-DbIvTtjK.js";import"./icon-C3tcIiRg.js";import{b as m,a as l,d as u}from"./well-vX1SJjH0.js";import"./paragraph-DmJwDujK.js";import"./summary-DqgBJYhV.js";import"./text-area-B20TvSUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcC_zM4J.js";const o="Heading 1",r="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",a="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",s=e.jsx(m,{href:"/#",label:"Call-to-action link"},"example1"),p={heading:o,subheading:r,description:a,callToAction:s},v={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:t},i={name:"Standard text introduction",args:{...p}},n={render:d=>e.jsxs(t.Container,{...d,children:[e.jsx(t.Heading,{children:o}),e.jsx(t.Subheading,{children:r}),e.jsx(t.Description,{children:a}),e.jsx(l,{isLinks:!0,children:e.jsx(u,{children:c.cloneElement(s,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const C=["Standard","Flexible"];export{n as Flexible,i as Standard,C as __namedExportsOrder,v as default};

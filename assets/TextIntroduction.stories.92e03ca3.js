import{j as t}from"./index.7eca609e.js";import{r as g}from"./index.ca1bfdbe.js";/* empty css                */import{n as e}from"./TextIntroduction.7bde5292.js";import"./Dropdown.525f1d32.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.3cd2268e.js";import"./Icon.f49541e3.js";import{b as h,L as b,c as T}from"./Well.e7055d12.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.946277fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.67af5abc.js";import"./index.f108a8f5.js";import"./iframe.aafaad47.js";import"../sb-preview/runtime.js";const m="Heading 1",l="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",p="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",I="Call-to-action link",u=t.exports.jsx(h,{href:"/",children:I}),L={heading:m,subheading:l,description:p,callToAction:u},V={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:e},i={name:"Standard text introduction",args:{...L}},o={render:x=>t.exports.jsxs(e.Container,{...x,children:[t.exports.jsx(e.Heading,{children:m}),t.exports.jsx(e.Subheading,{children:l}),t.exports.jsx(e.Description,{children:p}),t.exports.jsx(b,{isLinks:!0,children:t.exports.jsx(T,{children:g.exports.cloneElement(u,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};var n,r,s;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Standard text introduction',
  args: {
    ...placeholders
  }
}`,...(s=(r=i.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var a,d,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const w=["Standard","Flexible"];export{o as Flexible,i as Standard,w as __namedExportsOrder,V as default};

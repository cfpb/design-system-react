import{j as t}from"./index.7eca609e.js";import{r as g}from"./index.ca1bfdbe.js";/* empty css                */import{p as e}from"./TextIntroduction.b789c744.js";import"./Dropdown.66ff9a5c.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.569af9d6.js";import"./Icon.c6add608.js";import{b as h,L as b,c as T}from"./Well.44588516.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.24c2c4ec.js";import"./index.49a47dde.js";import"./iframe.58befc0e.js";import"../sb-preview/runtime.js";const m="Heading 1",l="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",p="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",I="Call-to-action link",u=t.exports.jsx(h,{href:"/",children:I}),L={heading:m,subheading:l,description:p,callToAction:u},R={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:e},i={name:"Standard text introduction",args:{...L}},o={render:x=>t.exports.jsxs(e.Container,{...x,children:[t.exports.jsx(e.Heading,{children:m}),t.exports.jsx(e.Subheading,{children:l}),t.exports.jsx(e.Description,{children:p}),t.exports.jsx(b,{isLinks:!0,children:t.exports.jsx(T,{children:g.exports.cloneElement(u,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};var n,r,s;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const V=["Standard","Flexible"];export{o as Flexible,i as Standard,V as __namedExportsOrder,R as default};

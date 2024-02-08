import{j as t}from"./index.dedf70f8.js";import{r as g}from"./index.ca1bfdbe.js";/* empty css                */import{d as h,s as e,e as T,f as b}from"./Well.9ca4e134.js";import"./Dropdown.4f85706e.js";import"./Checkbox.eb7761bd.js";import"./ExpandableGroup.28bfb684.js";import"./Icon.716354f0.js";import"./Paragraph.000dbaf6.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./TextInputStatus.8d37edaa.js";import"./index.f108a8f5.js";import"./iframe.e9f4410d.js";import"../sb-preview/runtime.js";const m="Heading 1",l="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",u="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",I="Call-to-action link",p=t.exports.jsx(h,{href:"/",children:I}),L={heading:m,subheading:l,description:u,callToAction:p},O={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:e},i={name:"Standard text introduction",args:{...L}},o={render:x=>t.exports.jsxs(e.Container,{...x,children:[t.exports.jsx(e.Heading,{children:m}),t.exports.jsx(e.Subheading,{children:l}),t.exports.jsx(e.Description,{children:u}),t.exports.jsx(T,{isLinks:!0,children:t.exports.jsx(b,{children:g.exports.cloneElement(p,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};var n,r,s;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const R=["Standard","Flexible"];export{o as Flexible,i as Standard,R as __namedExportsOrder,O as default};

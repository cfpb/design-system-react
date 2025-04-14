import{j as t}from"./jsx-runtime-eba35cff.js";import{r as g}from"./index-9053fc1e.js";/* empty css                */import{p as e}from"./TextIntroduction-ed53788c.js";import"./Dropdown-6a8553fc.js";import"./Checkbox-7e7ab2e2.js";import"./ExpandableGroup-3773f0a5.js";import"./Icon-a1f52d1d.js";import{L as h,a as b,b as T}from"./Well-11b17e27.js";import"./Paragraph-18b341b1.js";import"./TextArea-441eb386.js";import"./_commonjsHelpers-725317a4.js";import"./index-798a71e2.js";import"./index-eeaea43d.js";import"./iframe-5b7f846e.js";const m="Heading 1",l="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",u="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",I="Call-to-action link",p=t.jsx(h,{href:"/",children:I}),L={heading:m,subheading:l,description:u,callToAction:p},O={title:"Components (Verified)/Text introductions",tags:["autodocs"],component:e},i={name:"Standard text introduction",args:{...L}},n={render:x=>t.jsxs(e.Container,{...x,children:[t.jsx(e.Heading,{children:m}),t.jsx(e.Subheading,{children:l}),t.jsx(e.Description,{children:u}),t.jsx(b,{isLinks:!0,children:t.jsx(T,{children:g.cloneElement(p,{type:"list"})})})]}),name:"Flexible text introduction",args:{}};var o,r,a;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

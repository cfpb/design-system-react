import{j as e}from"./index.7eca609e.js";/* empty css                */import{T as c}from"./TextIntroduction.3d264278.js";import"./Dropdown.f0a96798.js";import{L as o}from"./Checkbox.1213d1d0.js";import"./ExpandableGroup.16f023b4.js";import"./Icon.c5a100fe.js";import"./Well.e7055d12.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.946277fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.67af5abc.js";import"./index.f108a8f5.js";import"./iframe.6cf37b25.js";import"../sb-preview/runtime.js";const S={title:"Components (Verified)/Labels",tags:["autodocs"],component:o,argTypes:{inline:{control:"boolean"}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},t={name:"Label heading",args:{children:e.exports.jsx(e.exports.Fragment,{children:"Label heading"}),htmlFor:"testInput"},render:r=>e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(o,{...r}),e.exports.jsx(c,{id:r.htmlFor,name:r.htmlFor,type:"text"})]})},n={name:"Inline label",args:{children:e.exports.jsx(e.exports.Fragment,{children:"Text input label"}),htmlFor:"testInput",inline:!0},render:r=>e.exports.jsxs("div",{className:"m-form-field m-form-field__checkbox",children:[e.exports.jsx("input",{className:"a-checkbox",type:"checkbox",id:r.htmlFor}),e.exports.jsx(o,{...r,children:"Inline label"})]})};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Inline label',
  args: {
    children: <>Text input label</>,
    htmlFor: 'testInput',
    inline: true
  },
  render: arguments_ => <div className='m-form-field m-form-field__checkbox'>
      <input className='a-checkbox' type='checkbox' id={arguments_.htmlFor} />
      <Label {...arguments_}>Inline label</Label>
    </div>
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const H=["LabelHeading","InlineLabel"];export{n as InlineLabel,t as LabelHeading,H as __namedExportsOrder,S as default};

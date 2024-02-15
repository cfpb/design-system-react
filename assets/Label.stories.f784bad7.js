import{j as e}from"./index.7eca609e.js";/* empty css                */import{T as c}from"./Well.e98b5c86.js";import"./Dropdown.f396d1e9.js";import{L as a}from"./Checkbox.1213d1d0.js";import"./ExpandableGroup.0f5381ac.js";import"./Icon.f7c0a08e.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./index.f108a8f5.js";import"./iframe.2afd7431.js";import"../sb-preview/runtime.js";const N={title:"Components (Verified)/Labels",tags:["autodocs"],component:a,argTypes:{inline:{control:"boolean"}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},t={name:"Label heading",args:{children:e.exports.jsx(e.exports.Fragment,{children:"Label heading"}),htmlFor:"testInput"},render:r=>e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(a,{...r}),e.exports.jsx(c,{id:r.htmlFor,name:r.htmlFor,type:"text"})]})},n={name:"Inline label",args:{children:e.exports.jsx(e.exports.Fragment,{children:"Text input label"}),htmlFor:"testInput",inline:!0},render:r=>e.exports.jsxs("div",{className:"m-form-field m-form-field__checkbox",children:[e.exports.jsx("input",{className:"a-checkbox",type:"checkbox",id:r.htmlFor}),e.exports.jsx(a,{...r,children:"Inline label"})]})};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const v=["LabelHeading","InlineLabel"];export{n as InlineLabel,t as LabelHeading,v as __namedExportsOrder,N as default};

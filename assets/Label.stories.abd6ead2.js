import{j as e}from"./index.7eca609e.js";/* empty css                */import{T as c}from"./Well.d6059d44.js";import"./Dropdown.cfcca19d.js";import{L as a}from"./Checkbox.1213d1d0.js";import"./ExpandableGroup.978b7168.js";import"./Icon.bb871e55.js";import"./Paragraph.9304145b.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./index.f108a8f5.js";import"./iframe.1756ab7b.js";import"../sb-preview/runtime.js";const T={title:"Components (Verified)/Labels",tags:["autodocs"],component:a,argTypes:{inline:{control:"boolean"}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},t={name:"Label heading",args:{children:e.exports.jsx(e.exports.Fragment,{children:"Label heading"}),htmlFor:"testInput"},render:r=>e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(a,{...r}),e.exports.jsx(c,{id:r.htmlFor,name:r.htmlFor,type:"text"})]})},n={name:"Inline label",args:{children:e.exports.jsx(e.exports.Fragment,{children:"Text input label"}),htmlFor:"testInput",inline:!0},render:r=>e.exports.jsxs("div",{className:"m-form-field m-form-field__checkbox",children:[e.exports.jsx("input",{className:"a-checkbox",type:"checkbox",id:r.htmlFor}),e.exports.jsx(a,{...r,children:"Inline label"})]})};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,m,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["LabelHeading","InlineLabel"];export{n as InlineLabel,t as LabelHeading,N as __namedExportsOrder,T as default};

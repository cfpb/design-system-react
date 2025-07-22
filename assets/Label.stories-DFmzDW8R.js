import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";import{T as c}from"./TextIntroduction-DOsH2YPb.js";/* empty css                */import"./Dropdown-DHcw22iU.js";import{L as a}from"./Checkbox-BJiRLOSY.js";import"./ExpandableGroup-CqGgKXWx.js";import"./Icon-C41h3ng-.js";import"./Well-CrL7VnJ_.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-Dlyx1BOt.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-p-iT9d-A.js";import"./iframe-DMW0Zc0O.js";const N={title:"Components (Verified)/Labels",tags:["autodocs"],component:a,argTypes:{inline:{control:"boolean"}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},r={name:"Label heading",args:{children:e.jsx(e.Fragment,{children:"Label heading"}),htmlFor:"testInput"},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...n}),e.jsx(c,{id:n.htmlFor,name:n.htmlFor,type:"text"})]})},t={name:"Inline label",args:{children:e.jsx(e.Fragment,{children:"Text input label"}),htmlFor:"testInput",inline:!0},render:n=>e.jsxs("div",{className:"m-form-field m-form-field__checkbox",children:[e.jsx("input",{className:"a-checkbox",type:"checkbox",id:n.htmlFor}),e.jsx(a,{...n,children:"Inline label"})]})};var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const v=["LabelHeading","InlineLabel"];export{t as InlineLabel,r as LabelHeading,v as __namedExportsOrder,N as default};

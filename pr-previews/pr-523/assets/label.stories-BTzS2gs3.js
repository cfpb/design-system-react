import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C5B-1o6k.js";import{T as s}from"./text-introduction-B8NNNB6X.js";import{L as a}from"./checkbox-BWWx8d60.js";import"./icon-EOcJtYna.js";import"./link-CO7iNnF-.js";import"./well-D2Grgs8k.js";import"./paragraph-7_6hvewa.js";import"./secondary-nav-CELy5Y7V.js";import"./summary-BdVmCIPz.js";import"./text-area-0By9hp3g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nIh48lan.js";const I={title:"Components (Verified)/Labels",tags:["autodocs"],component:a,argTypes:{isInline:{control:"boolean"}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},r={name:"Label heading",args:{children:e.jsx(e.Fragment,{children:"Label heading"}),htmlFor:"testInput"},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...n}),e.jsx(s,{id:n.htmlFor,name:n.htmlFor,type:"text"})]})},t={name:"Inline label",args:{children:e.jsx(e.Fragment,{children:"Text input label"}),htmlFor:"testInput",isInline:!0},render:n=>e.jsxs("div",{className:"m-form-field m-form-field--checkbox",children:[e.jsx("input",{className:"a-checkbox",type:"checkbox",id:n.htmlFor}),e.jsx(a,{...n,children:"Inline label"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Inline label',
  args: {
    children: <>Text input label</>,
    htmlFor: 'testInput',
    isInline: true
  },
  render: arguments_ => <div className='m-form-field m-form-field--checkbox'>
      <input className='a-checkbox' type='checkbox' id={arguments_.htmlFor} />
      <Label {...arguments_}>Inline label</Label>
    </div>
}`,...t.parameters?.docs?.source}}};const L=["LabelHeading","InlineLabel"];export{t as InlineLabel,r as LabelHeading,L as __namedExportsOrder,I as default};

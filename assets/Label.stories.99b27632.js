/* empty css                */import{d as h}from"./Well.e4dc9050.js";import"./Dropdown.51036178.js";import{L as o}from"./Checkbox.adabeb2b.js";import"./ExpandableGroup.54048ccb.js";import"./Icon.f601679c.js";import{j as n,F as a,a as p}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.034b3e74.js";import"../sb-preview/runtime.js";const v={title:"Components (Verified)/Labels",tags:["autodocs"],component:o,argTypes:{inline:{control:"boolean"}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},r={name:"Label heading",args:{children:n(a,{children:"Label heading"}),htmlFor:"testInput"},render:e=>p(a,{children:[n(o,{...e}),n(h,{id:e.htmlFor,name:e.htmlFor,type:"text"})]})},t={name:"Inline label",args:{children:n(a,{children:"Text input label"}),htmlFor:"testInput",inline:!0},render:e=>p("div",{className:"m-form-field m-form-field__checkbox",children:[n("input",{className:"a-checkbox",type:"checkbox",id:e.htmlFor}),n(o,{...e,children:"Inline label"})]})};var l,s,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const S=["LabelHeading","InlineLabel"];export{t as InlineLabel,r as LabelHeading,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Label.stories.99b27632.js.map

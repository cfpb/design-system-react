/* empty css                */import{b as h}from"./Well.d0c9108c.js";import"./Dropdown.04390d20.js";import{L as o}from"./Checkbox.ad7351d6.js";import"./ExpandableGroup.b9976e4d.js";import"./Icon.53c14fd8.js";import{j as n,F as a,a as d}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.34deb4ef.js";import"../sb-preview/runtime.js";const v={title:"Components (Verified)/Labels",component:o,argTypes:{inline:{control:"boolean"}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},r={name:"Label heading",args:{children:n(a,{children:"Label heading"}),htmlFor:"testInput"},render:e=>d(a,{children:[n(o,{...e}),n(h,{id:e.htmlFor,name:e.htmlFor,type:"text"})]})},t={name:"Inline label",args:{children:n(a,{children:"Text input label"}),htmlFor:"testInput",inline:!0},render:e=>d("div",{className:"m-form-field m-form-field__checkbox",children:[n("input",{className:"a-checkbox",type:"checkbox",id:e.htmlFor}),n(o,{...e,children:"Inline label"})]})};var l,i,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["LabelHeading","InlineLabel"];export{t as InlineLabel,r as LabelHeading,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Label.stories.b8f8206c.js.map

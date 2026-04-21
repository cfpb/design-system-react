import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{i as n,r,t as i}from"./src-DlmHJ0JR.js";import{r as a}from"./checkbox-C42VzH10.js";var o,s,c,l,u;e((()=>{i(),n(),o=t(),s={title:`Components (Verified)/Labels`,tags:[`autodocs`],component:a,argTypes:{isInline:{control:`boolean`}},parameters:{docs:{description:{component:`

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`}}}},c={name:`Label heading`,args:{children:(0,o.jsx)(o.Fragment,{children:`Label heading`}),htmlFor:`testInput`},render:e=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{...e}),(0,o.jsx)(r,{id:e.htmlFor,name:e.htmlFor,type:`text`})]})},l={name:`Inline label`,args:{children:(0,o.jsx)(o.Fragment,{children:`Text input label`}),htmlFor:`testInput`,isInline:!0},render:e=>(0,o.jsxs)(`div`,{className:`m-form-field m-form-field--checkbox`,children:[(0,o.jsx)(`input`,{className:`a-checkbox`,type:`checkbox`,id:e.htmlFor}),(0,o.jsx)(a,{...e,children:`Inline label`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => <>
      <Label {...arguments_} />
      <TextInput id={arguments_.htmlFor} name={arguments_.htmlFor} type='text' />
    </>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`LabelHeading`,`InlineLabel`]}))();export{l as InlineLabel,c as LabelHeading,u as __namedExportsOrder,s as default};
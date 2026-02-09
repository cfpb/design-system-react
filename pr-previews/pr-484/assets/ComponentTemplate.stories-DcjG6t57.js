import{j as e}from"./jsx-runtime-u17CrQMm.js";function s({label:t,helperText:p}){return e.jsxs("div",{className:"component-template",children:[e.jsx("label",{className:"component-template__label",children:t}),p?e.jsx("p",{className:"component-template__helper-text",children:p}):null]})}try{s.displayName="ComponentTemplate",s.__docgenInfo={description:`Copy the component description from the CFPB Design System page for the component in the component file JSDoc block (autodocs uses it).
Add the link to the component's CFPB Design System documentation page below

Source: https://cfpb.github.io/design-system/components/[Component-Name]`,displayName:"ComponentTemplate",props:{label:{defaultValue:null,description:"Label text for the component.",name:"label",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"Optional helper text shown below the label.",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const l={title:"Templates/Component Template",component:s,tags:["autodocs"],argTypes:{},parameters:{}},o={label:"Example label",helperText:"Optional helper text"},n={args:{...o}},a={name:"With variant",args:{...o},parameters:{}},r={name:"Custom render",args:{...o},render:t=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(s,{...t})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With variant',
  args: {
    ...baseArgs
    // TODO: Override a prop to demonstrate a meaningful variant.
    // Example:
    // variant: 'secondary'
  },
  parameters: {
    // Optional: explain why this variant exists.
    // docs: { description: { story: 'Use for secondary actions.' } }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Custom render',
  args: {
    ...baseArgs
  },
  render: arguments_ => <div style={{
    maxWidth: 360
  }}>
      {/* TODO: Wrap or compose the component to show real usage. */}
      <ComponentTemplate {...arguments_} />
    </div>
}`,...r.parameters?.docs?.source}}};const i=["Default","WithVariant","WithCustomRender"];export{n as Default,r as WithCustomRender,a as WithVariant,i as __namedExportsOrder,l as default};

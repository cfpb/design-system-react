import{j as a}from"./jsx-runtime-u17CrQMm.js";function n({label:o,helperText:r}){return a.jsxs("div",{className:"component-template",children:[a.jsx("label",{className:"component-template__label",children:o}),r?a.jsx("p",{className:"component-template__helper-text",children:r}):null]})}try{n.displayName="ComponentTemplate",n.__docgenInfo={description:`Copy the component description from the CFPB Design System page for the component in the component file JSDoc block (autodocs uses it).
Add the link to the component's CFPB Design System documentation page below

Source: https://cfpb.github.io/design-system/components/[Component-Name]`,displayName:"ComponentTemplate",props:{label:{defaultValue:null,description:"Label text for the component.",name:"label",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"Optional helper text shown below the label.",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const l={title:"Templates/Component name",component:n,tags:["autodocs"],argTypes:{},parameters:{}},s={label:"Example label",helperText:"Optional helper text"},e={args:{...s}},t={name:"With variant",args:{...s},parameters:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const m=["Default","WithVariant"];export{e as Default,t as WithVariant,m as __namedExportsOrder,l as default};

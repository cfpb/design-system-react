import{j as e}from"./jsx-runtime-u17CrQMm.js";function o({label:t,helperText:p}){return e.jsxs("div",{className:"component-template",children:[e.jsx("span",{className:"component-template__label",children:t}),p?e.jsx("span",{className:"component-template__helper-text",children:p}):null]})}try{o.displayName="ComponentTemplate",o.__docgenInfo={description:`Component Name is a short, descriptive summary of what the component does
and when to use it. Keep this concise because it appears in Storybook
autodocs as the component description.
Source: https://cfpb.github.io/design-system/components/[Component-Name]`,displayName:"ComponentTemplate",props:{label:{defaultValue:null,description:"Label text for the component.",name:"label",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"Optional helper text shown below the label.",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const m={title:"Templates/Component Template",component:o,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:`Story template for new components.

Best practice checklist:
- Add the component description in the component file JSDoc block (autodocs uses it).
- Keep stories focused on behavior/appearance; avoid test-only props.
- Use args for the "Default" story and reuse them in variants.
- Add a minimal set of variants that reflect real usage.
- Add the link to the component's CFPB Design System documentation page in https://cfpb.github.io/design-system/components/`}}}},r={label:"Example label",helperText:"Optional helper text"},a={args:{...r}},n={name:"With variant",args:{...r},parameters:{}},s={name:"Custom render",args:{...r},render:t=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(o,{...t})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const c=["Default","WithVariant","WithCustomRender"];export{a as Default,s as WithCustomRender,n as WithVariant,c as __namedExportsOrder,m as default};

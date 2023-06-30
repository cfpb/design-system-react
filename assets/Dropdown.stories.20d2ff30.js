import{j as u,r as N,a as p,F as P}from"./jsx-runtime.3c5b5edf.js";import{D as _,B as d}from"./Dropdown.7b0955ce.js";import"./_commonjsHelpers.712cc82f.js";import"./isNativeReflectConstruct.eb2b9305.js";import"./index.c8a4389a.js";import"./Icon.7b8e40bf.js";import"./iframe.0592c687.js";import"../sb-preview/runtime.js";const l=[{value:"value1",label:"Option A"},{value:"value2",label:"Option B"},{value:"value3",label:"Option C"}],U={component:_,parameters:{docs:{description:{component:`
### CFPB DS - Dropdown component

Source: https://cfpb.github.io/design-system/components/dropdowns-and-multiselects
`}}}},y=-1,e={args:{label:"Default Dropdown",id:"dropdown",options:l}},a={args:{...e.args,id:"with-default",defaultValue:l.at(y),label:"With Default Value"}},t={args:{...e.args,id:"disabled",label:"Disabled",isDisabled:!0}},i={args:{...e.args,options:[...l,{value:"long",label:"Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious"}],id:"multi",isMulti:!0,label:"Multi-select"}},s={args:{...e.args,options:[...l,{value:"long",label:"Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious"}],defaultValue:[l[0]],id:"multi",isMulti:!0,label:"Multi-select"}},n={args:{...e.args,options:[...l,{value:"long",label:"Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious"}],defaultValue:[l[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom"}},q=o=>{const[j,c]=N.exports.useState([o.options[0]]);return p(P,{children:[p("div",{className:"m-btn-group u-mb30",children:[u(d,{label:"Add all options",onClick:()=>c([...o.options])}),u(d,{label:"Clear all options",appearance:"warning",onClick:()=>c([])})]}),u(_,{...o,onSelect:F=>c(F),value:j})]})},r={render:o=>u(q,{...o}),args:{...e.args,options:[...l,{value:"long",label:"Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious"}],defaultValue:[l[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom"}};var g,m,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions
  }
}`,...(b=(m=e.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var w,M,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    id: 'with-default',
    defaultValue: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
}`,...(f=(M=a.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var D,h,k;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    id: 'disabled',
    label: 'Disabled',
    isDisabled: true
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,v,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions, {
      value: 'long',
      label: 'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
    }],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var O,V,x;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions, {
      value: 'long',
      label: 'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
    }],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(x=(V=s.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var C,W,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions, {
      value: 'long',
      label: 'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
    }],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
}`,...(E=(W=n.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var B,L,T;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: arguments_ => <ControlledDropdown {...arguments_} />,
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions, {
      value: 'long',
      label: 'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
    }],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
}`,...(T=(L=r.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const X=["DefaultDropdown","WithDefaultValue","Disabled","MultiSelect","MultiSelectWithDefaultValue","MultiSelectWithPillsAlignedBottom","AsAControlledComponent"];export{r as AsAControlledComponent,e as DefaultDropdown,t as Disabled,i as MultiSelect,s as MultiSelectWithDefaultValue,n as MultiSelectWithPillsAlignedBottom,a as WithDefaultValue,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Dropdown.stories.20d2ff30.js.map

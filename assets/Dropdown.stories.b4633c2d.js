import{j as p,r as X,a as g,F as Y}from"./jsx-runtime.54133100.js";import{D as K,M as e,B as M}from"./Dropdown.313af2f5.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.cc011e2f.js";import"./isNativeReflectConstruct.c66bbbb3.js";import"./index.a2b6e612.js";import"./Icon.5bc5be1a.js";import"./iframe.168e79ad.js";import"../sb-preview/runtime.js";const ue={component:K,parameters:{docs:{description:{component:`
### CFPB DS - Dropdown component

Source: https://cfpb.github.io/design-system/components/dropdowns-and-multiselects
`}}}},Z=-1,t={args:{label:"Default Dropdown",id:"dropdown",options:e}},o={args:{...t.args,id:"with-default",defaultValue:e.at(Z),label:"With Default Value"}},s={args:{...t.args,id:"disabled",label:"Disabled",isDisabled:!0}},a={args:{...t.args,options:[...e],id:"multi",isMulti:!0,label:"Multi-select"}},r={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select"}},n={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom",withCheckbox:!0}},i={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom"}},u={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"hide",withCheckbox:!0}},c={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom",withCheckbox:!0,showClearAllSelectedButton:!1}},$=({options:l,...Q})=>{const[R,m]=X.exports.useState([l[0]]);return g(Y,{children:[g("div",{className:"m-btn-group u-mb30",children:[p(M,{label:"Add all options",onClick:()=>m([...l])}),p(M,{label:"Clear all options",appearance:"warning",onClick:()=>m([])})]}),p(K,{id:"controlled-dropdown",options:l,showClearAllSelectedButton:!1,onSelect:U=>m(U),value:R,...Q})]})},d={render:l=>p($,{...l}),args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom"}};var b,D,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Default Dropdown',
    id: 'dropdown',
    options: MockOptions
  }
}`,...(f=(D=t.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var h,w,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    id: 'with-default',
    defaultValue: MockOptions.at(LAST_ELEMENT),
    label: 'With Default Value'
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,A,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    id: 'disabled',
    label: 'Disabled',
    isDisabled: true
  }
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var V,O,W;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(W=(O=a.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var x,B,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var _,P,L;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom',
    withCheckbox: true
  }
}`,...(L=(P=n.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var T,j,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
}`,...(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var N,v,y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'hide',
    withCheckbox: true
  }
}`,...(y=(v=u.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var q,z,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom',
    withCheckbox: true,
    showClearAllSelectedButton: false
  }
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,I,J;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: arguments_ => <ControlledDropdown {...arguments_} />,
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const ce=["DefaultDropdown","WithDefaultValue","Disabled","MultiSelect","MultiSelectWithDefaultValue","MultiSelectWithCheckboxes","MultiSelectWithPillsAlignedBottom","MultiSelectWithoutPills","MultiSelectWithoutClearAllButton","AsAControlledComponent"];export{d as AsAControlledComponent,t as DefaultDropdown,s as Disabled,a as MultiSelect,n as MultiSelectWithCheckboxes,r as MultiSelectWithDefaultValue,i as MultiSelectWithPillsAlignedBottom,c as MultiSelectWithoutClearAllButton,u as MultiSelectWithoutPills,o as WithDefaultValue,ce as __namedExportsOrder,ue as default};
//# sourceMappingURL=Dropdown.stories.b4633c2d.js.map

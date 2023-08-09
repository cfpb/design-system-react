import{j as d,r as X,a as g,F as Y}from"./jsx-runtime.5f84dc07.js";import{D as K,B as M}from"./Dropdown.57379926.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.cc011e2f.js";import"./floating-ui.dom.esm.1a703617.js";import"./index.40d0d0b8.js";import"./Icon.036a1d6a.js";import"./iframe.c40f8ce4.js";import"../sb-preview/runtime.js";const e=[{value:"value1",label:"Option A"},{value:"value2",label:"Option B"},{value:"value3",label:"Option C"},{value:"long",label:"Options can also contain long words that will be wrapped like supercalifragilisticexpialidocious"}],ue={component:K,parameters:{docs:{description:{component:`
### CFPB DS - Dropdown component

Source: https://cfpb.github.io/design-system/components/dropdowns-and-multiselects
`}}}},Z=-1,t={args:{label:"Default Dropdown",id:"dropdown",options:e}},o={args:{...t.args,id:"with-default",defaultValue:e.at(Z),label:"With Default Value"}},a={args:{...t.args,id:"disabled",label:"Disabled",isDisabled:!0}},s={args:{...t.args,options:[...e],id:"multi",isMulti:!0,label:"Multi-select"}},r={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select"}},i={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom",withCheckbox:!0}},n={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom"}},u={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"hide",withCheckbox:!0}},c={args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom",withCheckbox:!0,showClearAllSelectedButton:!1}},$=({options:l,...Q})=>{const[R,m]=X.exports.useState([l[0]]);return g(Y,{children:[g("div",{className:"m-btn-group u-mb30",children:[d(M,{label:"Add all options",onClick:()=>m([...l])}),d(M,{label:"Clear all options",appearance:"warning",onClick:()=>m([])})]}),d(K,{id:"controlled-dropdown",options:l,showClearAllSelectedButton:!1,onSelect:U=>m(U),value:R,...Q})]})},p={render:l=>d($,{...l}),args:{...t.args,options:[...e],defaultValue:[e[0]],id:"multi",isMulti:!0,label:"Multi-select",pillAlign:"bottom"}};var b,D,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,A,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    id: 'disabled',
    label: 'Disabled',
    isDisabled: true
  }
}`,...(C=(A=a.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var O,V,x;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(x=(V=s.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var W,B,v;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select'
  }
}`,...(v=(B=r.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var E,_,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var L,T,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...DefaultDropdown.args,
    options: [...MockOptions],
    defaultValue: [MockOptions[0]],
    id: 'multi',
    isMulti: true,
    label: 'Multi-select',
    pillAlign: 'bottom'
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var F,N,y;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(y=(N=u.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var q,z,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,I,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(J=(I=p.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const ce=["DefaultDropdown","WithDefaultValue","Disabled","MultiSelect","MultiSelectWithDefaultValue","MultiSelectWithCheckboxes","MultiSelectWithPillsAlignedBottom","MultiSelectWithoutPills","MultiSelectWithoutClearAllButton","AsAControlledComponent"];export{p as AsAControlledComponent,t as DefaultDropdown,a as Disabled,s as MultiSelect,i as MultiSelectWithCheckboxes,r as MultiSelectWithDefaultValue,n as MultiSelectWithPillsAlignedBottom,c as MultiSelectWithoutClearAllButton,u as MultiSelectWithoutPills,o as WithDefaultValue,ce as __namedExportsOrder,ue as default};
//# sourceMappingURL=Dropdown.stories.129cc539.js.map

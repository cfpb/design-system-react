import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./secondary-nav-m5546gWf.js";var r,i,a,o,s,c,l,u,d,f,p,m;e((()=>{t(),r={title:`Components (Draft)/Secondary navigation`,tags:[`autodocs`],component:n,parameters:{docs:{description:{component:`
The secondary navigation component provides a left-hand navigation menu that can be used for in-page or section navigation.

Source: https://cfpb.github.io/design-system/development/main-content-and-sidebars
        `}}},argTypes:{ariaLabel:{control:`text`},mobileToggleLabel:{control:`text`}}},i=[{href:`#`,label:`Section A`},{href:`#`,label:`Section B`},{href:`#`,label:`Section C`}],a=[{href:`#`,label:`Section A`},{href:`#`,label:`Section B`,isActive:!0},{href:`#`,label:`Section C`}],o=[{label:`Section 1`,href:`#`,children:[{href:`#`,label:`Item A`},{href:`#`,label:`Item B`}]},{href:`#`,label:`Section 2`},{href:`#`,label:`Section 3`}],s=[{label:`Section 1`,href:`#`,isActive:!0,children:[{href:`#`,label:`Item A`},{href:`#`,label:`Item B`}]},{href:`#`,label:`Section 2`}],c=[{label:`Section 1`,href:`#`,children:[{href:`#`,label:`Item A`,isActive:!0},{href:`#`,label:`Item B`},{href:`#`,label:`Item C`}]},{href:`#`,label:`Section 2`},{href:`#`,label:`Section 3`}],l={name:`Basic`,args:{items:i}},u={name:`One active item`,args:{items:a}},d={name:`With children`,args:{items:o}},f={name:`With children, active parent`,args:{items:s}},p={name:`With children, active child`,args:{items:c}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Basic',
  args: {
    items: basicNoChildren
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'One active item',
  args: {
    items: basicNoChildrenWithCurrent
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With children',
  args: {
    items: withChildrenNoActive
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With children, active parent',
  args: {
    items: withChildrenActiveParent
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With children, active child',
  args: {
    items: withChildrenActiveChild
  }
}`,...p.parameters?.docs?.source}}},m=[`BasicMenuNoChildren`,`BasicMenuNoChildrenOneActive`,`MenuWithChildrenNoActive`,`MenuWithChildrenActiveParent`,`MenuWithChildrenActiveChild`]}))();export{l as BasicMenuNoChildren,u as BasicMenuNoChildrenOneActive,p as MenuWithChildrenActiveChild,f as MenuWithChildrenActiveParent,d as MenuWithChildrenNoActive,m as __namedExportsOrder,r as default};
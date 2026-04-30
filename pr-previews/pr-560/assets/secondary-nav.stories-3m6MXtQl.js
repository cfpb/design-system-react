import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./secondary-nav-CHbi1_V4.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),r={title:`Components (Draft)/Secondary navigation`,tags:[`autodocs`],component:n,parameters:{docs:{description:{component:"\nSecondary navigation for in-page or section navigation, typically shown in a left sidebar.\nMarkup and classes match [cfgov secondary-nav.html](https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/v1/jinja2/v1/includes/organisms/secondary-nav.html).\n\n### Usage\n\n- **Flat list (no `children`):** use `isActive` on the current top-level item.\n- **With `children`:** only children should use `isActive` for a subpage, unless the “current” page is the parent index—in that case set `isActive` on the parent and leave children inactive.\n- Default `ariaLabel` is `Section`. `mobileToggleLabel` defaults to **Navigate this section**.\n        "}}},argTypes:{ariaLabel:{control:`text`},mobileToggleLabel:{control:`text`}}},i=[{href:`#topic-a`,label:`Section A`},{href:`#topic-b`,label:`Section B`},{href:`#topic-c`,label:`Section C`}],a=[{href:`#topic-a`,label:`Section A`},{href:`#topic-b`,label:`Section B`,isActive:!0},{href:`#topic-c`,label:`Section C`}],o=[{label:`Section 1`,href:`#section-1`,children:[{href:`#section-1-a`,label:`Item A`},{href:`#section-1-b`,label:`Item B`}]},{href:`#section-2`,label:`Section 2`},{href:`#section-3`,label:`Section 3`}],s=[{label:`Section 1`,href:`#section-1`,isActive:!0,children:[{href:`#section-1-a`,label:`Item A`},{href:`#section-1-b`,label:`Item B`}]},{href:`#section-2`,label:`Section 2`}],c=[{label:`Section 1`,href:`#section-1`,children:[{href:`#section-1-a`,label:`Item A`,isActive:!0},{href:`#section-1-b`,label:`Item B`},{href:`#section-1-c`,label:`Item C`}]},{href:`#section-2`,label:`Section 2`},{href:`#section-3`,label:`Section 3`}],l={name:`Basic secondary nav`,args:{items:i}},u={name:`Basic secondary nav, one active`,args:{items:a}},d={name:`Secondary nav with children, no active items`,args:{items:o}},f={name:`Secondary nav with children, active parent`,args:{items:s}},p={name:`Secondary nav with children, active child`,args:{items:c}},m={args:{items:c}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Basic secondary nav',
  args: {
    items: basicNoChildren
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Basic secondary nav, one active',
  args: {
    items: basicNoChildrenWithCurrent
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Secondary nav with children, no active items',
  args: {
    items: withChildrenNoActive
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Secondary nav with children, active parent',
  args: {
    items: withChildrenActiveParent
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Secondary nav with children, active child',
  args: {
    items: withChildrenActiveChild
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: withChildrenActiveChild
  }
}`,...m.parameters?.docs?.source},description:{story:`Same data as story 5; kept as a short default entry in the sidebar.`,...m.parameters?.docs?.description}}},h=[`BasicMenuNoChildren`,`BasicMenuNoChildrenOneActive`,`MenuWithChildrenNoActive`,`MenuWithChildrenActiveParent`,`MenuWithChildrenActiveChild`,`Default`]}))();export{l as BasicMenuNoChildren,u as BasicMenuNoChildrenOneActive,m as Default,p as MenuWithChildrenActiveChild,f as MenuWithChildrenActiveParent,d as MenuWithChildrenNoActive,h as __namedExportsOrder,r as default};
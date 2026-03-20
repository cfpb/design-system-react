import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{n,t as r}from"./secondary-nav-Dx3CWE-a.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{n(),i=t(),a={title:`Components (Draft)/Secondary navigation`,tags:[`autodocs`],component:r,parameters:{docs:{description:{component:'\nSecondary navigation for in-page or section navigation, typically shown in a left sidebar.\nMatches the "Navigate this section" pattern used on [consumerfinance.gov](https://www.consumerfinance.gov/compliance/supervisory-highlights/).\n\n### Usage\n\n- Pass `items` with `href`, `label`, and optional `isActive` for the current page.\n- Items can have optional `children` for sub-menu items. Parent items with children can omit `href` when active (section header).\n- Use `ariaLabel` to describe the nav for screen readers.\n        '}}},argTypes:{ariaLabel:{control:`text`}}},o=[{href:`#section-1`,label:`Section 1`},{href:`#section-2`,label:`Section 2`,isActive:!0},{href:`#section-3`,label:`Section 3`},{href:`#section-4`,label:`Section 4`},{href:`#section-5`,label:`Section 5`},{href:`#section-6`,label:`Section 6`},{href:`#section-7`,label:`Section 7`}],s=[{label:`Section 1`,href:`/section-1`,children:[{href:`/section-1/item-a`,label:`Item A`,isActive:!0},{href:`/section-1/item-b`,label:`Item B`},{href:`/section-1/item-c`,label:`Item C`}]},{href:`/section-2`,label:`Section 2`},{href:`/section-3`,label:`Section 3`},{href:`/section-4`,label:`Section 4`},{href:`/section-5`,label:`Section 5`},{href:`/section-6`,label:`Section 6`},{href:`/section-7`,label:`Section 7`}],c={args:{items:o,ariaLabel:`Page navigation`},render:e=>(0,i.jsx)(r,{...e})},l={args:{items:[{href:`#overview`,label:`Overview`},{href:`#rules`,label:`Rules`,isActive:!0},{href:`#resources`,label:`Resources`}],ariaLabel:`On this page`},render:e=>(0,i.jsx)(r,{...e})},u={args:{items:s,ariaLabel:`Section`},render:e=>(0,i.jsx)(r,{...e})},d={args:{items:o.map(({isActive:e,...t})=>t),ariaLabel:`Page navigation`},render:e=>(0,i.jsx)(r,{...e})},f={args:{items:[],ariaLabel:`Page navigation`},render:e=>(0,i.jsx)(r,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    ariaLabel: 'Page navigation'
  },
  render: args => <SecondaryNav {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      href: '#overview',
      label: 'Overview'
    }, {
      href: '#rules',
      label: 'Rules',
      isActive: true
    }, {
      href: '#resources',
      label: 'Resources'
    }],
    ariaLabel: 'On this page'
  },
  render: args => <SecondaryNav {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: itemsWithSubMenu,
    ariaLabel: 'Section'
  },
  render: args => <SecondaryNav {...args} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems.map(({
      isActive: _isActive,
      ...item
    }) => item),
    ariaLabel: 'Page navigation'
  },
  render: args => <SecondaryNav {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: 'Page navigation'
  },
  render: args => <SecondaryNav {...args} />
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithShortList`,`WithSubMenu`,`NoActiveItem`,`EmptyList`]}))();export{c as Default,f as EmptyList,d as NoActiveItem,l as WithShortList,u as WithSubMenu,p as __namedExportsOrder,a as default};
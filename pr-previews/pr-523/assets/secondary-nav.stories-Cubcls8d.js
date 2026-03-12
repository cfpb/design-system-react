import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as a}from"./secondary-nav-CIpS-w1W.js";import"./index-DrXO6aM4.js";import"./iframe-AfzBf5NC.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CU6T8aDt.js";import"./icon-CTTbupwO.js";const f={title:"Components (Draft)/Secondary navigation",tags:["autodocs"],component:a,parameters:{docs:{description:{component:'\nSecondary navigation for in-page or section navigation, typically shown in a left sidebar.\nMatches the "Navigate this section" pattern used on [consumerfinance.gov](https://www.consumerfinance.gov/compliance/supervisory-highlights/).\n\n### Usage\n\n- Pass `items` with `href`, `label`, and optional `isActive` for the current page.\n- Items can have optional `children` for sub-menu items. Parent items with children can omit `href` when active (section header).\n- Use `ariaLabel` to describe the nav for screen readers.\n        '}}},argTypes:{ariaLabel:{control:"text"}}},c=[{href:"#section-1",label:"Section 1"},{href:"#section-2",label:"Section 2",isActive:!0},{href:"#section-3",label:"Section 3"},{href:"#section-4",label:"Section 4"},{href:"#section-5",label:"Section 5"},{href:"#section-6",label:"Section 6"},{href:"#section-7",label:"Section 7"}],m=[{label:"Section 1",children:[{href:"/section-1/item-a",label:"Item A",isActive:!0},{href:"/section-1/item-b",label:"Item B"},{href:"/section-1/item-c",label:"Item C"}]},{href:"/section-2",label:"Section 2"},{href:"/section-3",label:"Section 3"},{href:"/section-4",label:"Section 4"},{href:"/section-5",label:"Section 5"},{href:"/section-6",label:"Section 6"},{href:"/section-7",label:"Section 7"}],t={args:{items:c,ariaLabel:"Page navigation"},render:e=>r.jsx(a,{...e})},s={args:{items:[{href:"#overview",label:"Overview"},{href:"#rules",label:"Rules",isActive:!0},{href:"#resources",label:"Resources"}],ariaLabel:"On this page"},render:e=>r.jsx(a,{...e})},n={args:{items:m,ariaLabel:"Section"},render:e=>r.jsx(a,{...e})},i={args:{items:c.map(({isActive:e,...l})=>l),ariaLabel:"Page navigation"},render:e=>r.jsx(a,{...e})},o={args:{items:[],ariaLabel:"Page navigation"},render:e=>r.jsx(a,{...e})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    ariaLabel: 'Page navigation'
  },
  render: args => <SecondaryNav {...args} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: itemsWithSubMenu,
    ariaLabel: 'Section'
  },
  render: args => <SecondaryNav {...args} />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems.map(({
      isActive: _isActive,
      ...item
    }) => item),
    ariaLabel: 'Page navigation'
  },
  render: args => <SecondaryNav {...args} />
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    ariaLabel: 'Page navigation'
  },
  render: args => <SecondaryNav {...args} />
}`,...o.parameters?.docs?.source}}};const S=["Default","WithShortList","WithSubMenu","NoActiveItem","EmptyList"];export{t as Default,o as EmptyList,i as NoActiveItem,s as WithShortList,n as WithSubMenu,S as __namedExportsOrder,f as default};

import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./secondary-nav--rrRTNHV.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Components (Draft)/Secondary navigation`,tags:[`autodocs`],component:n,parameters:{docs:{description:{component:'\nSecondary navigation for in-page or section navigation, typically shown in a left sidebar.\nMarkup and classes match [cfgov secondary-nav.html](https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/v1/jinja2/v1/includes/organisms/secondary-nav.html) (e.g. [Auto loans](https://www.consumerfinance.gov/data-research/consumer-credit-trends/auto-loans/)).\n\n### Usage\n\n- Pass `items` with `href`, `label`, and optional `isActive` for the current page.\n- Items can have optional `children` for sub-menu items.\n- **Cfgov:** if *no* item has `children`, the nav gets `o-secondary-nav--no-children` and is **hidden on small viewports**. Examples below all include a parent-with-children branch so the mobile header works.\n- Put the **current section** (with `children`) **first**, like production: on small screens only `li[data-nav-is-active="True"]` stays visible.\n- Default `ariaLabel` is `Section` (cfgov gettext). Override if needed.\n- `mobileToggleLabel` sets the collapsible header text (default **Navigate this section**).\n        '}}},argTypes:{ariaLabel:{control:`text`},mobileToggleLabel:{control:`text`}}},i=[{label:`Section 1`,href:`#section-1`,children:[{href:`#section-1/item-a`,label:`Item A`,isActive:!0},{href:`#section-1/item-b`,label:`Item B`},{href:`#section-1/item-c`,label:`Item C`}]},{href:`#section-2`,label:`Section 2`},{href:`#section-3`,label:`Section 3`},{href:`#section-4`,label:`Section 4`},{href:`#section-5`,label:`Section 5`},{href:`#section-6`,label:`Section 6`},{href:`#section-7`,label:`Section 7`}],a=e=>e.map(e=>({...e,isActive:void 0,children:e.children?.map(e=>({...e,isActive:void 0}))})),o={args:{items:i}},s={args:{items:a(i)},parameters:{docs:{description:{story:'No `isActive` anywhere: every `li` is `data-nav-is-active="False"`, so cfgov hides all section rows on small viewports—you still get the header, but the expanded panel has no visible links.'}}}},c={args:{items:[]},parameters:{docs:{description:{story:"With no items, or with `o-secondary-nav--no-children` (no nested sections), cfgov hides the whole nav on small viewports."}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: sectionNavItems
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: stripActive(sectionNavItems)
  },
  parameters: {
    docs: {
      description: {
        story: 'No \`isActive\` anywhere: every \`li\` is \`data-nav-is-active="False"\`, so cfgov hides all section rows on small viewports—you still get the header, but the expanded panel has no visible links.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  parameters: {
    docs: {
      description: {
        story: 'With no items, or with \`o-secondary-nav--no-children\` (no nested sections), cfgov hides the whole nav on small viewports.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`NoActiveItem`,`EmptyList`]}))();export{o as Default,c as EmptyList,s as NoActiveItem,l as __namedExportsOrder,r as default};
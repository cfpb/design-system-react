import{i as e}from"./preload-helper-Cs4UwXAW.js";import{p as t,t as n}from"./src-CFt1Wuk9.js";var r,i,a,o,s;e((()=>{n(),r={title:`Components (Draft)/Heroes`,component:t,tags:[`autodocs`],parameters:{sbNestedCanvasPadding:`flush`,docs:{description:{component:`
Heroes are a primary focal point on landing and sublanding pages. They introduce a collection of pages by combining a brief description of the goals of that section along with a visually impactful graphic. To introduce lower-level pages, use the [text introduction](https://cfpb.github.io/design-system/patterns/text-introductions) instead.

This component supports illustration, photograph (overlay), and knockout variants only — not the DS jumbo or 50/50 patterns.

Source: https://cfpb.github.io/design-system/patterns/heroes
`}}}},i={args:{heading:`41 chars max for a one-line heading`,image:`https://cfpb.github.io/design-system/images/uploads/hero_illustration_example_keys.png`,subheading:`This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.`,backgroundColor:`#d4e7e6`}},a={args:{...i.args,imageIsPhoto:!0,image:`https://files.consumerfinance.gov/f/images/PC_hero.original.jpg`,backgroundColor:`#f7f8f9`}},o={name:`With knockout text`,args:{...i.args,heading:`Max of 41 chars for a one-line heading`,subheading:`This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.`,backgroundColor:`#207676`,isKnockout:!0,image:`https://cfpb.github.io/design-system/images/uploads/design_system_hero_example.png`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    heading: '41 chars max for a one-line heading',
    image: 'https://cfpb.github.io/design-system/images/uploads/hero_illustration_example_keys.png',
    subheading: 'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#d4e7e6'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIllustration.args,
    imageIsPhoto: true,
    image: 'https://files.consumerfinance.gov/f/images/PC_hero.original.jpg',
    backgroundColor: '#f7f8f9'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With knockout text',
  args: {
    ...WithIllustration.args,
    heading: 'Max of 41 chars for a one-line heading',
    subheading: 'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#207676',
    isKnockout: true,
    image: 'https://cfpb.github.io/design-system/images/uploads/design_system_hero_example.png'
  }
}`,...o.parameters?.docs?.source}}},s=[`WithIllustration`,`WithPhotograph`,`WithKnockoutText`]}))();export{i as WithIllustration,o as WithKnockoutText,a as WithPhotograph,s as __namedExportsOrder,r as default};
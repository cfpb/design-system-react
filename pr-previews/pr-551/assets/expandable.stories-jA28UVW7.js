import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{C as n,S as r,t as i,w as a}from"./src-DHpA31NF.js";async function o(e){return new Promise(t=>{setTimeout(t,e)})}var s=e((()=>{try{o.displayName=`sleep`,o.__docgenInfo={description:``,displayName:`sleep`,filePath:`/home/runner/work/design-system-react/design-system-react/src/utils/sleep.tsx`,methods:[],props:{},tags:{}}}catch{}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{i(),s(),n(),c=t(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components (Verified)/Expandables`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},m=(0,c.jsxs)(`p`,{children:[`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0`,(0,c.jsx)(`a`,{href:`./?path=/story/components-expandable--default`,children:`Lorem link`})]}),h=({accordion:e})=>(0,c.jsxs)(`p`,{children:[`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0`,(0,c.jsx)(`a`,{href:`./?path=/story/components-expandablegroup--${e?`accordion`:`default`}`,children:`Lorem link`})]}),g={name:`Single`,args:{header:`Expandable label`,children:m}},_={name:`Padded`,args:{...g.args,header:`Expandable label`,isPadded:!0}},v={name:`Open on load`,args:{...g.args,header:`Expandable label`,openOnLoad:!0}},y={name:`Group`,render:e=>(0,c.jsx)(r,{...e,children:[`label`,`label`,`label`].map((t,n)=>(0,c.jsx)(a,{header:`Expandable ${t}`,inAccordion:e.accordion,children:(0,c.jsx)(h,{accordion:e.accordion})},`item-${t}-${n}`))}),play:async({canvasElement:e,step:t})=>{let n=1e3,r={timeout:n},i=(await f(e).findAllByTitle(`Expandable label`))[0],a=e=>l(i.ariaExpanded).toBe(e);await t(`Starts out collapsed`,async()=>{await d(()=>a(`false`),r)}),await t(`Click to expanded`,async()=>{await u.click(i),await d(()=>a(`true`),r),await o(n)}),await t(`Click to collapse`,async()=>{await u.click(i),await d(()=>a(`false`),r)})},args:{groupId:`DefaultGroup`}},b={...y,args:{accordion:!0,groupId:`AccordionGroup`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Single',
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Padded',
  args: {
    ...Default.args,
    header: 'Expandable label',
    isPadded: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Open on load',
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Group',
  render: arguments_ => <ExpandableGroup {...arguments_}>
      {['label', 'label', 'label'].map((value, index) => <Expandable key={\`item-\${value}-\${index}\`} header={\`Expandable \${value}\`} inAccordion={arguments_.accordion}>
          <ContentForGroup accordion={arguments_.accordion} />
        </Expandable>)}
    </ExpandableGroup>,
  play: async ({
    canvasElement,
    step
  }) => {
    // Setup
    const timeout = 1000;
    const options = {
      timeout
    };
    const canvas = within(canvasElement);
    const allElements = await canvas.findAllByTitle('Expandable label');

    // get the first one
    const element = allElements[0];

    // Helpers
    const expectAriaExpanded = (isExpanded: string): void => expect(element.ariaExpanded).toBe(isExpanded);

    // Test
    await step('Starts out collapsed', async () => {
      await waitFor(() => expectAriaExpanded('false'), options);
    });
    await step('Click to expanded', async () => {
      await userEvent.click(element);
      await waitFor(() => expectAriaExpanded('true'), options);
      await sleep(timeout);
    });
    await step('Click to collapse', async () => {
      await userEvent.click(element);
      await waitFor(() => expectAriaExpanded('false'), options);
    });
  },
  args: {
    groupId: 'DefaultGroup'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...DefaultExpandableGroup,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`PaddedExpandable`,`OpenOnLoad`,`DefaultExpandableGroup`,`Accordion`]}))();export{b as Accordion,g as Default,y as DefaultExpandableGroup,v as OpenOnLoad,_ as PaddedExpandable,x as __namedExportsOrder,p as default};
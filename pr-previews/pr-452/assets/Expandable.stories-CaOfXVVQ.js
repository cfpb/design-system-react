import{j as n}from"./jsx-runtime-BLchON5X.js";import{w as g,a as l,e as h,u as x}from"./index-Bw8uaOFt.js";/* empty css                */import{p as b,q as f}from"./TextIntroduction-CY3_wILz.js";import"./Dropdown-BAS5xsjk.js";import"./Checkbox-C8PZvyyp.js";import"./Well-XpBeq6ld.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Ddz0oDhE.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-ChmeYw71.js";async function u(e){return new Promise(a=>{setTimeout(a,e)})}try{u.displayName="sleep",u.__docgenInfo={description:"",displayName:"sleep",props:{}}}catch{}const N={title:"Components (Draft)/Expandables",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},y=n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),w=({accordion:e})=>{const a=`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`;return n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:a,children:"Lorem link"})]})},o={name:"Single",args:{header:"Expandable label",children:y}},r={name:"Padded",args:{...o.args,header:"Expandable label",isPadded:!0}},s={name:"Open on load",args:{...o.args,header:"Expandable label",openOnLoad:!0}},t={name:"Group",render:e=>n.jsx(f,{...e,children:["label","label","label"].map((a,m)=>n.jsx(b,{header:`Expandable ${a}`,inAccordion:e.accordion,children:n.jsx(w,{accordion:e.accordion})},`item-${a}-${m}`))}),play:async({canvasElement:e,step:a})=>{const c={timeout:1e3},p=(await g(e).findAllByTitle("Expandable label"))[0],d=E=>h(p.ariaExpanded).toBe(E);await a("Starts out collapsed",async()=>{await l(async()=>d("false"),c)}),await a("Click to expanded",async()=>{x.click(p),await l(async()=>d("true"),c),await u(1e3)}),await a("Click to collapse",async()=>{x.click(p),await l(async()=>d("false"),c)})},args:{groupId:"DefaultGroup"}},i={...t,name:"Accordion",args:{accordion:!0,groupId:"AccordionGroup"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Single',
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Padded',
  args: {
    ...Default.args,
    header: 'Expandable label',
    isPadded: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Open on load',
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      await waitFor(async () => expectAriaExpanded('false'), options);
    });
    await step('Click to expanded', async () => {
      userEvent.click(element);
      await waitFor(async () => expectAriaExpanded('true'), options);
      await sleep(timeout);
    });
    await step('Click to collapse', async () => {
      userEvent.click(element);
      await waitFor(async () => expectAriaExpanded('false'), options);
    });
  },
  args: {
    groupId: 'DefaultGroup'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultExpandableGroup,
  name: 'Accordion',
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...i.parameters?.docs?.source}}};const H=["Default","PaddedExpandable","OpenOnLoad","DefaultExpandableGroup","Accordion"];export{i as Accordion,o as Default,t as DefaultExpandableGroup,s as OpenOnLoad,r as PaddedExpandable,H as __namedExportsOrder,N as default};

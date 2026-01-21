import{j as n}from"./jsx-runtime-Wp9Qcrv3.js";import{w as O,a as l,e as L,u as x}from"./index-C-PFODCg.js";/* empty css                */import{p as j,q as P}from"./TextIntroduction-9OOGcNXW.js";import"./Dropdown-Cqk_O66r.js";import"./Checkbox-uScmMply.js";import"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-byJ3EejR.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-CyXSzyCG.js";async function u(e){return new Promise(a=>{setTimeout(a,e)})}try{u.displayName="sleep",u.__docgenInfo={description:"",displayName:"sleep",props:{}}}catch{}const Z={title:"Components (Draft)/Expandables",component:j,tags:["autodocs"],parameters:{docs:{description:{component:`
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},F=n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),$=({accordion:e})=>{const a=`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`;return n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:a,children:"Lorem link"})]})},o={name:"Single",args:{header:"Expandable label",children:F}},r={name:"Padded",args:{...o.args,header:"Expandable label",isPadded:!0}},s={name:"Open on load",args:{...o.args,header:"Expandable label",openOnLoad:!0}},t={name:"Group",render:e=>n.jsx(P,{...e,children:["label","label","label"].map((a,m)=>n.jsx(j,{header:`Expandable ${a}`,inAccordion:e.accordion,children:n.jsx($,{accordion:e.accordion})},`item-${a}-${m}`))}),play:async({canvasElement:e,step:a})=>{const c={timeout:1e3},d=(await O(e).findAllByTitle("Expandable label"))[0],p=C=>L(d.ariaExpanded).toBe(C);await a("Starts out collapsed",async()=>{await l(async()=>p("false"),c)}),await a("Click to expanded",async()=>{x.click(d),await l(async()=>p("true"),c),await u(1e3)}),await a("Click to collapse",async()=>{x.click(d),await l(async()=>p("false"),c)})},args:{groupId:"DefaultGroup"}},i={...t,name:"Accordion",args:{accordion:!0,groupId:"AccordionGroup"}};var b,E,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Single',
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...(g=(E=o.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var h,f,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Padded',
  args: {
    ...Default.args,
    header: 'Expandable label',
    isPadded: true
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,v,A;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Open on load',
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var G,k,D;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(D=(k=t.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var _,q,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultExpandableGroup,
  name: 'Accordion',
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(S=(q=i.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const ee=["Default","PaddedExpandable","OpenOnLoad","DefaultExpandableGroup","Accordion"];export{i as Accordion,o as Default,t as DefaultExpandableGroup,s as OpenOnLoad,r as PaddedExpandable,ee as __namedExportsOrder,Z as default};

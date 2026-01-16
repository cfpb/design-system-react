import{j as n}from"./jsx-runtime-Wp9Qcrv3.js";import{w as C,a as l,e as O,u}from"./index-B1ndDI2N.js";/* empty css                */import"./TextIntroduction-CLE2GkSE.js";import"./Dropdown-uLchJUsU.js";import"./Checkbox-uScmMply.js";import{E as q,a as L}from"./ExpandableGroup-BI2sLueW.js";import"./Icon-DMZdIY87.js";import"./Well-DdbSBrlA.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-CKaCfP7D.js";import{s as F}from"./sleep-Ceq2-en_.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe--LJy79q0.js";const ea={title:"Components (Draft)/Expandables",component:q,tags:["autodocs"],parameters:{docs:{description:{component:`
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},P=n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),T=({accordion:e})=>{const a=`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`;return n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:a,children:"Lorem link"})]})},o={name:"Single",args:{header:"Expandable label",children:P}},r={name:"Open on load",args:{...o.args,header:"Expandable label",openOnLoad:!0}},s={name:"Padded",args:{...o.args,header:"Expandable label",icon:"bank",isPadded:!0}},t={name:"Group",render:e=>n.jsx(L,{...e,children:["label","label","label"].map(a=>n.jsx(q,{header:`Expandable ${a}`,inAccordion:e.accordion,children:n.jsx(T,{accordion:e.accordion})},`item-${a}`))}),play:async({canvasElement:e,step:a})=>{const c={timeout:1e3},d=await C(e).findByTitle("Expandable A"),p=j=>O(d.ariaExpanded).toBe(j);await a("Starts out collapsed",async()=>{await l(async()=>p("false"),c)}),await a("Click to expanded",async()=>{u.click(d),await l(async()=>p("true"),c),await F(1e3)}),await a("Click to collapse",async()=>{u.click(d),await l(async()=>p("false"),c)})},args:{groupId:"DefaultGroup"}},i={...t,name:"Accordion",args:{accordion:!0,groupId:"AccordionGroup"}};var m,b,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Single',
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var E,g,h;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Open on load',
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Padded',
  args: {
    ...Default.args,
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,A,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Group',
  render: arguments_ => <ExpandableGroup {...arguments_}>
      {['label', 'label', 'label'].map(value => <Expandable key={\`item-\${value}\`} header={\`Expandable \${value}\`} inAccordion={arguments_.accordion}>
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
    const element = await canvas.findByTitle('Expandable A');

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
}`,...(k=(A=t.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var G,D,S;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...DefaultExpandableGroup,
  name: 'Accordion',
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const na=["Default","OpenOnLoad","PaddedExpandable","DefaultExpandableGroup","Accordion"];export{i as Accordion,o as Default,t as DefaultExpandableGroup,r as OpenOnLoad,s as PaddedExpandable,na as __namedExportsOrder,ea as default};

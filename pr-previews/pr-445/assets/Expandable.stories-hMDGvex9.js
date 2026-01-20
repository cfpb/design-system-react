import{j as n}from"./jsx-runtime-Wp9Qcrv3.js";import{w as O,a as l,e as L,u as x}from"./index-B1ndDI2N.js";/* empty css                */import{o as j,p as P}from"./TextIntroduction-CDoaqdKH.js";import"./Dropdown-DLH7qqMN.js";import"./Checkbox-uScmMply.js";import"./Well-gJoKksGL.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-CNfm49A0.js";async function u(e){return new Promise(a=>{setTimeout(a,e)})}try{u.displayName="sleep",u.__docgenInfo={description:"",displayName:"sleep",props:{}}}catch{}const Y={title:"Components (Draft)/Expandables",component:j,tags:["autodocs"],parameters:{docs:{description:{component:`
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},F=n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),$=({accordion:e})=>{const a=`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`;return n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:a,children:"Lorem link"})]})},o={name:"Single",args:{header:"Expandable label",children:F}},t={name:"Group",render:e=>n.jsx(P,{...e,children:["label","label","label"].map((a,m)=>n.jsx(j,{header:`Expandable ${a}`,inAccordion:e.accordion,children:n.jsx($,{accordion:e.accordion})},`item-${a}-${m}`))}),play:async({canvasElement:e,step:a})=>{const c={timeout:1e3},d=await O(e).findByTitle("Expandable label"),p=C=>L(d.ariaExpanded).toBe(C);await a("Starts out collapsed",async()=>{await l(async()=>p("false"),c)}),await a("Click to expanded",async()=>{x.click(d),await l(async()=>p("true"),c),await u(1e3)}),await a("Click to collapse",async()=>{x.click(d),await l(async()=>p("false"),c)})},args:{groupId:"DefaultGroup"}},r={...t,name:"Accordion",args:{accordion:!0,groupId:"AccordionGroup"}},s={name:"Open on load",args:{...o.args,header:"Expandable label",openOnLoad:!0}},i={name:"Padded",args:{...o.args,header:"Expandable label",isPadded:!0}};var b,g,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Single',
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...(E=(g=o.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var h,y,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    const element = await canvas.findByTitle('Expandable label');

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
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,v,A;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultExpandableGroup,
  name: 'Accordion',
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(A=(v=r.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var G,k,D;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Open on load',
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var _,S,q;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Padded',
  args: {
    ...Default.args,
    header: 'Expandable label',
    isPadded: true
  }
}`,...(q=(S=i.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const Z=["Default","DefaultExpandableGroup","Accordion","OpenOnLoad","PaddedExpandable"];export{r as Accordion,o as Default,t as DefaultExpandableGroup,s as OpenOnLoad,i as PaddedExpandable,Z as __namedExportsOrder,Y as default};

import{j as n}from"./jsx-runtime-Wp9Qcrv3.js";import{w as L,a as l,e as j,u}from"./index-B1ndDI2N.js";/* empty css                */import"./TextIntroduction-SYgiZmYp.js";import"./Dropdown-8ZEjNABK.js";import"./Checkbox-uScmMply.js";import{E as S,a as O}from"./ExpandableGroup-DuXk7Tzb.js";import"./Icon-CgploRvJ.js";import"./Well-DdbSBrlA.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import{s as F}from"./sleep-Ceq2-en_.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-ByHxJ9Hu.js";const ea={title:"Components (Draft)/Expandables",component:S,tags:["autodocs"],parameters:{docs:{description:{component:`
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},B=n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),P=({accordion:e})=>{const a=`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`;return n.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",n.jsx("a",{href:a,children:"Lorem link"})]})},o={args:{name:"Standard",header:"Expandable label",children:B}},r={args:{...o.args,name:"Open on load",header:"Expandable label",openOnLoad:!0}},s={args:{...o.args,name:"Large",header:"Expandable label",icon:"bank",isPadded:!0}},t={render:e=>n.jsx(O,{...e,children:["A","B","C"].map(a=>n.jsx(S,{header:`Expandable ${a}`,inAccordion:e.accordion,children:n.jsx(P,{accordion:e.accordion})},`item-${a}`))}),play:async({canvasElement:e,step:a})=>{const c={timeout:1e3},p=await L(e).findByTitle("Expandable A"),d=q=>j(p.ariaExpanded).toBe(q);await a("Starts out collapsed",async()=>{await l(async()=>d("false"),c)}),await a("Click to expanded",async()=>{u.click(p),await l(async()=>d("true"),c),await F(1e3)}),await a("Click to collapse",async()=>{u.click(p),await l(async()=>d("false"),c)})},args:{groupId:"DefaultGroup"}},i={...t,args:{accordion:!0,groupId:"AccordionGroup"}};var m,x,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'Standard',
    header: 'Expandable label',
    children: Content
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var E,g,h;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'Open on load',
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'Large',
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,A,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: arguments_ => <ExpandableGroup {...arguments_}>
      {['A', 'B', 'C'].map(value => <Expandable key={\`item-\${value}\`} header={\`Expandable \${value}\`} inAccordion={arguments_.accordion}>
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
}`,...(k=(A=t.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var D,G,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultExpandableGroup,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(C=(G=i.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};const na=["Default","OpenOnLoad","PaddedExpandable","DefaultExpandableGroup","Accordion"];export{i as Accordion,o as Default,t as DefaultExpandableGroup,r as OpenOnLoad,s as PaddedExpandable,na as __namedExportsOrder,ea as default};

import{j as t}from"./jsx-runtime-Wp9Qcrv3.js";import{w as y,a as c,e as f,u as p}from"./index-B1ndDI2N.js";import{s as g}from"./sleep-Ceq2-en_.js";import{a as w,E as A}from"./ExpandableGroup-BJHQNk6q.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./Icon-P1P9cBXU.js";import"./iframe-C1ieVk_f.js";const I={title:"Components (Draft)/Expandable/Groups",component:w,tags:["autodocs"],argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},v=({accordion:e})=>{const a=`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`;return t.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",t.jsx("a",{href:a,children:"Lorem link"})]})},n={render:e=>t.jsx(w,{...e,children:["A","B","C"].map(a=>t.jsx(A,{header:`Expandable ${a}`,inAccordion:e.accordion,children:t.jsx(v,{accordion:e.accordion})},`item-${a}`))}),play:async({canvasElement:e,step:a})=>{const s={timeout:1e3},r=await y(e).findByTitle("Expandable A"),i=b=>f(r.ariaExpanded).toBe(b);await a("Starts out collapsed",async()=>{await c(async()=>i("false"),s)}),await a("Click to expanded",async()=>{p.click(r),await c(async()=>i("true"),s),await g(1e3)}),await a("Click to collapse",async()=>{p.click(r),await c(async()=>i("false"),s)})},args:{groupId:"DefaultGroup"}},o={...n,args:{accordion:!0,groupId:"AccordionGroup"}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: arguments_ => <ExpandableGroup {...arguments_}>
      {['A', 'B', 'C'].map(value => <Expandable key={\`item-\${value}\`} header={\`Expandable \${value}\`} inAccordion={arguments_.accordion}>
          <Content accordion={arguments_.accordion} />
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
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,x,E;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const T=["Default","Accordion"];export{o as Accordion,n as Default,T as __namedExportsOrder,I as default};

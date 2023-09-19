import{w as b,a as c,u as p,s as g,e as f}from"./sleep.f062a059.js";import{E as w,a as A}from"./ExpandableGroup.7f7d0889.js";import{j as o,a as h}from"./jsx-runtime.54133100.js";import"./index.cb80487d.js";import"./_commonjsHelpers.712cc82f.js";import"./_baseIsEqual.a652f15c.js";import"./index.320f77c7.js";import"./extends.cc011e2f.js";import"./uniq.1538566d.js";import"./index.67736049.js";import"./Icon.5bc5be1a.js";import"./iframe.168e79ad.js";import"../sb-preview/runtime.js";const H={component:w,argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},v=({accordion:a})=>h("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",o("a",{href:`/?path=/story/components-expandablegroup--${a?"accordion":"default"}`,children:"Lorem link"})]}),n={render:a=>o(w,{...a,children:["A","B","C"].map(e=>o(A,{header:`Expandable ${e}`,inAccordion:a.accordion,children:o(v,{accordion:a.accordion})},`item-${e}`))}),play:async({canvasElement:a,step:e})=>{const r={timeout:1e3},s=await b(a).findByTitle("Expandable A"),i=y=>f(s.ariaExpanded).toBe(y);await e("Starts out collapsed",async()=>{await c(async()=>i("false"),r)}),await e("Click to expanded",async()=>{p.click(s),await c(async()=>i("true"),r),await g(1e3)}),await e("Click to collapse",async()=>{p.click(s),await c(async()=>i("false"),r)})},args:{groupId:"DefaultGroup"}},t={...n,args:{accordion:!0,groupId:"AccordionGroup"}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,x,E;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const N=["Default","Accordion"];export{t as Accordion,n as Default,N as __namedExportsOrder,H as default};
//# sourceMappingURL=ExpandableGroup.stories.0d6a2cd5.js.map

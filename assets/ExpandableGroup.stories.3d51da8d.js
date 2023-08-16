import{w as b,a as c,u as p,s as g,e as f}from"./sleep.1a8197d2.js";import{E as w,a as A}from"./ExpandableGroup.980be19d.js";import{j as o,a as h}from"./jsx-runtime.5f84dc07.js";import"./index.c3c9c8da.js";import"./index.e850844b.js";import"./_commonjsHelpers.712cc82f.js";import"./_baseIsEqual.5f277acd.js";import"./index.320f77c7.js";import"./extends.cc011e2f.js";import"./uniq.3b6f40f1.js";import"./index.67736049.js";import"./Icon.9b0ab1ef.js";import"./iframe.3aca6ddb.js";import"../sb-preview/runtime.js";const N={component:w,argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},v=({accordion:a})=>h("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",o("a",{href:`/?path=/story/components-expandablegroup--${a?"accordion":"default"}`,children:"Lorem link"})]}),n={render:a=>o(w,{...a,children:["A","B","C"].map(e=>o(A,{header:`Expandable ${e}`,inAccordion:a.accordion,children:o(v,{accordion:a.accordion})},`item-${e}`))}),play:async({canvasElement:a,step:e})=>{const r={timeout:1e3},i=await b(a).findByTitle("Expandable A"),s=y=>f(i.ariaExpanded).toBe(y);await e("Starts out collapsed",async()=>{await c(async()=>s("false"),r)}),await e("Click to expanded",async()=>{p.click(i),await c(async()=>s("true"),r),await g(1e3)}),await e("Click to collapse",async()=>{p.click(i),await c(async()=>s("false"),r)})},args:{groupId:"DefaultGroup"}},t={...n,args:{accordion:!0,groupId:"AccordionGroup"}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const O=["Default","Accordion"];export{t as Accordion,n as Default,O as __namedExportsOrder,N as default};
//# sourceMappingURL=ExpandableGroup.stories.3d51da8d.js.map

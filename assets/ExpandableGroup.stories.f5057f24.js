import{s as y,e as f}from"./sleep.a6e64752.js";import{w as g,b as c,u as p}from"./index.08c73bc2.js";import{a as w,E as A}from"./ExpandableGroup.b2bee709.js";import{j as o,a as v}from"./jsx-runtime.3c5b5edf.js";import"./index.fd930501.js";import"./index.e850844b.js";import"./_baseIsEqual.5f277acd.js";import"./_commonjsHelpers.712cc82f.js";import"./index.320f77c7.js";import"./extends.cc011e2f.js";import"./uniq.3b6f40f1.js";import"./index.4b267bee.js";import"./index.67736049.js";import"./Icon.3e36b841.js";import"./iframe.7655b027.js";import"../sb-preview/runtime.js";const z={component:w,argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},h=({accordion:a})=>v("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",o("a",{href:`/?path=/story/components-expandablegroup--${a?"accordion":"default"}`,children:"Lorem link"})]}),n={render:a=>o(w,{...a,children:["A","B","C"].map(e=>o(A,{header:`Expandable ${e}`,inAccordion:a.accordion,children:o(h,{accordion:a.accordion})},`item-${e}`))}),play:async({canvasElement:a,step:e})=>{const r={timeout:1e3},i=await g(a).findByTitle("Expandable A"),s=b=>f(i.ariaExpanded).toBe(b);await e("Starts out collapsed",async()=>{await c(async()=>s("false"),r)}),await e("Click to expanded",async()=>{p.click(i),await c(async()=>s("true"),r),await y(1e3)}),await e("Click to collapse",async()=>{p.click(i),await c(async()=>s("false"),r)})},args:{groupId:"DefaultGroup"}},t={...n,args:{accordion:!0,groupId:"AccordionGroup"}};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,x,E;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const J=["Default","Accordion"];export{t as Accordion,n as Default,J as __namedExportsOrder,z as default};
//# sourceMappingURL=ExpandableGroup.stories.f5057f24.js.map

import{j as t}from"./jsx-runtime-Wp9Qcrv3.js";import{w as g,a as c,e as f,u as d}from"./index-B1ndDI2N.js";import{E as w,a as A}from"./ExpandableGroup-CdWoW8ro.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./Icon-aq5TbRRx.js";import"./iframe-CKDkNVVB.js";async function p(a){return new Promise(e=>{setTimeout(e,a)})}try{p.displayName="sleep",p.__docgenInfo={description:"",displayName:"sleep",props:{}}}catch{}const F={title:"Components (Draft)/Expandable/Groups",component:w,tags:["autodocs"],argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},h=({accordion:a})=>{const e=`/?path=/story/components-expandablegroup--${a?"accordion":"default"}`;return t.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",t.jsx("a",{href:e,children:"Lorem link"})]})},n={render:a=>t.jsx(w,{...a,children:["A","B","C"].map(e=>t.jsx(A,{header:`Expandable ${e}`,inAccordion:a.accordion,children:t.jsx(h,{accordion:a.accordion})},`item-${e}`))}),play:async({canvasElement:a,step:e})=>{const s={timeout:1e3},r=await g(a).findByTitle("Expandable A"),i=b=>f(r.ariaExpanded).toBe(b);await e("Starts out collapsed",async()=>{await c(async()=>i("false"),s)}),await e("Click to expanded",async()=>{d.click(r),await c(async()=>i("true"),s),await p(1e3)}),await e("Click to collapse",async()=>{d.click(r),await c(async()=>i("false"),s)})},args:{groupId:"DefaultGroup"}},o={...n,args:{accordion:!0,groupId:"AccordionGroup"}};var l,u,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,E,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Default,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const I=["Default","Accordion"];export{o as Accordion,n as Default,I as __namedExportsOrder,F as default};

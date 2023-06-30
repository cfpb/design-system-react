import{a as u,E as m}from"./ExpandableGroup.ceebfd12.js";import{j as a,a as l}from"./jsx-runtime.3c5b5edf.js";import"./Icon.7b8e40bf.js";import"./iframe.0592c687.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.712cc82f.js";const G={component:u,argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},b=({accordion:o})=>l("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",a("a",{href:`/?path=/story/components-expandablegroup--${o?"accordion":"default"}`,children:"Lorem link"})]}),r={render:o=>a(u,{...o,children:["A","B","C"].map(n=>a(m,{header:`Expandable ${n}`,inAccordion:o.accordion,children:a(b,{accordion:o.accordion})},`item-${n}`))}),args:{groupId:"DefaultGroup"}},e={...r,args:{accordion:!0,groupId:"AccordionGroup"}};var t,c,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: arguments_ => <ExpandableGroup {...arguments_}>
      {['A', 'B', 'C'].map(value => <Expandable key={\`item-\${value}\`} header={\`Expandable \${value}\`} inAccordion={arguments_.accordion}>
          <Content accordion={arguments_.accordion} />
        </Expandable>)}
    </ExpandableGroup>,
  args: {
    groupId: 'DefaultGroup'
  }
}`,...(s=(c=r.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Default,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const D=["Default","Accordion"];export{e as Accordion,r as Default,D as __namedExportsOrder,G as default};
//# sourceMappingURL=ExpandableGroup.stories.ef1c4368.js.map

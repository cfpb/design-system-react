import{a as x,E}from"./Expandable.8d2d9ffa.js";import{r as h,R as c,j as o,a as _}from"./jsx-runtime.556016cd.js";import"./Icon.4b524adb.js";import"./index.cfa9e344.js";import"./iframe.62fe0d92.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.712cc82f.js";const t=({groupId:e,accordion:r=!1,children:g})=>{let s="o-expandable-group";r&&(s+=" o-expandable-group__accordion"),h.exports.useEffect(()=>{!r||x.init(document.querySelector(`#${e}`))},[r]);const f=c.Children.map(g,i=>c.isValidElement(i)&&r?c.cloneElement(i,{inAccordion:r}):i);return o("div",{id:e,className:s,children:f})};try{t.displayName="ExpandableGroup",t.__docgenInfo={description:"",displayName:"ExpandableGroup",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}},accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}}}}}catch{}const $={component:t,argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},y=({accordion:e})=>_("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",o("a",{href:`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`,children:"Lorem link"})]}),a={render:e=>o(t,{...e,children:[1,2,3].map(r=>o(E,{header:`Expandable ${r}`,inAccordion:e.accordion,children:o(y,{accordion:e.accordion})}))}),args:{groupId:"DefaultGroup"}},n={...a,args:{accordion:!0,groupId:"AccordionGroup"}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ExpandableGroup {...args}>
    {[1, 2, 3].map(val => <Expandable header={\`Expandable \${val}\`} inAccordion={args.accordion}>
        <Content accordion={args.accordion} />
      </Expandable>)}
  </ExpandableGroup>,
  args: {
    groupId: 'DefaultGroup'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,m,b;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Default,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const C=["Default","Accordion"];export{n as Accordion,a as Default,C as __namedExportsOrder,$ as default};
//# sourceMappingURL=ExpandableGroup.stories.e41c0ea2.js.map

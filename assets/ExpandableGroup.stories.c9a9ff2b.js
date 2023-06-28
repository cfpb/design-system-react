import{a as x,E}from"./Expandable.bbeaf1f7.js";import{r as h,e as c,j as o,a as _}from"./jsx-runtime.3c5b5edf.js";import"./index.cfa9e344.js";import"./Icon.01e944bc.js";import"./iframe.454d1c88.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.712cc82f.js";const t=({groupId:e,accordion:r=!1,children:g})=>{let s="o-expandable-group";r&&(s+=" o-expandable-group__accordion"),h.exports.useEffect(()=>{!r||x.init(document.querySelector(`#${e}`))},[r,e]);const f=c.Children.map(g,i=>c.isValidElement(i)&&r?c.cloneElement(i,{inAccordion:r}):i);return o("div",{id:e,className:s,children:f})};try{t.displayName="ExpandableGroup",t.__docgenInfo={description:"",displayName:"ExpandableGroup",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}},accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}}}}}catch{}const I={component:t,argTypes:{accordion:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},y=({accordion:e})=>_("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",o("a",{href:`/?path=/story/components-expandablegroup--${e?"accordion":"default"}`,children:"Lorem link"})]}),a={render:e=>o(t,{...e,children:["A","B","C"].map(r=>o(E,{header:`Expandable ${r}`,inAccordion:e.accordion,children:o(y,{accordion:e.accordion})},`item-${r}`))}),args:{groupId:"DefaultGroup"}},n={...a,args:{accordion:!0,groupId:"AccordionGroup"}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arguments_ => <ExpandableGroup {...arguments_}>
      {['A', 'B', 'C'].map(value => <Expandable key={\`item-\${value}\`} header={\`Expandable \${value}\`} inAccordion={arguments_.accordion}>
          <Content accordion={arguments_.accordion} />
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
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const S=["Default","Accordion"];export{n as Accordion,a as Default,S as __namedExportsOrder,I as default};
//# sourceMappingURL=ExpandableGroup.stories.c9a9ff2b.js.map

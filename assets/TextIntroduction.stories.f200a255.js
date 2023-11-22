import{c as h}from"./index.cfa9e344.js";import{j as e,r as g,a as f}from"./jsx-runtime.54133100.js";import{L as x,c as b,H as y,b as q}from"./Link.53e442ec.js";import{P as _}from"./Paragraph.878bd808.js";import"./_commonjsHelpers.712cc82f.js";const i=({heading:a,subheading:c,description:n,callToAction:o,className:l,...u})=>{const m=["o-text-introduction",l],p=o&&e(x,{isLinks:!0,children:e(b,{children:g.exports.cloneElement(o,{type:"list"})})});return f("div",{className:h(m),...u,children:[e(y,{type:"1",children:a}),e(_,{isLead:!0,children:c}),n?e("p",{children:n}):null,p]})};try{i.displayName="TextIntroduction",i.__docgenInfo={description:`The text introduction is the standard page introduction pattern used across all pages that do not have a <a href="https://cfpb.github.io/design-system/patterns/heroes">hero</a> or <a href="https://cfpb.github.io/design-system/patterns/item-introductions">item introduction</a>. They introduce a page, or collection of pages, with a brief description of the goals of that section.

Source: https://cfpb.github.io/design-system/patterns/text-introductions`,displayName:"TextIntroduction",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},subheading:{defaultValue:null,description:"",name:"subheading",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},callToAction:{defaultValue:null,description:"",name:"callToAction",required:!1,type:{name:"Element"}}}}}catch{}const T="Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",v="Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",L=e(q,{href:"/",children:"Call-to-action link"}),S={heading:"Heading 1",description:v,subheading:T,callToAction:L},E={title:"Components (Verified)/Text introductions",component:i},t={name:"Standard text introduction",args:{...S}};var r,s,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Standard text introduction',
  args: {
    ...placeholders
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const H=["Standard"];export{t as Standard,H as __namedExportsOrder,E as default};
//# sourceMappingURL=TextIntroduction.stories.f200a255.js.map

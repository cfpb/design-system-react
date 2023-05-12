import{a as n,j as d}from"./jsx-runtime.556016cd.js";import"./_commonjsHelpers.712cc82f.js";const N=["a-radio"],q=["m-form-field m-form-field__radio"],i=({id:a,name:t,helperText:l,className:y,isDisabled:T=!1,isLarge:D=!1,label:H,inputRef:S})=>{const W=[...N,y].join(" "),j=[...q,D?"m-form-field__lg-target":""].join(" ");return n("div",{className:j,children:[d("input",{id:a,type:"radio",name:t!=null?t:a,className:W,ref:S,disabled:T}),n("label",{className:"a-label",htmlFor:a,children:[H,l?d("small",{className:"a-label_helper",children:l}):void 0]})]})};try{i.displayName="Radio",i.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}}}}}catch{}const E={component:i,argTypes:{isDisabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - Radio component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},e={args:{id:"testRadio",label:"Default Radio",name:"Radio select"}},r={args:{...e.args,id:"RadioWithHelper",helperText:"This is optional helper text for the radio"}},s={args:{...e.args,id:"LargeRadio",isLarge:!0}},o={args:{...e.args,id:"LargeRadioWithHelper",isLarge:!0,helperText:"This is optional helper text for the large radio"}};var p,c,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'testRadio',
    label: 'Default Radio',
    name: 'Radio select'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...DefaultRadio.args,
    id: 'RadioWithHelper',
    helperText: 'This is optional helper text for the radio'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,R,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...DefaultRadio.args,
    id: 'LargeRadio',
    isLarge: true
  }
}`,...(b=(R=s.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var L,_,x;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...DefaultRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText: 'This is optional helper text for the large radio'
  }
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const I=["DefaultRadio","RadioWithHelper","LargeRadio","LargeRadioWithHelper"];export{e as DefaultRadio,s as LargeRadio,o as LargeRadioWithHelper,r as RadioWithHelper,I as __namedExportsOrder,E as default};
//# sourceMappingURL=Radio.stories.5f3d6556.js.map

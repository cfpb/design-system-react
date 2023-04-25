import{a as l,j as n}from"./jsx-runtime.556016cd.js";import"./_commonjsHelpers.712cc82f.js";const N=["a-radio"],q=["m-form-field m-form-field__radio"],t=({id:o,name:x,helperText:i,className:y,isDisabled:T=!1,isLarge:D=!1,label:H,inputRef:S})=>{const W=[...N,y].join(" "),j=[...q,D?"m-form-field__lg-target":""].join(" ");return l("div",{className:j,children:[n("input",{id:o,type:"radio",name:x,className:W,ref:S,disabled:T}),l("label",{className:"a-label",htmlFor:o,children:[H,i?n("small",{className:"a-label_helper",children:i}):void 0]})]})};try{t.displayName="Radio",t.__docgenInfo={description:"",displayName:"Radio",props:{helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}}}}}catch{}const E={component:t,argTypes:{isDisabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:`
### CFPB DS - Radio component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},e={args:{id:"testRadio",label:"Default Radio",name:"Radio select"}},a={args:{...e.args,id:"RadioWithHelper",helperText:"This is optional helper text for the radio"}},r={args:{...e.args,id:"LargeRadio",isLarge:!0}},s={args:{...e.args,id:"LargeRadioWithHelper",isLarge:!0,helperText:"This is optional helper text for the large radio"}};var d,p,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'testRadio',
    label: 'Default Radio',
    name: 'Radio select'
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...DefaultRadio.args,
    id: 'RadioWithHelper',
    helperText: 'This is optional helper text for the radio'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,R;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...DefaultRadio.args,
    id: 'LargeRadio',
    isLarge: true
  }
}`,...(R=(h=r.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var b,L,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...DefaultRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText: 'This is optional helper text for the large radio'
  }
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const I=["DefaultRadio","RadioWithHelper","LargeRadio","LargeRadioWithHelper"];export{e as DefaultRadio,r as LargeRadio,s as LargeRadioWithHelper,a as RadioWithHelper,I as __namedExportsOrder,E as default};
//# sourceMappingURL=Radio.stories.8ed2fbf4.js.map

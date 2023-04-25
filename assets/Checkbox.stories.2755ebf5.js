import{a as n,j as c}from"./jsx-runtime.556016cd.js";import"./_commonjsHelpers.712cc82f.js";const N=["a-checkbox"],V=["m-form-field m-form-field__checkbox"],t=({id:s,name:L,helperText:o,className:H,isDisabled:y=!1,isLarge:W=!1,label:_,inputRef:T})=>{const D=[...N,H].join(" "),q=[...V,W?"m-form-field__lg-target":""].join(" ");return n("div",{className:q,children:[c("input",{id:s,type:"checkbox",name:L,className:D,ref:T,disabled:y}),n("label",{className:"a-label",htmlFor:s,children:[_,o?c("small",{className:"a-label_helper",children:o}):void 0]})]})};try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}}}}}catch{}const v={component:t,argTypes:{isDisabled:{control:"boolean"},isLarge:{control:"boolean"}}},e={args:{id:"default",name:"default",label:"Default checkbox"}},a={args:{...e.args,id:"CheckboxWithHelper",name:"CheckboxWithHelper",label:"Checkbox With Helper",helperText:"This is optional helper text for the checkbox"}},r={args:{...e.args,id:"LargeCheckbox",name:"LargeCheckbox",label:"Large Checkbox",isLarge:!0}},l={args:{...e.args,id:"LargeCheckboxWithHelper",name:"LargeCheckboxWithHelper",label:"Large Checkbox With Helper",isLarge:!0,helperText:"This is optional helper text for the large checkbox"}};var i,p,h;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'default',
    name: 'default',
    label: 'Default checkbox'
  }
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'CheckboxWithHelper',
    name: 'CheckboxWithHelper',
    label: 'Checkbox With Helper',
    helperText: 'This is optional helper text for the checkbox'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,g,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckbox',
    name: 'LargeCheckbox',
    label: 'Large Checkbox',
    isLarge: true
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,k,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckboxWithHelper',
    name: 'LargeCheckboxWithHelper',
    label: 'Large Checkbox With Helper',
    isLarge: true,
    helperText: 'This is optional helper text for the large checkbox'
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const E=["DefaultCheckbox","CheckboxWithHelper","LargeCheckbox","LargeCheckboxWithHelper"];export{a as CheckboxWithHelper,e as DefaultCheckbox,r as LargeCheckbox,l as LargeCheckboxWithHelper,E as __namedExportsOrder,v as default};
//# sourceMappingURL=Checkbox.stories.2755ebf5.js.map

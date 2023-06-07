import{r as h,a as u,j as b}from"./jsx-runtime.35eca381.js";import"./_commonjsHelpers.712cc82f.js";const M=["a-checkbox"],R=["m-form-field m-form-field__checkbox"],n=({id:a,label:q,className:D,defaultChecked:V=!1,helperText:c,inputRef:v,isDisabled:N=!1,isLarge:S=!1,name:o,onChange:r})=>{const[i,d]=h.exports.useState(V),j=h.exports.useMemo(()=>p=>{d(p.target.checked),r==null||r(p.target.checked)},[r,d]),E=[...M,D].join(" "),I=[...R,S?"m-form-field__lg-target":""].join(" ");return u("div",{className:I,children:[b("input",{id:a,type:"checkbox",checked:i,"aria-checked":i,"aria-labelledby":`${a}-label`,name:o!=null?o:a,className:E,ref:v,disabled:N,onChange:j}),u("label",{id:`${a}-label`,className:"a-label",htmlFor:a,children:[q,c?b("small",{className:"a-label_helper",children:c}):void 0]})]})};try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((value: boolean) => void) & ChangeEventHandler<HTMLInputElement>)"}}}}}catch{}const B={component:n,argTypes:{isDisabled:{control:"boolean"},isLarge:{control:"boolean"}}},e={args:{id:"default",name:"default",label:"Default checkbox"}},l={args:{...e.args,id:"CheckboxWithHelper",name:"CheckboxWithHelper",label:"Checkbox With Helper",helperText:"This is optional helper text for the checkbox"}},t={args:{...e.args,id:"LargeCheckbox",name:"LargeCheckbox",label:"Large Checkbox",isLarge:!0}},s={args:{...e.args,id:"LargeCheckboxWithHelper",name:"LargeCheckboxWithHelper",label:"Large Checkbox With Helper",isLarge:!0,helperText:"This is optional helper text for the large checkbox"}};var m,g,x;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'default',
    name: 'default',
    label: 'Default checkbox'
  }
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,k,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'CheckboxWithHelper',
    name: 'CheckboxWithHelper',
    label: 'Checkbox With Helper',
    helperText: 'This is optional helper text for the checkbox'
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,H,y;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckbox',
    name: 'LargeCheckbox',
    label: 'Large Checkbox',
    isLarge: true
  }
}`,...(y=(H=t.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var W,_,T;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckboxWithHelper',
    name: 'LargeCheckboxWithHelper',
    label: 'Large Checkbox With Helper',
    isLarge: true,
    helperText: 'This is optional helper text for the large checkbox'
  }
}`,...(T=(_=s.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const F=["DefaultCheckbox","CheckboxWithHelper","LargeCheckbox","LargeCheckboxWithHelper"];export{l as CheckboxWithHelper,e as DefaultCheckbox,t as LargeCheckbox,s as LargeCheckboxWithHelper,F as __namedExportsOrder,B as default};
//# sourceMappingURL=Checkbox.stories.1b9b4a7f.js.map

import{r as h,a as u,j as b}from"./jsx-runtime.3c5b5edf.js";const I=["a-checkbox"],O=["m-form-field m-form-field__checkbox"],n=({id:a,label:D,className:q,defaultChecked:S=!1,helperText:c,inputRef:V,isDisabled:v=!1,isLarge:j=!1,name:o,onChange:s})=>{const[i,d]=h.exports.useState(S),N=h.exports.useMemo(()=>p=>{d(p.target.checked),s==null||s(p.target.checked)},[s,d]),E=[...I,q].join(" "),M=[...O,j?"m-form-field__lg-target":""].join(" ");return u("div",{className:M,children:[b("input",{id:a,type:"checkbox",checked:i,"aria-checked":i,"aria-labelledby":`${a}-label`,name:o!=null?o:a,className:E,ref:V,disabled:v,onChange:N}),u("label",{id:`${a}-label`,className:"a-label",htmlFor:a,children:[D,c?b("small",{className:"a-label_helper",children:c}):void 0]})]})};try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((value: boolean) => void) & ChangeEventHandler<HTMLInputElement>)"}}}}}catch{}const R={component:n,argTypes:{isDisabled:{control:"boolean"},isLarge:{control:"boolean"}}},e={args:{id:"default",name:"default",label:"Default checkbox"}},r={args:{...e.args,id:"CheckboxWithHelper",name:"CheckboxWithHelper",label:"Checkbox With Helper",helperText:"This is optional helper text for the checkbox"}},l={args:{...e.args,id:"LargeCheckbox",name:"LargeCheckbox",label:"Large Checkbox",isLarge:!0}},t={args:{...e.args,id:"LargeCheckboxWithHelper",name:"LargeCheckboxWithHelper",label:"Large Checkbox With Helper",isLarge:!0,helperText:"This is optional helper text for the large checkbox"}};var m,g,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'default',
    name: 'default',
    label: 'Default checkbox'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,k,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'CheckboxWithHelper',
    name: 'CheckboxWithHelper',
    label: 'Checkbox With Helper',
    helperText: 'This is optional helper text for the checkbox'
  }
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,y,H;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckbox',
    name: 'LargeCheckbox',
    label: 'Large Checkbox',
    isLarge: true
  }
}`,...(H=(y=l.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var _,W,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckboxWithHelper',
    name: 'LargeCheckboxWithHelper',
    label: 'Large Checkbox With Helper',
    isLarge: true,
    helperText: 'This is optional helper text for the large checkbox'
  }
}`,...(T=(W=t.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const $=["DefaultCheckbox","CheckboxWithHelper","LargeCheckbox","LargeCheckboxWithHelper"],B=Object.freeze(Object.defineProperty({__proto__:null,default:R,DefaultCheckbox:e,CheckboxWithHelper:r,LargeCheckbox:l,LargeCheckboxWithHelper:t,__namedExportsOrder:$},Symbol.toStringTag,{value:"Module"}));export{B as C,e as D,l as L,r as a,n as b,t as c};
//# sourceMappingURL=Checkbox.stories.f972a3fe.js.map

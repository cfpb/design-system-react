import{c as t}from"./index.cfa9e344.js";import{r as N,a as n,j as i}from"./jsx-runtime.54133100.js";const h=["m-form-field m-form-field__checkbox"],c=({id:e,label:u,className:d,inputClassName:m,checked:s=!1,helperText:r,inputRef:o,disabled:p=!1,isLarge:f=!1,name:l,onChange:a,...b})=>{const y=N.exports.useCallback(x=>{a==null||a(x)},[a]),_=[...h,f?"m-form-field__lg-target":"",d];return n("div",{className:t(_),...b,children:[i("input",{id:e,type:"checkbox",checked:s,"aria-checked":s,"aria-labelledby":`${e}-label`,name:l!=null?l:e,className:t(["a-checkbox",m]),ref:o,disabled:p,onChange:y}),n("label",{id:`${e}-label`,className:"a-label",htmlFor:e,children:[u,r?i("small",{className:"a-label_helper",children:r}):void 0]})]})};try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},inputClassName:{defaultValue:null,description:"",name:"inputClassName",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}export{c as C};
//# sourceMappingURL=Checkbox.86ef18cf.js.map

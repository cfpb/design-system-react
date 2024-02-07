import{j as a,c as r}from"./index.7eca609e.js";import{r as q}from"./index.ca1bfdbe.js";const u=({children:e,className:l,...t})=>{if(!e)return null;const s=["a-label_helper",l];return a.exports.jsxs("small",{className:r(s),...t,children:["(",e,")"]})};try{u.displayName="HelperText",u.__docgenInfo={description:"A utility component to consistently display helper text for input elements",displayName:"HelperText",props:{}}}catch{}const V=["a-label"],p=({children:e,inline:l=!1,htmlFor:t,className:s,...i})=>{const o=[...[...V,l?"":"a-label__heading"],s];return e?a.exports.jsx("label",{...i,className:r(o),htmlFor:t,children:e}):null};try{p.displayName="Label",p.__docgenInfo={description:"",displayName:"Label",props:{inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const C=["m-form-field m-form-field__checkbox"],L={success:"m-form-field__checkbox__success",warning:"m-form-field__checkbox__warning",error:"m-form-field__checkbox__error"},f=({id:e,label:l,className:t,inputClassName:s,labelClassName:i="",checked:c=!1,helperText:o,inputRef:b,disabled:h=!1,isLarge:_=!1,labelInline:x=!0,name:d,onChange:n,status:y,...g})=>{var m;const k=q.exports.useCallback(N=>{n==null||n(N)},[n]),v=[...C,_?"m-form-field__lg-target":"",(m=L[y])!=null?m:"",t];return a.exports.jsxs("div",{className:r(v),children:[a.exports.jsx("input",{id:e,type:"checkbox",checked:c,"aria-checked":c,"aria-labelledby":`${e}-label`,name:d!=null?d:e,ref:b,disabled:h,onChange:k,...g,className:r(["a-checkbox",s])}),a.exports.jsxs(p,{id:`${e}-label`,className:i,htmlFor:e,inline:x,children:[l,a.exports.jsx(u,{children:o})]})]})};try{f.displayName="Checkbox",f.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"Unique identifier for this checkbox",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Text that appears next to the checkbox for clarification of purpose",name:"label",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes applied to the checkbox's wrapper element",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Is checkboxed checked?",name:"checked",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"Additional text to further clarify purpose of checkbox",name:"helperText",required:!1,type:{name:"ReactNode"}},inputClassName:{defaultValue:null,description:"Additional CSS classes that will be applied to checkbox input element",name:"inputClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:{value:""},description:"Additional CSS classes that will be applied to checkbox label element",name:"labelClassName",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"React Ref to be enable direct access and control of the input element",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}},isLarge:{defaultValue:{value:"false"},description:'Apply the "Large" styles for this element?',name:"isLarge",required:!1,type:{name:"boolean"}},labelInline:{defaultValue:{value:"true"},description:"A name for this checkbox's value that can be referenced in javascript",name:"labelInline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Removes/Adds 'label__heading' class to the Label *",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Is this checkbox disabled?",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"An event handler function that will be called when the checkbox's value is changed",name:"onChange",required:!1,type:{name:"(((event: ChangeEvent<HTMLInputElement>) => void) & ChangeEventHandler<HTMLInputElement>)"}},status:{defaultValue:null,description:"Border status",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'}]}}}}}catch{}export{f as C,u as H,p as L};

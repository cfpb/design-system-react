import{I as x}from"./Icon.2f1b4faa.js";import{a as l,j as r}from"./jsx-runtime.556016cd.js";var t=(e=>(e.success="__success",e.warning="__warning",e.error="__error",e[""]="",e))(t||{});const y={success:"approved",warning:"warning",error:"error"},g=["a-text-input"],I={default:[],full:["a-text-input__full"]};function n({id:e,name:s,type:u,className:i,width:d="default",isDisabled:p=!1,inputRef:o,inputBorderColor:m,notificationType:a="",textNotification:c,...f}){const _=[...g,...I[d]],v=[i,`a-text-input${t[a]}`,..._].join(" ");return l("div",{className:`m-form-field m-form-field${t[a]}`,children:[r("input",{"data-testid":"textInput",className:v,style:{borderColor:`${m}`},disabled:p,id:e,name:s,type:u,ref:o,...f}),a&&l("div",{className:`a-form-alert a-form-alert${t[a]}`,id:e,role:"alert",children:[r(x,{name:y[a],alt:a,withBg:!0}),r("span",{className:"a-form-alert_text",children:c})]})]})}try{n.displayName="TextInput",n.__docgenInfo={description:"",displayName:"TextInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"default"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"TextInputReference"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},inputBorderColor:{defaultValue:null,description:"",name:"inputBorderColor",required:!1,type:{name:"string"}},textNotification:{defaultValue:null,description:"",name:"textNotification",required:!1,type:{name:"string"}},notificationType:{defaultValue:{value:""},description:"",name:"notificationType",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}export{n as T};
//# sourceMappingURL=TextInput.5e2be0b3.js.map

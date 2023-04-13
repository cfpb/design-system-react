var _=Object.defineProperty;var r=(e,n)=>_(e,"name",{value:n,configurable:!0});import{c as d}from"./index.cfa9e344.js";import{r as b,b as u,j as a}from"./jsx-runtime.f64634e7.js";import{I as h}from"./Icon.e79c8667.js";import{L as N}from"./Label.5814e198.js";import{T as x}from"./TextInput.e92563a4.js";const p=r(()=>null,"noOp"),f=r(({page:e,pageCount:n,onClickPrev:t=p,onClickNext:i=p,onClickGo:s=p,prevLabel:l="Previous",nextLabel:o="Next"})=>{const[m,c]=b.exports.useState(e);return b.exports.useEffect(()=>c(e),[e]),u("nav",{className:"m-pagination",role:"navigation","aria-label":"Pagination",children:[a(g,{iconName:"left",onClick:t,label:l,isPrev:!0}),a(g,{iconName:"right",onClick:i,label:o,isNext:!0}),u("form",{className:"m-pagination_form",action:"#pagination_content",onSubmit:v=>{v.preventDefault(),m!=e&&s(m-1)},children:[a(P,{page:m,pageCount:n,onChange:c}),a(y,{})]})]})},"Pagination"),y=r(()=>a("button",{className:"a-btn a-btn__link m-pagination_btn-submit",id:"m-pagination_btn-submit-default",type:"submit",children:"Go"}),"PaginationSubmitBtn"),g=r(({iconName:e,onClick:n,label:t,isPrev:i=!1,isNext:s=!1})=>{const l=["a-btn"],o=["a-btn_icon"];return i?(l.push("m-pagination_btn-prev"),o.push("a-btn_icon__on-left")):(l.push("m-pagination_btn-next"),o.push("a-btn_icon__on-right")),u("button",{type:"button",className:d(l),onClick:n,children:[s?t:null,a("span",{className:d(o),children:e?a(h,{name:e}):null}),i?t:null]})},"PaginationBtn"),P=r(({page:e,pageCount:n,onChange:t})=>u(N,{className:"m-pagination_label",htmlFor:"m-pagination_current-page",inline:!0,children:["Page",u("span",{className:"u-visually-hidden",children:["number ",e," out"]}),a(x,{className:"m-pagination_current-page",id:"m-pagination_current-page-default",name:"page",type:"number",min:"1",max:n,pattern:"[0-9]*",inputMode:"numeric",defaultValue:e,value:e,onChange:i=>t(Number.parseInt(i.target.value))}),"of ",n]}),"PaginationInput");try{f.displayName="Pagination",f.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:null,description:"Currently displayed page number",name:"page",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"Total number of available pages",name:"pageCount",required:!0,type:{name:"number"}},onClickPrev:{defaultValue:null,description:"Event handler for `Previous` button",name:"onClickPrev",required:!1,type:{name:"(() => void)"}},onClickNext:{defaultValue:{value:"() => null"},description:"Event handler for `Next` button",name:"onClickNext",required:!1,type:{name:"(() => void)"}},onClickGo:{defaultValue:{value:"() => null"},description:"Event handler for `Go` button",name:"onClickGo",required:!1,type:{name:"((argument?: any) => void)"}},prevLabel:{defaultValue:null,description:"Text label for Previous button",name:"prevLabel",required:!1,type:{name:"string"}},nextLabel:{defaultValue:{value:"Next"},description:"Text label for Next button",name:"nextLabel",required:!1,type:{name:"string"}}}}}catch{}export{f as P};
//# sourceMappingURL=Pagination.a8232935.js.map

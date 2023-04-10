var y=Object.defineProperty;var a=(e,t)=>y(e,"name",{value:t,configurable:!0});import{c as g,I as v}from"./Icon.efc03920.js";import{r as b,b as s,j as n}from"./jsx-runtime.0d0e3881.js";import{L as P}from"./Label.011e2f91.js";import{T as C}from"./TextInput.ec38e9d2.js";import"./iframe.3abd4ff5.js";const c=a(()=>null,"noOp"),u=a(({page:e,pageCount:t,onClickPrev:o=c,onClickNext:i=c,onClickGo:p=c,prevLabel:r="Previous",nextLabel:l="Next"})=>{const[m,d]=b.exports.useState(e);return b.exports.useEffect(()=>d(e),[e]),s("nav",{className:"m-pagination",role:"navigation","aria-label":"Pagination",children:[n(f,{iconName:"left",onClick:o,label:r,isPrev:!0}),n(f,{iconName:"right",onClick:i,label:l,isNext:!0}),s("form",{className:"m-pagination_form",action:"#pagination_content",onSubmit:_=>{_.preventDefault(),m!=e&&p(m-1)},children:[n(x,{page:m,pageCount:t,onChange:d}),n(h,{})]})]})},"Pagination"),h=a(()=>n("button",{className:"a-btn a-btn__link m-pagination_btn-submit",id:"m-pagination_btn-submit-default",type:"submit",children:"Go"}),"PaginationSubmitBtn"),f=a(({iconName:e,onClick:t,label:o,isPrev:i=!1,isNext:p=!1})=>{const r=["a-btn"],l=["a-btn_icon"];return i?(r.push("m-pagination_btn-prev"),l.push("a-btn_icon__on-left")):(r.push("m-pagination_btn-next"),l.push("a-btn_icon__on-right")),s("button",{type:"button",className:g(r),onClick:t,children:[p?o:null,n("span",{className:g(l),children:e?n(v,{name:e}):null}),i?o:null]})},"PaginationBtn"),x=a(({page:e,pageCount:t,onChange:o})=>s(P,{className:"m-pagination_label",htmlFor:"m-pagination_current-page",inline:!0,children:["Page",s("span",{className:"u-visually-hidden",children:["number ",e," out"]}),n(C,{className:"m-pagination_current-page",id:"m-pagination_current-page-default",name:"page",type:"number",min:"1",max:t,pattern:"[0-9]*",inputMode:"numeric",defaultValue:e,value:e,onChange:i=>o(Number.parseInt(i.target.value))}),"of ",t]}),"PaginationInput");try{u.displayName="Pagination",u.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:null,description:"Currently displayed page number",name:"page",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"Total number of available pages",name:"pageCount",required:!0,type:{name:"number"}},onClickPrev:{defaultValue:null,description:"Event handler for `Previous` button",name:"onClickPrev",required:!1,type:{name:"(() => void)"}},onClickNext:{defaultValue:{value:"() => null"},description:"Event handler for `Next` button",name:"onClickNext",required:!1,type:{name:"(() => void)"}},onClickGo:{defaultValue:{value:"() => null"},description:"Event handler for `Go` button",name:"onClickGo",required:!1,type:{name:"((argument?: any) => void)"}},prevLabel:{defaultValue:null,description:"Text label for Previous button",name:"prevLabel",required:!1,type:{name:"string"}},nextLabel:{defaultValue:{value:"Next"},description:"Text label for Next button",name:"nextLabel",required:!1,type:{name:"string"}}}}}catch{}const D={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = arguments_ => (
  <Pagination {...arguments_} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
Default.args = {
  page: 4,
  pageCount: 40
};
`,locationsMap:{default:{startLoc:{col:52,line:9},endLoc:{col:1,line:11},startBody:{col:52,line:9},endBody:{col:1,line:11}}}}},title:"Components/Pagination",component:u},N=a(e=>n(u,{...e}),"Template"),k=N.bind({});k.args={page:4,pageCount:40};const E=["Default"];export{k as Default,E as __namedExportsOrder,D as default};
//# sourceMappingURL=Pagination.stories.96b9a32e.js.map

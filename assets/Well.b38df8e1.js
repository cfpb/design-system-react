import{a as u,j as a,r as y,F as pe}from"./jsx-runtime.54133100.js";import{c as m}from"./index.cfa9e344.js";import{I as q}from"./Icon.dd0c7c9b.js";import{L as C,a as j,b as v,c as me}from"./TextIntroduction.ff1fa05f.js";import{H as fe}from"./Checkbox.fe2d0150.js";import{L as ge}from"./Dropdown.22431321.js";const I=({isLarge:e=!1,children:n})=>{const t=["a-tagline"];return e&&t.push("a-tagline__large"),u("div",{className:m(t),children:[a("span",{className:"u-usa-flag"}),a("div",{className:"a-tagline_text",children:n})]})};try{I.displayName="Tagline",I.__docgenInfo={description:"",displayName:"Tagline",props:{isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}}}}}catch{}const he=({phoneNumber:e})=>{if(/\d-\d{3}-\d{3}-\d{4}/.test(e)){const[,n,...t]=e.split("-");return u("a",{href:`tel:+${e}`,children:["(",n,") ",t.join("-")]})}return a("a",{href:`tel:+${e}`,children:e})},A=({isHorizontal:e=!0,tagline:n="This is a tagline",phoneNumber:t,links:l=[],className:s,...r})=>{const i=["m-global-eyebrow"],o=["wrapper"],c=["m-list"];let d=null;return e?(i.push("m-global-eyebrow__horizontal"),o.push("wrapper__match-content"),c.push("m-list__horizontal m-global-eyebrow_languages"),d=a(I,{children:n})):i.push("m-global-eyebrow__list"),s&&i.push(s),a("div",{className:m(i),...r,children:u("div",{className:m(o),children:[d,u("div",{className:"m-global-eyebrow_actions",children:[l.length>0&&a("ul",{className:m(c),children:l.map(p=>a("li",{className:"m-list_item",children:p},p.key))}),t?a("span",{className:"m-global-eyebrow_phone",children:a(he,{phoneNumber:t})}):null]})]})})};try{A.displayName="Banner",A.__docgenInfo={description:"CFGov's Global Eyebrow component",displayName:"Banner",props:{isHorizontal:{defaultValue:{value:"true"},description:"",name:"isHorizontal",required:!1,type:{name:"boolean"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"Element[]"}},phoneNumber:{defaultValue:null,description:"",name:"phoneNumber",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:"This is a tagline"},description:"",name:"tagline",required:!1,type:{name:"string | Element"}}}}}catch{}const _e={en:{label:"English",code:"en",href:"/en/"},es:{label:"Espa\xF1ol",code:"es",href:"/es/"},zh:{label:"\u4E2D\u6587",code:"zh"},vi:{label:"Ti\u1EBFng Vi\u1EC7t",code:"vi"},ko:{label:"\uD55C\uAD6D\uC5B4",code:"ko"},tl:{label:"Tagalog",code:"tl"},ru:{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",code:"ru"},ar:{label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",code:"ar"},ht:{label:"Krey\xF2l Ayisyen",code:"ht"}},Ge=["en","es","zh","vi","ko","tl","ru","ar","ht"],D=({code:e,href:n,label:t,languageMap:l=_e,...s})=>{const r=l[e];let i=e,o=e,c=t,d=n;return r&&(i=r.code,o=r.code,c=t!=null?t:r.label,d=r.href||n),a("a",{href:d!=null?d:`/language/${i}/`,hrefLang:i,lang:o,...s,children:c})};try{D.displayName="LanguageLink",D.__docgenInfo={description:"CFGov language link",displayName:"LanguageLink",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},languageMap:{defaultValue:{value:`{
  en: { label: 'English', code: 'en', href: '/en/' },
  es: { label: 'Espa\xF1ol', code: 'es', href: '/es/' },
  zh: { label: '\u4E2D\u6587', code: 'zh' },
  vi: { label: 'Ti\u1EBFng Vi\u1EC7t', code: 'vi' },
  ko: { label: '\uD55C\uAD6D\uC5B4', code: 'ko' },
  tl: { label: 'Tagalog', code: 'tl' },
  ru: { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', code: 'ru' },
  ar: { label: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', code: 'ar' },
  ht: { label: 'Krey\xF2l Ayisyen', code: 'ht' }
}`},description:"",name:"languageMap",required:!1,type:{name:"LanguageDefinition"}}}}}catch{}const K=({children:e,...n})=>e?a("div",{className:"m-btn-group",...n,children:e}):null;try{K.displayName="ButtonGroup",K.__docgenInfo={description:"Display a collection of related Buttons",displayName:"ButtonGroup",props:{}}}catch{}function Y({className:e="",...n}){return a("div",{className:`content_line ${e}`,...n})}try{Y.displayName="Divider",Y.__docgenInfo={description:"",displayName:"Divider",props:{}}}catch{}const ye=()=>u("a",{className:"a-btn a-btn__secondary o-footer_top-button","data-gtm_ignore":"true","data-js-hook":"behavior_return-to-top",href:"#",children:["Back to top",a(q,{name:"arrow-up"})]});const be=()=>a("div",{className:"o-footer-post",children:u("div",{className:"a-tagline a-tagline__large","aria-label":"Official website of the United States government",children:[a("span",{className:"u-usa-flag"}),u("div",{className:"a-tagline_text",children:["An official website of the\xA0",a("span",{className:"u-nowrap",children:"United States government"})]})]})}),Z=e=>e.length===0,x=({children:e})=>Z(e)?null:a(C,{className:"o-footer_nav-list",children:a(j,{className:"m-list_link",children:e})}),T=({children:e})=>Z(e)?null:a("div",{className:"block block__flush-top block__flush-bottom block__padded-top",children:a("div",{className:"m-social-media m-social-media__follow",children:a(C,{className:"m-social-media_icons",isUnstyled:!0,isHorizontal:!0,children:a(j,{className:"m-social-media_icon",children:e})})})}),L=({children:e})=>Z(e)?null:a("div",{className:"o-footer_col",children:a(C,{className:"o-footer_list",children:a(j,{className:"m-list_link",children:e})})});try{x.displayName="NavLinks",x.__docgenInfo={description:"Wrapper for Footer Navigation Links",displayName:"NavLinks",props:{}}}catch{}try{T.displayName="SocialLinks",T.__docgenInfo={description:"Wrapper for Social Navigation Links",displayName:"SocialLinks",props:{}}}catch{}try{L.displayName="FooterLinksColumn",L.__docgenInfo={description:"Wrapper for column of Footer Links",displayName:"FooterLinksColumn",props:{}}}catch{}function z({navLinks:e=[],socialLinks:n=[],linksCol1:t=[],linksCol2:l=[],linksCol3:s=[],className:r,...i}){return a("footer",{className:m(["o-footer",r]),"data-js-hook":"state_atomic_init",...i,children:u("div",{className:"wrapper wrapper__match-content",children:[u("div",{className:"o-footer_pre",children:[a(ye,{}),a(x,{children:e}),a(T,{children:n})]}),u("div",{className:"o-footer-middle-left",children:[a(L,{children:t}),a(L,{children:l})]}),a("div",{className:"o-footer-middle-right",children:a(L,{children:s})}),a(be,{})]})})}try{z.displayName="Footer",z.__docgenInfo={description:"Simply define the anchor elements for each section to compose your Footer",displayName:"Footer",props:{navLinks:{defaultValue:{value:"[]"},description:"",name:"navLinks",required:!1,type:{name:"Element[]"}},socialLinks:{defaultValue:{value:"[]"},description:"",name:"socialLinks",required:!1,type:{name:"Element[]"}},linksCol1:{defaultValue:{value:"[]"},description:"",name:"linksCol1",required:!1,type:{name:"Element[]"}},linksCol2:{defaultValue:{value:"[]"},description:"",name:"linksCol2",required:!1,type:{name:"Element[]"}},linksCol3:{defaultValue:{value:"[]"},description:"",name:"linksCol3",required:!1,type:{name:"Element[]"}}}}}catch{}var U=(e=>(e[e.Full=12]="Full",e[e.ThreeQuarters=9]="ThreeQuarters",e[e.TwoThirds=8]="TwoThirds",e[e.Half=6]="Half",e[e.Third=4]="Third",e[e.Quarter=3]="Quarter",e[e.Single=1]="Single",e))(U||{});function S({width:e=1,children:n,className:t="",...l}){const s=["col",`col-${e}`,t];return a("div",{className:m(s),role:"gridcell",...l,children:n})}try{S.displayName="GridColumn",S.__docgenInfo={description:"",displayName:"GridColumn",props:{width:{defaultValue:{value:"GridColWidth.Single"},description:"",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},others:{defaultValue:null,description:"",name:"others",required:!1,type:{name:"unknown[]"}}}}}catch{}function E({children:e,className:n,...t}){return a("div",{className:m(["row",n]),role:"row",...t,children:e})}try{E.displayName="GridRow",E.__docgenInfo={description:"",displayName:"GridRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function P({children:e,width:n=U.Full,demo:t,center:l,className:s,...r}){const i=[`grid cols-${n}`,s];return t&&i.push("demo"),l&&i.push("centered"),a("div",{className:m(i),role:"grid",...r,children:e})}try{P.displayName="GridWrapper",P.__docgenInfo={description:"",displayName:"GridWrapper",props:{width:{defaultValue:{value:"GridColWidth.Full"},description:"",name:"width",required:!1,type:{name:"number"}},demo:{defaultValue:null,description:"",name:"demo",required:!1,type:{name:"boolean"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Me={Column:S,Row:E,Width:U,Wrapper:P};try{Grid.displayName="Grid",Grid.__docgenInfo={description:`CFPB Grid
https://cfpb.github.io/design-system/foundation/grid`,displayName:"Grid",props:{}}}catch{}const B=({image:e,altText:n})=>e?a("div",{className:"m-hero_image-wrapper",children:a("img",{src:e,alt:n,className:"m-hero_image"})}):null;try{B.displayName="HeroImage",B.__docgenInfo={description:"",displayName:"HeroImage",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},altText:{defaultValue:null,description:"",name:"altText",required:!1,type:{name:"string"}}}}}catch{}const R=(e,n)=>{const t=y.exports.useRef(null);return y.exports.useEffect(()=>{var l;if(!n||!e||!t.current){(l=t.current)==null||l.setAttribute("style","");return}t.current.setAttribute("style",`background-image: url(${e});
       background-image: -webkit-image-set(
        url(${e}) 1x,
        url(${e}) 2x
      );
      background-image: image-set(
        url(${e}) 1x,
        url(${e}) 2x
      );`)},[t,e,n]),t};try{R.displayName="useBackgroundImage",R.__docgenInfo={description:"Add inline styles which apply a background-image to the referenced <div>",displayName:"useBackgroundImage",props:{}}}catch{}function J({backgroundColor:e,heading:n,headingLevel:t="h1",image:l,imageAltText:s="hero image",imageIsPhoto:r,is5050:i,isJumbo:o,isKnockout:c,subheading:d,subheadingLevel:p,textColor:f,className:g,...h}){const b=R(l,r||o||i),ce={backgroundColor:e},de={color:f},V=["m-hero",g];return o&&V.push("m-hero__jumbo"),i&&V.push("m-hero__50-50"),c&&V.push("m-hero__knockout"),r&&V.push("m-hero__overlay"),a("div",{className:m(V),style:ce,...h,children:u("div",{className:"m-hero_wrapper",ref:b,children:[u("div",{className:"m-hero_text",style:de,children:[a("p",{className:`m-hero_heading ${t}`,children:n}),a("p",{className:`m-hero_subhead ${p!=null?p:""}`,children:d})]}),a(B,{image:l,altText:s})]})})}try{J.displayName="Hero",J.__docgenInfo={description:"https://cfpb.github.io/design-system/patterns/heroes",displayName:"Hero",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"h1"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAltText:{defaultValue:{value:"hero image"},description:"",name:"imageAltText",required:!1,type:{name:"string"}},imageIsPhoto:{defaultValue:null,description:"",name:"imageIsPhoto",required:!1,type:{name:"boolean"}},is5050:{defaultValue:null,description:"",name:"is5050",required:!1,type:{name:"boolean"}},isJumbo:{defaultValue:null,description:"",name:"isJumbo",required:!1,type:{name:"boolean"}},isKnockout:{defaultValue:null,description:"",name:"isKnockout",required:!1,type:{name:"boolean"}},subheading:{defaultValue:null,description:"",name:"subheading",required:!1,type:{name:"string"}},subheadingLevel:{defaultValue:null,description:"",name:"subheadingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}}}}}catch{}const X=({children:e,flushBottom:n,flushTopOnSmall:t,flushAllOnSmall:l,narrow:s,...r})=>{const i=["content_main"];return n&&i.push("content__flush-bottom"),t&&i.push("content__flush-top-on-small-bottom"),l&&i.push("content__flush-all-on-small"),s&&i.push("content_main__narrow"),a("div",{className:m(i),...r,children:e})};try{X.displayName="LayoutContent",X.__docgenInfo={description:"",displayName:"LayoutContent",props:{flushAllOnSmall:{defaultValue:null,description:"",name:"flushAllOnSmall",required:!1,type:{name:"boolean"}},flushBottom:{defaultValue:null,description:"",name:"flushBottom",required:!1,type:{name:"boolean"}},flushTopOnSmall:{defaultValue:null,description:"",name:"flushTopOnSmall",required:!1,type:{name:"boolean"}},narrow:{defaultValue:null,description:"",name:"narrow",required:!1,type:{name:"boolean"}}}}}catch{}const $=({children:e,classes:n="",id:t="main",layout:l="2-1",bleedbar:s})=>{const r=["content",`content__${l}`,n];return s&&r.push("content__bleedbar"),a("main",{id:t,className:m(r),role:"main",children:e})};try{$.displayName="LayoutMain",$.__docgenInfo={description:"",displayName:"LayoutMain",props:{bleedbar:{defaultValue:null,description:"",name:"bleedbar",required:!1,type:{name:"boolean"}},classes:{defaultValue:{value:""},description:"",name:"classes",required:!1,type:{name:"string"}},id:{defaultValue:{value:"main"},description:"",name:"id",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"2-1"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"1-3"'},{value:'"2-1"'}]}}}}}catch{}const ee=({children:e,flushBottom:n,flushTopOnSmall:t,flushAllOnSmall:l,...s})=>{const r=["sidebar","content_sidebar","o-sidebar-content"];return n&&r.push("content__flush-bottom"),t&&r.push("content__flush-top-on-small-bottom"),l&&r.push("content__flush-all-on-small"),a("aside",{className:m(r),...s,children:e})};try{ee.displayName="LayoutSidebar",ee.__docgenInfo={description:"",displayName:"LayoutSidebar",props:{flushBottom:{defaultValue:null,description:"",name:"flushBottom",required:!1,type:{name:"boolean"}},flushTopOnSmall:{defaultValue:null,description:"",name:"flushTopOnSmall",required:!1,type:{name:"boolean"}},flushAllOnSmall:{defaultValue:null,description:"",name:"flushAllOnSmall",required:!1,type:{name:"boolean"}}}}}catch{}const ae=({children:e,...n})=>a("div",{className:"content_wrapper",...n,children:e});try{ae.displayName="LayoutWrapper",ae.__docgenInfo={description:"",displayName:"LayoutWrapper",props:{}}}catch{}const ve="data:image/png;base64,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";function Ne(){return a(v,{href:"/",title:"Home","aria-label":"Home",className:"o-header_logo",children:a("img",{className:"o-header_logo-img",src:ve,alt:"CFPB Logo"})})}const Ve=({elements:e})=>e!=null&&e.length?a("div",{className:"links",children:e}):null,Le=({user:e})=>e?e.name?u("div",{className:"user-actions",children:[a("span",{className:"nav-item username",children:e.name}),a(v,{href:e.logoutHref,className:"nav-item logout",children:"LOGOUT"})]}):a("div",{className:"user-actions",children:a(v,{href:e.loginHref,className:"nav-item login",children:"LOGIN"})}):null;function F({links:e,user:n}){return a("div",{className:"o-header_content",children:u("div",{className:"navbar wrapper wrapper__match-content",children:[a(Ne,{}),u("div",{className:"nav-items",children:[a(Ve,{elements:e}),a(Le,{user:n})]})]})})}const Oe=[a(v,{href:"/",className:"nav-item",children:"HOME"},"home"),a(v,{href:"/filing",className:"nav-item selected",children:"FILING HOME"},"filing"),a(v,{href:"/datasets",className:"nav-item",children:"DATASETS"},"dataset")];try{F.displayName="Navbar",F.__docgenInfo={description:"",displayName:"Navbar",props:{links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"Element[]"}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}}}}}catch{}var w=(e=>(e[""]="",e.error="__error",e.success="__success",e.warning="__warning",e))(w||{});const ke={"":"information",error:"error",success:"approved",warning:"warning"},W=({type:e="",message:n,isVisible:t,...l})=>!t||!n?null:["error","success","warning",""].includes(e)?u("div",{className:`a-form-alert a-form-alert${w[e]}`,role:"alert",...l,children:[a(q,{name:ke[e],alt:e,withBg:!0}),a("span",{className:"a-form-alert_text",children:n})]}):u("p",{children:["[Error] Unsupported field-level notification type provided: ",e]});try{W.displayName="NotificationFieldLevel",W.__docgenInfo={description:"",displayName:"NotificationFieldLevel",props:{type:{defaultValue:{value:""},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"ReactNode"}},isVisible:{defaultValue:null,description:"",name:"isVisible",required:!0,type:{name:"boolean"}}}}}catch{}const Q=({href:e,label:n,isExternal:t})=>a("li",{className:"m-list_item",children:u("a",{className:"m-list_link",href:e,children:[n," ",t?a(q,{name:"external-link"}):null]})});try{Q.displayName="NotificationLink",Q.__docgenInfo={description:"",displayName:"NotificationLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const qe={error:{name:"error",withBg:!0},info:{name:"information",withBg:!0},loading:{name:"updating",withBg:!1},success:{name:"approved",withBg:!0},warning:{name:"warning",withBg:!0}},H=({children:e,className:n,headingLevel:t="h4",links:l,message:s,type:r="info",isVisible:i=!0,isFieldLevel:o=!1,showIcon:c=!0,...d})=>{if(!i)return null;if(o)return a(W,{type:r,message:s,isVisible:i,...d});const p=m("m-notification","m-notification__visible",{"m-notification__success":r==="success","m-notification__warning":r==="warning","m-notification__error":r==="error","m-notification__info":r==="info"},n);return u("div",{className:p,...d,children:[c?a(q,{...qe[r]}):null,u("div",{className:"m-notification_content",children:[s?a("p",{className:`${t} m-notification_message`,children:s}):null,e?a("p",{className:"m-notification_explanation",children:e}):null,l&&l.length>0?a("ul",{className:"m-list m-list__links",children:l.map(f=>y.exports.createElement(Q,{...f,key:f.href}))}):null]})]})};try{H.displayName="Notification",H.__docgenInfo={description:`CFPB DS Notification

https://cfpb.github.io/design-system/components/notifications`,displayName:"Notification",props:{type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"loading"'}]}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"h4"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"NotificationLinkProperties[]"}},isVisible:{defaultValue:{value:"true"},description:"",name:"isVisible",required:!1,type:{name:"boolean"}},isFieldLevel:{defaultValue:{value:"false"},description:"",name:"isFieldLevel",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}}}}}catch{}function ne({links:e,user:n}){return u("div",{className:"o-header",children:[a(A,{tagline:"An official website of the United States government"}),a(F,{links:e,user:n})]})}try{ne.displayName="PageHeader",ne.__docgenInfo={description:"",displayName:"PageHeader",props:{links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"Element[]"}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}}}}}catch{}const N=()=>null,k=1,ue=20,we=()=>a("button",{className:"a-btn a-btn__link m-pagination_btn-submit",id:"m-pagination_btn-submit-default",type:"submit",children:"Go"}),te=({iconName:e,onClick:n,label:t,isPrevious:l=!1,isNext:s=!1,isDisabled:r=!1})=>{const i=["a-btn"],o=["a-btn_icon"];return l?(i.push("m-pagination_btn-prev"),o.push("a-btn_icon__on-left")):(i.push("m-pagination_btn-next"),o.push("a-btn_icon__on-right")),r&&i.push("a-btn__disabled"),u("button",{type:"button",className:m(i),onClick:n,children:[s?t:null,a("span",{className:m(o),children:e?a(q,{name:e}):null}),l?t:null]})},Ce=({page:e,pageCount:n,onChange:t})=>{const l=s=>{t(Number.parseInt(s.currentTarget.value,10))};return u(ge,{className:"m-pagination_label",htmlFor:"m-pagination_current-page",inline:!0,children:["Page",u("span",{className:"u-visually-hidden",children:["number ",e," out"]}),a("input",{className:"m-pagination_current-page",id:"m-pagination_current-page-default",name:"page",type:"number",min:"1",max:n,pattern:"[0-9]*",inputMode:"numeric",value:e,onChange:l}),"of ",n]})},G=({page:e,pageCount:n,onClickPrevious:t=N,onClickNext:l=N,onClickGo:s=N,previousLabel:r=" Previous",nextLabel:i="Next "})=>{const[o,c]=y.exports.useState(e);y.exports.useEffect(()=>c(e),[e]);const d=f=>{f.preventDefault();const g=Object.fromEntries(new FormData(f.currentTarget)),h=Number.parseInt(g.page,10);h!==e&&s(h)},p=c;return u("nav",{className:"m-pagination",role:"navigation","aria-label":"Pagination",children:[a(te,{iconName:"left",onClick:t,label:r,isDisabled:e===k,isPrevious:!0}),a(te,{iconName:"right",onClick:l,label:i,isDisabled:e===n,isNext:!0}),u("form",{className:"m-pagination_form",action:"#pagination_content",onSubmit:d,children:[a(Ce,{page:o,pageCount:n,onChange:p}),a(we,{})]})]})};try{G.displayName="Pagination",G.__docgenInfo={description:`Pagination is used to help split up long sets of data or content into shorter pieces, so as to make it easier for users to consume information.

Source: https://cfpb.github.io/design-system/components/pagination`,displayName:"Pagination",props:{page:{defaultValue:null,description:"Currently displayed page number",name:"page",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"Total number of available pages",name:"pageCount",required:!0,type:{name:"number"}},onClickPrevious:{defaultValue:{value:"(): null => null"},description:"Event handler for `Previous` button",name:"onClickPrevious",required:!1,type:{name:"() => void"}},onClickNext:{defaultValue:{value:"(): null => null"},description:"Event handler for `Next` button",name:"onClickNext",required:!1,type:{name:"() => void"}},onClickGo:{defaultValue:{value:"(): null => null"},description:"Event handler for `Go` button",name:"onClickGo",required:!1,type:{name:"(value: number) => void"}},previousLabel:{defaultValue:{value:"Previous"},description:"Text label for Previous button",name:"previousLabel",required:!1,type:{name:"string"}},nextLabel:{defaultValue:{value:"Next"},description:"Text label for Next button",name:"nextLabel",required:!1,type:{name:"string"}}}}}catch{}const le=1,M=({isPaginated:e=!0,startPage:n=k,rows:t=[],perPage:l=ue})=>{const s=t.length,r=Math.max(Math.ceil(s/l),k),i=e&&s>l,[o,c]=y.exports.useState(Math.min(n,r));y.exports.useEffect(()=>{c(Math.min(o,r))},[o,r,l]);const d={page:0,pageCount:0,onClickNext:N,onClickPrevious:N,onClickGo:N};if(!e||!i)return[t,d];const p=o-le,f={page:o,pageCount:r,onClickNext:()=>c(Math.min(o+le,r)),onClickPrevious:()=>c(Math.max(p,k)),onClickGo:b=>c(b)},g=p*l,h=p*l+l;return[t.slice(g,h),f]};try{M.displayName="usePagination",M.__docgenInfo={description:`Hook to determine which data is visible for the currently selected page as well as derive props for Pagination based on the provided list of items and configuration options

 In the return array:
- VisibleRows = Rows for the currently selected page (or all rows when not paginating)
- PaginationProperties = Props that should be passed to the <Pagination /> component`,displayName:"usePagination",props:{isPaginated:{defaultValue:{value:"true"},description:"",name:"isPaginated",required:!1,type:{name:"boolean"}},startPage:{defaultValue:{value:"1"},description:"",name:"startPage",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"[]"},description:"",name:"rows",required:!1,type:{name:"ReactNode[][]"}},perPage:{defaultValue:{value:"20"},description:"",name:"perPage",required:!1,type:{name:"number"}}}}}catch{}const Ie=["a-radio"],Ae=["m-form-field m-form-field__radio"],re=({id:e,name:n,helperText:t,className:l,disabled:s=!1,isLarge:r=!1,label:i,inputRef:o})=>{const c=[...Ie,l].join(" "),d=[...Ae,r?"m-form-field__lg-target":""].join(" ");return u("div",{className:d,children:[a("input",{id:e,type:"radio",name:n!=null?n:e,className:c,ref:o,disabled:s}),u("label",{className:"a-label",htmlFor:e,children:[i,a(fe,{children:t})]})]})};try{re.displayName="RadioButton",re.__docgenInfo={description:"",displayName:"RadioButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}}}}}catch{}const O=e=>a("thead",{children:a("tr",{children:e.map((n,t)=>{let l="";const s=[""],r=`header-${t}`;return typeof n=="object"?(l=n.header,n.alignRight&&s.push("o-table_cell__right-align"),n.width&&s.push(`u-w${n.width}pct`)):l=n,a("th",{className:m(s),children:l},r)})})}),xe=e=>e?typeof e=="string"?{"data-label":e}:{"data-label":e.header,className:e.alignRight?"o-table_cell__right-align":""}:{},Te=(e,n)=>a("tbody",{children:e.map((t,l)=>{const s=`row-${l}`;return a("tr",{children:t.map((r,i)=>{const o=n[i],c=`row-${l}-col-${i}`;return y.exports.createElement("td",{...xe(o),key:c},r)})},s)})});try{O.displayName="buildColumnHeaders",O.__docgenInfo={description:"",displayName:"buildColumnHeaders",props:{}}}catch{}const Se=({children:e})=>e?a("caption",{children:e}):null,ie=({caption:e,columns:n,rows:t,isResponsive:l=!1,isDirectory:s=!1,isScrollableHorizontal:r=!1,isStriped:i=!1,isPaginated:o=!1,startPage:c=k,perPage:d=ue,className:p,...f})=>{const[g,h]=M({rows:t,isPaginated:o,startPage:c,perPage:d}),_=[];(l||s)&&_.push("o-table o-table__stack-on-small"),s&&_.push("o-table__entry-header-on-small"),i&&_.push("o-table__striped"),o&&_.push("u-w100pct"),p&&_.push(p);const b=u(pe,{children:[u("table",{className:m(_),...f,children:[a(Se,{children:e}),O(n),Te(g,n)]}),o?a(G,{...h}):null]});return r?a("div",{className:"o-table o-table-wrapper__scrolling",children:b}):b};try{ie.displayName="Table",ie.__docgenInfo={description:`Tables allow for the presentation of many data points grouped together in a visual way. They serve a unique purpose of allowing easy organization or comparison of more complex data than a chart or graph. They can be read either vertically (by columns) or horizontally (by rows).

Source: https://cfpb.github.io/design-system/components/tables`,displayName:"Table",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn[]"}},isResponsive:{defaultValue:{value:"false"},description:"",name:"isResponsive",required:!1,type:{name:"boolean"}},isDirectory:{defaultValue:{value:"false"},description:"",name:"isDirectory",required:!1,type:{name:"boolean"}},isScrollableHorizontal:{defaultValue:{value:"false"},description:"",name:"isScrollableHorizontal",required:!1,type:{name:"boolean"}},isStriped:{defaultValue:{value:"false"},description:"",name:"isStriped",required:!1,type:{name:"boolean"}},isPaginated:{defaultValue:{value:"false"},description:"",name:"isPaginated",required:!1,type:{name:"boolean"}},startPage:{defaultValue:{value:"1"},description:"",name:"startPage",required:!1,type:{name:"number"}},perPage:{defaultValue:{value:"20"},description:"",name:"perPage",required:!1,type:{name:"number"}}}}}catch{}const Ee=["a-text-input"],Pe={default:[],full:["a-text-input__full"]};function se({className:e,id:n,inputBorderColor:t,inputRef:l,isDisabled:s=!1,name:r,notificationType:i="",textNotification:o,type:c="text",width:d="default",...p}){const f=[...Ee,...Pe[d]],g=[e,`a-text-input${w[i]}`,...f].join(" ");return u("div",{className:`m-form-field m-form-field${w[i]}`,children:[a("input",{className:g,style:{borderColor:t},disabled:s,id:n,name:r,type:c,ref:l,...p}),a(H,{id:`${n}-notification`,type:i,message:o,isFieldLevel:!0})]})}try{se.displayName="TextInput",se.__docgenInfo={description:"",displayName:"TextInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inputBorderColor:{defaultValue:null,description:"",name:"inputBorderColor",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"TextInputReference"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},notificationType:{defaultValue:{value:""},description:"",name:"notificationType",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},textNotification:{defaultValue:null,description:"",name:"textNotification",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},width:{defaultValue:{value:"default"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'}]}}}}}catch{}function oe({heading:e,headingLevel:n="h4",links:t,text:l,className:s="",...r}){const i=[];if(t)for(const o of t)i.push(a(me,{children:o},o.key));return u("div",{className:`o-well ${s}`,...r,children:[a("p",{className:n,children:e}),a("p",{className:"text",children:l}),i.length>0?a(C,{isLinks:!0,children:i}):null]})}try{oe.displayName="Well",oe.__docgenInfo={description:"",displayName:"Well",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},headingLevel:{defaultValue:{value:"h4"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"Element[]"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | Element"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{Ge as A,K as B,Y as D,Oe as E,z as F,Me as G,J as H,X as L,H as N,le as O,G as P,re as R,se as T,oe as W,I as a,ie as b,ne as c,F as d,$ as e,ee as f,ae as g,A as h,D as i,M as u};
//# sourceMappingURL=Well.b38df8e1.js.map

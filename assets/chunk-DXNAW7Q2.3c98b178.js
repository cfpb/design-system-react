import{N as d}from"./index.ae84c53b.js";var L="links";const{global:h}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:f,addons:l}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:R,SELECT_STORY:T}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:o,HTMLElement:k}=h;function u(e){let n={},r=(e[0]==="?"?e.substring(1):e).split("&").filter(Boolean);for(let t=0;t<r.length;t++){let a=r[t].split("=");n[decodeURIComponent(a[0])]=decodeURIComponent(a[1]||"")}return n}var v=e=>l.getChannel().emit(T,e),D=(e,n)=>new Promise(r=>{let{location:t}=o,a=u(t.search),c=[].concat(a.id)[0],p=e||c.split("--",2)[0],m=`/story/${d(p,n)}`,O=t.pathname.replace(/iframe\.html$/,""),E=`${t.origin+O}?${Object.entries({path:m}).map(s=>`${s[0]}=${s[1]}`).join("&")}`;r(E)}),_=e=>{let{target:n}=e;if(!(n instanceof k))return;let r=n,{sbKind:t,sbStory:a}=r.dataset;(t||a)&&(e.preventDefault(),v({kind:t,story:a}))},i=!1,g=()=>{i||(i=!0,o.addEventListener("click",_))},C=()=>{i&&(i=!1,o.removeEventListener("click",_))},S=f({name:"withLinks",parameterName:L,wrapper:(e,n)=>(g(),l.getChannel().once(R,C),e(n))});export{D as h,v as n,S as w};
//# sourceMappingURL=chunk-DXNAW7Q2.3c98b178.js.map
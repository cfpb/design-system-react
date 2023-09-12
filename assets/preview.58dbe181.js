import{d as h}from"./index.67736049.js";const{global:B}=__STORYBOOK_MODULE_GLOBAL__,{logger:S}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:s,window:x}=B,O=()=>x.matchMedia("(prefers-reduced-motion: reduce)").matches,w=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(i=>i.name).join(", ");S.warn(h`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},_=r=>{(Array.isArray(r)?r:[r]).forEach(A)},A=r=>{let e=s.getElementById(r);e&&e.parentElement.removeChild(e)},L=(r,e)=>{let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},T=(r,e,t)=>{let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=s.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let i=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=s.getElementById(i);d?d.parentElement.insertBefore(a,d):s.head.appendChild(a)}};const{useMemo:f,useEffect:E}=__STORYBOOK_MODULE_PREVIEW_API__;var C=(r,e)=>{var c;let{globals:t,parameters:n}=e,a=(c=t[p])==null?void 0:c.value,i=n[p],d=f(()=>i.disable?"transparent":w(a,i.values,i.default),[i,a]),o=f(()=>d&&d!=="transparent",[d]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${d} !important;
        ${O()?"":l}
      }
    `},[d,g]);return E(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!o){_(l);return}T(l,u,e.viewMode==="docs"?e.id:null)},[o,u,e]),r()},I=(r,e)=>{var y,v,k;let{globals:t,parameters:n}=e,a=n[p].grid,i=((y=t[p])==null?void 0:y.grid)===!0&&a.disable!==!0,{cellAmount:d,cellSize:o,opacity:g}=a,u=e.viewMode==="docs",c=n.layout===void 0||n.layout==="padded"?16:0,l=(v=a.offsetX)!=null?v:u?20:c,m=(k=a.offsetY)!=null?k:u?20:c,$=f(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",M=[`${o*d}px ${o*d}px`,`${o*d}px ${o*d}px`,`${o}px ${o}px`,`${o}px ${o}px`].join(", ");return`
      ${b} {
        background-size: ${M} !important;
        background-position: ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[o]);return E(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){_(b);return}L(b,$)},[i,$,e]),r()},G=[I,C],H={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},Y={[p]:null};export{G as decorators,Y as globals,H as parameters};
//# sourceMappingURL=preview.58dbe181.js.map

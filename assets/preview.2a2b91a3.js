import{c as l}from"./_commonjsHelpers.712cc82f.js";var A="storybook/actions",T=`${A}/action-event`,c,p=typeof l<"u"&&(l.crypto||l.msCrypto);if(p&&p.getRandomValues){var v=new Uint8Array(16);c=function(){return p.getRandomValues(v),v}}if(!c){var d=new Array(16);c=function(){for(var t=0,n;t<16;t++)(t&3)===0&&(n=Math.random()*4294967296),d[t]=n>>>((t&3)<<3)&255;return d}}var w=c,u=[];for(var s=0;s<256;++s)u[s]=(s+256).toString(16).substr(1);function j(t,n){var e=n||0,r=u;return r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+"-"+r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]+r[t[e++]]}var R=j,_=w,E=R;function D(t,n,e){var r=n&&e||0;typeof t=="string"&&(n=t=="binary"?new Array(16):null,t=null),t=t||{};var a=t.random||(t.rng||_)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,n)for(var o=0;o<16;++o)n[r+o]=a[o];return n||E(a)}var P=D,I={depth:10,clearOnStoryChange:!0,limit:50};const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__;var f=(t,n)=>{let e=Object.getPrototypeOf(t);return!e||n(e)?e:f(e,n)},U=t=>Boolean(typeof t=="object"&&t&&f(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),B=t=>{if(U(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let e=Object.getOwnPropertyDescriptor(n,"view"),r=e==null?void 0:e.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...e,value:Object.create(r.constructor.prototype)}),n}return t};function m(t,n={}){let e={...I,...n},r=function(...a){let o=S.getChannel(),i=P(),y=5,g=a.map(B),x=a.length>1?g:g[0],h={id:i,count:0,data:{name:t,args:x},options:{...e,maxDepth:y+(e.depth||3),allowFunction:e.allowFunction||!1}};o.emit(T,h)};return r.isAction=!0,r}var O=(t,n)=>typeof n[t]>"u"&&!(t in n),F=t=>{let{initialArgs:n,argTypes:e,parameters:{actions:r}}=t;if(!r||r.disable||!r.argTypesRegex||!e)return{};let a=new RegExp(r.argTypesRegex);return Object.entries(e).filter(([o])=>!!a.test(o)).reduce((o,[i,y])=>(O(i,n)&&(o[i]=m(i)),o),{})},V=t=>{let{initialArgs:n,argTypes:e,parameters:{actions:r}}=t;return(r==null?void 0:r.disable)||!e?{}:Object.entries(e).filter(([a,o])=>!!o.action).reduce((a,[o,i])=>(O(o,n)&&(a[o]=m(typeof i.action=="string"?i.action:o)),a),{})},z=[V,F];export{z as argsEnhancers};
//# sourceMappingURL=preview.2a2b91a3.js.map

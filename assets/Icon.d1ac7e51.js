var m=Object.defineProperty;var _=(t,r)=>m(t,"name",{value:r,configurable:!0});import{q as s}from"./iframe.c7cb2a00.js";import{r as d,j as f}from"./jsx-runtime.3c358060.js";var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var r={}.hasOwnProperty;function e(){for(var i=[],n=0;n<arguments.length;n++){var o=arguments[n];if(!!o){var a=typeof o;if(a==="string"||a==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var u=e.apply(null,o);u&&i.push(u)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var c in o)r.call(o,c)&&o[c]&&i.push(c)}}}return i.join(" ")}_(e,"classNames"),t.exports?(e.default=e,t.exports=e):window.classNames=e})()})(v);const g=v.exports,E=_((t,r)=>{const e=t[r];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+r)))})},"__variableDynamicImportRuntimeHelper"),p=_(t=>{let[r,e]=d.exports.useState(null);return d.exports.useEffect(()=>{_(async()=>{if(!t)return null;const n=await E(Object.assign({"../assets/icons/approved-round.svg":()=>s(()=>import("./approved-round.83131b16.js"),[]),"../assets/icons/approved.svg":()=>s(()=>import("./approved.29144836.js"),[]),"../assets/icons/down-round.svg":()=>s(()=>import("./down-round.5e2b672f.js"),[]),"../assets/icons/down.svg":()=>s(()=>import("./down.4c13fb6d.js"),[]),"../assets/icons/error-round.svg":()=>s(()=>import("./error-round.c3ad9e9a.js"),[]),"../assets/icons/error.svg":()=>s(()=>import("./error.bdd52bf9.js"),[]),"../assets/icons/external-link-round.svg":()=>s(()=>import("./external-link-round.608bdcee.js"),[]),"../assets/icons/external-link.svg":()=>s(()=>import("./external-link.473abad1.js"),[]),"../assets/icons/information-round.svg":()=>s(()=>import("./information-round.e2377c44.js"),[]),"../assets/icons/information.svg":()=>s(()=>import("./information.aa5ae6d1.js"),[]),"../assets/icons/left-round.svg":()=>s(()=>import("./left-round.46d542da.js"),[]),"../assets/icons/left.svg":()=>s(()=>import("./left.49a2552f.js"),[]),"../assets/icons/right-round.svg":()=>s(()=>import("./right-round.2a592d9d.js"),[]),"../assets/icons/right.svg":()=>s(()=>import("./right.ea4ba9e4.js"),[]),"../assets/icons/up-round.svg":()=>s(()=>import("./up-round.189c2d83.js"),[]),"../assets/icons/up.svg":()=>s(()=>import("./up.4cb86a30.js"),[]),"../assets/icons/update-round.svg":()=>s(()=>import("./update-round.c2ea3c4f.js"),[]),"../assets/icons/update.svg":()=>s(()=>import("./update.8e1f38ae.js"),[]),"../assets/icons/updating-round.svg":()=>s(()=>import("./updating-round.e6d42058.js"),[]),"../assets/icons/updating.svg":()=>s(()=>import("./updating.17a831ca.js"),[]),"../assets/icons/warning-round.svg":()=>s(()=>import("./warning-round.408255a2.js"),[]),"../assets/icons/warning.svg":()=>s(()=>import("./warning.38dec473.js"),[])}),`../assets/icons/${t}.svg`);!n||!n.default||e(n.default)},"importSvg")()},[t,e]),r||null},"useIconSvg");try{p.displayName="useIconSvg",p.__docgenInfo={description:"Dynamically import an SVG as a string",displayName:"useIconSvg",props:{}}}catch{}const l=_(({name:t,alt:r,withBg:e=!1})=>{const i=I(t,e),n=`${t}${i}`,o=["cf-icon-svg",`cf-icon-svg__${n}`],a=p(n);if(!a)return null;const u=`class="${g(o)}" alt="${r||t}"`,c=`${a}`.replace("<svg",`<svg ${u} `);return f("span",{className:"cf-icon-svg-wrapper",dangerouslySetInnerHTML:{__html:c}})},"Icon"),I=_((t,r)=>r?P.includes(t)?"-square":"-round":"","getShapeModifier"),P=["email","facebook","flickr","github","linkedin","pinterest","twitter","youtube"];try{l.displayName="Icon",l.__docgenInfo={description:`CFPB DS Icon

https://cfpb.github.io/design-system/foundation/iconography`,displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},withBg:{defaultValue:{value:"false"},description:"",name:"withBg",required:!1,type:{name:"boolean"}}}}}catch{}export{l as I,g as c};
//# sourceMappingURL=Icon.d1ac7e51.js.map

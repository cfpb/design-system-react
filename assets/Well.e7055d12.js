import{j as d,c as V}from"./index.7eca609e.js";import{R as se,r as p}from"./index.ca1bfdbe.js";import{_ as K}from"./extends.946277fc.js";function S({children:e,className:t,isHorizontal:a,isLinks:n=!1,isOrdered:r,isSpaced:i,isUnstyled:s}){const l=["m-list"];return a&&l.push("m-list__horizontal"),n&&l.push("m-list__links"),i&&l.push("m-list__spaced"),s&&l.push("m-list__unstyled"),t&&l.push(t),r?d.exports.jsx("ol",{className:V(l),children:e}):d.exports.jsx("ul",{className:V(l),children:e})}try{S.displayName="List",S.__docgenInfo={description:"",displayName:"List",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHorizontal:{defaultValue:null,description:"",name:"isHorizontal",required:!1,type:{name:"boolean"}},isLinks:{defaultValue:{value:"false"},description:"",name:"isLinks",required:!1,type:{name:"boolean"}},isOrdered:{defaultValue:null,description:"",name:"isOrdered",required:!1,type:{name:"boolean"}},isSpaced:{defaultValue:null,description:"",name:"isSpaced",required:!1,type:{name:"boolean"}},isUnstyled:{defaultValue:null,description:"",name:"isUnstyled",required:!1,type:{name:"boolean"}}}}}catch{}function q({children:e,className:t,...a}){return d.exports.jsx("li",{className:V("m-list_item",t),...a,children:e})}function U({children:e,itemClassname:t="",className:a}){return d.exports.jsx(d.exports.Fragment,{children:e.map(n=>{var r,i;return d.exports.jsx(q,{className:a,children:se.cloneElement(n,{className:`${t} ${(i=(r=n.props)==null?void 0:r.className)!=null?i:""}`})},n.key)})})}try{q.displayName="ListItem",q.__docgenInfo={description:"",displayName:"ListItem",props:{}}}catch{}try{U.displayName="ListItemBuilder",U.__docgenInfo={description:`A utility component that wraps each child element in an <li>,
while adding the provided \`className\` prop to the newly wrapped element.

Example:
<ListItemBuilder className='u-w33pct' itemClassname='m-list_link'>
  <a className='selected' href='/home' key='home'>Homepage</a>
  <a href='/away' key='away'>Other page</a>
</ListItemBuilder>

Example Output:
<>
  <li class='m-list_item u-w33pct' key='home'>
    <a class='m-list_link selected' href='/home'>Homepage</a>
  </li>
  <li class='m-list_item u-w33pct' key='away'>
    <a class='m-list_link' href='/away'>Other page</a>
  </li>
</>`,displayName:"ListItemBuilder",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},itemClassname:{defaultValue:{value:""},description:"",name:"itemClassname",required:!1,type:{name:"string"}}}}}catch{}var k;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(k||(k={}));var F=function(e){return e},G="beforeunload",oe="popstate";function ue(e){e===void 0&&(e={});var t=e,a=t.window,n=a===void 0?document.defaultView:a,r=n.history;function i(){var o=n.location,c=o.pathname,h=o.search,_=o.hash,g=r.state||{};return[g.idx,F({pathname:c,search:h,hash:_,state:g.usr||null,key:g.key||"default"})]}var s=null;function l(){if(s)m.call(s),s=null;else{var o=k.Pop,c=i(),h=c[0],_=c[1];if(m.length){if(h!=null){var g=y-h;g&&(s={action:o,location:_,retry:function(){w(g*-1)}},w(g))}}else W(o)}}n.addEventListener(oe,l);var u=k.Pop,f=i(),y=f[0],v=f[1],x=X(),m=X();y==null&&(y=0,r.replaceState(K({},r.state,{idx:y}),""));function L(o){return typeof o=="string"?o:O(o)}function N(o,c){return c===void 0&&(c=null),F(K({pathname:v.pathname,hash:"",search:""},typeof o=="string"?P(o):o,{state:c,key:ce()}))}function D(o,c){return[{usr:o.state,key:o.key,idx:c},L(o)]}function M(o,c,h){return!m.length||(m.call({action:o,location:c,retry:h}),!1)}function W(o){u=o;var c=i();y=c[0],v=c[1],x.call({action:u,location:v})}function z(o,c){var h=k.Push,_=N(o,c);function g(){z(o,c)}if(M(h,_,g)){var b=D(_,y+1),I=b[0],C=b[1];try{r.pushState(I,"",C)}catch{n.location.assign(C)}W(h)}}function A(o,c){var h=k.Replace,_=N(o,c);function g(){A(o,c)}if(M(h,_,g)){var b=D(_,y),I=b[0],C=b[1];r.replaceState(I,"",C),W(h)}}function w(o){r.go(o)}var le={get action(){return u},get location(){return v},createHref:L,push:z,replace:A,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return x.push(c)},block:function(c){var h=m.push(c);return m.length===1&&n.addEventListener(G,Q),function(){h(),m.length||n.removeEventListener(G,Q)}}};return le}function Q(e){e.preventDefault(),e.returnValue=""}function X(){var e=[];return{get length(){return e.length},push:function(a){return e.push(a),function(){e=e.filter(function(n){return n!==a})}},call:function(a){e.forEach(function(n){return n&&n(a)})}}}function ce(){return Math.random().toString(36).substr(2,8)}function O(e){var t=e.pathname,a=t===void 0?"/":t,n=e.search,r=n===void 0?"":n,i=e.hash,s=i===void 0?"":i;return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function P(e){var t={};if(e){var a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const H=p.exports.createContext(null),B=p.exports.createContext(null),ae=p.exports.createContext({outlet:null,matches:[]});function E(e,t){if(!e)throw new Error(t)}function pe(e,t){t===void 0&&(t="/");let{pathname:a,search:n="",hash:r=""}=typeof e=="string"?P(e):e;return{pathname:a?a.startsWith("/")?a:fe(a,t):t,search:ye(n),hash:ge(r)}}function fe(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function ne(e,t,a){let n=typeof e=="string"?P(e):e,r=e===""||n.pathname===""?"/":n.pathname,i;if(r==null)i=a;else{let l=t.length-1;if(r.startsWith("..")){let u=r.split("/");for(;u[0]==="..";)u.shift(),l-=1;n.pathname=u.join("/")}i=l>=0?t[l]:"/"}let s=pe(n,i);return r&&r!=="/"&&r.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function de(e){return e===""||e.pathname===""?"/":typeof e=="string"?P(e).pathname:e.pathname}function me(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=e.charAt(t.length);return a&&a!=="/"?null:e.slice(t.length)||"/"}const re=e=>e.join("/").replace(/\/\/+/g,"/"),he=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ye=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ge=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ve(e){R()||E(!1);let{basename:t,navigator:a}=p.exports.useContext(H),{hash:n,pathname:r,search:i}=ie(e),s=r;if(t!=="/"){let l=de(e),u=l!=null&&l.endsWith("/");s=r==="/"?t+(u?"/":""):re([t,r])}return a.createHref({pathname:s,search:i,hash:n})}function R(){return p.exports.useContext(B)!=null}function $(){return R()||E(!1),p.exports.useContext(B).location}function _e(){R()||E(!1);let{basename:e,navigator:t}=p.exports.useContext(H),{matches:a}=p.exports.useContext(ae),{pathname:n}=$(),r=JSON.stringify(a.map(l=>l.pathnameBase)),i=p.exports.useRef(!1);return p.exports.useEffect(()=>{i.current=!0}),p.exports.useCallback(function(l,u){if(u===void 0&&(u={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let f=ne(l,JSON.parse(r),n);e!=="/"&&(f.pathname=re([e,f.pathname])),(u.replace?t.replace:t.push)(f,u.state)},[e,t,r,n])}function ie(e){let{matches:t}=p.exports.useContext(ae),{pathname:a}=$(),n=JSON.stringify(t.map(r=>r.pathnameBase));return p.exports.useMemo(()=>ne(e,JSON.parse(n),a),[e,n,a])}function xe(e){let{basename:t="/",children:a=null,location:n,navigationType:r=k.Pop,navigator:i,static:s=!1}=e;R()&&E(!1);let l=he(t),u=p.exports.useMemo(()=>({basename:l,navigator:i,static:s}),[l,i,s]);typeof n=="string"&&(n=P(n));let{pathname:f="/",search:y="",hash:v="",state:x=null,key:m="default"}=n,L=p.exports.useMemo(()=>{let N=me(f,l);return N==null?null:{pathname:N,search:y,hash:v,state:x,key:m}},[l,f,y,v,x,m]);return L==null?null:p.exports.createElement(H.Provider,{value:u},p.exports.createElement(B.Provider,{children:a,value:{location:L,navigationType:r}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},J.apply(this,arguments)}function ke(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++)r=n[i],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}const be=["onClick","reloadDocument","replace","state","target","to"];function je(e){let{basename:t,children:a,window:n}=e,r=p.exports.useRef();r.current==null&&(r.current=ue({window:n}));let i=r.current,[s,l]=p.exports.useState({action:i.action,location:i.location});return p.exports.useLayoutEffect(()=>i.listen(l),[i]),p.exports.createElement(xe,{basename:t,children:a,location:s.location,navigationType:s.action,navigator:i})}function Le(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Ne=p.exports.forwardRef(function(t,a){let{onClick:n,reloadDocument:r,replace:i=!1,state:s,target:l,to:u}=t,f=ke(t,be),y=ve(u),v=we(u,{replace:i,state:s,target:l});function x(m){n&&n(m),!m.defaultPrevented&&!r&&v(m)}return p.exports.createElement("a",J({},f,{href:y,onClick:x,ref:a,target:l}))});function we(e,t){let{target:a,replace:n,state:r}=t===void 0?{}:t,i=_e(),s=$(),l=ie(e);return p.exports.useCallback(u=>{if(u.button===0&&(!a||a==="_self")&&!Le(u)){u.preventDefault();let f=!!n||O(s)===O(l);i(e,{replace:f,state:r})}},[s,i,l,n,r,a,e])}function j({children:e,hasIcon:t=!1,href:a,isJump:n=!1,isJumpLeft:r=!1,isRouterLink:i=!1,noWrap:s=!1,type:l="default",...u}){const f=[u.className];if(l==="list"?f.push("m-list_link"):f.push("a-link"),l==="destructive"&&f.push("a-btn a-btn__link a-btn__warning"),t&&f.push("a-link__icon"),s&&f.push("a-link__no-wrap"),n&&f.push("a-link__jump a-link__icon-after-text"),r&&f.push("a-link__jump a-link__icon-before-text"),i){if(!a)throw new Error("Link component: href is a required attribute when isRouterLink is true");return d.exports.jsx(Ne,{to:a,...u,className:V(f),children:e})}return d.exports.jsx("a",{...u,className:V(f),href:a,children:e})}const Y=({children:e,...t})=>d.exports.jsx("span",{className:"a-link_text",...t,children:e}),Z=e=>d.exports.jsx(q,{children:d.exports.jsx(j,{...e,type:"list"})}),ee=e=>d.exports.jsx(j,{...e,type:"destructive"});try{j.displayName="Link",j.__docgenInfo={description:`Links are navigational elements that connect users to other locations, either on the current page or to a different page or site. In contrast, <a href="https://cfpb.github.io/design-system/components/buttons">buttons</a> are used to signal important actions.

Source: https://cfpb.github.io/design-system/components/links`,displayName:"Link",props:{hasIcon:{defaultValue:{value:"false"},description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},isJump:{defaultValue:{value:"false"},description:"",name:"isJump",required:!1,type:{name:"boolean"}},isJumpLeft:{defaultValue:{value:"false"},description:"",name:"isJumpLeft",required:!1,type:{name:"boolean"}},isRouterLink:{defaultValue:{value:"false"},description:"",name:"isRouterLink",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:{value:"false"},description:"",name:"noWrap",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"default"'},{value:'"destructive"'}]}}}}}catch{}try{Y.displayName="LinkText",Y.__docgenInfo={description:"",displayName:"LinkText",props:{}}}catch{}try{Z.displayName="ListLink",Z.__docgenInfo={description:"",displayName:"ListLink",props:{hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},isJump:{defaultValue:null,description:"",name:"isJump",required:!1,type:{name:"boolean"}},isJumpLeft:{defaultValue:null,description:"",name:"isJumpLeft",required:!1,type:{name:"boolean"}},isRouterLink:{defaultValue:null,description:"",name:"isRouterLink",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"default"'},{value:'"destructive"'}]}}}}}catch{}try{ee.displayName="DestructiveLink",ee.__docgenInfo={description:"",displayName:"DestructiveLink",props:{hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},isJump:{defaultValue:null,description:"",name:"isJump",required:!1,type:{name:"boolean"}},isJumpLeft:{defaultValue:null,description:"",name:"isJumpLeft",required:!1,type:{name:"boolean"}},isRouterLink:{defaultValue:null,description:"",name:"isRouterLink",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"default"'},{value:'"destructive"'}]}}}}}catch{}const T=({children:e,className:t="",...a})=>d.exports.jsx("div",{className:`o-well ${t}`,...a,children:e});function te({heading:e,headingLevel:t="h3",links:a,text:n,className:r="",...i}){const s=[];if(a)for(const l of a)s.push(d.exports.jsx(q,{children:l},l.key));return d.exports.jsxs(T,{className:r,...i,children:[e?d.exports.jsx("p",{className:t,children:e}):null,n?d.exports.jsx("p",{className:"text",children:n}):null,s.length>0?d.exports.jsx(S,{isLinks:!0,children:s}):null]})}try{T.displayName="WellContainer",T.__docgenInfo={description:`Wells are used to highlight specific information within a designated section of a page. This breaks up the flow of content on the page and helps to emphasize and set apart the content that is included. They are generally used on <a href="https://cfpb.github.io/design-system/pages/browse-pages">browse</a>, <a href="https://cfpb.github.io/design-system/pages/learn-pages">learn</a>, and <a href="https://cfpb.github.io/design-system/pages/document-detail-pages">document detail pages</a>.

Source: https://cfpb.github.io/design-system/patterns/wells`,displayName:"WellContainer",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{te.displayName="WellContent",te.__docgenInfo={description:"",displayName:"WellContent",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"h3"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"Element[]"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string | Element"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{je as B,ee as D,S as L,T as W,U as a,j as b,q as c,Z as d,Y as e,te as f};

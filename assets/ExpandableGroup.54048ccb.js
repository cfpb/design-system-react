import{c as nt}from"./index.cfa9e344.js";import{r as it,a as Z,j as A,e as X}from"./jsx-runtime.54133100.js";import{I as K}from"./Icon.f601679c.js";const v="data-js-hook",ct="behavior_",ut="state_";function W(){const t={};function n(e,r){return{}.hasOwnProperty.call(t,e)?t[e].push(r):t[e]=[r],this}function i(e,r){if(!{}.hasOwnProperty.call(t,e))return this;const o=t[e].indexOf(r);return o!==-1&&t[e].splice(o,1),this}function s(e,r){if(!{}.hasOwnProperty.call(t,e))return this;r=r||{};const o=t[e];for(let d=0,c=o.length;d<c;d++)o[d].call(this,r);return this}return this.addEventListener=n,this.removeEventListener=i,this.dispatchEvent=s,this.getRegisteredEvents=()=>t,this}function k(t,n){if(!t)return!1;let i=t.getAttribute(v);return i?(i=i.split(" "),i.indexOf(n)>-1):!1}function V(t,n){if(k(t,n))return n;if(n.indexOf(" ")!==-1){const s=v+" values cannot contain spaces!";throw new Error(s)}const i=t.getAttribute(v);return i!==null&&(n=i+" "+n),t.setAttribute(v,n),n}const j=ut+"atomic_init";function ht(t,n){if(!t||!t.classList){const i=t+' is not valid. Check that element is a DOM node with class "'+n+'"';throw new Error(i)}return t}function ft(t,n){const i=t.classList.contains(n)?t:t.querySelector("."+n);if(!i){const s=n+" not found on or in passed DOM node.";throw new Error(s)}return i}function pt(t,n){return ht(t,n),ft(t,n)}function Et(t){return k(t,j)?!1:(V(t,j),!0)}function _t(t,n,i,s={}){const r=(i||document).querySelectorAll(t),o=[];let d,c;for(let u=0,l=r.length;u<l;u++)c=r[u],k(c,j)===!1&&(d=new n(c),d.init(s),o.push(d));return o}function Q(t,n){let i;if(k(t,n))return i=t,i;if(t){const s="["+v+"="+n+"]";i=t.querySelector(s)}if(!i){const s=n+" behavior not found on passed DOM node!";throw new Error(s)}return i}const I=ct+"flyout-menu",mt="["+v+"="+I;function st(t,n=!0){const i=Q(t,I),s=B(t),e=Q(t,I+"_content");let r=0;const o=0,d=1,c=2,u=3;let l,E,g;const L=$.bind(this),b=y.bind(this);let O,_=!0,x=!1;function B(a){const f=[],m=a.querySelectorAll(`${mt}_trigger]`);let D,S,U;for(let Y=m.length>>>0;Y--;){for(U=!1,D=m[Y],S=D.parentElement;S!==a;)S.getAttribute(v)&&S.getAttribute(v).split(" ").indexOf(I)!==-1?(U=!0,S=a):S=S.parentElement;U||f.unshift(m[Y])}return f}function q(a=!1){return r=a?u:o,s.forEach(f=>{w("expanded",f,a),f.addEventListener("click",h.bind(this)),f.addEventListener("touchstart",M,{passive:!0}),f.addEventListener("mouseover",G.bind(this)),f.addEventListener("mouseout",F.bind(this))}),e.setAttribute("data-open",a?"true":"false"),n&&!a&&e.setAttribute("hidden",""),J(),this}function w(a,f,m){const D=String(m);return f.setAttribute("aria-"+a,D),D}function M(){x=!0}function G(a){_||(x||this.dispatchEvent("triggerover",{target:this,trigger:a.target,type:"triggerover"}),x=!1)}function F(a){_||this.dispatchEvent("triggerout",{target:this,trigger:a.target,type:"triggerout"})}function h(a){if(!_)switch(this.dispatchEvent("triggerclick",{target:this,trigger:a.target,type:"triggerclick"}),a.preventDefault(),r){case o:case d:this.expand();break;case c:case u:this.collapse();break}}function P(){if(l==null||l.halt(),r===c||r===u)return this;if(r=c,n&&e.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!E||!g)return b(),this;const a=l==null?void 0:l.isAnimated();return a&&l.addEventListener(p.END_EVENT,b),E(),a||b(),this}function C(){if(l==null||l.halt(),r===d||r===o)return this;for(let f=0,m=s.length;f<m;f++)w("expanded",s[f],!1);if(e.setAttribute("data-open","false"),r=d,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!g||!E)return L(),this;const a=l==null?void 0:l.isAnimated();return a&&l.addEventListener(p.END_EVENT,L),g(),a||L(),this}function y(){r=u,e.setAttribute("data-open","true"),l&&l.removeEventListener(p.END_EVENT,b),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let a=0,f=s.length;a<f;a++)w("expanded",s[a],!0)}function $(){r=o,n&&e.setAttribute("hidden",""),l&&l.removeEventListener(p.END_EVENT,L),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function rt(a,f,m){l=a,f&&f!==g&&(g=f),m&&m!==E&&(E=m)}function at(){l&&l.remove();let a;l=a,E=a,g=a}function ot(){return{container:i,content:e,trigger:s}}function J(){return _&&(_=!1),!_}function lt(){return _||(_=!0),_}function dt(a){return O=a,this}const z=new W;return this.addEventListener=z.addEventListener,this.removeEventListener=z.removeEventListener,this.dispatchEvent=z.dispatchEvent,this.init=q,this.expand=P,this.collapse=C,this.setTransition=rt,this.clearTransition=at,this.getData=()=>O,this.getTransition=()=>l,this.getDom=ot,this.isAnimating=()=>r===c||r===d,this.isExpanded=()=>r===u,this.resume=J,this.setData=dt,this.suspend=lt,st.BASE_CLASS=I,this}function p(t,n,i){const s=n;let e=t;if(!i)throw new Error("Child transition argument must be defined!");const r=i;let o,d,c,u=!1,l=!1,E=!1;if(typeof s.CSS_PROPERTY>"u"||typeof s.BASE_CLASS>"u")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function g(){d&&u?(e.addEventListener(d,c),r.dispatchEvent(p.BEGIN_EVENT,{target:r,type:p.BEGIN_EVENT}),e.classList.add(p.ANIMATING_CLASS),l=!0):(r.dispatchEvent(p.BEGIN_EVENT,{target:r,type:p.BEGIN_EVENT}),c())}function L(){e.removeEventListener(d,c)}function b(h){return h&&h.propertyName!==s.CSS_PROPERTY?!1:(L(),e.classList.remove(p.ANIMATING_CLASS),r.dispatchEvent(p.END_EVENT,{target:r,type:p.END_EVENT}),l=!1,!0)}function O(){let h;for(h in s)({}).hasOwnProperty.call(s,h)&&s[h]!==s.BASE_CLASS&&e.classList.contains(s[h])&&e.classList.remove(s[h])}function _(){!l||(e.style.webkitTransitionDuration="0",e.style.mozTransitionDuration="0",e.style.oTransitionDuration="0",e.style.transitionDuration="0",e.removeEventListener(d,c),c(),e.style.webkitTransitionDuration="",e.style.mozTransitionDuration="",e.style.oTransitionDuration="",e.style.transitionDuration="")}function x(){_(),O(),e.classList.remove(s.BASE_CLASS)}function B(){e.classList.remove(p.NO_ANIMATION_CLASS),u=!0}function q(){e.classList.add(p.NO_ANIMATION_CLASS),u=!1}function w(h){if(!h){const $="Element does not have TransitionEnd event. It may be null!";throw new Error($)}let P;const C={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};let y;for(y in C)if({}.hasOwnProperty.call(C,y)&&typeof h.style[y]<"u"){P=C[y];break}return P}function M(h){x(),B(),e=h,e.classList.add(s.BASE_CLASS),d=w(e)}function G(h){if(u=!e.classList.contains(p.NO_ANIMATION_CLASS),c=b.bind(this),M(e),!h)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return e.classList.add(h),this}function F(h){return E||(O(),E=!0),e.classList.contains(h)?!1:(L(),e.classList.remove(o),o=h,g(),e.classList.add(o),!0)}return this.animateOff=q,this.animateOn=B,this.applyClass=F,this.halt=_,this.init=G,this.isAnimated=()=>u,this.remove=x,this.setElement=M,this}p.BEGIN_EVENT="transitionbegin";p.END_EVENT="transitionend";p.NO_ANIMATION_CLASS="u-no-animation";p.ANIMATING_CLASS="u-is-animating";const H={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function R(t){const n=new W,i=new p(t,H,this);let s=0;function e(){const g=t.scrollHeight+"px";t.style.maxHeight=g}function r(){window.removeEventListener("load",r),e()}function o(E){return i.init(E),window.addEventListener("load",r),window.addEventListener("resize",()=>{e()}),this}function d(){return e(),i.applyClass(H.MH_DEFAULT),(!s||t.scrollHeight>s)&&(s=t.scrollHeight),this}function c(){return i.applyClass(H.MH_SUMMARY),s=t.scrollHeight,this}function u(){return i.applyClass(H.MH_ZERO),s=t.scrollHeight,this}function l(){return t.style.maxHeight="",i.remove()}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=i.animateOff,this.animateOn=i.animateOn,this.halt=i.halt,this.isAnimated=i.isAnimated,this.setElement=i.setElement,this.refresh=e,this.remove=l,this.init=o,this.maxHeightDefault=d,this.maxHeightSummary=c,this.maxHeightZero=u,this}R.CLASSES=H;const T="o-expandable";function N(t){const n=pt(t,T);let i,s,e,r,o;function d(){if(!Et(n))return this;i=n.querySelector(`.${T}_header`),s=n.querySelector(`.${T}_content`),e=n.querySelector(`.${T}_label`);const l=n.classList.contains(`${T}__onload-open`);V(n,"behavior_flyout-menu"),V(i,"behavior_flyout-menu_trigger"),V(s,"behavior_flyout-menu_content");const E=l?R.CLASSES.MH_DEFAULT:R.CLASSES.MH_ZERO;return r=new R(s).init(E),o=new st(n),o.setTransition(r,r.maxHeightZero,r.maxHeightDefault),o.init(l),o.addEventListener("expandbegin",()=>{s.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),o.addEventListener("collapseend",()=>{s.classList.add("u-hidden")}),this}function c(){return e.textContent.trim()}this.init=d,this.expand=()=>o.expand(),this.collapse=()=>o.collapse(),this.isExpanded=()=>o.isExpanded(),this.refresh=()=>o.getTransition().refresh(),this.getLabelText=c;const u=new W;return this.addEventListener=u.addEventListener,this.removeEventListener=u.removeEventListener,this.dispatchEvent=u.dispatchEvent,this}N.BASE_CLASS=T;N.init=t=>_t(`.${N.BASE_CLASS}`,N,t);const tt=({header:t,children:n,inAccordion:i=!1,openOnLoad:s=!1,className:e="",...r})=>{it.exports.useEffect(()=>{i||N.init()},[i]);const o=["o-expandable","o-expandable__padded","o-expandable__background","o-expandable__border",e];return s&&o.push("o-expandable__onload-open"),Z("div",{className:nt(o),...r,children:[Z("button",{type:"button",className:"o-expandable_header o-expandable_target",title:t,children:[A("h3",{className:"h4 o-expandable_label",children:t}),Z("span",{className:"o-expandable_link",children:[A("span",{className:"o-expandable_cue o-expandable_cue-open",children:A(K,{name:"plus-round",alt:"plus-round"})}),A("span",{className:"o-expandable_cue o-expandable_cue-close",children:A(K,{name:"minus-round",alt:"minus-round"})})]})]}),A("div",{className:"o-expandable_content",children:n})]})};try{tt.displayName="Expandable",tt.__docgenInfo={description:"",displayName:"Expandable",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},inAccordion:{defaultValue:{value:"false"},description:"",name:"inAccordion",required:!1,type:{name:"boolean"}},openOnLoad:{defaultValue:{value:"false"},description:"",name:"openOnLoad",required:!1,type:{name:"boolean"}}}}}catch{}const et=({groupId:t,accordion:n=!1,children:i,className:s="",...e})=>{const r=["o-expandable-group",s];n&&r.push("o-expandable-group__accordion"),it.exports.useEffect(()=>{!n||N.init(document.querySelector(`#${t}`))},[n,t]);const o=X.Children.map(i,d=>X.isValidElement(d)&&n?X.cloneElement(d,{inAccordion:n}):d);return A("div",{id:t,className:nt(r),...e,children:o})};try{et.displayName="ExpandableGroup",et.__docgenInfo={description:"",displayName:"ExpandableGroup",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}},accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}}}}}catch{}export{et as E,tt as a};
//# sourceMappingURL=ExpandableGroup.54048ccb.js.map
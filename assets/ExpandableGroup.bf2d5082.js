import{c as nt}from"./index.cfa9e344.js";import{r as it,a as Z,j as A,e as X}from"./jsx-runtime.54133100.js";import{I as K}from"./Icon.e983c43b.js";const v="data-js-hook",ct="behavior_",ut="state_";function W(){const t={};function n(e,r){return{}.hasOwnProperty.call(t,e)?t[e].push(r):t[e]=[r],this}function i(e,r){if(!{}.hasOwnProperty.call(t,e))return this;const a=t[e].indexOf(r);return a!==-1&&t[e].splice(a,1),this}function s(e,r){if(!{}.hasOwnProperty.call(t,e))return this;r=r||{};const a=t[e];for(let d=0,c=a.length;d<c;d++)a[d].call(this,r);return this}return this.addEventListener=n,this.removeEventListener=i,this.dispatchEvent=s,this.getRegisteredEvents=()=>t,this}function k(t,n){if(!t)return!1;let i=t.getAttribute(v);return i?(i=i.split(" "),i.indexOf(n)>-1):!1}function V(t,n){if(k(t,n))return n;if(n.indexOf(" ")!==-1){const s=v+" values cannot contain spaces!";throw new Error(s)}const i=t.getAttribute(v);return i!==null&&(n=i+" "+n),t.setAttribute(v,n),n}const j=ut+"atomic_init";function ht(t,n){if(!t||!t.classList){const i=t+' is not valid. Check that element is a DOM node with class "'+n+'"';throw new Error(i)}return t}function ft(t,n){const i=t.classList.contains(n)?t:t.querySelector("."+n);if(!i){const s=n+" not found on or in passed DOM node.";throw new Error(s)}return i}function pt(t,n){return ht(t,n),ft(t,n)}function Et(t){return k(t,j)?!1:(V(t,j),!0)}function _t(t,n,i){const e=(i||document).querySelectorAll(t),r=[];let a,d;for(let c=0,p=e.length;c<p;c++)d=e[c],k(d,j)===!1&&(a=new n(d),a.init(),r.push(a));return r}function Q(t,n){let i;if(k(t,n))return i=t,i;if(t){const s="["+v+"="+n+"]";i=t.querySelector(s)}if(!i){const s=n+" behavior not found on passed DOM node!";throw new Error(s)}return i}const I=ct+"flyout-menu",mt="["+v+"="+I;function st(t,n=!0){const i=Q(t,I),s=B(t),e=Q(t,I+"_content");let r=0;const a=0,d=1,c=2,p=3;let l,E,g;const L=$.bind(this),b=y.bind(this);let O,_=!0,x=!1;function B(o){const h=[],m=o.querySelectorAll(`${mt}_trigger]`);let D,S,U;for(let Y=m.length>>>0;Y--;){for(U=!1,D=m[Y],S=D.parentElement;S!==o;)S.getAttribute(v)&&S.getAttribute(v).split(" ").indexOf(I)!==-1?(U=!0,S=o):S=S.parentElement;U||h.unshift(m[Y])}return h}function q(o=!1){return r=o?p:a,s.forEach(h=>{w("expanded",h,o),h.addEventListener("click",u.bind(this)),h.addEventListener("touchstart",M,{passive:!0}),h.addEventListener("mouseover",G.bind(this)),h.addEventListener("mouseout",F.bind(this))}),e.setAttribute("data-open",o?"true":"false"),n&&!o&&e.setAttribute("hidden",""),J(),this}function w(o,h,m){const D=String(m);return h.setAttribute("aria-"+o,D),D}function M(){x=!0}function G(o){_||(x||this.dispatchEvent("triggerover",{target:this,trigger:o.target,type:"triggerover"}),x=!1)}function F(o){_||this.dispatchEvent("triggerout",{target:this,trigger:o.target,type:"triggerout"})}function u(o){if(!_)switch(this.dispatchEvent("triggerclick",{target:this,trigger:o.target,type:"triggerclick"}),o.preventDefault(),r){case a:case d:this.expand();break;case c:case p:this.collapse();break}}function P(){if(l==null||l.halt(),r===c||r===p)return this;if(r=c,n&&e.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!E||!g)return b(),this;const o=l==null?void 0:l.isAnimated();return o&&l.addEventListener(f.END_EVENT,b),E(),o||b(),this}function C(){if(l==null||l.halt(),r===d||r===a)return this;for(let h=0,m=s.length;h<m;h++)w("expanded",s[h],!1);if(e.setAttribute("data-open","false"),r=d,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!g||!E)return L(),this;const o=l==null?void 0:l.isAnimated();return o&&l.addEventListener(f.END_EVENT,L),g(),o||L(),this}function y(){r=p,e.setAttribute("data-open","true"),l&&l.removeEventListener(f.END_EVENT,b),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let o=0,h=s.length;o<h;o++)w("expanded",s[o],!0)}function $(){r=a,n&&e.setAttribute("hidden",""),l&&l.removeEventListener(f.END_EVENT,L),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function rt(o,h,m){l=o,h&&h!==g&&(g=h),m&&m!==E&&(E=m)}function at(){l&&l.remove();let o;l=o,E=o,g=o}function ot(){return{container:i,content:e,trigger:s}}function J(){return _&&(_=!1),!_}function lt(){return _||(_=!0),_}function dt(o){return O=o,this}const z=new W;return this.addEventListener=z.addEventListener,this.removeEventListener=z.removeEventListener,this.dispatchEvent=z.dispatchEvent,this.init=q,this.expand=P,this.collapse=C,this.setTransition=rt,this.clearTransition=at,this.getData=()=>O,this.getTransition=()=>l,this.getDom=ot,this.isAnimating=()=>r===c||r===d,this.isExpanded=()=>r===p,this.resume=J,this.setData=dt,this.suspend=lt,st.BASE_CLASS=I,this}function f(t,n,i){const s=n;let e=t;if(!i)throw new Error("Child transition argument must be defined!");const r=i;let a,d,c,p=!1,l=!1,E=!1;if(typeof s.CSS_PROPERTY>"u"||typeof s.BASE_CLASS>"u")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function g(){d&&p?(e.addEventListener(d,c),r.dispatchEvent(f.BEGIN_EVENT,{target:r,type:f.BEGIN_EVENT}),e.classList.add(f.ANIMATING_CLASS),l=!0):(r.dispatchEvent(f.BEGIN_EVENT,{target:r,type:f.BEGIN_EVENT}),c())}function L(){e.removeEventListener(d,c)}function b(u){return u&&u.propertyName!==s.CSS_PROPERTY?!1:(L(),e.classList.remove(f.ANIMATING_CLASS),r.dispatchEvent(f.END_EVENT,{target:r,type:f.END_EVENT}),l=!1,!0)}function O(){let u;for(u in s)({}).hasOwnProperty.call(s,u)&&s[u]!==s.BASE_CLASS&&e.classList.contains(s[u])&&e.classList.remove(s[u])}function _(){!l||(e.style.webkitTransitionDuration="0",e.style.mozTransitionDuration="0",e.style.oTransitionDuration="0",e.style.transitionDuration="0",e.removeEventListener(d,c),c(),e.style.webkitTransitionDuration="",e.style.mozTransitionDuration="",e.style.oTransitionDuration="",e.style.transitionDuration="")}function x(){_(),O(),e.classList.remove(s.BASE_CLASS)}function B(){e.classList.remove(f.NO_ANIMATION_CLASS),p=!0}function q(){e.classList.add(f.NO_ANIMATION_CLASS),p=!1}function w(u){if(!u){const $="Element does not have TransitionEnd event. It may be null!";throw new Error($)}let P;const C={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};let y;for(y in C)if({}.hasOwnProperty.call(C,y)&&typeof u.style[y]<"u"){P=C[y];break}return P}function M(u){x(),B(),e=u,e.classList.add(s.BASE_CLASS),d=w(e)}function G(u){if(p=!e.classList.contains(f.NO_ANIMATION_CLASS),c=b.bind(this),M(e),!u)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return e.classList.add(u),this}function F(u){return E||(O(),E=!0),e.classList.contains(u)?!1:(L(),e.classList.remove(a),a=u,g(),e.classList.add(a),!0)}return this.animateOff=q,this.animateOn=B,this.applyClass=F,this.halt=_,this.init=G,this.isAnimated=()=>p,this.remove=x,this.setElement=M,this}f.BEGIN_EVENT="transitionbegin";f.END_EVENT="transitionend";f.NO_ANIMATION_CLASS="u-no-animation";f.ANIMATING_CLASS="u-is-animating";const H={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function R(t){const n=new W,i=new f(t,H,this);let s=0;function e(){const g=t.scrollHeight+"px";t.style.maxHeight=g}function r(){window.removeEventListener("load",r),e()}function a(E){return i.init(E),window.addEventListener("load",r),window.addEventListener("resize",()=>{e()}),this}function d(){return e(),i.applyClass(H.MH_DEFAULT),(!s||t.scrollHeight>s)&&(s=t.scrollHeight),this}function c(){return i.applyClass(H.MH_SUMMARY),s=t.scrollHeight,this}function p(){return i.applyClass(H.MH_ZERO),s=t.scrollHeight,this}function l(){return t.style.maxHeight="",i.remove()}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=i.animateOff,this.animateOn=i.animateOn,this.halt=i.halt,this.isAnimated=i.isAnimated,this.setElement=i.setElement,this.refresh=e,this.remove=l,this.init=a,this.maxHeightDefault=d,this.maxHeightSummary=c,this.maxHeightZero=p,this}R.CLASSES=H;const T="o-expandable";function N(t){const n=pt(t,T);let i,s,e,r,a;function d(){if(!Et(n))return this;i=n.querySelector(`.${T}_header`),s=n.querySelector(`.${T}_content`),e=n.querySelector(`.${T}_label`);const l=n.classList.contains(`${T}__onload-open`);V(n,"behavior_flyout-menu"),V(i,"behavior_flyout-menu_trigger"),V(s,"behavior_flyout-menu_content");const E=l?R.CLASSES.MH_DEFAULT:R.CLASSES.MH_ZERO;return r=new R(s).init(E),a=new st(n),a.setTransition(r,r.maxHeightZero,r.maxHeightDefault),a.init(l),a.addEventListener("expandbegin",()=>{s.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),a.addEventListener("collapseend",()=>{s.classList.add("u-hidden")}),this}function c(){return e.textContent.trim()}this.init=d,this.expand=()=>a.expand(),this.collapse=()=>a.collapse(),this.isExpanded=()=>a.isExpanded(),this.refresh=()=>a.getTransition().refresh(),this.getLabelText=c;const p=new W;return this.addEventListener=p.addEventListener,this.removeEventListener=p.removeEventListener,this.dispatchEvent=p.dispatchEvent,this}N.BASE_CLASS=T;N.init=t=>_t(`.${N.BASE_CLASS}`,N,t);const tt=({header:t,children:n,inAccordion:i=!1,openOnLoad:s=!1,className:e="",...r})=>{it.exports.useEffect(()=>{i||N.init()},[i]);const a=["o-expandable","o-expandable__padded","o-expandable__background","o-expandable__border",e];return s&&a.push("o-expandable__onload-open"),Z("div",{className:nt(a),...r,children:[Z("button",{type:"button",className:"o-expandable_header o-expandable_target",title:t,children:[A("h3",{className:"h4 o-expandable_label",children:t}),Z("span",{className:"o-expandable_link",children:[A("span",{className:"o-expandable_cue o-expandable_cue-open",children:A(K,{name:"plus-round",alt:"plus-round"})}),A("span",{className:"o-expandable_cue o-expandable_cue-close",children:A(K,{name:"minus-round",alt:"minus-round"})})]})]}),A("div",{className:"o-expandable_content",children:n})]})};try{tt.displayName="Expandable",tt.__docgenInfo={description:"",displayName:"Expandable",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},inAccordion:{defaultValue:{value:"false"},description:"",name:"inAccordion",required:!1,type:{name:"boolean"}},openOnLoad:{defaultValue:{value:"false"},description:"",name:"openOnLoad",required:!1,type:{name:"boolean"}}}}}catch{}const et=({groupId:t,accordion:n=!1,children:i,className:s="",...e})=>{const r=["o-expandable-group",s];n&&r.push("o-expandable-group__accordion"),it.exports.useEffect(()=>{!n||N.init(document.querySelector(`#${t}`))},[n,t]);const a=X.Children.map(i,d=>X.isValidElement(d)&&n?X.cloneElement(d,{inAccordion:n}):d);return A("div",{id:t,className:nt(r),...e,children:a})};try{et.displayName="ExpandableGroup",et.__docgenInfo={description:"",displayName:"ExpandableGroup",props:{groupId:{defaultValue:null,description:"",name:"groupId",required:!0,type:{name:"string"}},accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}}}}}catch{}export{et as E,tt as a};
//# sourceMappingURL=ExpandableGroup.bf2d5082.js.map

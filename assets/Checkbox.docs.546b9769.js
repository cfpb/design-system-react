import{r as x,j as e,a as c,F as p}from"./jsx-runtime.3c5b5edf.js";import{M as f,C as s}from"./index.275d3dd6.js";import{C as g,D as y,a as C,b as a,L as w,c as v}from"./Checkbox.stories.79769ddb.js";import{h as L,n as T}from"./chunk-DXNAW7Q2.a6e6e57c.js";import{u as d}from"./index.eb567995.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.92387c7c.js";import"../sb-preview/runtime.js";import"./index.e850844b.js";import"./isNativeReflectConstruct.8b039ce4.js";import"./index.c8a4389a.js";import"./index.ae84c53b.js";import"./extends.cc011e2f.js";import"./index.0cd5de07.js";import"./_baseIsEqual.5f277acd.js";import"./uniq.3b6f40f1.js";import"./index.67736049.js";var D=0,H=i=>i.button===D&&!i.altKey&&!i.ctrlKey&&!i.metaKey&&!i.shiftKey,M=(i,t=o=>{})=>{H(i)&&(i.preventDefault(),t(i))},b=class extends x.exports.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:i,title:t=i,story:o,name:r=o}=this.props;if(t&&r){let n=await L(t,r);this.setState({href:n})}},this.handleClick=()=>{let{kind:i,title:t=i,story:o,name:r=o}=this.props;t&&r&&T({title:t,name:r})}}componentDidMount(){this.updateHref()}componentDidUpdate(i){let{kind:t,title:o,story:r,name:n}=this.props;(i.kind!==t||i.story!==r||i.title!==o||i.name!==n)&&this.updateHref()}render(){let{kind:i,title:t=i,story:o,name:r=o,children:n,...u}=this.props,{href:m}=this.state;return e("a",{href:m,onClick:k=>M(k,this.handleClick),...u,children:n})}};b.defaultProps={children:void 0};var l=b;function h(i){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li"},d(),i.components);return c(p,{children:[e(f,{of:g,name:"Overview"}),`
`,e(t.h1,{id:"checkbox",children:"Checkbox"}),`
`,c(t.p,{children:["Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use ",e(t.a,{href:"?path=/story/components-radio--default-radio",children:"radio buttons"})," when the user can choose only one option out of a list."]}),`
`,e("br",{}),`
`,e(t.h2,{id:"standard-checkboxes",children:"Standard checkboxes"}),`
`,e(s,{of:y,withToolbar:!0,additionalActions:[{title:e(l,{kind:"Components/checkbox",story:"Default checkbox",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(s,{of:C,withToolbar:!0,additionalActions:[{title:e(l,{kind:"Components/checkbox",story:"Checkbox With Helper",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(t.h3,{id:"standard-checkbox-states",children:"Standard checkbox states"}),`
`,c("div",{className:"u-mt20",children:[e(a,{id:"checkbox",label:"Label",name:"checkbox"}),e("br",{}),e(a,{id:"checkbox-hover",label:"Hover",name:"checkbox-hover",className:"hover"}),e("br",{}),e(a,{id:"checkbox-focus",label:"Focus",name:"checkbox-focus",className:"focus"}),e("br",{}),e(a,{id:"checkbox-selected",label:"Selected",name:"checkbox-selected",defaultChecked:"true"}),e("br",{}),e(a,{id:"checkbox-disabled",label:"Disabled",name:"checkbox-disabled",isDisabled:"true"})]}),`
`,e("br",{}),`
`,e(t.h2,{id:"large-target-area-checkboxes",children:"Large target area checkboxes"}),`
`,e(t.p,{children:"For better usability, consider using checkboxes with large target areas. These are easier to interact with (especially on smaller screens) and harder to miss. They are especially desirable when the form will have heavy mobile usage. Given the amount of real estate they occupy, they're probably not suited for all use cases; for example, they may not work well for terms of service agreement checkboxes."}),`
`,e(s,{of:w,withToolbar:!0,additionalActions:[{title:e(l,{kind:"Components/checkbox",story:"Large Checkbox",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(s,{of:v,withToolbar:!0,additionalActions:[{title:e(l,{kind:"Components/checkbox",story:"Large Checkbox With Helper",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(t.h3,{id:"large-checkbox-states",children:"Large checkbox states"}),`
`,c("div",{className:"u-mt20",children:[e(a,{id:"large-checkbox",label:"Label",name:"large-checkbox",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-hover",label:"Hover",name:"large-checkbox-hover",className:"hover",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-focus",label:"Focus",name:"large-checkbox-focus",className:"focus",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-selected",label:"Selected",name:"large-checkbox-selected",defaultChecked:"true",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-disabled",label:"Disabled",name:"large-checkbox-disabled",isDisabled:"true",isLarge:"true"})]}),`
`,e("br",{}),`
`,e(t.h2,{id:"guidelines",children:"Guidelines"}),`
`,e("br",{}),`
`,e(t.h3,{id:"content-guidelines",children:"Content guidelines"}),`
`,c(t.ul,{children:[`
`,e(t.li,{children:"Label text should be concise"}),`
`]}),`
`,e(t.h3,{id:"stylistic-guidelines",children:"Stylistic guidelines"}),`
`,c(t.ul,{children:[`
`,e(t.li,{children:"Text spacing should inform spacing of checkboxes and checkbox should be vertically centered with the first line of text in an option."}),`
`]}),`
`,e("br",{}),`
`,e(t.h2,{id:"behavior",children:"Behavior"}),`
`,e(t.p,{children:"Selecting the checkbox or touching the label text next to it should toggle the state of the checkbox on and off."}),`
`,e(t.p,{children:"To optimize usability, consider using checkboxes with large target areas. If these won't fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45px and that it includes the text label."}),`
`,e("br",{}),`
`,e(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e(t.p,{children:"To optimize screen reader accessibility, lay out checkboxes vertically rather than horizontally."})]})}function q(i={}){const{wrapper:t}=Object.assign({},d(),i.components);return t?e(t,Object.assign({},i,{children:e(h,i)})):h(i)}export{q as default};
//# sourceMappingURL=Checkbox.docs.546b9769.js.map

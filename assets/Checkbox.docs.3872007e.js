import{r as p,j as e,a as s,F as f}from"./jsx-runtime.5f84dc07.js";import{M as g,a as h}from"./index.02a35882.js";import{C as y,D as C,a as w,L as v,b as L}from"./Checkbox.stories.dd8d3928.js";import{C as a}from"./Well.1505dc1f.js";import{h as T,n as D}from"./chunk-DXNAW7Q2.a6e6e57c.js";import{u}from"./index.45a0dfff.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.c40f8ce4.js";import"../sb-preview/runtime.js";import"./index.e850844b.js";import"./floating-ui.dom.esm.1a703617.js";import"./index.40d0d0b8.js";import"./index.ae84c53b.js";import"./extends.cc011e2f.js";import"./index.0cd5de07.js";import"./_baseIsEqual.5f277acd.js";import"./uniq.3b6f40f1.js";import"./index.67736049.js";import"./Dropdown.57379926.js";import"./Icon.036a1d6a.js";import"./ExpandableGroup.c67ed578.js";var H=0,M=i=>i.button===H&&!i.altKey&&!i.ctrlKey&&!i.metaKey&&!i.shiftKey,S=(i,t=o=>{})=>{M(i)&&(i.preventDefault(),t(i))},l,N=(l=class extends p.exports.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:o=t,story:c,name:r=c}=this.props;if(o&&r){let n=await T(o,r);this.setState({href:n})}},this.handleClick=()=>{let{kind:t,title:o=t,story:c,name:r=c}=this.props;o&&r&&D({title:o,name:r})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:o,title:c,story:r,name:n}=this.props;(t.kind!==o||t.story!==r||t.title!==c||t.name!==n)&&this.updateHref()}render(){let{kind:t,title:o=t,story:c,name:r=c,children:n,...m}=this.props,{href:k}=this.state;return e("a",{href:k,onClick:x=>S(x,this.handleClick),...m,children:n})}},(()=>{l.defaultProps={children:void 0}})(),l),d=N;function b(i){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li"},u(),i.components);return s(f,{children:[e(g,{of:y,name:"Overview"}),`
`,e(t.h1,{id:"checkbox",children:"Checkbox"}),`
`,s(t.p,{children:["Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use ",e(t.a,{href:"?path=/story/components-radio--default-radio",children:"radio buttons"})," when the user can choose only one option out of a list."]}),`
`,e("br",{}),`
`,e(t.h2,{id:"standard-checkboxes",children:"Standard checkboxes"}),`
`,e(h,{of:C,withToolbar:!0,additionalActions:[{title:e(d,{kind:"Components/checkbox",story:"Default checkbox",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(h,{of:w,withToolbar:!0,additionalActions:[{title:e(d,{kind:"Components/checkbox",story:"Checkbox With Helper",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(t.h3,{id:"standard-checkbox-states",children:"Standard checkbox states"}),`
`,s("div",{className:"u-mt20",children:[e(a,{id:"checkbox",label:"Label",name:"checkbox"}),e("br",{}),e(a,{id:"checkbox-hover",label:"Hover",name:"checkbox-hover",className:"hover"}),e("br",{}),e(a,{id:"checkbox-focus",label:"Focus",name:"checkbox-focus",className:"focus"}),e("br",{}),e(a,{id:"checkbox-selected",label:"Selected",name:"checkbox-selected",defaultChecked:"true"}),e("br",{}),e(a,{id:"checkbox-disabled",label:"Disabled",name:"checkbox-disabled",isDisabled:"true"})]}),`
`,e("br",{}),`
`,e(t.h2,{id:"large-target-area-checkboxes",children:"Large target area checkboxes"}),`
`,e(t.p,{children:"For better usability, consider using checkboxes with large target areas. These are easier to interact with (especially on smaller screens) and harder to miss. They are especially desirable when the form will have heavy mobile usage. Given the amount of real estate they occupy, they're probably not suited for all use cases; for example, they may not work well for terms of service agreement checkboxes."}),`
`,e(h,{of:v,withToolbar:!0,additionalActions:[{title:e(d,{kind:"Components/checkbox",story:"Large Checkbox",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(h,{of:L,withToolbar:!0,additionalActions:[{title:e(d,{kind:"Components/checkbox",story:"Large Checkbox With Helper",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(t.h3,{id:"large-checkbox-states",children:"Large checkbox states"}),`
`,s("div",{className:"u-mt20",children:[e(a,{id:"large-checkbox",label:"Label",name:"large-checkbox",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-hover",label:"Hover",name:"large-checkbox-hover",className:"hover",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-focus",label:"Focus",name:"large-checkbox-focus",className:"focus",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-selected",label:"Selected",name:"large-checkbox-selected",defaultChecked:"true",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-disabled",label:"Disabled",name:"large-checkbox-disabled",isDisabled:"true",isLarge:"true"})]}),`
`,e("br",{}),`
`,e(t.h2,{id:"guidelines",children:"Guidelines"}),`
`,e("br",{}),`
`,e(t.h3,{id:"content-guidelines",children:"Content guidelines"}),`
`,s(t.ul,{children:[`
`,e(t.li,{children:"Label text should be concise"}),`
`]}),`
`,e(t.h3,{id:"stylistic-guidelines",children:"Stylistic guidelines"}),`
`,s(t.ul,{children:[`
`,e(t.li,{children:"Text spacing should inform spacing of checkboxes and checkbox should be vertically centered with the first line of text in an option."}),`
`]}),`
`,e("br",{}),`
`,e(t.h2,{id:"behavior",children:"Behavior"}),`
`,e(t.p,{children:"Selecting the checkbox or touching the label text next to it should toggle the state of the checkbox on and off."}),`
`,e(t.p,{children:"To optimize usability, consider using checkboxes with large target areas. If these won't fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45px and that it includes the text label."}),`
`,e("br",{}),`
`,e(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e(t.p,{children:"To optimize screen reader accessibility, lay out checkboxes vertically rather than horizontally."})]})}function Z(i={}){const{wrapper:t}=Object.assign({},u(),i.components);return t?e(t,Object.assign({},i,{children:e(b,i)})):b(i)}export{Z as default};
//# sourceMappingURL=Checkbox.docs.3872007e.js.map

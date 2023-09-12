import{r as x,j as e,a as l,F as p}from"./jsx-runtime.54133100.js";import{M as f,a as s}from"./index.b62f957b.js";import{C as g,D as y,a as C,L as w,b as v}from"./Checkbox.stories.e1c80621.js";import{C as a}from"./Well.6e567983.js";import{h as L,n as D}from"./chunk-DXNAW7Q2.3c98b178.js";import{u as d}from"./index.daeded7c.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.25f2457a.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF.3102393f.js";import"./isNativeReflectConstruct.c66bbbb3.js";import"./index.a2b6e612.js";import"./index.ae84c53b.js";import"./extends.cc011e2f.js";import"./index.0d5a8cb7.js";import"./_baseIsEqual.a652f15c.js";import"./uniq.1538566d.js";import"./index.67736049.js";import"./Dropdown.54462f5d.js";import"./Icon.11d1187e.js";import"./ExpandableGroup.6781f7fe.js";var T=0,H=i=>i.button===T&&!i.altKey&&!i.ctrlKey&&!i.metaKey&&!i.shiftKey,M=(i,t=o=>{})=>{H(i)&&(i.preventDefault(),t(i))},b=class extends x.exports.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:i,title:t=i,story:o,name:r=o}=this.props;if(t&&r){let c=await L(t,r);this.setState({href:c})}},this.handleClick=()=>{let{kind:i,title:t=i,story:o,name:r=o}=this.props;t&&r&&D({title:t,name:r})}}componentDidMount(){this.updateHref()}componentDidUpdate(i){let{kind:t,title:o,story:r,name:c}=this.props;(i.kind!==t||i.story!==r||i.title!==o||i.name!==c)&&this.updateHref()}render(){let{kind:i,title:t=i,story:o,name:r=o,children:c,...u}=this.props,{href:m}=this.state;return e("a",{href:m,onClick:k=>M(k,this.handleClick),...u,children:c})}};b.defaultProps={children:void 0};var n=b;function h(i){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li"},d(),i.components);return l(p,{children:[e(f,{of:g,name:"Overview"}),`
`,e(t.h1,{id:"checkbox",children:"Checkbox"}),`
`,l(t.p,{children:["Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use ",e(t.a,{href:"?path=/story/components-radio--default-radio",children:"radio buttons"})," when the user can choose only one option out of a list."]}),`
`,e("br",{}),`
`,e(t.h2,{id:"standard-checkboxes",children:"Standard checkboxes"}),`
`,e(s,{of:y,withToolbar:!0,additionalActions:[{title:e(n,{kind:"Components/checkbox",story:"Default checkbox",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(s,{of:C,withToolbar:!0,additionalActions:[{title:e(n,{kind:"Components/checkbox",story:"Checkbox With Helper",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(t.h3,{id:"standard-checkbox-states",children:"Standard checkbox states"}),`
`,l("div",{className:"u-mt20",children:[e(a,{id:"checkbox-default",label:"Default",name:"checkbox"}),e("br",{}),e(a,{id:"checkbox-hover",label:"Hover",name:"checkbox-hover",inputClassName:"hover"}),e("br",{}),e(a,{id:"checkbox-focus",label:"Focus",name:"checkbox-focus",inputClassName:"focus"}),e("br",{}),e(a,{id:"checkbox-selected",label:"Selected",name:"checkbox-selected",defaultChecked:"true"}),e("br",{}),e(a,{id:"checkbox-disabled",label:"Disabled",name:"checkbox-disabled",disabled:!0}),e("br",{}),e(a,{id:"checkbox-disabled-selected",label:"Disabled selected",name:"checkbox-disabled-selected",disabled:!0,defaultChecked:!0})]}),`
`,e("br",{}),`
`,e(t.h2,{id:"large-target-area-checkboxes",children:"Large target area checkboxes"}),`
`,e(t.p,{children:"For better usability, consider using checkboxes with large target areas. These are easier to interact with (especially on smaller screens) and harder to miss. They are especially desirable when the form will have heavy mobile usage. Given the amount of real estate they occupy, they're probably not suited for all use cases; for example, they may not work well for terms of service agreement checkboxes."}),`
`,e(s,{of:w,withToolbar:!0,additionalActions:[{title:e(n,{kind:"Components/checkbox",story:"Large Checkbox",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(s,{of:v,withToolbar:!0,additionalActions:[{title:e(n,{kind:"Components/checkbox",story:"Large Checkbox With Helper",style:{color:"#2E3438"},children:"View details"})}]}),`
`,e(t.h3,{id:"large-checkbox-states",children:"Large checkbox states"}),`
`,l("div",{className:"u-mt20",children:[e(a,{id:"large-checkbox",label:"Default",name:"large-checkbox",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-hover",label:"Hover",name:"large-checkbox-hover",inputClassName:"hover",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-focus",label:"Focus",name:"large-checkbox-focus",inputClassName:"focus",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-selected",label:"Selected",name:"large-checkbox-selected",defaultChecked:"true",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-disabled",label:"Disabled",name:"large-checkbox-disabled",disabled:"true",isLarge:"true"}),e("br",{}),e(a,{id:"large-checkbox-disabled-selected",label:"Disabled selected",name:"large-checkbox-disabled",disabled:"true",isLarge:"true",defaultChecked:!0})]}),`
`,e("br",{}),`
`,e(t.h2,{id:"guidelines",children:"Guidelines"}),`
`,e("br",{}),`
`,e(t.h3,{id:"content-guidelines",children:"Content guidelines"}),`
`,l(t.ul,{children:[`
`,e(t.li,{children:"Label text should be concise"}),`
`]}),`
`,e(t.h3,{id:"stylistic-guidelines",children:"Stylistic guidelines"}),`
`,l(t.ul,{children:[`
`,e(t.li,{children:"Text spacing should inform spacing of checkboxes and checkbox should be vertically centered with the first line of text in an option."}),`
`]}),`
`,e("br",{}),`
`,e(t.h2,{id:"behavior",children:"Behavior"}),`
`,e(t.p,{children:"Selecting the checkbox or touching the label text next to it should toggle the state of the checkbox on and off."}),`
`,e(t.p,{children:"To optimize usability, consider using checkboxes with large target areas. If these won't fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45px and that it includes the text label."}),`
`,e("br",{}),`
`,e(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e(t.p,{children:"To optimize screen reader accessibility, lay out checkboxes vertically rather than horizontally."})]})}function R(i={}){const{wrapper:t}=Object.assign({},d(),i.components);return t?e(t,Object.assign({},i,{children:e(h,i)})):h(i)}export{R as default};
//# sourceMappingURL=Checkbox.docs.9e0f56db.js.map

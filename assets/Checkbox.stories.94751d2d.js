import{C as d}from"./Checkbox.86ef18cf.js";import{j as _}from"./jsx-runtime.54133100.js";const{useArgs:H}=__STORYBOOK_MODULE_CLIENT_API__,D={title:"Components/Checkbox",component:d,parameters:{docs:{description:{component:"Checkbox Component"}}}};function c({id:e,label:C,...f}){const[{checked:L},W]=H();return _(d,{...f,id:e,label:C,onChange:()=>W({checked:!L})})}const r={render:e=>c(e),name:"Default checkbox",args:{id:"default",name:"default",label:"Default checkbox",checked:!1}},a={render:e=>c(e),args:{...r.args,id:"CheckboxWithHelper",name:"CheckboxWithHelper",label:"Checkbox With Helper",helperText:"This is optional helper text for the checkbox"}},o={render:e=>c(e),args:{...r.args,id:"LargeCheckbox",name:"LargeCheckbox",label:"Large Checkbox",isLarge:!0}},t={render:e=>c(e),args:{...r.args,id:"LargeCheckboxWithHelper",name:"LargeCheckboxWithHelper",label:"Large Checkbox With Helper",isLarge:!0,helperText:"This is optional helper text for the large checkbox"}};var n,s,h;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  name: 'Default checkbox',
  args: {
    id: 'default',
    name: 'default',
    label: 'Default checkbox',
    checked: false
  }
}`,...(h=(s=r.parameters)==null?void 0:s.docs)==null?void 0:h.source}}};var l,p,b;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...DefaultCheckbox.args,
    id: 'CheckboxWithHelper',
    name: 'CheckboxWithHelper',
    label: 'Checkbox With Helper',
    helperText: 'This is optional helper text for the checkbox'
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var i,x,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckbox',
    name: 'LargeCheckbox',
    label: 'Large Checkbox',
    isLarge: true
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,m,u;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: _arguments => CheckboxWrapper(_arguments),
  args: {
    ...DefaultCheckbox.args,
    id: 'LargeCheckboxWithHelper',
    name: 'LargeCheckboxWithHelper',
    label: 'Large Checkbox With Helper',
    isLarge: true,
    helperText: 'This is optional helper text for the large checkbox'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const T=["DefaultCheckbox","CheckboxWithHelper","LargeCheckbox","LargeCheckboxWithHelper"],j=Object.freeze(Object.defineProperty({__proto__:null,default:D,DefaultCheckbox:r,CheckboxWithHelper:a,LargeCheckbox:o,LargeCheckboxWithHelper:t,__namedExportsOrder:T},Symbol.toStringTag,{value:"Module"}));export{j as C,r as D,o as L,a,t as b};
//# sourceMappingURL=Checkbox.stories.94751d2d.js.map

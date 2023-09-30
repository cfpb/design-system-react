import{C as f}from"./Checkbox.ef51a03a.js";import{r as S,j as y}from"./jsx-runtime.54133100.js";import"./index.cfa9e344.js";import"./_commonjsHelpers.712cc82f.js";const r=({onChange:e,...C})=>{const[T,L]=S.exports.useState(!1);return y(f,{...C,checked:T,onChange:s=>{e==null||e(s),L(s.target.checked)}})};try{r.displayName="CheckboxTestWrapper",r.__docgenInfo={description:"",displayName:"CheckboxTestWrapper",props:{id:{defaultValue:null,description:"Unique identifier for this checkbox",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Text that appears next to the checkbox for clarification of purpose",name:"label",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes applied to the checkbox's wrapper element",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Is checkboxed checked?",name:"checked",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"Additional text to further clarify purpose of checkbox",name:"helperText",required:!1,type:{name:"ReactNode"}},inputClassName:{defaultValue:null,description:"Additional CSS classes that will be applied to checkbox input element",name:"inputClassName",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"React Ref to be enable direct access and control of the input element",name:"inputRef",required:!1,type:{name:"string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null"}},isLarge:{defaultValue:null,description:'Apply the "Large" styles for this element?',name:"isLarge",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"A name for this checkbox's value that can be referenced in javascript",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Is this checkbox disabled?",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"An event handler function that will be called when the checkbox's value is changed",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const w={title:"Components/Checkboxes",component:f,argTypes:{disabled:{control:"boolean"},isLarge:{control:"boolean"}},parameters:{docs:{description:{component:`Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case. Use [radio buttons](https://cfpb.github.io/design-system/components/radio-buttons) when the user can choose only one option from a list.

Source: https://cfpb.github.io/design-system/components/checkboxes`}}}},a={render:e=>r(e),name:"Standard checkbox",args:{id:"standard",name:"standard",label:"Standard checkbox",checked:!1}},t={render:e=>r(e),name:"Standard checkbox with helper text",args:{...a.args,id:"StandardCheckboxWithHelper",name:"StandardCheckboxWithHelper",label:"Standard checkbox with helper text",helperText:"This is optional helper text for the standard checkbox"}},n={render:e=>r(e),name:"Large target area checkbox",args:{...a.args,id:"LargeTargetAreaCheckbox",name:"LargeTargetAreaCheckbox",label:"Large target area checkbox",isLarge:!0}},o={render:e=>r(e),name:"Large target area checkbox helper text",args:{...a.args,id:"LargeCheckboxWithHelperText",name:"LargeCheckboxWithHelperText",label:"Large target area checkbox helper text",isLarge:!0,helperText:"This is optional helper text for the large target area checkbox"}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Standard checkbox',
  args: {
    id: 'standard',
    name: 'standard',
    label: 'Standard checkbox',
    checked: false
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,h,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Standard checkbox with helper text',
  args: {
    ...StandardCheckbox.args,
    id: 'StandardCheckboxWithHelper',
    name: 'StandardCheckboxWithHelper',
    label: 'Standard checkbox with helper text',
    helperText: 'This is optional helper text for the standard checkbox'
  }
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var u,m,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Large target area checkbox',
  args: {
    ...StandardCheckbox.args,
    id: 'LargeTargetAreaCheckbox',
    name: 'LargeTargetAreaCheckbox',
    label: 'Large target area checkbox',
    isLarge: true
  }
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,g,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: _arguments => CheckboxTestWrapper(_arguments),
  name: 'Large target area checkbox helper text',
  args: {
    ...StandardCheckbox.args,
    id: 'LargeCheckboxWithHelperText',
    name: 'LargeCheckboxWithHelperText',
    label: 'Large target area checkbox helper text',
    isLarge: true,
    helperText: 'This is optional helper text for the large target area checkbox'
  }
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const V=["StandardCheckbox","StandardCheckboxWithHelperText","LargeTargetAreaCheckbox","LargeTargetAreaCheckboxWithHelperText"];export{n as LargeTargetAreaCheckbox,o as LargeTargetAreaCheckboxWithHelperText,a as StandardCheckbox,t as StandardCheckboxWithHelperText,V as __namedExportsOrder,w as default};
//# sourceMappingURL=Checkbox.stories.ce152cf1.js.map

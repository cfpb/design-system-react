import{j as a}from"./jsx-runtime-u17CrQMm.js";import"./iframe-BshN9ndY.js";import{T as m}from"./text-introduction-CkmeIcmI.js";import"./checkbox-CyRe_312.js";import{I as d}from"./icon-BzwNyO6v.js";import"./well-DGcJggR5.js";import"./paragraph-Bf3AjPuG.js";import"./summary-D0rT5JlB.js";import"./text-area-ChmB3SDc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2aRlxyX.js";const _={title:"Components (Verified)/Text inputs/Text input",tags:["autodocs"],component:m,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},e={args:{name:"Enabled",id:"Enabled",value:"Enabled",type:"text"}},s={args:{...e.args,name:"Hover",id:"Hover",value:"Hover"},render:r=>a.jsx(m,{...r,className:"hover"})},n={args:{...e.args,name:"Focus",id:"Focus",value:"Focus"},render:r=>a.jsx(m,{...r,className:"focus"})},t={args:{...e.args,value:"Disabled",name:"Disabled",id:"Disabled",disabled:!0}},o={args:{...e.args,value:"Success",name:"Success",id:"Success",status:"success"}},c={args:{...e.args,value:"Warning",name:"Warning",id:"Warning",status:"warning"}},u={args:{...e.args,value:"Error",name:"Error",id:"Error",status:"error"}},l={name:"Full width",args:{...e.args,value:"Input text",name:"fullWidth",id:"fullWidth",isFullWidth:!0}},i={name:"Search input",args:{...e.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",name:"SearchInput",id:"SearchInput",type:"search",isFullWidth:!0},render:r=>a.jsxs("div",{className:"o-search-input",children:[a.jsxs("div",{className:"o-search-input__input",children:[a.jsx("label",{htmlFor:"SearchInput",className:"o-search-input__input-label","aria-label":"Search for a term",children:a.jsx(d,{name:"search"})}),a.jsx(m,{...r}),a.jsx("button",{type:"reset","aria-label":"Clear search",title:"Clear search",children:a.jsx(d,{name:"error"})})]}),a.jsx("button",{className:"a-btn",type:"submit","aria-label":"Search for term(s)",children:"Search"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Search input',
  args: {
    ...Enabled.args,
    value: "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",
    name: 'SearchInput',
    id: 'SearchInput',
    type: 'search',
    isFullWidth: true
  },
  render: _arguments => <div className='o-search-input'>
      <div className='o-search-input__input'>
        <label htmlFor='SearchInput' className='o-search-input__input-label' aria-label='Search for a term'>
          <Icon name='search' />
        </label>
        <TextInput {..._arguments} />
        <button type='reset' aria-label='Clear search' title='Clear search'>
          <Icon name='error' />
        </button>
      </div>
      <button className='a-btn' type='submit' aria-label='Search for term(s)'>
        Search
      </button>
    </div>
}`,...i.parameters?.docs?.source}}};const f=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth","SearchInput"];export{t as Disabled,e as Enabled,u as Error,n as Focus,l as FullWidth,s as Hover,i as SearchInput,o as Success,c as Warning,f as __namedExportsOrder,_ as default};

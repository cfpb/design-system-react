import{j as a}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{T as m}from"./TextIntroduction-s28_FXD6.js";import{I as d}from"./Dropdown-D_RsKWvm.js";import"./Checkbox-uScmMply.js";import"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-Dpxs-BUW.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-yUFgnPhD.js";const $={title:"Components (Verified)/Text inputs/Text input",tags:["autodocs"],component:m,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},e={args:{name:"Enabled",id:"Enabled",value:"Enabled",type:"text"}},s={args:{...e.args,name:"Hover",id:"Hover",value:"Hover"},render:r=>a.jsx(m,{...r,className:"hover"})},n={args:{...e.args,name:"Focus",id:"Focus",value:"Focus"},render:r=>a.jsx(m,{...r,className:"focus"})},t={args:{...e.args,value:"Disabled",name:"Disabled",id:"Disabled",disabled:!0}},o={args:{...e.args,value:"Success",name:"Success",id:"Success",status:"success"}},c={args:{...e.args,value:"Warning",name:"Warning",id:"Warning",status:"warning"}},u={args:{...e.args,value:"Error",name:"Error",id:"Error",status:"error"}},l={name:"Full width",args:{...e.args,value:"Input text",name:"fullWidth",id:"fullWidth",isFullWidth:!0}},i={name:"Search input",args:{...e.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",name:"SearchInput",id:"SearchInput",type:"search",isFullWidth:!0},render:r=>a.jsxs("div",{className:"o-search-input",children:[a.jsxs("div",{className:"o-search-input__input",children:[a.jsx("label",{htmlFor:"SearchInput",className:"o-search-input__input-label","aria-label":"Search for a term",children:a.jsx(d,{name:"search"})}),a.jsx(m,{...r}),a.jsx("button",{type:"reset","aria-label":"Clear search",title:"Clear search",children:a.jsx(d,{name:"error"})})]}),a.jsx("button",{className:"a-btn",type:"submit","aria-label":"Search for term(s)",children:"Search"})]})};var p,h,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text'
  }
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,v,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,E,F;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...(F=(E=n.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,I,_;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var f,y,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var N,T,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var H,w,C;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,O,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var V,q,z;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const ee=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth","searchInput"];export{t as Disabled,e as Enabled,u as Error,n as Focus,l as FullWidth,s as Hover,o as Success,c as Warning,ee as __namedExportsOrder,$ as default,i as searchInput};

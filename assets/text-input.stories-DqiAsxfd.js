import{j as a}from"./jsx-runtime-u17CrQMm.js";import"./iframe-gR5W3M5H.js";import{T as m}from"./text-introduction-B8vx4SeR.js";import"./checkbox-C-WY2_jk.js";import{I as p}from"./icon-Yf8ouKNS.js";import"./well-DZ2rRPSz.js";import"./paragraph-CO_xtPmv.js";import"./summary-Co17e7kH.js";import"./text-area-CVNdmVmG.js";import"./preload-helper-lKO2eUTi.js";import"./index-RfPICASp.js";const{expect:h,userEvent:g,within:b}=__STORYBOOK_MODULE_TEST__,H={title:"Components (Verified)/Text inputs/Text input",tags:["autodocs"],component:m,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},e={args:{name:"Enabled",id:"Enabled",value:"Enabled",type:"text"},play:async({canvasElement:r})=>{const d=b(r).getByRole("textbox");h(d).toHaveValue("Enabled"),await g.click(d),h(d).toHaveFocus()}},s={args:{...e.args,name:"Hover",id:"Hover",value:"Hover"},render:r=>a.jsx(m,{...r,className:"hover"})},n={args:{...e.args,name:"Focus",id:"Focus",value:"Focus"},render:r=>a.jsx(m,{...r,className:"focus"})},t={args:{...e.args,value:"Disabled",name:"Disabled",id:"Disabled",disabled:!0}},o={args:{...e.args,value:"Success",name:"Success",id:"Success",status:"success"}},c={args:{...e.args,value:"Warning",name:"Warning",id:"Warning",status:"warning"}},u={args:{...e.args,value:"Error",name:"Error",id:"Error",status:"error"}},l={name:"Full width",args:{...e.args,value:"Input text",name:"fullWidth",id:"fullWidth",isFullWidth:!0}},i={name:"Search input",args:{...e.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",name:"SearchInput",id:"SearchInput",type:"search",isFullWidth:!0},render:r=>a.jsxs("div",{className:"o-search-input",children:[a.jsxs("div",{className:"o-search-input__input",children:[a.jsx("label",{htmlFor:"SearchInput",className:"o-search-input__input-label","aria-label":"Search for a term",children:a.jsx(p,{name:"search"})}),a.jsx(m,{...r}),a.jsx("button",{type:"reset","aria-label":"Clear search",title:"Clear search",children:a.jsx(p,{name:"error"})})]}),a.jsx("button",{className:"a-btn",type:"submit","aria-label":"Search for term(s)",children:"Search"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    expect(input).toHaveValue('Enabled');
    await userEvent.click(input);
    expect(input).toHaveFocus();
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
}`,...i.parameters?.docs?.source}}};const N=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth","SearchInput"];export{t as Disabled,e as Enabled,u as Error,n as Focus,l as FullWidth,s as Hover,i as SearchInput,o as Success,c as Warning,N as __namedExportsOrder,H as default};

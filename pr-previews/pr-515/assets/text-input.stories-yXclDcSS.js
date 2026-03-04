import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as E}from"./iframe-BAWEeGWI.js";import{T as d,a as x}from"./text-introduction-CYLbvVSG.js";import"./checkbox-LxEse9XO.js";import{I as v}from"./icon-waBqc389.js";import"./well-BWvZQiPu.js";import"./paragraph-DVTKZjkY.js";import"./summary-IFh-VjM4.js";import"./text-area-R05uTqsv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dj9Ju8V8.js";const{expect:b,userEvent:f,within:_}=__STORYBOOK_MODULE_TEST__,C={title:"Components (Verified)/Text inputs/Text input",tags:["autodocs"],component:d,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},e={args:{name:"Enabled",id:"Enabled",value:"Enabled",type:"text"},play:async({canvasElement:r})=>{const s=_(r).getByRole("textbox");b(s).toHaveValue("Enabled"),await f.click(s),b(s).toHaveFocus()}},n={args:{...e.args,name:"Hover",id:"Hover",value:"Hover"},render:r=>a.jsx(d,{...r,className:"hover"})},t={args:{...e.args,name:"Focus",id:"Focus",value:"Focus"},render:r=>a.jsx(d,{...r,className:"focus"})},o={args:{...e.args,value:"Disabled",name:"Disabled",id:"Disabled",disabled:!0}},c={args:{...e.args,value:"Success",name:"Success",id:"Success",status:"success"}},l={args:{...e.args,value:"Warning",name:"Warning",id:"Warning",status:"warning"}},u={args:{...e.args,value:"Error",name:"Error",id:"Error",status:"error"}},i={name:"Full width",args:{...e.args,value:"Input text",name:"fullWidth",id:"fullWidth",isFullWidth:!0}},m={name:"Search input",args:{...e.args,value:"",placeholder:"Enter your search term(s)",name:"SearchInput",id:"SearchInput",type:"search",isFullWidth:!1,className:"a-text-input__full"},render:r=>{const{value:g,...s}=r,[S,h]=E.useState(g??"");return a.jsx("form",{onSubmit:p=>{p.preventDefault()},onReset:()=>h(""),children:a.jsxs("div",{className:"o-search-input",children:[a.jsxs("div",{className:"o-search-input__input",children:[a.jsx("label",{htmlFor:"SearchInput",className:"o-search-input__input-label","aria-label":"Search for a term",children:a.jsx(v,{name:"search"})}),a.jsx(d,{...s,value:S,onChange:p=>h(p.target.value)}),a.jsx("button",{type:"reset","aria-label":"Clear search",title:"Clear search",children:a.jsx(v,{name:"error"})})]}),a.jsx(x,{type:"submit","aria-label":"Search for term(s)",label:"Search"})]})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Search input',
  args: {
    ...Enabled.args,
    value: '',
    placeholder: 'Enter your search term(s)',
    name: 'SearchInput',
    id: 'SearchInput',
    type: 'search',
    isFullWidth: false,
    className: 'a-text-input__full'
  },
  render: args => {
    const {
      value: initialValue,
      ...restArgs
    } = args as TextInputProperties & {
      value: string;
    };
    const [value, setValue] = useState(initialValue ?? '');
    return <form onSubmit={e => {
      e.preventDefault();
    }} onReset={() => setValue('')}>
        <div className='o-search-input'>
          <div className='o-search-input__input'>
            <label htmlFor='SearchInput' className='o-search-input__input-label' aria-label='Search for a term'>
              <Icon name='search' />
            </label>
            <TextInput {...restArgs} value={value} onChange={e => setValue(e.target.value)} />
            <button type='reset' aria-label='Clear search' title='Clear search'>
              <Icon name='error' />
            </button>
          </div>
          <Button type='submit' aria-label='Search for term(s)' label='Search' />
        </div>
      </form>;
  }
}`,...m.parameters?.docs?.source}}};const R=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth","SearchInput"];export{o as Disabled,e as Enabled,u as Error,t as Focus,i as FullWidth,n as Hover,m as SearchInput,c as Success,l as Warning,R as __namedExportsOrder,C as default};

import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./icon-BCAy4L2c.js";import{n as a,t as o}from"./text-input-6AMN7eEx.js";import{n as s,t as c}from"./button-CV6fmIqH.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l=t(),s(),r(),a(),u=n(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components (Verified)/Text inputs/Text input`,tags:[`autodocs`],component:o,argTypes:{isFullWidth:{control:`boolean`},isDisabled:{control:`boolean`}}},h={args:{name:`Enabled`,id:`Enabled`,value:`Enabled`,type:`text`},play:async({canvasElement:e})=>{let t=p(e).getByRole(`textbox`);await d(t).toHaveValue(`Enabled`),await f.click(t),await d(t).toHaveFocus()}},g={args:{...h.args,name:`Hover`,id:`Hover`,value:`Hover`},render:e=>(0,u.jsx)(o,{...e,className:`hover`})},_={args:{...h.args,name:`Focus`,id:`Focus`,value:`Focus`},render:e=>(0,u.jsx)(o,{...e,className:`focus`})},v={args:{...h.args,value:`Disabled`,name:`Disabled`,id:`Disabled`,disabled:!0}},y={args:{...h.args,value:`Success`,name:`Success`,id:`Success`,status:`success`}},b={args:{...h.args,value:`Warning`,name:`Warning`,id:`Warning`,status:`warning`}},x={args:{...h.args,value:`Error`,name:`Error`,id:`Error`,status:`error`}},S={name:`Full width`,args:{...h.args,value:`Input text`,name:`fullWidth`,id:`fullWidth`,isFullWidth:!0}},C={name:`Search input`,argTypes:{isFullWidth:{control:!1}},args:{...h.args,value:``,placeholder:`Enter your search term(s)`,name:`SearchInput`,id:`SearchInput`,type:`search`},render:e=>{let{value:t,...n}=e,[r,a]=(0,l.useState)(t??``);return(0,u.jsx)(`form`,{onSubmit:e=>{e.preventDefault()},onReset:()=>a(``),children:(0,u.jsxs)(`div`,{className:`o-search-input`,children:[(0,u.jsxs)(`div`,{className:`o-search-input__input`,children:[(0,u.jsx)(`label`,{htmlFor:`SearchInput`,className:`o-search-input__input-label`,"aria-label":`Search for a term`,children:(0,u.jsx)(i,{name:`search`})}),(0,u.jsx)(o,{...n,value:r,onChange:e=>a(e.target.value)}),(0,u.jsx)(`button`,{type:`reset`,"aria-label":`Clear search`,title:`Clear search`,children:(0,u.jsx)(i,{name:`error`})})]}),(0,u.jsx)(c,{type:`submit`,"aria-label":`Search for term(s)`,label:`Search`})]})})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await expect(input).toHaveValue('Enabled');
    await userEvent.click(input);
    await expect(input).toHaveFocus();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Search input',
  argTypes: {
    isFullWidth: {
      control: false
    }
  },
  args: {
    ...Enabled.args,
    value: '',
    placeholder: 'Enter your search term(s)',
    name: 'SearchInput',
    id: 'SearchInput',
    type: 'search'
  },
  render: arguments_ => {
    const {
      value: initialValue,
      ...restArguments
    } = arguments_ as TextInputProperties & {
      value: string;
    };
    const [value, setValue] = useState(initialValue ?? '');
    return <form onSubmit={event_ => {
      event_.preventDefault();
    }} onReset={() => setValue('')}>
        <div className='o-search-input'>
          <div className='o-search-input__input'>
            <label htmlFor='SearchInput' className='o-search-input__input-label' aria-label='Search for a term'>
              <Icon name='search' />
            </label>
            <TextInput {...restArguments} value={value} onChange={event_ => setValue(event_.target.value)} />
            <button type='reset' aria-label='Clear search' title='Clear search'>
              <Icon name='error' />
            </button>
          </div>
          <Button type='submit' aria-label='Search for term(s)' label='Search' />
        </div>
      </form>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Enabled`,`Hover`,`Focus`,`Disabled`,`Success`,`Warning`,`Error`,`FullWidth`,`SearchInput`]})))()}T();export{v as Disabled,h as Enabled,x as Error,_ as Focus,S as FullWidth,g as Hover,C as SearchInput,y as Success,b as Warning,w as __namedExportsOrder,m as default};
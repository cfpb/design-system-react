import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./icon-DQzpY8_x.js";import{n as o,t as s}from"./text-input-Chd8C8DV.js";import{n as c,t as l}from"./button-DYd11KcV.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{u=t(n(),1),c(),i(),o(),d=r(),{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components (Verified)/Text inputs/Text input`,tags:[`autodocs`],component:s,argTypes:{isFullWidth:{control:`boolean`},isDisabled:{control:`boolean`}}},g={args:{name:`Enabled`,id:`Enabled`,value:`Enabled`,type:`text`},play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`);await f(t).toHaveValue(`Enabled`),await p.click(t),await f(t).toHaveFocus()}},_={args:{...g.args,name:`Hover`,id:`Hover`,value:`Hover`},render:e=>(0,d.jsx)(s,{...e,className:`hover`})},v={args:{...g.args,name:`Focus`,id:`Focus`,value:`Focus`},render:e=>(0,d.jsx)(s,{...e,className:`focus`})},y={args:{...g.args,value:`Disabled`,name:`Disabled`,id:`Disabled`,disabled:!0}},b={args:{...g.args,value:`Success`,name:`Success`,id:`Success`,status:`success`}},x={args:{...g.args,value:`Warning`,name:`Warning`,id:`Warning`,status:`warning`}},S={args:{...g.args,value:`Error`,name:`Error`,id:`Error`,status:`error`}},C={name:`Full width`,args:{...g.args,value:`Input text`,name:`fullWidth`,id:`fullWidth`,isFullWidth:!0}},w={name:`Search input`,argTypes:{isFullWidth:{control:!1}},args:{...g.args,value:``,placeholder:`Enter your search term(s)`,name:`SearchInput`,id:`SearchInput`,type:`search`},render:e=>{let{value:t,...n}=e,[r,i]=(0,u.useState)(t??``);return(0,d.jsx)(`form`,{onSubmit:e=>{e.preventDefault()},onReset:()=>i(``),children:(0,d.jsxs)(`div`,{className:`o-search-input`,children:[(0,d.jsxs)(`div`,{className:`o-search-input__input`,children:[(0,d.jsx)(`label`,{htmlFor:`SearchInput`,className:`o-search-input__input-label`,"aria-label":`Search for a term`,children:(0,d.jsx)(a,{name:`search`})}),(0,d.jsx)(s,{...n,value:r,onChange:e=>i(e.target.value)}),(0,d.jsx)(`button`,{type:`reset`,"aria-label":`Clear search`,title:`Clear search`,children:(0,d.jsx)(a,{name:`error`})})]}),(0,d.jsx)(l,{type:`submit`,"aria-label":`Search for term(s)`,label:`Search`})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Enabled`,`Hover`,`Focus`,`Disabled`,`Success`,`Warning`,`Error`,`FullWidth`,`SearchInput`]}))();export{y as Disabled,g as Enabled,S as Error,v as Focus,C as FullWidth,_ as Hover,w as SearchInput,b as Success,x as Warning,T as __namedExportsOrder,h as default};
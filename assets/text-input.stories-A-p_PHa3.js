import{a as e,n as t}from"./chunk-BneVvdWh.js";import{s as n}from"./iframe-DCec08tf.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{t as i}from"./icon-JFJl8TDW.js";import{A as a,r as o,t as s}from"./src-3xGxwBX5.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{c=e(n(),1),s(),l=r(),{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components (Verified)/Text inputs/Text input`,tags:[`autodocs`],component:o,argTypes:{isFullWidth:{control:`boolean`},isDisabled:{control:`boolean`}}},m={args:{name:`Enabled`,id:`Enabled`,value:`Enabled`,type:`text`},play:async({canvasElement:e})=>{let t=f(e).getByRole(`textbox`);await u(t).toHaveValue(`Enabled`),await d.click(t),await u(t).toHaveFocus()}},h={args:{...m.args,name:`Hover`,id:`Hover`,value:`Hover`},render:e=>(0,l.jsx)(o,{...e,className:`hover`})},g={args:{...m.args,name:`Focus`,id:`Focus`,value:`Focus`},render:e=>(0,l.jsx)(o,{...e,className:`focus`})},_={args:{...m.args,value:`Disabled`,name:`Disabled`,id:`Disabled`,disabled:!0}},v={args:{...m.args,value:`Success`,name:`Success`,id:`Success`,status:`success`}},y={args:{...m.args,value:`Warning`,name:`Warning`,id:`Warning`,status:`warning`}},b={args:{...m.args,value:`Error`,name:`Error`,id:`Error`,status:`error`}},x={name:`Full width`,args:{...m.args,value:`Input text`,name:`fullWidth`,id:`fullWidth`,isFullWidth:!0}},S={name:`Search input`,args:{...m.args,value:``,placeholder:`Enter your search term(s)`,name:`SearchInput`,id:`SearchInput`,type:`search`,isFullWidth:!1,className:`a-text-input__full`},render:e=>{let{value:t,...n}=e,[r,s]=(0,c.useState)(t??``);return(0,l.jsx)(`form`,{onSubmit:e=>{e.preventDefault()},onReset:()=>s(``),children:(0,l.jsxs)(`div`,{className:`o-search-input`,children:[(0,l.jsxs)(`div`,{className:`o-search-input__input`,children:[(0,l.jsx)(`label`,{htmlFor:`SearchInput`,className:`o-search-input__input-label`,"aria-label":`Search for a term`,children:(0,l.jsx)(i,{name:`search`})}),(0,l.jsx)(o,{...n,value:r,onChange:e=>s(e.target.value)}),(0,l.jsx)(`button`,{type:`reset`,"aria-label":`Clear search`,title:`Clear search`,children:(0,l.jsx)(i,{name:`error`})})]}),(0,l.jsx)(a,{type:`submit`,"aria-label":`Search for term(s)`,label:`Search`})]})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Enabled`,`Hover`,`Focus`,`Disabled`,`Success`,`Warning`,`Error`,`FullWidth`,`SearchInput`]}))();export{_ as Disabled,m as Enabled,b as Error,g as Focus,x as FullWidth,h as Hover,S as SearchInput,v as Success,y as Warning,C as __namedExportsOrder,p as default};
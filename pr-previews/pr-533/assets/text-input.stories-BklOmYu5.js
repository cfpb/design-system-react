import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{t as n}from"./icon-Cbaokfuz.js";import{r,t as i}from"./src-DkpEmHkB.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{i(),a=t(),{expect:o,userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components (Verified)/Text inputs/Text input`,tags:[`autodocs`],component:r,argTypes:{isFullWidth:{control:`boolean`},isDisabled:{control:`boolean`}}},u={args:{name:`Enabled`,id:`Enabled`,value:`Enabled`,type:`text`},play:async({canvasElement:e})=>{let t=c(e).getByRole(`textbox`);o(t).toHaveValue(`Enabled`),await s.click(t),o(t).toHaveFocus()}},d={args:{...u.args,name:`Hover`,id:`Hover`,value:`Hover`},render:e=>(0,a.jsx)(r,{...e,className:`hover`})},f={args:{...u.args,name:`Focus`,id:`Focus`,value:`Focus`},render:e=>(0,a.jsx)(r,{...e,className:`focus`})},p={args:{...u.args,value:`Disabled`,name:`Disabled`,id:`Disabled`,disabled:!0}},m={args:{...u.args,value:`Success`,name:`Success`,id:`Success`,status:`success`}},h={args:{...u.args,value:`Warning`,name:`Warning`,id:`Warning`,status:`warning`}},g={args:{...u.args,value:`Error`,name:`Error`,id:`Error`,status:`error`}},_={name:`Full width`,args:{...u.args,value:`Input text`,name:`fullWidth`,id:`fullWidth`,isFullWidth:!0}},v={name:`Search input`,args:{...u.args,value:`This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.`,name:`SearchInput`,id:`SearchInput`,type:`search`,isFullWidth:!0},render:e=>(0,a.jsxs)(`div`,{className:`o-search-input`,children:[(0,a.jsxs)(`div`,{className:`o-search-input__input`,children:[(0,a.jsx)(`label`,{htmlFor:`SearchInput`,className:`o-search-input__input-label`,"aria-label":`Search for a term`,children:(0,a.jsx)(n,{name:`search`})}),(0,a.jsx)(r,{...e}),(0,a.jsx)(`button`,{type:`reset`,"aria-label":`Clear search`,title:`Clear search`,children:(0,a.jsx)(n,{name:`error`})})]}),(0,a.jsx)(`button`,{className:`a-btn`,type:`submit`,"aria-label":`Search for term(s)`,children:`Search`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Enabled`,`Hover`,`Focus`,`Disabled`,`Success`,`Warning`,`Error`,`FullWidth`,`SearchInput`]}))();export{p as Disabled,u as Enabled,g as Error,f as Focus,_ as FullWidth,d as Hover,v as SearchInput,m as Success,h as Warning,y as __namedExportsOrder,l as default};
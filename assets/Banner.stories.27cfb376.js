import{B as m,A as L,o as h}from"./Well.5d90b2ba.js";import"./Dropdown.a47e92f7.js";import"./ExpandableGroup.3e5205a5.js";import"./Icon.cb1b2b4a.js";import{j as n,a as g,F as f}from"./jsx-runtime.54133100.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.1d8c61cb.js";import"../sb-preview/runtime.js";const F={component:m,argTypes:{}},o=e=>{e.preventDefault()},r=({children:e,...d})=>n("span",{role:"link",onClick:o,onKeyUp:o,...d,children:e}),i={render:e=>n(m,{...e}),args:{links:[n(r,{children:n("a",{href:"/link",children:"Link 1"})},"Link 1"),n(r,{children:n("a",{href:"/link",children:"Link 2"})},"Link 2"),n(r,{children:n("a",{href:"/link",children:"Link 3"})},"Link 3")]}},a={...i,args:{links:L.filter(e=>e!=="en").map(e=>n(r,{children:n(h,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:g(f,{children:["An official website of the"," ",n("span",{className:"u-nowrap",children:"United States government"})]})}};var s,t,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: properties => <Banner {...properties} />,
  args: {
    links: [<UnclickableLink key='Link 1'>
        <a href='/link'>Link 1</a>
      </UnclickableLink>, <UnclickableLink key='Link 2'>
        <a href='/link'>Link 2</a>
      </UnclickableLink>, <UnclickableLink key='Link 3'>
        <a href='/link'>Link 3</a>
      </UnclickableLink>]
  }
}`,...(c=(t=i.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,k,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...BannerWithLinks,
  args: {
    links: AllLanguageCodes.filter(code => code !== 'en').map(code => <UnclickableLink key={code}>
        <LanguageLink code={code} />
      </UnclickableLink>),
    phoneNumber: '1-855-411-2372',
    tagline: <>
        An official website of the{' '}
        <span className='u-nowrap'>United States government</span>
      </>
  }
}`,...(p=(k=a.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const N=["BannerWithLinks","CFGovEdition"];export{i as BannerWithLinks,a as CFGovEdition,N as __namedExportsOrder,F as default};
//# sourceMappingURL=Banner.stories.27cfb376.js.map

import{B as m,A as L,L as h}from"./Well.38bbb4dc.js";import"./Dropdown.94f0e7de.js";import"./ExpandableGroup.53d68fe9.js";import"./Icon.cd49558f.js";import{j as n,a as g,F as f}from"./jsx-runtime.3c5b5edf.js";import"./extends.cc011e2f.js";import"./isNativeReflectConstruct.8b039ce4.js";import"./index.c8a4389a.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.da443437.js";import"../sb-preview/runtime.js";const N={component:m,argTypes:{}},o=e=>{e.preventDefault()},a=({children:e,...d})=>n("span",{role:"link",onClick:o,onKeyUp:o,...d,children:e}),i={render:e=>n(m,{...e}),args:{links:[n(a,{children:n("a",{href:"/link",children:"Link 1"})},"Link 1"),n(a,{children:n("a",{href:"/link",children:"Link 2"})},"Link 2"),n(a,{children:n("a",{href:"/link",children:"Link 3"})},"Link 3")]}},r={...i,args:{links:L.filter(e=>e!=="en").map(e=>n(a,{children:n(h,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:g(f,{children:["An official website of the"," ",n("span",{className:"u-nowrap",children:"United States government"})]})}};var s,t,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(t=i.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,k,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const S=["BannerWithLinks","CFGovEdition"];export{i as BannerWithLinks,r as CFGovEdition,S as __namedExportsOrder,N as default};
//# sourceMappingURL=Banner.stories.7e986638.js.map

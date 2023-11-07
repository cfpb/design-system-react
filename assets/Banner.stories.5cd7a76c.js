/* empty css                */import{i as m,A as L,j as h}from"./Well.ea54efd7.js";import"./Dropdown.a9b968bd.js";import"./Checkbox.fe2d0150.js";import"./ExpandableGroup.a04d87df.js";import"./Icon.e5ec578e.js";import{j as n,a as g,F as f}from"./jsx-runtime.54133100.js";import"./TextIntroduction.84e2ef5f.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.d0cd645b.js";import"../sb-preview/runtime.js";const W={title:"Components (Draft)/Banners",component:m,argTypes:{}},o=e=>{e.preventDefault()},a=({children:e,...d})=>n("span",{role:"link",onClick:o,onKeyUp:o,...d,children:e}),i={render:e=>n(m,{...e}),args:{links:[n(a,{children:n("a",{href:"/link",children:"Link 1"})},"Link 1"),n(a,{children:n("a",{href:"/link",children:"Link 2"})},"Link 2"),n(a,{children:n("a",{href:"/link",children:"Link 3"})},"Link 3")]}},r={...i,args:{links:L.filter(e=>e!=="en").map(e=>n(a,{children:n(h,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:g(f,{children:["An official website of the"," ",n("span",{className:"u-nowrap",children:"United States government"})]})}};var t,s,c;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,k,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const D=["BannerWithLinks","CFGovEdition"];export{i as BannerWithLinks,r as CFGovEdition,D as __namedExportsOrder,W as default};
//# sourceMappingURL=Banner.stories.5cd7a76c.js.map

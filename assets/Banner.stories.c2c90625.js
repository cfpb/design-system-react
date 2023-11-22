/* empty css                */import{i as s,A as f,j as u}from"./Well.557fc519.js";import"./Dropdown.7fc58906.js";import"./Checkbox.ad7351d6.js";import"./ExpandableGroup.78c5111f.js";import"./Icon.06fadbb4.js";import{j as e,a as v,F as b}from"./jsx-runtime.54133100.js";import"./Link.53e442ec.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.2be233c7.js";import"../sb-preview/runtime.js";const I={title:"Components (Verified)/Banner (US gov)",component:s,argTypes:{}},t=n=>{n.preventDefault()},o=({children:n,...U})=>e("span",{role:"link",onClick:t,onKeyUp:t,...U,children:n}),i={render:n=>e(s,{...n}),args:{links:[]}};i.storyName="US gov banner";const r={args:{links:f.filter(n=>n!=="en").map(n=>e(o,{children:e(u,{code:n})},n)),phoneNumber:"1-855-411-2372",tagline:v(b,{children:["An official website of the"," ",e("span",{className:"u-nowrap",children:"United States government"})]})}};r.storyName="US gov banner (cf.gov)";const a={...r,render:n=>e(s,{...n}),args:{links:[e(o,{children:e("a",{href:"/link",children:"Link 1"})},"Link 1"),e(o,{children:e("a",{href:"/link",children:"Link 2"})},"Link 2"),e(o,{children:e("a",{href:"/link",children:"Link 3"})},"Link 3")]}};a.storyName="US gov banner (with generic links)";var c,l,k;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: properties => <Banner {...properties} />,
  args: {
    links: []
  }
}`,...(k=(l=i.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var L,g,h;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...USGovBannerWithCFGovLinks,
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
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const K=["USGovBanner","USGovBannerWithCFGovLinks","USGovBannerWithLinks"];export{i as USGovBanner,r as USGovBannerWithCFGovLinks,a as USGovBannerWithLinks,K as __namedExportsOrder,I as default};
//# sourceMappingURL=Banner.stories.c2c90625.js.map

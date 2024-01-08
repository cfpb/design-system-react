/* empty css                */import{p as s,A as f,q as u}from"./Well.ff4da208.js";import"./Dropdown.a8c60362.js";import"./Checkbox.ad7351d6.js";import"./ExpandableGroup.d4c8afc1.js";import"./Icon.947fcbcc.js";import{j as e,a as v,F as b}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.d6e6f406.js";import"../sb-preview/runtime.js";const D={title:"Components (Verified)/Banner (US gov)",component:s,argTypes:{}},t=n=>{n.preventDefault()},o=({children:n,...U})=>e("span",{role:"link",onClick:t,onKeyUp:t,...U,children:n}),a={render:n=>e(s,{...n}),args:{links:[]}};a.storyName="US gov banner";const r={args:{links:f.filter(n=>n!=="en").map(n=>e(o,{children:e(u,{code:n})},n)),phoneNumber:"1-855-411-2372",tagline:v(b,{children:["An official website of the"," ",e("span",{className:"u-nowrap",children:"United States government"})]})}};r.storyName="US gov banner (cf.gov)";const i={...r,render:n=>e(s,{...n}),args:{links:[e(o,{children:e("a",{href:"/link",children:"Link 1"})},"Link 1"),e(o,{children:e("a",{href:"/link",children:"Link 2"})},"Link 2"),e(o,{children:e("a",{href:"/link",children:"Link 3"})},"Link 3")]}};i.storyName="US gov banner (with generic links)";var c,l,k;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: properties => <Banner {...properties} />,
  args: {
    links: []
  }
}`,...(k=(l=a.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var L,g,h;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const E=["USGovBanner","USGovBannerWithCFGovLinks","USGovBannerWithLinks"];export{a as USGovBanner,r as USGovBannerWithCFGovLinks,i as USGovBannerWithLinks,E as __namedExportsOrder,D as default};
//# sourceMappingURL=Banner.stories.de521dbe.js.map

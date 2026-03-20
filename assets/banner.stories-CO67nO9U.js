import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{F as n,M as r,N as i,P as a,t as o}from"./src-PO4K0H36.js";var s,c,l,u,d,f,p,m;e((()=>{o(),a(),s=t(),c={title:`Components (Verified)/Banner (US gov)`,tags:[`autodocs`],component:n,argTypes:{}},l=e=>{e.preventDefault()},u=({children:e,...t})=>(0,s.jsx)(`span`,{role:`link`,onClick:l,onKeyUp:l,...t,children:e}),d={render:e=>(0,s.jsx)(n,{...e}),args:{links:[]}},d.storyName=`US gov banner`,f={args:{links:r.filter(e=>e!==`en`).map(e=>(0,s.jsx)(u,{children:(0,s.jsx)(i,{code:e})},e)),phoneNumber:`1-855-411-2372`,tagline:(0,s.jsxs)(s.Fragment,{children:[`An official website of the`,` `,(0,s.jsx)(`span`,{className:`u-nowrap`,children:`United States government`})]})}},f.storyName=`US gov banner (cf.gov)`,p={...f,render:e=>(0,s.jsx)(n,{...e}),args:{links:[(0,s.jsx)(u,{children:(0,s.jsx)(`a`,{href:`/link`,children:`Link 1`})},`Link 1`),(0,s.jsx)(u,{children:(0,s.jsx)(`a`,{href:`/link`,children:`Link 2`})},`Link 2`),(0,s.jsx)(u,{children:(0,s.jsx)(`a`,{href:`/link`,children:`Link 3`})},`Link 3`)]}},p.storyName=`US gov banner (with generic links)`,d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: properties => <Banner {...properties} />,
  args: {
    links: []
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`USGovBanner`,`USGovBannerWithCFGovLinks`,`USGovBannerWithLinks`]}))();export{d as USGovBanner,f as USGovBannerWithCFGovLinks,p as USGovBannerWithLinks,m as __namedExportsOrder,c as default};
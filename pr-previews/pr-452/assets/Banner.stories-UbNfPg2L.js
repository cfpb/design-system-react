import{j as n}from"./jsx-runtime-BLchON5X.js";/* empty css                */import{B as o,b as l,L as k}from"./TextIntroduction-CjEKpn3W.js";import"./Dropdown-BBd26Q6o.js";import"./Checkbox-C8PZvyyp.js";import"./Well-RtzPWrtD.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Ddz0oDhE.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-CtAeEEDl.js";const G={title:"Components (Verified)/Banner (US gov)",tags:["autodocs"],component:o,argTypes:{}},t=e=>{e.preventDefault()},s=({children:e,...c})=>n.jsx("span",{role:"link",onClick:t,onKeyUp:t,...c,children:e}),i={render:e=>n.jsx(o,{...e}),args:{links:[]}};i.storyName="US gov banner";const r={args:{links:l.filter(e=>e!=="en").map(e=>n.jsx(s,{children:n.jsx(k,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:n.jsxs(n.Fragment,{children:["An official website of the"," ",n.jsx("span",{className:"u-nowrap",children:"United States government"})]})}};r.storyName="US gov banner (cf.gov)";const a={...r,render:e=>n.jsx(o,{...e}),args:{links:[n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 1"})},"Link 1"),n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 2"})},"Link 2"),n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 3"})},"Link 3")]}};a.storyName="US gov banner (with generic links)";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: properties => <Banner {...properties} />,
  args: {
    links: []
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const y=["USGovBanner","USGovBannerWithCFGovLinks","USGovBannerWithLinks"];export{i as USGovBanner,r as USGovBannerWithCFGovLinks,a as USGovBannerWithLinks,y as __namedExportsOrder,G as default};

import{j as n}from"./index.7eca609e.js";/* empty css                */import{B as a,b as U,L as u}from"./TextIntroduction.2fb05814.js";import"./Dropdown.f0f0c388.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.bebf9f4f.js";import"./Icon.da128e70.js";import"./Well.44588516.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.24c2c4ec.js";import"./index.49a47dde.js";import"./iframe.8df9b606.js";import"../sb-preview/runtime.js";const E={title:"Components (Verified)/Banner (US gov)",tags:["autodocs"],component:a,argTypes:{}},t=e=>{e.preventDefault()},i=({children:e,...h})=>n.exports.jsx("span",{role:"link",onClick:t,onKeyUp:t,...h,children:e}),o={render:e=>n.exports.jsx(a,{...e}),args:{links:[]}};o.storyName="US gov banner";const r={args:{links:U.filter(e=>e!=="en").map(e=>n.exports.jsx(i,{children:n.exports.jsx(u,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:n.exports.jsxs(n.exports.Fragment,{children:["An official website of the"," ",n.exports.jsx("span",{className:"u-nowrap",children:"United States government"})]})}};r.storyName="US gov banner (cf.gov)";const s={...r,render:e=>n.exports.jsx(a,{...e}),args:{links:[n.exports.jsx(i,{children:n.exports.jsx("a",{href:"/link",children:"Link 1"})},"Link 1"),n.exports.jsx(i,{children:n.exports.jsx("a",{href:"/link",children:"Link 2"})},"Link 2"),n.exports.jsx(i,{children:n.exports.jsx("a",{href:"/link",children:"Link 3"})},"Link 3")]}};s.storyName="US gov banner (with generic links)";var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: properties => <Banner {...properties} />,
  args: {
    links: []
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var k,m,d;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var L,g,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const I=["USGovBanner","USGovBannerWithCFGovLinks","USGovBannerWithLinks"];export{o as USGovBanner,r as USGovBannerWithCFGovLinks,s as USGovBannerWithLinks,I as __namedExportsOrder,E as default};

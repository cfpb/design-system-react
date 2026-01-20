import{j as n}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{B as o,b as u,L as f}from"./TextIntroduction-Bqfm4YEg.js";import"./Dropdown-DZIBIDHk.js";import"./Checkbox-uScmMply.js";import"./Well-Tjp4nBfE.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-CFWaYA32.js";const F={title:"Components (Verified)/Banner (US gov)",tags:["autodocs"],component:o,argTypes:{}},t=e=>{e.preventDefault()},s=({children:e,...U})=>n.jsx("span",{role:"link",onClick:t,onKeyUp:t,...U,children:e}),a={render:e=>n.jsx(o,{...e}),args:{links:[]}};a.storyName="US gov banner";const r={args:{links:u.filter(e=>e!=="en").map(e=>n.jsx(s,{children:n.jsx(f,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:n.jsxs(n.Fragment,{children:["An official website of the"," ",n.jsx("span",{className:"u-nowrap",children:"United States government"})]})}};r.storyName="US gov banner (cf.gov)";const i={...r,render:e=>n.jsx(o,{...e}),args:{links:[n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 1"})},"Link 1"),n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 2"})},"Link 2"),n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 3"})},"Link 3")]}};i.storyName="US gov banner (with generic links)";var c,l,k;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const E=["USGovBanner","USGovBannerWithCFGovLinks","USGovBannerWithLinks"];export{a as USGovBanner,r as USGovBannerWithCFGovLinks,i as USGovBannerWithLinks,E as __namedExportsOrder,F as default};

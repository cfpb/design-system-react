import{j as n}from"./jsx-runtime-eba35cff.js";/* empty css                */import{B as o,b as u,L as f}from"./TextIntroduction-ed53788c.js";import"./Dropdown-6a8553fc.js";import"./Checkbox-7e7ab2e2.js";import"./ExpandableGroup-3773f0a5.js";import"./Icon-a1f52d1d.js";import"./Well-11b17e27.js";import"./Paragraph-18b341b1.js";import"./TextArea-441eb386.js";import"./index-9053fc1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-798a71e2.js";import"./index-eeaea43d.js";import"./iframe-5b7f846e.js";const _={title:"Components (Verified)/Banner (US gov)",tags:["autodocs"],component:o,argTypes:{}},t=e=>{e.preventDefault()},s=({children:e,...U})=>n.jsx("span",{role:"link",onClick:t,onKeyUp:t,...U,children:e}),i={render:e=>n.jsx(o,{...e}),args:{links:[]}};i.storyName="US gov banner";const r={args:{links:u.filter(e=>e!=="en").map(e=>n.jsx(s,{children:n.jsx(f,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:n.jsxs(n.Fragment,{children:["An official website of the"," ",n.jsx("span",{className:"u-nowrap",children:"United States government"})]})}};r.storyName="US gov banner (cf.gov)";const a={...r,render:e=>n.jsx(o,{...e}),args:{links:[n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 1"})},"Link 1"),n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 2"})},"Link 2"),n.jsx(s,{children:n.jsx("a",{href:"/link",children:"Link 3"})},"Link 3")]}};a.storyName="US gov banner (with generic links)";var c,l,k;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const D=["USGovBanner","USGovBannerWithCFGovLinks","USGovBannerWithLinks"];export{i as USGovBanner,r as USGovBannerWithCFGovLinks,a as USGovBannerWithLinks,D as __namedExportsOrder,_ as default};

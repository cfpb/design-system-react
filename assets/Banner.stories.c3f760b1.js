import{B as y}from"./Banner.9c08a388.js";import{j as n,a as A,F as C}from"./jsx-runtime.3c5b5edf.js";import"./index.cfa9e344.js";import"./Tagline.e27123b6.js";import"./_commonjsHelpers.712cc82f.js";const U={en:{label:"English",code:"en",href:"/en/"},es:{label:"Espa\xF1ol",code:"es",href:"/es/"},zh:{label:"\u4E2D\u6587",code:"zh"},vi:{label:"Ti\u1EBFng Vi\u1EC7t",code:"vi"},ko:{label:"\uD55C\uAD6D\uC5B4",code:"ko"},tl:{label:"Tagalog",code:"tl"},ru:{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",code:"ru"},ar:{label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",code:"ar"},ht:{label:"Krey\xF2l Ayisyen",code:"ht"}},F=["en","es","zh","vi","ko","tl","ru","ar","ht"],u=({code:e,href:i,label:r,languageMap:v=U,...E})=>{const a=v[e];let s=e,d=e,k=r,o=i;return a&&(s=a.code,d=a.code,k=r!=null?r:a.label,o=a.href||i),n("a",{href:o!=null?o:`/language/${s}/`,hrefLang:s,lang:d,...E,children:k})};try{u.displayName="LanguageLink",u.__docgenInfo={description:"CFGov language link",displayName:"LanguageLink",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},languageMap:{defaultValue:{value:`{
  en: { label: 'English', code: 'en', href: '/en/' },
  es: { label: 'Espa\xF1ol', code: 'es', href: '/es/' },
  zh: { label: '\u4E2D\u6587', code: 'zh' },
  vi: { label: 'Ti\u1EBFng Vi\u1EC7t', code: 'vi' },
  ko: { label: '\uD55C\uAD6D\uC5B4', code: 'ko' },
  tl: { label: 'Tagalog', code: 'tl' },
  ru: { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', code: 'ru' },
  ar: { label: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', code: 'ar' },
  ht: { label: 'Krey\xF2l Ayisyen', code: 'ht' }
}`},description:"",name:"languageMap",required:!1,type:{name:"LanguageDefinition"}}}}}catch{}const V={component:y,argTypes:{}},g=e=>{e.preventDefault()},c=({children:e,...i})=>n("span",{role:"link",onClick:g,onKeyUp:g,...i,children:e}),l={render:e=>n(y,{...e}),args:{links:[n(c,{children:n("a",{href:"/link",children:"Link 1"})},"Link 1"),n(c,{children:n("a",{href:"/link",children:"Link 2"})},"Link 2"),n(c,{children:n("a",{href:"/link",children:"Link 3"})},"Link 3")]}},t={...l,args:{links:F.filter(e=>e!=="en").map(e=>n(c,{children:n(u,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:A(C,{children:["An official website of the"," ",n("span",{className:"u-nowrap",children:"United States government"})]})}};var p,h,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var L,f,b;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const z=["BannerWithLinks","CFGovEdition"];export{l as BannerWithLinks,t as CFGovEdition,z as __namedExportsOrder,V as default};
//# sourceMappingURL=Banner.stories.c3f760b1.js.map

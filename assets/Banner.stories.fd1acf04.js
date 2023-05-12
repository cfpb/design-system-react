import{c as k}from"./index.cfa9e344.js";import{T as w}from"./Tagline.2f1ad498.js";import{j as n,a as m,F as A}from"./jsx-runtime.556016cd.js";import"./_commonjsHelpers.712cc82f.js";const B=({phoneNumber:e})=>{if(/\d-\d{3}-\d{3}-\d{4}/.test(e)){const[,l,...a]=e.split("-");return m("a",{href:`tel:+${e}`,children:["(",l,") ",a.join("-")]})}return n("a",{href:`tel:+${e}`,children:e})},h=({isHorizontal:e=!0,tagline:l="This is a tagline",phoneNumber:a,links:u=[]})=>{const s=["m-global-eyebrow"],r=["wrapper"],i=["m-list"];let o=null;return e?(s.push("m-global-eyebrow__horizontal"),r.push("wrapper__match-content"),i.push("m-list__horizontal m-global-eyebrow_languages"),o=n(w,{children:l})):s.push("m-global-eyebrow__list"),n("div",{className:k(s),children:m("div",{className:k(r),children:[o,m("div",{className:"m-global-eyebrow_actions",children:[u.length>0&&n("ul",{className:k(i),children:u.map(t=>n("li",{className:"m-list_item",children:t},t.key))}),a?n("span",{className:"m-global-eyebrow_phone",children:n(B,{phoneNumber:a})}):null]})]})})};try{h.displayName="Banner",h.__docgenInfo={description:"CFGov's Global Eyebrow component",displayName:"Banner",props:{isHorizontal:{defaultValue:{value:"true"},description:"",name:"isHorizontal",required:!1,type:{name:"boolean"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"Element[]"}},phoneNumber:{defaultValue:null,description:"",name:"phoneNumber",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:"This is a tagline"},description:"",name:"tagline",required:!1,type:{name:"string | Element"}}}}}catch{}const F={en:{label:"English",code:"en",href:"/en/"},es:{label:"Espa\xF1ol",code:"es",href:"/es/"},zh:{label:"\u4E2D\u6587",code:"zh"},vi:{label:"Ti\u1EBFng Vi\u1EC7t",code:"vi"},ko:{label:"\uD55C\uAD6D\uC5B4",code:"ko"},tl:{label:"Tagalog",code:"tl"},ru:{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",code:"ru"},ar:{label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",code:"ar"},ht:{label:"Krey\xF2l Ayisyen",code:"ht"}},U=["en","es","zh","vi","ko","tl","ru","ar","ht"],f=({code:e,href:l,label:a,languageMap:u=F,...s})=>{const r=u[e];let i=e,o=e,t=a,d=l;return r&&(i=r.code,o=r.code,t=a!=null?a:r.label,d=r.href||l),n("a",{href:d!=null?d:`/language/${i}/`,hrefLang:i,lang:o,...s,children:t})};try{f.displayName="LanguageLink",f.__docgenInfo={description:"CFGov language link",displayName:"LanguageLink",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},languageMap:{defaultValue:{value:`{
  en: { label: 'English', code: 'en', href: '/en/' },
  es: { label: 'Espa\xF1ol', code: 'es', href: '/es/' },
  zh: { label: '\u4E2D\u6587', code: 'zh' },
  vi: { label: 'Ti\u1EBFng Vi\u1EC7t', code: 'vi' },
  ko: { label: '\uD55C\uAD6D\uC5B4', code: 'ko' },
  tl: { label: 'Tagalog', code: 'tl' },
  ru: { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', code: 'ru' },
  ar: { label: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', code: 'ar' },
  ht: { label: 'Krey\xF2l Ayisyen', code: 'ht' }
}`},description:"",name:"languageMap",required:!1,type:{name:"LanguageDefinition"}}}}}catch{}const z={component:h,argTypes:{}},b=e=>{e.preventDefault()},g=({children:e,...l})=>n("span",{role:"link",onClick:b,onKeyUp:b,...l,children:e}),c={render:e=>n(h,{...e}),args:{links:[n(g,{children:n("a",{href:"/link",children:"Link 1"})},"Link 1"),n(g,{children:n("a",{href:"/link",children:"Link 2"})},"Link 2"),n(g,{children:n("a",{href:"/link",children:"Link 3"})},"Link 3")]}},p={...c,args:{links:U.filter(e=>e!=="en").map(e=>n(g,{children:n(f,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:m(A,{children:["An official website of the"," ",n("span",{className:"u-nowrap",children:"United States government"})]})}};var L,y,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var v,C,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const q=["BannerWithLinks","CFGovEdition"];export{c as BannerWithLinks,p as CFGovEdition,q as __namedExportsOrder,z as default};
//# sourceMappingURL=Banner.stories.fd1acf04.js.map

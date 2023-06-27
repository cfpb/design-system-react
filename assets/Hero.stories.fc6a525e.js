import{c as E}from"./index.cfa9e344.js";import{j as n,r as _,a as y}from"./jsx-runtime.3c5b5edf.js";import"./_commonjsHelpers.712cc82f.js";const g=({image:e,altText:o})=>e?n("div",{className:"m-hero_image-wrapper",children:n("img",{src:e,alt:o,className:"m-hero_image"})}):null;try{g.displayName="HeroImage",g.__docgenInfo={description:"",displayName:"HeroImage",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},altText:{defaultValue:null,description:"",name:"altText",required:!1,type:{name:"string"}}}}}catch{}const m=(e,o)=>{const r=_.exports.useRef(null);return _.exports.useEffect(()=>{var t;if(!o||!e||!r.current){(t=r.current)==null||t.setAttribute("style","");return}r.current.setAttribute("style",`background-image: url(${e});
       background-image: -webkit-image-set(
        url(${e}) 1x,
        url(${e}) 2x
      );
      background-image: image-set(
        url(${e}) 1x,
        url(${e}) 2x
      );`)},[r,e,o]),r};try{m.displayName="useBackgroundImage",m.__docgenInfo={description:"Add inline styles which apply a background-image to the referenced <div>",displayName:"useBackgroundImage",props:{}}}catch{}function h({backgroundColor:e,heading:o,headingLevel:r="h1",image:t,imageAltText:$="hero image",imageIsPhoto:p,is5050:f,isJumbo:b,isKnockout:K,subheading:F,subheadingLevel:d,textColor:J}){const A=m(t,p||b||f),B={backgroundColor:e},R={color:J},s=["m-hero"];return b&&s.push("m-hero__jumbo"),f&&s.push("m-hero__50-50"),K&&s.push("m-hero__knockout"),p&&s.push("m-hero__overlay"),n("div",{className:E(s),style:B,children:y("div",{className:"m-hero_wrapper",ref:A,children:[y("div",{className:"m-hero_text",style:R,children:[n("p",{className:`m-hero_heading ${r}`,children:o}),n("p",{className:`m-hero_subhead ${d!=null?d:""}`,children:F})]}),n(g,{image:t,altText:$})]})})}try{h.displayName="Hero",h.__docgenInfo={description:"https://cfpb.github.io/design-system/patterns/heroes",displayName:"Hero",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"h1"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAltText:{defaultValue:{value:"hero image"},description:"",name:"imageAltText",required:!1,type:{name:"string"}},imageIsPhoto:{defaultValue:null,description:"",name:"imageIsPhoto",required:!1,type:{name:"boolean"}},is5050:{defaultValue:null,description:"",name:"is5050",required:!1,type:{name:"boolean"}},isJumbo:{defaultValue:null,description:"",name:"isJumbo",required:!1,type:{name:"boolean"}},isKnockout:{defaultValue:null,description:"",name:"isKnockout",required:!1,type:{name:"boolean"}},subheading:{defaultValue:null,description:"",name:"subheading",required:!1,type:{name:"string"}},subheadingLevel:{defaultValue:null,description:"",name:"subheadingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}}}}}catch{}const G={component:h,parameters:{docs:{description:{component:`
### CFPB DS Hero component

Source: https://cfpb.github.io/design-system/patterns/heroes
`}}}},a={args:{heading:"41 chars max for a one-line heading",image:"https://cfpb.github.io/design-system/images/uploads/hero_illustration_example_keys.png",subheading:"This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.",backgroundColor:"#d4e7e6"}},i={args:{...a.args,imageIsPhoto:!0,image:"https://files.consumerfinance.gov/f/images/PC_hero.original.jpg",backgroundColor:"#f7f8f9"}},l={args:{...a.args,heading:"50 chars max for a two-line heading",subheading:"This text has a recommended count of 140-175 characters (four lines at 1230px) following a two- or three-line heading.",isJumbo:!0,image:"https://cfpb.github.io/design-system/images/uploads/jumbo_hero_image_wide.jpeg",backgroundColor:"rgb(168,213,200	)"}},u={args:{...a.args,heading:"50 chars max for a two-line heading",subheading:"This text has a recommended count of 140-175 characters (four lines at 1230px) following a two- or three-line heading.",is5050:!0,image:"https://cfpb.github.io/design-system/images/uploads/jumbo-hero-image.png",backgroundColor:"white"}},c={args:{...a.args,heading:"Max of 41 chars for a one-line heading",subheading:"This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.",backgroundColor:"#207676",isKnockout:!0,image:"https://cfpb.github.io/design-system/images/uploads/design_system_hero_example.png"}};var x,w,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    heading: '41 chars max for a one-line heading',
    image: 'https://cfpb.github.io/design-system/images/uploads/hero_illustration_example_keys.png',
    subheading: 'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#d4e7e6'
  }
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,I,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...WithIllustration.args,
    imageIsPhoto: true,
    image: 'https://files.consumerfinance.gov/f/images/PC_hero.original.jpg',
    backgroundColor: '#f7f8f9'
  }
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var q,V,N;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...WithIllustration.args,
    heading: '50 chars max for a two-line heading',
    subheading: 'This text has a recommended count of 140-175 characters (four lines at 1230px) following a two- or three-line heading.',
    isJumbo: true,
    image: 'https://cfpb.github.io/design-system/images/uploads/jumbo_hero_image_wide.jpeg',
    backgroundColor: 'rgb(168,213,200	)'
  }
}`,...(N=(V=l.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var T,j,W;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...WithIllustration.args,
    heading: '50 chars max for a two-line heading',
    subheading: 'This text has a recommended count of 140-175 characters (four lines at 1230px) following a two- or three-line heading.',
    is5050: true,
    image: 'https://cfpb.github.io/design-system/images/uploads/jumbo-hero-image.png',
    backgroundColor: 'white'
  }
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var P,S,H;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...WithIllustration.args,
    heading: 'Max of 41 chars for a one-line heading',
    subheading: 'This text has a recommended count of 165-186 characters (three lines at 1230px) following a one-line heading and 108-124 characters (two lines at 1230px) following a two-line heading.',
    backgroundColor: '#207676',
    isKnockout: true,
    image: 'https://cfpb.github.io/design-system/images/uploads/design_system_hero_example.png'
  }
}`,...(H=(S=c.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const L=["WithIllustration","WithPhoto","Jumbo","FiftyFifty","Knockout"];export{u as FiftyFifty,l as Jumbo,c as Knockout,a as WithIllustration,i as WithPhoto,L as __namedExportsOrder,G as default};
//# sourceMappingURL=Hero.stories.fc6a525e.js.map

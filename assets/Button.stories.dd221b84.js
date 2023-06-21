import{j as V}from"./jsx-runtime.3c5b5edf.js";import"./_commonjsHelpers.712cc82f.js";const W=["a-btn"],x={primary:[],secondary:["a-btn__secondary"],warning:["a-btn__warning"]},D={default:[],super:["a-btn__super"],full:["a-btn__full-on-xs"]};function t({appearance:o="primary",size:z="default",isDisabled:P=!1,label:w,...B}){const q=[...W,...x[o],...D[z]];return V("button",{type:"button",className:[...q].join(" "),disabled:P,...B,children:w})}try{t.displayName="Button",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},appearance:{defaultValue:{value:"primary"},description:"What is the button's appearance?",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"default"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'},{value:'"super"'}]}},isDisabled:{defaultValue:{value:"false"},description:"Disable the button?",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const k={component:t,argTypes:{appearance:{control:"select"},size:{control:"select"},isDisabled:{control:"boolean"}}},e={args:{label:"Button",appearance:"primary",size:"default"}},a={args:{...e.args,appearance:"secondary"}},r={args:{...e.args,appearance:"warning"}},n={args:{...e.args,size:"super"}},s={args:{...e.args,size:"full"}};var l,c,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default'
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,b,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    size: 'super'
  }
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var v,S,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    size: 'full'
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const N=["Primary","Secondary","Warning","Super","FullWidthOnMobile"];export{s as FullWidthOnMobile,e as Primary,a as Secondary,n as Super,r as Warning,N as __namedExportsOrder,k as default};
//# sourceMappingURL=Button.stories.dd221b84.js.map

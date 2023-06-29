import{j as N}from"./jsx-runtime.3c5b5edf.js";import"./_commonjsHelpers.712cc82f.js";const C=["a-btn"],F={primary:[],secondary:["a-btn__secondary"],warning:["a-btn__warning"]},I={default:[],super:["a-btn__super"],full:["a-btn__full-on-xs"]};function l({appearance:i="primary",asLink:W=!1,size:x="default",isDisabled:A=!1,label:O,...j}){const u=[...C,...F[i],...I[x]];return W&&u.push("a-btn__link"),N("button",{type:"button",className:[...u].join(" "),disabled:A,...j,children:O})}try{l.displayName="Button",l.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},appearance:{defaultValue:{value:"primary"},description:"What is the button's appearance?",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"default"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'},{value:'"super"'}]}},isDisabled:{defaultValue:{value:"false"},description:"Disable the button?",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}},asLink:{defaultValue:{value:"false"},description:"Button should be styled as a link?",name:"asLink",required:!1,type:{name:"boolean"}}}}}catch{}const H={component:l,argTypes:{appearance:{control:"select"},size:{control:"select"},isDisabled:{control:"boolean"}}},e={args:{label:"Button",appearance:"primary",size:"default"}},a={args:{...e.args,appearance:"secondary"}},r={args:{...e.args,appearance:"warning"}},s={args:{...e.args,size:"super"}},n={args:{...e.args,size:"full"}},t={args:{...e.args,size:"full",asLink:!0}},o={args:{...e.args,label:"Destructive button",appearance:"warning",size:"full",asLink:!0}};var c,p,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,b,_;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var v,k,z;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    size: 'super'
  }
}`,...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,h,B;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    size: 'full'
  }
}`,...(B=(h=n.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var L,P,w;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    size: 'full',
    asLink: true
  }
}`,...(w=(P=t.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,q,V;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: 'Destructive button',
    appearance: 'warning',
    size: 'full',
    asLink: true
  }
}`,...(V=(q=o.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const T=["Primary","Secondary","Warning","Super","FullWidthOnMobile","ButtonAsLink","ButtonAsDestructiveLink"];export{o as ButtonAsDestructiveLink,t as ButtonAsLink,n as FullWidthOnMobile,e as Primary,a as Secondary,s as Super,r as Warning,T as __namedExportsOrder,H as default};
//# sourceMappingURL=Button.stories.203cbc23.js.map

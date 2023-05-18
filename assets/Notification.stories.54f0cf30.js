import{c as O}from"./index.cfa9e344.js";import{I as F}from"./Icon.af83a588.js";import{j as a,a as f,r as R}from"./jsx-runtime.556016cd.js";import"./iframe.5e45d5ef.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.712cc82f.js";const g=({href:n,label:p,isExternal:u})=>a("li",{className:"m-list_item",children:f("a",{className:"m-list_link",href:n,children:[p," ",u?a(F,{name:"external-link"}):null]})});try{g.displayName="NotificationLink",g.__docgenInfo={description:"",displayName:"NotificationLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const z={error:{name:"error",withBg:!0},info:{name:"information",withBg:!0},loading:{name:"updating",withBg:!1},success:{name:"approved",withBg:!0},warning:{name:"warning",withBg:!0}},m=({children:n,className:p,headingLevel:u="h4",links:d,message:h,type:r="info",...Y})=>{const $=O("m-notification","m-notification__visible",{"m-notification__success":r==="success","m-notification__warning":r==="warning","m-notification__error":r==="error","m-notification__info":r==="info"},p);return f("div",{className:$,...Y,children:[a(F,{...z[r]}),f("div",{className:"m-notification_content",children:[h?a("p",{className:`${u} m-notification_message`,children:h}):null,n?a("p",{className:"m-notification_explanation",children:n}):null,d&&d.length>0?a("ul",{className:"m-list m-list__links",children:d.map(_=>R.exports.createElement(g,{..._,key:_.href}))}):null]})]})};try{m.displayName="Notification",m.__docgenInfo={description:`CFPB DS Notification

https://cfpb.github.io/design-system/components/notifications`,displayName:"Notification",props:{type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"h4"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"NotificationLinkProperties[]"}}}}}catch{}const U={component:m,argTypes:{message:{control:"text"}},parameters:{docs:{description:{component:`
### CFPB DS Notification component

Source: https://cfpb.github.io/design-system/components/notifications
`}}}},e={render:n=>a(m,{...n}),args:{type:"info",message:"A Notification"}},i={...e,args:{...e.args,children:"You can also add an explanation to the notification."}},o={...e,args:{...e.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explaination"},{href:"/",label:"This is an external link",isExternal:!0}]}},s={...e,args:{...e.args,type:"success",message:"11 results"}},t={...e,args:{...e.args,type:"warning",message:"No results found."}},c={...e,args:{...e.args,type:"error",message:"Page not found."}},l={...e,args:{...e.args,type:"loading",message:"The page is loading\u2026."}};var y,N,x;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Notification {...args} />,
  args: {
    type: 'info',
    message: 'A Notification'
  }
}`,...(x=(N=e.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var I,k,v;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var b,w,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    children: 'This is the explanation of the notification.',
    links: [{
      href: '/',
      label: 'This is a link below the explaination'
    }, {
      href: '/',
      label: 'This is an external link',
      isExternal: true
    }]
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var E,L,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'success',
    message: '11 results'
  }
}`,...(T=(L=s.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var B,q,V;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'warning',
    message: 'No results found.'
  }
}`,...(V=(q=t.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var W,P,j;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'error',
    message: 'Page not found.'
  }
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var A,C,D;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'loading',
    message: 'The page is loading\u2026.'
  }
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const X=["Information","InformationWithExplaination","InformationWithLinks","Success","Warning","Error","Loading"];export{c as Error,e as Information,i as InformationWithExplaination,o as InformationWithLinks,l as Loading,s as Success,t as Warning,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Notification.stories.54f0cf30.js.map

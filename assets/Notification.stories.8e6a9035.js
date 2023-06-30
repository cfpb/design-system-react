import{i as L}from"./Well.08580746.js";import"./Dropdown.7b0955ce.js";import"./ExpandableGroup.ceebfd12.js";import"./Icon.7b8e40bf.js";import{j as P}from"./jsx-runtime.3c5b5edf.js";import"./isNativeReflectConstruct.eb2b9305.js";import"./index.c8a4389a.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.0592c687.js";import"../sb-preview/runtime.js";const z={component:L,argTypes:{message:{control:"text"}},parameters:{docs:{description:{component:`
### CFPB DS Notification component

Source: https://cfpb.github.io/design-system/components/notifications
`}}}},n={render:_=>P(L,{..._}),args:{type:"info",message:"A Notification"}},r={...n,args:{...n.args,children:"You can also add an explanation to the notification."}},a={...n,args:{...n.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explaination"},{href:"/",label:"This is an external link",isExternal:!0}]}},e={...n,args:{...n.args,type:"success",message:"11 results"}},o={...n,args:{...n.args,type:"warning",message:"No results found."}},s={...n,args:{...n.args,type:"error",message:"Page not found."}},t={...n,args:{...n.args,type:"loading",message:"The page is loading\u2026."}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: arguments_ => <Notification {...arguments_} />,
  args: {
    type: 'info',
    message: 'A Notification'
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var d,f,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,I,x;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'success',
    message: '11 results'
  }
}`,...(x=(I=e.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var y,S,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'warning',
    message: 'No results found.'
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var b,k,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'error',
    message: 'Page not found.'
  }
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var N,W,w;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'loading',
    message: 'The page is loading\u2026.'
  }
}`,...(w=(W=t.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const G=["Information","InformationWithExplaination","InformationWithLinks","Success","Warning","Error","Loading"];export{s as Error,n as Information,r as InformationWithExplaination,a as InformationWithLinks,t as Loading,e as Success,o as Warning,G as __namedExportsOrder,z as default};
//# sourceMappingURL=Notification.stories.8e6a9035.js.map

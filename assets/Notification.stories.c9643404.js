import{N as R}from"./Well.eb436ab0.js";import"./Dropdown.381dca89.js";import"./ExpandableGroup.677ff685.js";import"./Icon.b26ccd46.js";import{j as z}from"./jsx-runtime.54133100.js";import"./extends.cc011e2f.js";import"./isNativeReflectConstruct.c66bbbb3.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.91ec8672.js";import"../sb-preview/runtime.js";const ee={title:"Components/Notifications",component:R,argTypes:{message:{control:"text"}},parameters:{docs:{description:{component:`
Notifications alert users to the state of a form or page. In forms, notifications can appear at the top of the form or in line with form fields and can highlight successful submissions, errors that need to be corrected, or details to know before submitting the form. When used on a page, notifications can call out important information about the content (including if the content is still loading).


Additional guidance: [Information (base) notification](https://cfpb.github.io/design-system/components/notifications#information-base-notification)&nbsp;&nbsp;[Modifier types](https://cfpb.github.io/design-system/components/notifications#modifier-types)&nbsp;&nbsp;[Behavior](https://cfpb.github.io/design-system/components/notifications#behavior)&nbsp;&nbsp;[Accessibility](https://cfpb.github.io/design-system/components/notifications#accessibility)&nbsp;&nbsp;[Related items](https://cfpb.github.io/design-system/components/notifications#related-items)
`}}}},e={render:q=>z(R,{...q}),args:{type:"info",message:"A Notification"}},r={...e,name:"Information with explaination",args:{...e.args,children:"You can also add an explanation to the notification."}},i={...e,name:"Information with links",args:{...e.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explaination"},{href:"/",label:"This is an external link",isExternal:!0}]}},n={...e,args:{...e.args,type:"success",message:"11 results"}},o={...e,name:"Success (field-level)",args:{...n.args,isFieldLevel:!0,message:"This is an inline alert with a success state."}},s={...e,args:{...e.args,type:"warning",message:"No results found."}},t={...e,name:"Warning (field-level)",args:{...s.args,isFieldLevel:!0,message:"This is an inline alert with a warning state."}},a={...e,args:{...e.args,type:"error",message:"Page not found."}},c={...e,name:"Error (field-level)",args:{...a.args,isFieldLevel:!0,message:"This is an inline alert with an error state."}},m={...e,name:"In-progress",args:{...e.args,type:"loading",message:"The page is loading\u2026."}};var l,p,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: arguments_ => <Notification {...arguments_} />,
  args: {
    type: 'info',
    message: 'A Notification'
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,f,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with explaination',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,b,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with links',
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
}`,...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var v,y,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'success',
    message: '11 results'
  }
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,S,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Information,
  name: 'Success (field-level)',
  args: {
    ...Success.args,
    isFieldLevel: true,
    message: 'This is an inline alert with a success state.'
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var L,E,F;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'warning',
    message: 'No results found.'
  }
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,k,N;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Information,
  name: 'Warning (field-level)',
  args: {
    ...Warning.args,
    isFieldLevel: true,
    message: 'This is an inline alert with a warning state.'
  }
}`,...(N=(k=t.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var A,P,_;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    type: 'error',
    message: 'Page not found.'
  }
}`,...(_=(P=a.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var j,Y,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Information,
  name: 'Error (field-level)',
  args: {
    ...Error.args,
    isFieldLevel: true,
    message: 'This is an inline alert with an error state.'
  }
}`,...(B=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var C,M,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    type: 'loading',
    message: 'The page is loading\u2026.'
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const ne=["Information","InformationWithExplaination","InformationWithLinks","Success","SuccessFieldLevel","Warning","WarningFieldLevel","Error","ErrorFieldLevel","InProgress"];export{a as Error,c as ErrorFieldLevel,m as InProgress,e as Information,r as InformationWithExplaination,i as InformationWithLinks,n as Success,o as SuccessFieldLevel,s as Warning,t as WarningFieldLevel,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=Notification.stories.c9643404.js.map

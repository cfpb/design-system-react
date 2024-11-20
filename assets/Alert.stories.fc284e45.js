import{j as a}from"./index.7eca609e.js";/* empty css                */import{A as Q,T as d,a as g}from"./TextIntroduction.2fb05814.js";import"./Dropdown.f0f0c388.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.bebf9f4f.js";import"./Icon.da128e70.js";import"./Well.44588516.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.24c2c4ec.js";import"./index.49a47dde.js";import"./iframe.8df9b606.js";import"../sb-preview/runtime.js";const ce={title:"Components (Draft)/Alerts",component:Q,tags:["autodocs"],argTypes:{message:{control:"text"}}},e={render:s=>a.exports.jsx(Q,{...s}),args:{status:"info",message:"A Notification"}},t={...e,name:"Information with a message and an explanation",args:{...e.args,message:"Here is the message of the notification.",children:"Here is the explanation of the notification."}},n={...e,name:"Information with only an explanation",args:{children:"You can also only have an explanation in the notification."}},r={...e,name:"Information with explanation and links",args:{...e.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explanation"},{href:"/",label:"This is an external link",isExternal:!0}]}},o={...e,args:{...e.args,status:"success",message:"11 results"}},i={...e,args:{...e.args,status:"warning",message:"No results found."}},l={...e,args:{...e.args,status:"error",message:"Page not found."}},m={...e,name:"In-progress",args:{...e.args,status:"loading",message:"The page is loading\u2026."}},u={render:s=>a.exports.jsxs("div",{className:"m-form-field",children:[a.exports.jsx(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a.exports.jsx(g,{...s})]}),name:"Success (field-level)",args:{status:"success",message:"This is a field-level alert with a success status."}},c={render:s=>a.exports.jsxs("div",{className:"m-form-field",children:[a.exports.jsx(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a.exports.jsx(g,{...s})]}),name:"Warning (field-level)",args:{status:"warning",message:"This is a field-level alert with a warning status."}},p={render:s=>a.exports.jsxs("div",{className:"m-form-field",children:[a.exports.jsx(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a.exports.jsx(g,{...s})]}),name:"Error (field-level)",args:{status:"error",message:"This is a field-level alert with an error status."}};var f,h,x;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'A Notification'
  }
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,v,T;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with a message and an explanation',
  args: {
    ...Information.args,
    message: 'Here is the message of the notification.',
    children: 'Here is the explanation of the notification.'
  }
}`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var w,S,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with only an explanation',
  args: {
    children: 'You can also only have an explanation in the notification.'
  }
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var A,E,j;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with explanation and links',
  args: {
    ...Information.args,
    children: 'This is the explanation of the notification.',
    links: [{
      href: '/',
      label: 'This is a link below the explanation'
    }, {
      href: '/',
      label: 'This is an external link',
      isExternal: true
    }]
  }
}`,...(j=(E=r.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var L,W,k;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results'
  }
}`,...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var F,N,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found.'
  }
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var b,H,P;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found.'
  }
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var O,M,Y;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading\u2026.'
  }
}`,...(Y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var C,D,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as AlertStatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: 'This is a field-level alert with a success status.'
  }
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var q,z,B;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as AlertStatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: 'This is a field-level alert with a warning status.'
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as AlertStatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: 'This is a field-level alert with an error status.'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const pe=["Information","InformationWithMessageAndExplanation","InformationWithOnlyExplanation","InformationWithLinks","Success","Warning","Error","InProgress","SuccessFieldLevel","WarningFieldLevel","ErrorFieldLevel"];export{l as Error,p as ErrorFieldLevel,m as InProgress,e as Information,r as InformationWithLinks,t as InformationWithMessageAndExplanation,n as InformationWithOnlyExplanation,o as Success,u as SuccessFieldLevel,i as Warning,c as WarningFieldLevel,pe as __namedExportsOrder,ce as default};

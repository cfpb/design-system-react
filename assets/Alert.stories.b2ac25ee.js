import{j as e}from"./index.7eca609e.js";/* empty css                */import{A as V,T as g,a as x}from"./TextIntroduction.78c7eeb4.js";import"./Dropdown.5d83d4e9.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.8fdf162d.js";import{I as X}from"./Icon.8eb29304.js";import{L as Z}from"./Well.b1717e7b.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.24c2c4ec.js";import"./index.49a47dde.js";import"./iframe.5a9f21fb.js";import"../sb-preview/runtime.js";const fe={title:"Components (Draft)/Alerts",component:V,tags:["autodocs"],argTypes:{message:{control:"text"}}},f=({status:s="a warning"})=>e.exports.jsxs(e.exports.Fragment,{children:["This is a field-level alert with ",s," status."," ",e.exports.jsxs(Z,{hasIcon:!0,href:window.location.host,children:["Link to more info ",e.exports.jsx(X,{name:"external-link"})]}),"."]}),h=s=>`This is an optional explanation of the ${s} message.`,d={href:"/",label:"This is an external link",isExternal:!0},a={render:s=>e.exports.jsx(V,{...s}),args:{status:"info",message:"A Notification"}},n={...a,name:"Information with a message and an explanation",args:{...a.args,message:"Here is the message of the notification.",children:"This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content."}},r={...a,name:"Information with only an explanation",args:{children:"You can also only have an explanation in the notification."}},t={...a,name:"Information with explanation and links",args:{...a.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explanation"},d]}},o={...a,args:{...a.args,status:"success",message:"11 results",links:[d],children:e.exports.jsx(e.exports.Fragment,{children:h("success")})}},i={...a,args:{...a.args,status:"warning",message:"No results found.",links:[d],children:e.exports.jsx(e.exports.Fragment,{children:h("warning")})}},l={...a,args:{...a.args,status:"error",message:"Page not found.",links:[d],children:e.exports.jsx(e.exports.Fragment,{children:h("error")})}},m={...a,name:"In-progress",args:{...a.args,status:"loading",message:"The page is loading\u2026."}},c={render:s=>e.exports.jsxs("div",{className:"m-form-field",children:[e.exports.jsx(g,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.exports.jsx(x,{...s})]}),name:"Success (field-level)",args:{status:"success",message:e.exports.jsx(f,{status:"a success"})}},p={render:s=>e.exports.jsxs("div",{className:"m-form-field",children:[e.exports.jsx(g,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.exports.jsx(x,{...s})]}),name:"Warning (field-level)",args:{status:"warning",message:e.exports.jsx(f,{status:"a warning"})}},u={render:s=>e.exports.jsxs("div",{className:"m-form-field",children:[e.exports.jsx(g,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.exports.jsx(x,{...s})]}),name:"Error (field-level)",args:{status:"error",message:e.exports.jsx(f,{status:"an error"})}};var I,v,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'A Notification'
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var w,L,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with a message and an explanation',
  args: {
    ...Information.args,
    message: 'Here is the message of the notification.',
    children: 'This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content.'
  }
}`,...(k=(L=n.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var j,S,A;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with only an explanation',
  args: {
    children: 'You can also only have an explanation in the notification.'
  }
}`,...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var F,y,E;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with explanation and links',
  args: {
    ...Information.args,
    children: 'This is the explanation of the notification.',
    links: [{
      href: '/',
      label: 'This is a link below the explanation'
    }, externalLinkProperties]
  }
}`,...(E=(y=t.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var W,N,_;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results',
    links: [externalLinkProperties],
    children: <>{alertExplanation('success')}</>
  }
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var P,M,b;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('warning')}</>
  }
}`,...(b=(M=i.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var O,H,Y;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('error')}</>
  }
}`,...(Y=(H=l.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var C,D,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading\u2026.'
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var $,q,z;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as AlertStatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <FieldLevelAlertMessage status='a success' />
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,G,J;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as AlertStatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <FieldLevelAlertMessage status='a warning' />
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as AlertStatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <FieldLevelAlertMessage status='an error' />
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const he=["Information","InformationWithMessageAndExplanation","InformationWithOnlyExplanation","InformationWithLinks","Success","Warning","Error","InProgress","SuccessFieldLevel","WarningFieldLevel","ErrorFieldLevel"];export{l as Error,u as ErrorFieldLevel,m as InProgress,a as Information,t as InformationWithLinks,n as InformationWithMessageAndExplanation,r as InformationWithOnlyExplanation,o as Success,c as SuccessFieldLevel,i as Warning,p as WarningFieldLevel,he as __namedExportsOrder,fe as default};

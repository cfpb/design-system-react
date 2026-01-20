import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{A as V,T as p,a as f}from"./TextIntroduction-C2195LFb.js";import{I as X}from"./Dropdown-C3xHnweU.js";import"./Checkbox-uScmMply.js";import{L as Z}from"./Well-gJoKksGL.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-ZDMBHX8g.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-DhrzolHZ.js";const ge={title:"Components (Draft)/Alerts",component:V,tags:["autodocs"],argTypes:{message:{control:"text"}}},x=({status:s="a warning"})=>e.jsxs(e.Fragment,{children:["This is a field-level alert with ",s," status."," ",e.jsxs(Z,{hasIcon:!0,href:window.location.host,children:["Link to more info ",e.jsx(X,{name:"external-link"})]}),"."]}),h=s=>`This is an optional explanation of the ${s} message.`,g={href:"/",label:"This is an external link",isExternal:!0},a={render:s=>e.jsx(V,{...s}),args:{status:"info",message:"A Notification"}},n={...a,name:"Information with a message and an explanation",args:{...a.args,message:"Here is the message of the notification.",children:"This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content."}},r={...a,name:"Information with only an explanation",args:{children:"You can also only have an explanation in the notification."}},t={...a,name:"Information with explanation and links",args:{...a.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explanation"},g]}},o={...a,args:{...a.args,status:"success",message:"11 results",links:[g],children:e.jsx(e.Fragment,{children:h("success")})}},i={...a,args:{...a.args,status:"warning",message:"No results found.",links:[g],children:e.jsx(e.Fragment,{children:h("warning")})}},l={...a,args:{...a.args,status:"error",message:"Page not found.",links:[g],children:e.jsx(e.Fragment,{children:h("error")})}},m={...a,name:"In-progress",args:{...a.args,status:"loading",message:"The page is loading…."}},c={render:s=>e.jsxs("div",{className:"m-form-field",children:[e.jsx(p,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.jsx(f,{...s})]}),name:"Success (field-level)",args:{status:"success",message:e.jsx(x,{status:"a success"})}},u={render:s=>e.jsxs("div",{className:"m-form-field",children:[e.jsx(p,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.jsx(f,{...s})]}),name:"Warning (field-level)",args:{status:"warning",message:e.jsx(x,{status:"a warning"})}},d={render:s=>e.jsxs("div",{className:"m-form-field",children:[e.jsx(p,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.jsx(f,{...s})]}),name:"Error (field-level)",args:{status:"error",message:e.jsx(x,{status:"an error"})}};var I,v,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var F,E,y;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(y=(E=t.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var W,N,_;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    message: 'The page is loading….'
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var $,q,z;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <FieldLevelAlertMessage status='a success' />
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,G,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <FieldLevelAlertMessage status='a warning' />
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <FieldLevelAlertMessage status='an error' />
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const pe=["Information","InformationWithMessageAndExplanation","InformationWithOnlyExplanation","InformationWithLinks","Success","Warning","Error","InProgress","SuccessFieldLevel","WarningFieldLevel","ErrorFieldLevel"];export{l as Error,d as ErrorFieldLevel,m as InProgress,a as Information,t as InformationWithLinks,n as InformationWithMessageAndExplanation,r as InformationWithOnlyExplanation,o as Success,c as SuccessFieldLevel,i as Warning,u as WarningFieldLevel,pe as __namedExportsOrder,ge as default};

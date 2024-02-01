import{j as a}from"./index.7eca609e.js";/* empty css                */import{A as H,T as d,a as p}from"./Well.9c109664.js";import"./Dropdown.fedbd3e3.js";import"./Checkbox.996db734.js";import"./ExpandableGroup.a7c7cf48.js";import"./Icon.4528769c.js";import"./Paragraph.9304145b.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./index.f108a8f5.js";import"./iframe.7e7c80eb.js";import"../sb-preview/runtime.js";const ns={title:"Components (Draft)/Alerts",component:H,tags:["autodocs"],argTypes:{message:{control:"text"}}},e={render:s=>a.exports.jsx(H,{...s}),args:{status:"info",message:"A Notification"}},t={...e,name:"Information with explanation",args:{...e.args,children:"You can also add an explanation to the notification."}},r={...e,name:"Information with explanation and links",args:{...e.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explanation"},{href:"/",label:"This is an external link",isExternal:!0}]}},n={...e,args:{...e.args,status:"success",message:"11 results"}},o={...e,args:{...e.args,status:"warning",message:"No results found."}},i={...e,args:{...e.args,status:"error",message:"Page not found."}},l={...e,name:"In-progress",args:{...e.args,status:"loading",message:"The page is loading\u2026."}},m={render:s=>a.exports.jsxs("div",{className:"m-form-field",children:[a.exports.jsx(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a.exports.jsx(p,{...s})]}),name:"Success (field-level)",args:{status:"success",message:"This is a field-level alert with a success status."}},u={render:s=>a.exports.jsxs("div",{className:"m-form-field",children:[a.exports.jsx(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a.exports.jsx(p,{...s})]}),name:"Warning (field-level)",args:{status:"warning",message:"This is a field-level alert with a warning status."}},c={render:s=>a.exports.jsxs("div",{className:"m-form-field",children:[a.exports.jsx(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a.exports.jsx(p,{...s})]}),name:"Error (field-level)",args:{status:"error",message:"This is a field-level alert with an error status."}};var g,f,x;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'A Notification'
  }
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,v,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with explanation',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
  }
}`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var T,S,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,L,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results'
  }
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var k,y,A;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found.'
  }
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var F,N,W;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found.'
  }
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,b,P;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading\u2026.'
  }
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var Y,C,D;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as StatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: 'This is a field-level alert with a success status.'
  }
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var O,R,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as StatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: 'This is a field-level alert with a warning status.'
  }
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,B,G;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as StatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: 'This is a field-level alert with an error status.'
  }
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const os=["Information","InformationWithExplanation","InformationWithLinks","Success","Warning","Error","InProgress","SuccessFieldLevel","WarningFieldLevel","ErrorFieldLevel"];export{i as Error,c as ErrorFieldLevel,l as InProgress,e as Information,t as InformationWithExplanation,r as InformationWithLinks,n as Success,m as SuccessFieldLevel,o as Warning,u as WarningFieldLevel,os as __namedExportsOrder,ns as default};

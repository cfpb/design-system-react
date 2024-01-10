/* empty css                */import{r as K,b as d,s as g}from"./Well.31d0e6d4.js";import"./Dropdown.1571d899.js";import"./Checkbox.cd13dfbb.js";import"./ExpandableGroup.3b82f1a5.js";import"./Icon.c18f01f1.js";import{j as a,a as p}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.6c4b7325.js";import"../sb-preview/runtime.js";const os={title:"Components (Draft)/Alerts",component:K,argTypes:{message:{control:"text"}}},e={render:s=>a(K,{...s}),args:{status:"info",message:"A Notification"}},r={...e,name:"Information with explanation",args:{...e.args,children:"You can also add an explanation to the notification."}},t={...e,name:"Information with explanation and links",args:{...e.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explanation"},{href:"/",label:"This is an external link",isExternal:!0}]}},n={...e,args:{...e.args,status:"success",message:"11 results"}},o={...e,args:{...e.args,status:"warning",message:"No results found."}},i={...e,args:{...e.args,status:"error",message:"Page not found."}},l={...e,name:"In-progress",args:{...e.args,status:"loading",message:"The page is loading\u2026."}},m={render:s=>p("div",{className:"m-form-field",children:[a(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a(g,{...s})]}),name:"Success (field-level)",args:{status:"success",message:"This is a field-level alert with a success status."}},u={render:s=>p("div",{className:"m-form-field",children:[a(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a(g,{...s})]}),name:"Warning (field-level)",args:{status:"warning",message:"This is a field-level alert with a warning status."}},c={render:s=>p("div",{className:"m-form-field",children:[a(d,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),a(g,{...s})]}),name:"Error (field-level)",args:{status:"error",message:"This is a field-level alert with an error status."}};var f,h,v;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'A Notification'
  }
}`,...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,I,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with explanation',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
  }
}`,...(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var S,w,L;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var E,k,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results'
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var F,N,W;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found.'
  }
}`,...(W=(N=o.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,A,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found.'
  }
}`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var P,j,Y;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading\u2026.'
  }
}`,...(Y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var C,D,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as StatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: 'This is a field-level alert with a success status.'
  }
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var q,z,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as StatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: 'This is a field-level alert with a warning status.'
  }
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,H,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={(_arguments.status as string)} name={(_arguments.status as string)} status={(_arguments.status as StatusType)} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: 'This is a field-level alert with an error status.'
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const is=["Information","InformationWithExplanation","InformationWithLinks","Success","Warning","Error","InProgress","SuccessFieldLevel","WarningFieldLevel","ErrorFieldLevel"];export{i as Error,c as ErrorFieldLevel,l as InProgress,e as Information,r as InformationWithExplanation,t as InformationWithLinks,n as Success,m as SuccessFieldLevel,o as Warning,u as WarningFieldLevel,is as __namedExportsOrder,os as default};
//# sourceMappingURL=Alert.stories.0c41e7b0.js.map

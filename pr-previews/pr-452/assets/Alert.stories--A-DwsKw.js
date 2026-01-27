import{j as e}from"./jsx-runtime-BLchON5X.js";/* empty css                */import{A as I,T as p,a as f}from"./TextIntroduction-CjEKpn3W.js";import{I as v}from"./Dropdown-BBd26Q6o.js";import"./Checkbox-C8PZvyyp.js";import{L as T}from"./Well-RtzPWrtD.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Ddz0oDhE.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-CtAeEEDl.js";const O={title:"Components (Draft)/Alerts",component:I,tags:["autodocs"],argTypes:{message:{control:"text"}}},x=({status:s="a warning"})=>e.jsxs(e.Fragment,{children:["This is a field-level alert with ",s," status."," ",e.jsxs(T,{hasIcon:!0,href:window.location.host,children:["Link to more info ",e.jsx(v,{name:"external-link"})]}),"."]}),h=s=>`This is an optional explanation of the ${s} message.`,g={href:"/",label:"This is an external link",isExternal:!0},a={render:s=>e.jsx(I,{...s}),args:{status:"info",message:"A Notification"}},n={...a,name:"Information with a message and an explanation",args:{...a.args,message:"Here is the message of the notification.",children:"This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content."}},r={...a,name:"Information with only an explanation",args:{children:"You can also only have an explanation in the notification."}},t={...a,name:"Information with explanation and links",args:{...a.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explanation"},g]}},o={...a,args:{...a.args,status:"success",message:"11 results",links:[g],children:e.jsx(e.Fragment,{children:h("success")})}},i={...a,args:{...a.args,status:"warning",message:"No results found.",links:[g],children:e.jsx(e.Fragment,{children:h("warning")})}},l={...a,args:{...a.args,status:"error",message:"Page not found.",links:[g],children:e.jsx(e.Fragment,{children:h("error")})}},m={...a,name:"In-progress",args:{...a.args,status:"loading",message:"The page is loading…."}},c={render:s=>e.jsxs("div",{className:"m-form-field",children:[e.jsx(p,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.jsx(f,{...s})]}),name:"Success (field-level)",args:{status:"success",message:e.jsx(x,{status:"a success"})}},u={render:s=>e.jsxs("div",{className:"m-form-field",children:[e.jsx(p,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.jsx(f,{...s})]}),name:"Warning (field-level)",args:{status:"warning",message:e.jsx(x,{status:"a warning"})}},d={render:s=>e.jsxs("div",{className:"m-form-field",children:[e.jsx(p,{id:s.status,name:s.status,status:s.status,value:"Input Text",type:"text"}),e.jsx(f,{...s})]}),name:"Error (field-level)",args:{status:"error",message:e.jsx(x,{status:"an error"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'A Notification'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with a message and an explanation',
  args: {
    ...Information.args,
    message: 'Here is the message of the notification.',
    children: 'This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content.'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with only an explanation',
  args: {
    children: 'You can also only have an explanation in the notification.'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results',
    links: [externalLinkProperties],
    children: <>{alertExplanation('success')}</>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('warning')}</>
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('error')}</>
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading….'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <FieldLevelAlertMessage status='a success' />
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <FieldLevelAlertMessage status='a warning' />
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <FieldLevelAlertMessage status='an error' />
  }
}`,...d.parameters?.docs?.source}}};const H=["Information","InformationWithMessageAndExplanation","InformationWithOnlyExplanation","InformationWithLinks","Success","Warning","Error","InProgress","SuccessFieldLevel","WarningFieldLevel","ErrorFieldLevel"];export{l as Error,d as ErrorFieldLevel,m as InProgress,a as Information,t as InformationWithLinks,n as InformationWithMessageAndExplanation,r as InformationWithOnlyExplanation,o as Success,c as SuccessFieldLevel,i as Warning,u as WarningFieldLevel,H as __namedExportsOrder,O as default};

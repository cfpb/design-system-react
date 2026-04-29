import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{F as n,P as r,r as i,t as a}from"./src-BsRdkmci.js";import{t as o}from"./link-JUALcfmE.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{a(),s=t(),c={title:`Components (Draft)/Alerts`,component:r,tags:[`autodocs`],argTypes:{message:{control:`text`}}},l=({status:e=`a warning`})=>(0,s.jsxs)(s.Fragment,{children:[`This is a field-level alert with `,e,` status.`,` `,(0,s.jsx)(o,{iconRight:`external-link`,href:globalThis.location.host,label:`Link to more info`}),`.`]}),u=e=>`This is an optional explanation of the ${e} message.`,d={href:`/`,label:`This is an external link`,isExternal:!0},f={render:e=>(0,s.jsx)(r,{...e}),args:{status:`info`,message:`A Notification`}},p={...f,name:`Information with a message and an explanation`,args:{...f.args,message:`Here is the message of the notification.`,children:`This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content.`}},m={...f,name:`Information with only an explanation`,args:{children:`You can also only have an explanation in the notification.`}},h={...f,name:`Information with explanation and links`,args:{...f.args,children:`This is the explanation of the notification.`,links:[{href:`/`,label:`This is a link below the explanation`},d]}},g={...f,args:{...f.args,status:`success`,message:`11 results`,links:[d],children:(0,s.jsx)(s.Fragment,{children:u(`success`)})}},_={...f,args:{...f.args,status:`warning`,message:`No results found.`,links:[d],children:(0,s.jsx)(s.Fragment,{children:u(`warning`)})}},v={...f,args:{...f.args,status:`error`,message:`Page not found.`,links:[d],children:(0,s.jsx)(s.Fragment,{children:u(`error`)})}},y={...f,name:`In-progress`,args:{...f.args,status:`loading`,message:`The page is loading….`}},b={render:e=>(0,s.jsxs)(`div`,{className:`m-form-field`,children:[(0,s.jsx)(i,{id:e.status,name:e.status,status:e.status,value:`Input Text`,type:`text`}),(0,s.jsx)(n,{...e})]}),name:`Success (field-level)`,args:{status:`success`,message:(0,s.jsx)(l,{status:`a success`})}},x={render:e=>(0,s.jsxs)(`div`,{className:`m-form-field`,children:[(0,s.jsx)(i,{id:e.status,name:e.status,status:e.status,value:`Input Text`,type:`text`}),(0,s.jsx)(n,{...e})]}),name:`Warning (field-level)`,args:{status:`warning`,message:(0,s.jsx)(l,{status:`a warning`})}},S={render:e=>(0,s.jsxs)(`div`,{className:`m-form-field`,children:[(0,s.jsx)(i,{id:e.status,name:e.status,status:e.status,value:`Input Text`,type:`text`}),(0,s.jsx)(n,{...e})]}),name:`Error (field-level)`,args:{status:`error`,message:(0,s.jsx)(l,{status:`an error`})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'A Notification'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with a message and an explanation',
  args: {
    ...Information.args,
    message: 'Here is the message of the notification.',
    children: 'This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with only an explanation',
  args: {
    children: 'You can also only have an explanation in the notification.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results',
    links: [externalLinkProperties],
    children: <>{alertExplanation('success')}</>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('warning')}</>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('error')}</>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading….'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <FieldLevelAlertMessage status='a success' />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <FieldLevelAlertMessage status='a warning' />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status as AlertStatusType} value='Input Text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <FieldLevelAlertMessage status='an error' />
  }
}`,...S.parameters?.docs?.source}}},C=[`Information`,`InformationWithMessageAndExplanation`,`InformationWithOnlyExplanation`,`InformationWithLinks`,`Success`,`Warning`,`Error`,`InProgress`,`SuccessFieldLevel`,`WarningFieldLevel`,`ErrorFieldLevel`]}))();export{v as Error,S as ErrorFieldLevel,y as InProgress,f as Information,h as InformationWithLinks,p as InformationWithMessageAndExplanation,m as InformationWithOnlyExplanation,g as Success,b as SuccessFieldLevel,_ as Warning,x as WarningFieldLevel,C as __namedExportsOrder,c as default};
import{i as e}from"./preload-helper-7yf7uBoM.js";import{t}from"./jsx-runtime-DvpvSDnr.js";import{i as n,n as r,r as i,t as a}from"./alert-DKo-n3gd.js";import{n as o,t as s}from"./text-input-CKbJUq4K.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{r(),n(),o(),c=t(),l={title:`Components (Draft)/Alerts`,component:a,tags:[`autodocs`],argTypes:{message:{control:`text`}}},u=({status:e=`a warning`})=>(0,c.jsxs)(c.Fragment,{children:[`This is a field-level alert with `,e,` status.`]}),d=e=>`This is an optional explanation of the ${e}.`,f={href:`/`,label:`This is an external link`,isExternal:!0},p={render:e=>(0,c.jsx)(a,{...e}),args:{status:`info`,message:`Information alert`}},m={...p,name:`Information with a message and an explanation`,args:{...p.args,children:`You can also add an explanation to the alert.`}},h={...p,name:`Information with only an explanation`,args:{children:`You can also only have an explanation in the notification.`}},g={...p,name:`Information with links`,args:{...p.args,children:`This is the explanation of the alert.`,links:[{href:`/`,label:`This is a link below the explanation`},f]}},_={...p,args:{...p.args,status:`success`,message:`11 results`,links:[f],children:(0,c.jsx)(c.Fragment,{children:d(`success message`)})}},v={...p,args:{...p.args,status:`warning`,message:`No results found`,links:[f],children:(0,c.jsx)(c.Fragment,{children:d(`warning`)})}},y={...p,args:{...p.args,status:`error`,message:`Page not found`,links:[f],children:(0,c.jsx)(c.Fragment,{children:d(`error`)})}},b={...p,name:`In-progress`,args:{...p.args,status:`loading`,message:`The page is loading….`}},x={render:e=>(0,c.jsxs)(`div`,{className:`m-form-field`,children:[(0,c.jsx)(s,{id:e.status,name:e.status,status:e.status,placeholder:`Input text`,type:`text`}),(0,c.jsx)(i,{...e})]}),name:`Success (field-level)`,args:{status:`success`,message:(0,c.jsx)(u,{status:`a success`})}},S={render:e=>(0,c.jsxs)(`div`,{className:`m-form-field`,children:[(0,c.jsx)(s,{id:e.status,name:e.status,status:e.status,placeholder:`Input text`,type:`text`}),(0,c.jsx)(i,{...e})]}),name:`Warning (field-level)`,args:{status:`warning`,message:(0,c.jsx)(u,{status:`a warning`})}},C={render:e=>(0,c.jsxs)(`div`,{className:`m-form-field`,children:[(0,c.jsx)(s,{id:e.status,name:e.status,status:e.status,placeholder:`Input text`,type:`text`}),(0,c.jsx)(i,{...e})]}),name:`Error (field-level)`,args:{status:`error`,message:(0,c.jsx)(u,{status:`an error`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'Information alert'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with a message and an explanation',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the alert.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with only an explanation',
  args: {
    children: 'You can also only have an explanation in the notification.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with links',
  args: {
    ...Information.args,
    children: 'This is the explanation of the alert.',
    links: [{
      href: '/',
      label: 'This is a link below the explanation'
    }, externalLinkProperties]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results',
    links: [externalLinkProperties],
    children: <>{alertExplanation('success message')}</>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found',
    links: [externalLinkProperties],
    children: <>{alertExplanation('warning')}</>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found',
    links: [externalLinkProperties],
    children: <>{alertExplanation('error')}</>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading….'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status} placeholder='Input text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <FieldLevelAlertMessage status='a success' />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status} placeholder='Input text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <FieldLevelAlertMessage status='a warning' />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status} placeholder='Input text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <FieldLevelAlertMessage status='an error' />
  }
}`,...C.parameters?.docs?.source}}},w=[`Information`,`InformationWithMessageAndExplanation`,`InformationWithOnlyExplanation`,`InformationWithLinks`,`Success`,`Warning`,`Error`,`InProgress`,`SuccessFieldLevel`,`WarningFieldLevel`,`ErrorFieldLevel`]}))();export{y as Error,C as ErrorFieldLevel,b as InProgress,p as Information,g as InformationWithLinks,m as InformationWithMessageAndExplanation,h as InformationWithOnlyExplanation,_ as Success,x as SuccessFieldLevel,v as Warning,S as WarningFieldLevel,w as __namedExportsOrder,l as default};
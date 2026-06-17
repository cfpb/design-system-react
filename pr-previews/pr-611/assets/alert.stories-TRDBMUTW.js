import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{et as n,i as r,nt as i,t as a}from"./src-Cd_j5Z_W.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),o=t(),s={title:`Components (Draft)/Alerts`,component:n,tags:[`autodocs`],argTypes:{message:{control:`text`}}},c=({status:e=`a warning`})=>(0,o.jsxs)(o.Fragment,{children:[`This is a field-level alert with `,e,` status.`]}),l=e=>`This is an optional explanation of the ${e}.`,u={href:`/`,label:`This is an external link`,isExternal:!0},d={render:e=>(0,o.jsx)(n,{...e}),args:{status:`info`,message:`Information alert`}},f={...d,name:`Information with a message and an explanation`,args:{...d.args,children:`You can also add an explanation to the alert.`}},p={...d,name:`Information with only an explanation`,args:{children:`You can also only have an explanation in the notification.`}},m={...d,name:`Information with links`,args:{...d.args,children:`This is the explanation of the alert.`,links:[{href:`/`,label:`This is a link below the explanation`},u]}},h={...d,args:{...d.args,status:`success`,message:`11 results`,links:[u],children:(0,o.jsx)(o.Fragment,{children:l(`success message`)})}},g={...d,args:{...d.args,status:`warning`,message:`No results found`,links:[u],children:(0,o.jsx)(o.Fragment,{children:l(`warning`)})}},_={...d,args:{...d.args,status:`error`,message:`Page not found`,links:[u],children:(0,o.jsx)(o.Fragment,{children:l(`error`)})}},v={...d,name:`In-progress`,args:{...d.args,status:`loading`,message:`The page is loading….`}},y={render:e=>(0,o.jsxs)(`div`,{className:`m-form-field`,children:[(0,o.jsx)(r,{id:e.status,name:e.status,status:e.status,placeholder:`Input text`,type:`text`}),(0,o.jsx)(i,{...e})]}),name:`Success (field-level)`,args:{status:`success`,message:(0,o.jsx)(c,{status:`a success`})}},b={render:e=>(0,o.jsxs)(`div`,{className:`m-form-field`,children:[(0,o.jsx)(r,{id:e.status,name:e.status,status:e.status,placeholder:`Input text`,type:`text`}),(0,o.jsx)(i,{...e})]}),name:`Warning (field-level)`,args:{status:`warning`,message:(0,o.jsx)(c,{status:`a warning`})}},x={render:e=>(0,o.jsxs)(`div`,{className:`m-form-field`,children:[(0,o.jsx)(r,{id:e.status,name:e.status,status:e.status,placeholder:`Input text`,type:`text`}),(0,o.jsx)(i,{...e})]}),name:`Error (field-level)`,args:{status:`error`,message:(0,o.jsx)(c,{status:`an error`})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: arguments_ => <Alert {...arguments_} />,
  args: {
    status: 'info',
    message: 'Information alert'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with a message and an explanation',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the alert.'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'Information with only an explanation',
  args: {
    children: 'You can also only have an explanation in the notification.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results',
    links: [externalLinkProperties],
    children: <>{alertExplanation('success message')}</>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found',
    links: [externalLinkProperties],
    children: <>{alertExplanation('warning')}</>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found',
    links: [externalLinkProperties],
    children: <>{alertExplanation('error')}</>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading….'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status} placeholder='Input text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <FieldLevelAlertMessage status='a success' />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status} placeholder='Input text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <FieldLevelAlertMessage status='a warning' />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: _arguments => <div className='m-form-field'>
      <TextInput id={_arguments.status as string} name={_arguments.status as string} status={_arguments.status} placeholder='Input text' type='text' />
      <AlertFieldLevel {..._arguments} />
    </div>,
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <FieldLevelAlertMessage status='an error' />
  }
}`,...x.parameters?.docs?.source}}},S=[`Information`,`InformationWithMessageAndExplanation`,`InformationWithOnlyExplanation`,`InformationWithLinks`,`Success`,`Warning`,`Error`,`InProgress`,`SuccessFieldLevel`,`WarningFieldLevel`,`ErrorFieldLevel`]}))();export{_ as Error,x as ErrorFieldLevel,v as InProgress,d as Information,m as InformationWithLinks,f as InformationWithMessageAndExplanation,p as InformationWithOnlyExplanation,h as Success,y as SuccessFieldLevel,g as Warning,b as WarningFieldLevel,S as __namedExportsOrder,s as default};
import{j as u,c as L}from"./index.dedf70f8.js";import{r as M}from"./index.ca1bfdbe.js";import{g as Q,n as U}from"./TextInputStatus.8d37edaa.js";import"./_commonjsHelpers.712cc82f.js";const i=M.exports.forwardRef(({id:d,className:I="",status:O="info",placeholder:R="Placeholder text",isFullWidth:k=!1,isDisabled:P=!1,onChange:z=U,...B},G)=>{const J=e=>{e.preventDefault(),z(e.target.value)},K=["a-text-input",Q(O),k?"a-text-input__full":"",I||""].filter(e=>e.length);return u.exports.jsx("div",{className:"m-form-field",children:u.exports.jsx("textarea",{className:L(K),id:d,placeholder:R,onChange:J,disabled:P,ref:G,...B})})});try{i.displayName="TextArea",i.__docgenInfo={description:"Source: <a href='https://cfpb.github.io/design-system/components/text-inputs#text-area-input-1' target='_blank'> https://cfpb.github.io/design-system/components/text-inputs#text-area-input-1</a>",displayName:"TextArea",props:{status:{defaultValue:{value:"info"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Components (Verified)/Text inputs/Text area",tags:["autodocs"],component:i,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},a={args:{id:"Enabled",placeholder:"Enabled",name:"Enabled"}},r={args:{id:"Hover",placeholder:"Hover",name:"Hover",className:"hover"}},s={args:{id:"Focus",placeholder:"Focus",name:"Focus",className:"focus"}},n={args:{id:"Disabled",placeholder:"Disabled",name:"Disabled",isDisabled:!0}},o={args:{id:"Success",placeholder:"Success",name:"Success",status:"success"}},t={args:{id:"Warning",placeholder:"Warning",name:"Warning",status:"warning"}},l={args:{id:"Error",placeholder:"Error",name:"Error",status:"error"}},c={args:{id:"Full width",placeholder:"Full width",name:"Full width",isFullWidth:!0}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'Enabled',
    placeholder: 'Enabled',
    name: 'Enabled'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,f,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'Hover',
    placeholder: 'Hover',
    name: 'Hover',
    className: 'hover'
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,F,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'Focus',
    placeholder: 'Focus',
    name: 'Focus',
    className: 'focus'
  }
}`,...(v=(F=s.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var S,E,W;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'Disabled',
    placeholder: 'Disabled',
    name: 'Disabled',
    isDisabled: true
  }
}`,...(W=(E=n.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var D,_,w;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'Success',
    placeholder: 'Success',
    name: 'Success',
    status: 'success'
  }
}`,...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var y,H,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'Warning',
    placeholder: 'Warning',
    name: 'Warning',
    status: 'warning'
  }
}`,...(N=(H=t.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var T,j,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'Error',
    placeholder: 'Error',
    name: 'Error',
    status: 'error'
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var V,q,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'Full width',
    placeholder: 'Full width',
    name: 'Full width',
    isFullWidth: true
  }
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const ae=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth"];export{n as Disabled,a as Enabled,l as Error,s as Focus,c as FullWidth,r as Hover,o as Success,t as Warning,ae as __namedExportsOrder,ee as default};

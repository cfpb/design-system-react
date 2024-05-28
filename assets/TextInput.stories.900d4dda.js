import{j as e}from"./index.7eca609e.js";/* empty css                */import{T as s}from"./TextIntroduction.7bde5292.js";import{B as Q}from"./Dropdown.525f1d32.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.3cd2268e.js";import{I as P}from"./Icon.f49541e3.js";import"./Well.e7055d12.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.946277fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.67af5abc.js";import"./index.f108a8f5.js";import"./iframe.aafaad47.js";import"../sb-preview/runtime.js";const le={title:"Components (Verified)/Text inputs/Text input",tags:["autodocs"],component:s,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},n={args:{name:"Enabled",id:"Enabled",value:"Enabled",type:"text"}},a={args:{...n.args,name:"Hover",id:"Hover",value:"Hover"},render:t=>e.exports.jsx(s,{...t,className:"hover"})},r={args:{...n.args,name:"Focus",id:"Focus",value:"Focus"},render:t=>e.exports.jsx(s,{...t,className:"focus"})},o={args:{...n.args,value:"Disabled",name:"Disabled",id:"Disabled",disabled:!0}},i={args:{...n.args,value:"Success",name:"Success",id:"Success",status:"success"}},u={args:{...n.args,value:"Warning",name:"Warning",id:"Warning",status:"warning"}},c={args:{...n.args,value:"Error",name:"Error",id:"Error",status:"error"}},d={name:"Full width",args:{...n.args,value:"Input text",name:"fullWidth",id:"fullWidth",isFullWidth:!0}},m={name:"With button",args:{...n.args,name:"withButton",id:"withButton",value:""},render:t=>e.exports.jsxs("div",{className:"o-form__input-w-btn",children:[e.exports.jsx("div",{className:"o-form__input-w-btn_input-container",children:e.exports.jsx(s,{...t})}),e.exports.jsx("div",{className:"o-form__input-w-btn_btn-container",children:e.exports.jsx(Q,{label:"Search"})})]})},l={name:"Button inside",args:{...n.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",name:"ButtonInside",id:"ButtonInside"},render:t=>e.exports.jsxs("div",{className:"m-btn-inside-input",children:[e.exports.jsx(s,{...t}),e.exports.jsx("button",{type:"button",className:"a-btn a-btn__link",children:e.exports.jsx(P,{name:"error"})})]})},p={name:"Button inside (with button)",args:{...n.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",name:"ButtonInsideButton",id:"ButtonInsideButton"},render:t=>e.exports.jsxs("div",{className:"o-form__input-w-btn",children:[e.exports.jsx("div",{className:"o-form__input-w-btn_input-container",children:e.exports.jsxs("div",{className:"m-btn-inside-input",children:[e.exports.jsx(s,{...t}),e.exports.jsx("button",{type:"button",className:"a-btn a-btn__link",children:e.exports.jsx(P,{name:"error"})})]})}),e.exports.jsx("div",{className:"o-form__input-w-btn_btn-container",children:e.exports.jsx("button",{type:"button",className:"a-btn",children:"Search"})})]})};var b,g,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,x,_;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var B,E,w;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...(w=(E=r.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var N,W,f;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...(f=(W=o.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var I,S,j;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var y,T,F;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...(F=(T=u.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var D,k,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...(H=(k=c.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var C,O,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var V,q,z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With button',
  args: {
    ...Enabled.args,
    name: 'withButton',
    id: 'withButton',
    value: ''
  },
  render: _arguments => <div className='o-form__input-w-btn'>
      <div className='o-form__input-w-btn_input-container'>
        <TextInput {..._arguments} />
      </div>
      <div className='o-form__input-w-btn_btn-container'>
        <Button label='Search' />
      </div>
    </div>
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,G,J;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Button inside',
  args: {
    ...Enabled.args,
    value: "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",
    name: 'ButtonInside',
    id: 'ButtonInside'
  },
  render: _arguments => <div className='m-btn-inside-input'>
      <TextInput {..._arguments} />
      <button type='button' className='a-btn a-btn__link'>
        <Icon name='error' />
      </button>
    </div>
}`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,M;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Button inside (with button)',
  args: {
    ...Enabled.args,
    value: "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",
    name: 'ButtonInsideButton',
    id: 'ButtonInsideButton'
  },
  render: _arguments => <div className='o-form__input-w-btn'>
      <div className='o-form__input-w-btn_input-container'>
        <div className='m-btn-inside-input'>
          <TextInput {..._arguments} />
          <button type='button' className='a-btn a-btn__link'>
            <Icon name='error' />
          </button>
        </div>
      </div>
      <div className='o-form__input-w-btn_btn-container'>
        <button type='button' className='a-btn'>
          Search
        </button>
      </div>
    </div>
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const pe=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth","WithButton","WithButtonInsideText","WithButtonInsideButton"];export{o as Disabled,n as Enabled,c as Error,r as Focus,d as FullWidth,a as Hover,i as Success,u as Warning,m as WithButton,p as WithButtonInsideButton,l as WithButtonInsideText,pe as __namedExportsOrder,le as default};

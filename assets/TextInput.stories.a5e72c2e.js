/* empty css                */import{d as t}from"./Well.9b80cdca.js";import{B as U}from"./Dropdown.cb55dbcb.js";import"./Checkbox.adabeb2b.js";import"./ExpandableGroup.60ffd0aa.js";import{I as R}from"./Icon.ad55ad7e.js";import{j as e,a as b}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.130b0b6c.js";import"../sb-preview/runtime.js";const de={title:"Components (Verified)/Text inputs",tags:["autodocs"],component:t,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},n={args:{name:"Enabled",id:"Enabled",value:"Enabled",type:"text"}},s={args:{...n.args,name:"Hover",id:"Hover",value:"Hover"},render:a=>e(t,{...a,className:"hover"})},r={args:{...n.args,name:"Focus",id:"Focus",value:"Focus"},render:a=>e(t,{...a,className:"focus"})},o={args:{...n.args,value:"Disabled",name:"Disabled",id:"Disabled",disabled:!0}},i={args:{...n.args,value:"Success",name:"Success",id:"Success",status:"success"}},u={args:{...n.args,value:"Warning",name:"Warning",id:"Warning",status:"warning"}},c={args:{...n.args,value:"Error",name:"Error",id:"Error",status:"error"}},d={name:"Full width",args:{...n.args,value:"Input text",name:"fullWidth",id:"fullWidth",isFullWidth:!0}},m={name:"With button",args:{...n.args,name:"withButton",id:"withButton",value:""},render:a=>b("div",{className:"o-form__input-w-btn",children:[e("div",{className:"o-form__input-w-btn_input-container",children:e(t,{...a})}),e("div",{className:"o-form__input-w-btn_btn-container",children:e(U,{label:"Search"})})]})},l={name:"Button inside",args:{...n.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",name:"ButtonInside",id:"ButtonInside"},render:a=>b("div",{className:"m-btn-inside-input",children:[e(t,{...a}),e("button",{className:"a-btn a-btn__link",children:e(R,{name:"error"})})]})},p={name:"Button inside (with button)",args:{...n.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",name:"ButtonInsideButton",id:"ButtonInsideButton"},render:a=>b("div",{className:"o-form__input-w-btn",children:[e("div",{className:"o-form__input-w-btn_input-container",children:b("div",{className:"m-btn-inside-input",children:[e(t,{...a}),e("button",{className:"a-btn a-btn__link",children:e(R,{name:"error"})})]})}),e("div",{className:"o-form__input-w-btn_btn-container",children:e("button",{className:"a-btn",children:"Search"})})]})};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'Enabled',
    id: 'Enabled',
    value: 'Enabled',
    type: 'text'
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var _,B,E;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Hover',
    id: 'Hover',
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var w,N,W;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    name: 'Focus',
    id: 'Focus',
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...(W=(N=r.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var f,I,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Disabled',
    name: 'Disabled',
    id: 'Disabled',
    disabled: true
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var x,F,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Success',
    name: 'Success',
    id: 'Success',
    status: 'success'
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var y,D,k;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Warning',
    name: 'Warning',
    id: 'Warning',
    status: 'warning'
  }
}`,...(k=(D=u.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var H,j,C;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Enabled.args,
    value: 'Error',
    name: 'Error',
    id: 'Error',
    status: 'error'
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var O,V,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Full width',
  args: {
    ...Enabled.args,
    value: 'Input text',
    name: 'fullWidth',
    id: 'fullWidth',
    isFullWidth: true
  }
}`,...(q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,A,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,L;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Button inside',
  args: {
    ...Enabled.args,
    value: "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable.",
    name: 'ButtonInside',
    id: 'ButtonInside'
  },
  render: _arguments => <div className='m-btn-inside-input'>
      <TextInput {..._arguments} />
      <button className='a-btn a-btn__link'>
        <Icon name='error' />
      </button>
    </div>
}`,...(L=(K=l.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,P,Q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          <button className='a-btn a-btn__link'>
            <Icon name='error' />
          </button>
        </div>
      </div>
      <div className='o-form__input-w-btn_btn-container'>
        <button className='a-btn'>Search</button>
      </div>
    </div>
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const me=["Enabled","Hover","Focus","Disabled","Success","Warning","Error","FullWidth","WithButton","WithButtonInsideText","WithButtonInsideButton"];export{o as Disabled,n as Enabled,c as Error,r as Focus,d as FullWidth,s as Hover,i as Success,u as Warning,m as WithButton,p as WithButtonInsideButton,l as WithButtonInsideText,me as __namedExportsOrder,de as default};
//# sourceMappingURL=TextInput.stories.a5e72c2e.js.map

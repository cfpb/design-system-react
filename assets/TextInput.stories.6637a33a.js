/* empty css                */import{b as r}from"./Well.8b359911.js";import{B as V}from"./Dropdown.a315f808.js";import"./Checkbox.cd13dfbb.js";import"./ExpandableGroup.394828f2.js";import{I as U}from"./Icon.bd2a0ab0.js";import{j as e,a as g}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.89f60069.js";import"../sb-preview/runtime.js";const me={title:"Components (Draft)/Text inputs",component:r,argTypes:{isFullWidth:{control:"boolean"},isDisabled:{control:"boolean"}}},t={args:{name:"Default",id:"Default",value:"Default",type:"text"}},s={args:{...t.args,value:"Hover"},render:a=>e(r,{...a,className:"hover"})},n={args:{...t.args,value:"Focus"},render:a=>e(r,{...a,className:"focus"})},o={args:{...t.args,value:"Disabled",disabled:!0}},u={args:{...t.args,value:"Success",status:"success"}},i={args:{...t.args,value:"Warning",status:"warning"}},c={args:{...t.args,value:"Error",status:"error"}},m={name:"Text input (full width)",args:{...t.args,value:"Input text",isFullWidth:!0}},l={name:"Text input (with button)",args:{...t.args,value:""},render:a=>g("div",{className:"o-form__input-w-btn",children:[e("div",{className:"o-form__input-w-btn_input-container",children:e(r,{...a})}),e("div",{className:"o-form__input-w-btn_btn-container",children:e(V,{label:"Search"})})]})},d={name:"Button inside text input",args:{...t.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."},render:a=>g("div",{className:"m-btn-inside-input",children:[e(r,{...a}),e("button",{className:"a-btn a-btn__link",children:e(U,{name:"error"})})]})},p={name:"Button inside text input with another button",args:{...t.args,value:"This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."},render:a=>g("div",{className:"o-form__input-w-btn",children:[e("div",{className:"o-form__input-w-btn_input-container",children:g("div",{className:"m-btn-inside-input",children:[e(r,{...a}),e("button",{className:"a-btn a-btn__link",children:e(U,{name:"error"})})]})}),e("div",{className:"o-form__input-w-btn_btn-container",children:e("button",{className:"a-btn",children:"Search"})})]})};var b,h,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'Default',
    id: 'Default',
    value: 'Default',
    type: 'text'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var _,f,x;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Hover'
  },
  render: _arguments => <TextInput {..._arguments} className='hover' />
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var N,w,D;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Focus'
  },
  render: _arguments => <TextInput {..._arguments} className='focus' />
}`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var S,T,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Disabled',
    disabled: true
  }
}`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var B,W,y;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Success',
    status: 'success'
  }
}`,...(y=(W=u.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var F,k,E;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Warning',
    status: 'warning'
  }
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var H,j,C;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Error',
    status: 'error'
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var O,q,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Text input (full width)',
  args: {
    ...Default.args,
    value: 'Input text',
    isFullWidth: true
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,G,J;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Text input (with button)',
  args: {
    ...Default.args,
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
}`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,M;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Button inside text input',
  args: {
    ...Default.args,
    value: "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
  },
  render: _arguments => <div className='m-btn-inside-input'>
      <TextInput {..._arguments} />
      <button className='a-btn a-btn__link'>
        <Icon name='error' />
      </button>
    </div>
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,Q,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Button inside text input with another button',
  args: {
    ...Default.args,
    value: "This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
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
}`,...(R=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};const le=["Default","Hover","Focus","Disabled","Success","Warning","Error","FullWidth","WithButton","WithButtonInsideText","WithButtonInsideButton"];export{t as Default,o as Disabled,c as Error,n as Focus,m as FullWidth,s as Hover,u as Success,i as Warning,l as WithButton,p as WithButtonInsideButton,d as WithButtonInsideText,le as __namedExportsOrder,me as default};
//# sourceMappingURL=TextInput.stories.6637a33a.js.map

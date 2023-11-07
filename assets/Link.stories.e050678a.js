/* empty css                */import"./Well.28195bda.js";import"./Dropdown.d311ac30.js";import"./Checkbox.fe2d0150.js";import"./ExpandableGroup.5ef38df2.js";import{I as s}from"./Icon.ca3ea072.js";import{a as r,j as n,F as U}from"./jsx-runtime.54133100.js";import{b as i,L as E,d as k,D as O,e as a}from"./TextIntroduction.ff1fa05f.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.987172cc.js";import"../sb-preview/runtime.js";const an={title:"Components (Verified)/Links",component:i},o={args:{href:"#",children:"Link Text"}},c={name:"Inline links",render:()=>r("p",{children:["Here's the ",n(i,{href:"/#",children:"default link style"}),". For reference, here's the"," ",n(i,{href:"/#",className:"hover",children:"hover link style"}),". Train your eyes on the"," ",n(i,{href:"/#",className:"focus",children:"focused link style"}),". Jump to the"," ",n(i,{href:"/#",className:"active",children:"active link style"}),". We've all been to the"," ",n(i,{href:"/#",className:"visited",children:"visited link style"}),"."]})},l={name:"List links",args:{...o.args},render:e=>r(E,{isLinks:!0,children:[n(k,{...e,children:"List link 1"}),n(k,{...e,children:"List link 2"})]})},m={name:"Destructive links",args:{...o.args,children:"Destructive link"},render:e=>n(O,{...e})},t={name:"Link with icon",args:{...o.args,hasIcon:!0},render:e=>r(U,{children:["The document icon should emphasize a link that contains a"," ",r(i,{...e,children:[n(a,{children:"file or document"})," ",n(s,{name:"download"})]}),". Use the external link icon to emphasize"," ",r(i,{...e,children:[n(a,{children:"a non-CFPB webpage"})," ",n(s,{name:"external-link"})]})," ","for further details."]})},u={name:"Non-wrapping link with icon",args:{...t.args,noWrap:!0},render:e=>r(U,{children:["The document icon should emphasize a link that contains a"," ",r(i,{...e,children:[n(a,{children:"file or document"})," ",n(s,{name:"download"})]}),"."]})},h={name:"Jump link",args:{...o.args,isJump:!0},render:e=>r(i,{...e,children:[n(a,{children:"Jump link"}),"\xA0",n(s,{name:"right"})]})},d={name:"Jump link with icon on left",args:{...o.args,isJumpLeft:!0},render:e=>r(i,{...e,children:[n(s,{name:"left"}),"\xA0",n(a,{children:"Jump link with icon on left"})]})},p={name:"Printed links",render:()=>r("p",{children:["Here's the"," ",r("a",{href:"https://consumerfinance.gov/about-us/blog",style:{fontWeight:500},children:["link style",r("span",{style:{fontWeight:300,borderBottom:"1px solid #ffffff"},children:[" ","(cfpb.gov/about-us/blog)"]})]})," ","when printed."]})};var g,L,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Inline links',
  render: () => <p>
      Here&apos;s the <Link href='/#'>default link style</Link>. For reference,
      here&apos;s the{' '}
      <Link href='/#' className='hover'>
        hover link style
      </Link>
      . Train your eyes on the{' '}
      <Link href='/#' className='focus'>
        focused link style
      </Link>
      . Jump to the{' '}
      <Link href='/#' className='active'>
        active link style
      </Link>
      . We&apos;ve all been to the{' '}
      <Link href='/#' className='visited'>
        visited link style
      </Link>
      .
    </p>
}`,...(f=(L=c.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var v,x,W;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'List links',
  args: {
    ...DefaultArguments.args
  },
  render: arguments_ => <List isLinks>
      <ListLink {...arguments_}>List link 1</ListLink>
      <ListLink {...arguments_}>List link 2</ListLink>
    </List>
}`,...(W=(x=l.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var y,I,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Destructive links',
  args: {
    ...DefaultArguments.args,
    children: 'Destructive link'
  },
  render: arguments_ => <DestructiveLink {...arguments_} />
}`,...(b=(I=m.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var w,J,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Link with icon',
  args: {
    ...DefaultArguments.args,
    hasIcon: true
  },
  render: arguments_ => <>
      The document icon should emphasize a link that contains a{' '}
      <Link {...arguments_}>
        <LinkText>file or document</LinkText> <Icon name='download' />
      </Link>
      . Use the external link icon to emphasize{' '}
      <Link {...arguments_}>
        <LinkText>a non-CFPB webpage</LinkText> <Icon name='external-link' />
      </Link>{' '}
      for further details.
    </>
}`,...(T=(J=t.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var D,_,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Non-wrapping link with icon',
  args: {
    ...LinkWithIcon.args,
    noWrap: true
  },
  render: arguments_ => <>
      The document icon should emphasize a link that contains a{' '}
      <Link {...arguments_}>
        <LinkText>file or document</LinkText> <Icon name='download' />
      </Link>
      .
    </>
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var A,S,z;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Jump link',
  args: {
    ...DefaultArguments.args,
    isJump: true
  },
  render: arguments_ => <Link {...arguments_}>
      <LinkText>Jump link</LinkText>&nbsp;
      <Icon name='right' />
    </Link>
}`,...(z=(S=h.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var F,P,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Jump link with icon on left',
  args: {
    ...DefaultArguments.args,
    isJumpLeft: true
  },
  render: arguments_ => <Link {...arguments_}>
      <Icon name='left' />
      &nbsp;<LinkText>Jump link with icon on left</LinkText>
    </Link>
}`,...(B=(P=d.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var H,j,C;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Printed links',
  render: () => {
    const linkWeight = 500;
    const urlWeight = 300;
    return <p>
        Here&apos;s the{' '}
        <a href='https://consumerfinance.gov/about-us/blog' style={{
        fontWeight: linkWeight
      }}>
          link style
          <span style={{
          fontWeight: urlWeight,
          borderBottom: '1px solid #ffffff'
        }}>
            {' '}
            (cfpb.gov/about-us/blog)
          </span>
        </a>{' '}
        when printed.
      </p>;
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const on=["Inline","ListLinks","Destructive","LinkWithIcon","LinkWithIconNoWrapping","JumpLink","JumpLinkIconLeft","PrintLink"];export{m as Destructive,c as Inline,h as JumpLink,d as JumpLinkIconLeft,t as LinkWithIcon,u as LinkWithIconNoWrapping,l as ListLinks,p as PrintLink,on as __namedExportsOrder,an as default};
//# sourceMappingURL=Link.stories.e050678a.js.map

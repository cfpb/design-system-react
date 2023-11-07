/* empty css                */import"./Well.ea54efd7.js";import"./Dropdown.a9b968bd.js";import"./Checkbox.fe2d0150.js";import"./ExpandableGroup.a04d87df.js";import{I as c,n as ae,s as oe,a as re,c as se,b as ie,d as de,f as me,e as le,w as pe}from"./Icon.e5ec578e.js";import{j as e,a as n}from"./jsx-runtime.54133100.js";import{H as x}from"./TextIntroduction.84e2ef5f.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.d0cd645b.js";import"../sb-preview/runtime.js";const fe={title:"Components (Draft)/Icons",component:c,parameters:{docs:{description:{component:`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`}}}},S={fontSize:"2em"},a=r=>r.map(t=>n("tr",{children:[e("td",{style:S,children:e(c,{name:t})}),e("td",{style:S,children:e(c,{name:t,withBg:!0})}),e("td",{children:t})]},`${t}`)),o=({children:r})=>n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"icon"}),e("th",{children:"withBg"}),e("th",{children:"canonical name"})]})}),e("tbody",{children:r})]}),s=()=>e("span",{style:S,children:e(c,{name:"approved"})}),i=()=>e("span",{style:S,children:e(c,{name:"approved",withBg:!0})}),d=()=>e(o,{children:a(ae)}),m=()=>e(o,{children:a(oe)}),l=()=>e(o,{children:a(re)}),p=()=>e(o,{children:a(se)}),u=()=>e(o,{children:a(ie)}),h=()=>e(o,{children:a(de)}),I=()=>e(o,{children:a(me)}),g=()=>e(o,{children:a(le)}),b=()=>e(o,{children:a(pe)}),R={name:"Icon with text",render:()=>{const r=[{type:"2",text:"Auto loans"},{type:"3",text:"Bank accounts"},{type:"4",text:"Credit cards"},{type:"5",text:"Submit a complaint"}];return n("table",{children:[n("thead",{children:[e("th",{children:"Text element"}),e("th",{children:"Icon with background"}),e("th",{children:"Icon without background"})]}),n("tbody",{children:[r.map(({type:t,text:w})=>n("tr",{children:[n("td",{children:["h",t]}),e("td",{children:n(x,{type:t,children:[e(c,{name:"credit-card",withBg:!0})," ",w]})}),e("td",{children:n(x,{type:t,children:[e(c,{name:"credit-card"})," ",w]})})]},t)),n("tr",{children:[e("td",{children:"p"}),e("td",{children:n("p",{children:[e(c,{name:"college",withBg:!0})," Student loans"]})}),e("td",{children:n("p",{children:[e(c,{name:"college"})," Student loans"]})})]})]})]})}};var y,T,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => <span style={biggerIcon}>
    <Icon name='approved' />
  </span>`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,v,B;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`(): React.ReactElement => <span style={biggerIcon}>
    <Icon name='approved' withBg />
  </span>`,...(B=(v=i.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var f,C,H;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(navigationIcons)}</IconTable>",...(H=(C=d.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var A,W,L;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(statusIcons)}</IconTable>",...(L=(W=m.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var P,D,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(socialIcons)}</IconTable>",...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var j,F,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(communicationIcons)}</IconTable>",...(_=(F=p.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var z,O,$;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(numberIcons)}</IconTable>",...($=(O=u.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,G,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(documentIcons)}</IconTable>",...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(financialIcons)}</IconTable>",...(Q=(M=I.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,V,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(expenseIcons)}</IconTable>",...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(webIcons)}</IconTable>",...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ce;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Icon with text',
  render: () => {
    interface LevelExample {
      type: HeadingType;
      text: string;
    }
    const acceptableLevels: LevelExample[] = [{
      type: '2',
      text: 'Auto loans'
    }, {
      type: '3',
      text: 'Bank accounts'
    }, {
      type: '4',
      text: 'Credit cards'
    }, {
      type: '5',
      text: 'Submit a complaint'
    }];
    return <table>
        <thead>
          <th>Text element</th>
          <th>Icon with background</th>
          <th>Icon without background</th>
        </thead>
        <tbody>
          {acceptableLevels.map(({
          type,
          text
        }) => <tr key={type}>
              <td>h{type}</td>
              <td>
                <Heading type={type}>
                  <Icon name='credit-card' withBg /> {text}
                </Heading>
              </td>
              <td>
                <Heading type={type}>
                  <Icon name='credit-card' /> {text}
                </Heading>
              </td>
            </tr>)}
          <tr>
            <td>p</td>
            <td>
              <p>
                <Icon name='college' withBg /> Student loans
              </p>
            </td>
            <td>
              <p>
                <Icon name='college' /> Student loans
              </p>
            </td>
          </tr>
        </tbody>
      </table>;
  }
}`,...(ce=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};const Ce=["IconPlain","IconWithBackground","NavigationIcons","StatusIcons","SocialSharingIcons","CommunicationIcons","NumberIcons","DocumentIcons","FinancialProductsServicesAndConceptIcons","ExpenseIcons","WebApplicationIcons","IconWithText"];export{p as CommunicationIcons,h as DocumentIcons,g as ExpenseIcons,I as FinancialProductsServicesAndConceptIcons,s as IconPlain,i as IconWithBackground,R as IconWithText,d as NavigationIcons,u as NumberIcons,l as SocialSharingIcons,m as StatusIcons,b as WebApplicationIcons,Ce as __namedExportsOrder,fe as default};
//# sourceMappingURL=Icon.stories.a9f31741.js.map

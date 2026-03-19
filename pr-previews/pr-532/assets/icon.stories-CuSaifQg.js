import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{a as n,c as r,d as i,f as a,i as o,l as s,o as c,r as l,s as u,t as d,u as f}from"./icon-24QO0uwi.js";import{t as p,y as m}from"./src-DJKH08Pi.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{p(),u(),h=t(),g={title:`Components (Draft)/Icons`,tags:[`autodocs`],component:d,parameters:{docs:{description:{component:`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`}}}},_={fontSize:`2em`},v=e=>e.map(e=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:_,children:(0,h.jsx)(d,{name:e})}),(0,h.jsx)(`td`,{style:_,children:(0,h.jsx)(d,{name:e,withBg:!0})}),(0,h.jsx)(`td`,{children:e})]},`${e}`)),y=({children:e})=>(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`icon`}),(0,h.jsx)(`th`,{children:`withBg`}),(0,h.jsx)(`th`,{children:`canonical name`})]})}),(0,h.jsx)(`tbody`,{children:e})]}),b=()=>(0,h.jsx)(`span`,{style:_,children:(0,h.jsx)(d,{name:`approved`})}),x=()=>(0,h.jsx)(`span`,{style:_,children:(0,h.jsx)(d,{name:`approved`,withBg:!0})}),S=()=>(0,h.jsx)(y,{children:v(r)}),C=()=>(0,h.jsx)(y,{children:v(i)}),w=()=>(0,h.jsx)(y,{children:v(f)}),T=()=>(0,h.jsx)(y,{children:v(l)}),E=()=>(0,h.jsx)(y,{children:v(s)}),D=()=>(0,h.jsx)(y,{children:v(o)}),O=()=>(0,h.jsx)(y,{children:v(c)}),k=()=>(0,h.jsx)(y,{children:v(n)}),A=()=>(0,h.jsx)(y,{children:v(a)}),j={name:`Icon with text`,render:()=>(0,h.jsxs)(`table`,{children:[(0,h.jsxs)(`thead`,{children:[(0,h.jsx)(`th`,{children:`Text element`}),(0,h.jsx)(`th`,{children:`Icon with background`}),(0,h.jsx)(`th`,{children:`Icon without background`})]}),(0,h.jsxs)(`tbody`,{children:[[{type:`2`,text:`Auto loans`},{type:`3`,text:`Bank accounts`},{type:`4`,text:`Credit cards`},{type:`5`,text:`Submit a complaint`}].map(({type:e,text:t})=>(0,h.jsxs)(`tr`,{children:[(0,h.jsxs)(`td`,{children:[`h`,e]}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(m,{type:e,children:[(0,h.jsx)(d,{name:`credit-card`,withBg:!0}),` `,t]})}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(m,{type:e,children:[(0,h.jsx)(d,{name:`credit-card`}),` `,t]})})]},e)),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:`p`}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(`p`,{children:[(0,h.jsx)(d,{name:`college`,withBg:!0}),` Student loans`]})}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(`p`,{children:[(0,h.jsx)(d,{name:`college`}),` Student loans`]})})]})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(): React.ReactElement => <span style={biggerIcon}>
    <Icon name='approved' />
  </span>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(): React.ReactElement => <span style={biggerIcon}>
    <Icon name='approved' withBg />
  </span>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(navigationIcons)}</IconTable>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(statusIcons)}</IconTable>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(socialIcons)}</IconTable>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(communicationIcons)}</IconTable>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(numberIcons)}</IconTable>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(documentIcons)}</IconTable>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(financialIcons)}</IconTable>`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(expenseIcons)}</IconTable>`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(): React.ReactElement => <IconTable>{makeRows(webIcons)}</IconTable>`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`IconPlain`,`IconWithBackground`,`NavigationIcons`,`StatusIcons`,`SocialSharingIcons`,`CommunicationIcons`,`NumberIcons`,`DocumentIcons`,`FinancialProductsServicesAndConceptIcons`,`ExpenseIcons`,`WebApplicationIcons`,`IconWithText`]}))();export{T as CommunicationIcons,D as DocumentIcons,k as ExpenseIcons,O as FinancialProductsServicesAndConceptIcons,b as IconPlain,x as IconWithBackground,j as IconWithText,S as NavigationIcons,E as NumberIcons,w as SocialSharingIcons,C as StatusIcons,A as WebApplicationIcons,M as __namedExportsOrder,g as default};
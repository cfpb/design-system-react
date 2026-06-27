import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./icon-DEK0Vwpk.js";import{n as m,t as h}from"./heading-DlqVg8CH.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{m(),c(),d(),g=t(),_={title:`Components (Draft)/Icons`,tags:[`autodocs`],component:f,parameters:{docs:{description:{component:`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`}}}},v={fontSize:`2em`},y=e=>e.map(e=>(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{style:v,children:(0,g.jsx)(f,{name:e})}),(0,g.jsx)(`td`,{style:v,children:(0,g.jsx)(f,{name:e,withBg:!0})}),(0,g.jsx)(`td`,{children:e})]},`${e}`)),b=({children:e})=>(0,g.jsxs)(`table`,{children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{children:`icon`}),(0,g.jsx)(`th`,{children:`withBg`}),(0,g.jsx)(`th`,{children:`canonical name`})]})}),(0,g.jsx)(`tbody`,{children:e})]}),x=()=>(0,g.jsx)(`span`,{style:v,children:(0,g.jsx)(f,{name:`approved`})}),S=()=>(0,g.jsx)(`span`,{style:v,children:(0,g.jsx)(f,{name:`approved`,withBg:!0})}),C=()=>(0,g.jsx)(b,{children:y(r)}),w=()=>(0,g.jsx)(b,{children:y(i)}),T=()=>(0,g.jsx)(b,{children:y(p)}),E=()=>(0,g.jsx)(b,{children:y(u)}),D=()=>(0,g.jsx)(b,{children:y(s)}),O=()=>(0,g.jsx)(b,{children:y(o)}),k=()=>(0,g.jsx)(b,{children:y(l)}),A=()=>(0,g.jsx)(b,{children:y(n)}),j=()=>(0,g.jsx)(b,{children:y(a)}),M={name:`Icon with text`,render:()=>(0,g.jsxs)(`table`,{children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{children:`Text element`}),(0,g.jsx)(`th`,{children:`Icon with background`}),(0,g.jsx)(`th`,{children:`Icon without background`})]})}),(0,g.jsxs)(`tbody`,{children:[[{type:`2`,text:`Auto loans`},{type:`3`,text:`Bank accounts`},{type:`4`,text:`Credit cards`},{type:`5`,text:`Submit a complaint`}].map(({type:e,text:t})=>(0,g.jsxs)(`tr`,{children:[(0,g.jsxs)(`td`,{children:[`h`,e]}),(0,g.jsx)(`td`,{children:(0,g.jsxs)(h,{type:e,children:[(0,g.jsx)(f,{name:`credit-card`,withBg:!0}),` `,t]})}),(0,g.jsx)(`td`,{children:(0,g.jsxs)(h,{type:e,children:[(0,g.jsx)(f,{name:`credit-card`}),` `,t]})})]},e)),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`p`}),(0,g.jsx)(`td`,{children:(0,g.jsxs)(`p`,{children:[(0,g.jsx)(f,{name:`college`,withBg:!0}),` Student loans`]})}),(0,g.jsx)(`td`,{children:(0,g.jsxs)(`p`,{children:[(0,g.jsx)(f,{name:`college`}),` Student loans`]})})]})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(): ReactElement => <span style={biggerIcon}>
    <Icon name='approved' />
  </span>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(): ReactElement => <span style={biggerIcon}>
    <Icon name='approved' withBg />
  </span>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(navigationIcons)}</IconTable>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(statusIcons)}</IconTable>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(socialIcons)}</IconTable>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(communicationIcons)}</IconTable>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(numberIcons)}</IconTable>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(documentIcons)}</IconTable>`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(financialIcons)}</IconTable>`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(expenseIcons)}</IconTable>`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(): ReactElement => <IconTable>{makeRows(webIcons)}</IconTable>`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
          <tr>
            <th>Text element</th>
            <th>Icon with background</th>
            <th>Icon without background</th>
          </tr>
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
}`,...M.parameters?.docs?.source}}},N=[`IconPlain`,`IconWithBackground`,`NavigationIcons`,`StatusIcons`,`SocialSharingIcons`,`CommunicationIcons`,`NumberIcons`,`DocumentIcons`,`FinancialProductsServicesAndConceptIcons`,`ExpenseIcons`,`WebApplicationIcons`,`IconWithText`]}))();export{E as CommunicationIcons,O as DocumentIcons,A as ExpenseIcons,k as FinancialProductsServicesAndConceptIcons,x as IconPlain,S as IconWithBackground,M as IconWithText,C as NavigationIcons,D as NumberIcons,T as SocialSharingIcons,w as StatusIcons,j as WebApplicationIcons,N as __namedExportsOrder,_ as default};
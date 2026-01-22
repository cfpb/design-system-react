import{j as e}from"./jsx-runtime-BLchON5X.js";/* empty css                */import{H as R}from"./TextIntroduction-CY3_wILz.js";import{I as t,n as S,s as w,a as y,c as T,b as k,d as E,f as v,e as B,w as f}from"./Dropdown-BAS5xsjk.js";import"./Checkbox-C8PZvyyp.js";import"./Well-XpBeq6ld.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Ddz0oDhE.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-ChmeYw71.js";const J={title:"Components (Draft)/Icons",tags:["autodocs"],component:t,parameters:{docs:{description:{component:`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`}}}},b={fontSize:"2em"},s=a=>a.map(n=>e.jsxs("tr",{children:[e.jsx("td",{style:b,children:e.jsx(t,{name:n})}),e.jsx("td",{style:b,children:e.jsx(t,{name:n,withBg:!0})}),e.jsx("td",{children:n})]},`${n}`)),c=({children:a})=>e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"icon"}),e.jsx("th",{children:"withBg"}),e.jsx("th",{children:"canonical name"})]})}),e.jsx("tbody",{children:a})]}),o=()=>e.jsx("span",{style:b,children:e.jsx(t,{name:"approved"})}),r=()=>e.jsx("span",{style:b,children:e.jsx(t,{name:"approved",withBg:!0})}),i=()=>e.jsx(c,{children:s(S)}),d=()=>e.jsx(c,{children:s(w)}),m=()=>e.jsx(c,{children:s(y)}),l=()=>e.jsx(c,{children:s(T)}),p=()=>e.jsx(c,{children:s(k)}),u=()=>e.jsx(c,{children:s(E)}),h=()=>e.jsx(c,{children:s(v)}),I=()=>e.jsx(c,{children:s(B)}),x=()=>e.jsx(c,{children:s(f)}),g={name:"Icon with text",render:()=>{const a=[{type:"2",text:"Auto loans"},{type:"3",text:"Bank accounts"},{type:"4",text:"Credit cards"},{type:"5",text:"Submit a complaint"}];return e.jsxs("table",{children:[e.jsxs("thead",{children:[e.jsx("th",{children:"Text element"}),e.jsx("th",{children:"Icon with background"}),e.jsx("th",{children:"Icon without background"})]}),e.jsxs("tbody",{children:[a.map(({type:n,text:j})=>e.jsxs("tr",{children:[e.jsxs("td",{children:["h",n]}),e.jsx("td",{children:e.jsxs(R,{type:n,children:[e.jsx(t,{name:"credit-card",withBg:!0})," ",j]})}),e.jsx("td",{children:e.jsxs(R,{type:n,children:[e.jsx(t,{name:"credit-card"})," ",j]})})]},n)),e.jsxs("tr",{children:[e.jsx("td",{children:"p"}),e.jsx("td",{children:e.jsxs("p",{children:[e.jsx(t,{name:"college",withBg:!0})," Student loans"]})}),e.jsx("td",{children:e.jsxs("p",{children:[e.jsx(t,{name:"college"})," Student loans"]})})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(): React.ReactElement => <span style={biggerIcon}>
    <Icon name='approved' />
  </span>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(): React.ReactElement => <span style={biggerIcon}>
    <Icon name='approved' withBg />
  </span>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(navigationIcons)}</IconTable>",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(statusIcons)}</IconTable>",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(socialIcons)}</IconTable>",...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(communicationIcons)}</IconTable>",...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(numberIcons)}</IconTable>",...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(documentIcons)}</IconTable>",...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(financialIcons)}</IconTable>",...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(expenseIcons)}</IconTable>",...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"(): React.ReactElement => <IconTable>{makeRows(webIcons)}</IconTable>",...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const K=["IconPlain","IconWithBackground","NavigationIcons","StatusIcons","SocialSharingIcons","CommunicationIcons","NumberIcons","DocumentIcons","FinancialProductsServicesAndConceptIcons","ExpenseIcons","WebApplicationIcons","IconWithText"];export{l as CommunicationIcons,u as DocumentIcons,I as ExpenseIcons,h as FinancialProductsServicesAndConceptIcons,o as IconPlain,r as IconWithBackground,g as IconWithText,i as NavigationIcons,p as NumberIcons,m as SocialSharingIcons,d as StatusIcons,x as WebApplicationIcons,K as __namedExportsOrder,J as default};

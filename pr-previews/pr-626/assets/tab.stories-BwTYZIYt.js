import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-uS7UyY4Q.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./heading-Q3xdSld3.js";import{i as o,n as s,r as c,t as l}from"./tab-2NdXcz-V.js";var u,d,f,p,m;e((()=>{u=t(n(),1),i(),o(),d=r(),f={title:`Components (Draft)/Tabs`,tags:[`autodocs`],component:l,argTypes:{}},p={name:`Tabs`,render:()=>{let[e,t]=(0,u.useState)(`one`),n=e=>{t(e.currentTarget.value)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s,{children:[(0,d.jsx)(l,{id:`one`,value:`one`,isActive:e===`one`,iconLeft:`list`,label:`Tab one`,onClick:n}),(0,d.jsx)(l,{id:`two`,value:`two`,isActive:e===`two`,iconLeft:`chart`,label:`Tab two`,onClick:n}),(0,d.jsx)(l,{id:`three`,value:`three`,isActive:e===`three`,iconLeft:`map`,label:`Tab three`,onClick:n})]}),(0,d.jsx)(c,{id:e,style:{padding:`30px`},children:(0,d.jsxs)(a,{type:`4`,children:[`Panel `,e]})})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Tabs',
  render: () => {
    const [activeTab, setActiveTab] = useState('one');
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveTab(event.currentTarget.value);
    };
    return <>
        <TabList>
          <Tab id='one' value='one' isActive={activeTab === 'one'} iconLeft='list' label='Tab one' onClick={onClick} />
          <Tab id='two' value='two' isActive={activeTab === 'two'} iconLeft='chart' label='Tab two' onClick={onClick} />
          <Tab id='three' value='three' isActive={activeTab === 'three'} iconLeft='map' label='Tab three' onClick={onClick} />
        </TabList>
        <TabPanel id={activeTab} style={{
        padding: '30px'
      }}>
          <Heading type='4'>Panel {activeTab}</Heading>
        </TabPanel>
      </>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};
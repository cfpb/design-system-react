import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-uS7UyY4Q.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,c as a,l as o,t as s,u as c}from"./src-9hvwsju0.js";var l,u,d,f,p;e((()=>{l=t(n(),1),s(),u=r(),d={title:`Components (Draft)/Tabs`,tags:[`autodocs`],component:a,argTypes:{}},f={name:`Tabs`,render:()=>{let[e,t]=(0,l.useState)(`one`),n=e=>{t(e.currentTarget.value)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o,{children:[(0,u.jsx)(a,{id:`one`,value:`one`,isActive:e===`one`,iconLeft:`list`,label:`Tab one`,onClick:n}),(0,u.jsx)(a,{id:`two`,value:`two`,isActive:e===`two`,iconLeft:`chart`,label:`Tab two`,onClick:n}),(0,u.jsx)(a,{id:`three`,value:`three`,isActive:e===`three`,iconLeft:`map`,label:`Tab three`,onClick:n})]}),(0,u.jsx)(c,{id:e,style:{padding:`30px`},children:(0,u.jsxs)(i,{type:`4`,children:[`Panel `,e]})})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};
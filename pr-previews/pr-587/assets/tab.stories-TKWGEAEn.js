import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{ot as n}from"./iframe-BRIPIZji.js";import{t as r}from"./jsx-runtime-6SDZnDXc.js";import{_ as i,c as a,o,s,t as c}from"./src-DhM8Wy6l.js";var l,u,d,f,p;e((()=>{l=t(n(),1),c(),u=r(),d={title:`Components (Draft)/Tabs`,tags:[`autodocs`],component:o,argTypes:{}},f={name:`Tabs`,render:()=>{let[e,t]=(0,l.useState)(`one`),n=e=>{t(e.currentTarget.value)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{id:`one`,value:`one`,isActive:e===`one`,iconLeft:`list`,label:`Tab one`,onClick:n}),(0,u.jsx)(o,{id:`two`,value:`two`,isActive:e===`two`,iconLeft:`chart`,label:`Tab two`,onClick:n}),(0,u.jsx)(o,{id:`three`,value:`three`,isActive:e===`three`,iconLeft:`map`,label:`Tab three`,onClick:n})]}),(0,u.jsx)(a,{id:e,style:{padding:`30px`},children:(0,u.jsxs)(i,{type:`4`,children:[`Panel `,e]})})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
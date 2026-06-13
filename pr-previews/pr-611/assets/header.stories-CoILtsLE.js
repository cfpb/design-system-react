import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{i as n,o as r}from"./well-D3BgEUHo.js";import{D as i,E as a,G as o,t as s,w as c}from"./src-ZFZGDLP7.js";var l,u,d,f,p,m;e((()=>{s(),i(),r(),l=t(),u={title:`Components (Draft)/Headers`,tags:[`autodocs`],component:c,argTypes:{lang:{control:`select`,options:[`en`,`es`],description:`Logo language (English or Spanish)`}},parameters:{sbNestedCanvasPadding:`flush`}},d={name:`Header`,render:e=>(0,l.jsx)(c,{...e}),args:{links:a,lang:`en`}},f={render:e=>(0,l.jsx)(c,{...e}),args:{links:[]}},p={render:e=>(0,l.jsx)(c,{...e}),args:{links:[(0,l.jsx)(n,{href:`/`,label:`Home`},`home`),(0,l.jsx)(n,{className:`nav-item`,href:`/filing`,label:`Filing`},`filing`),(0,l.jsx)(n,{className:`nav-item`,href:`/profile`,label:`User guide`,iconRight:`document`},`profile`),(0,l.jsx)(o,{appearance:`secondary`,label:`Log out`,onClick:()=>{}},`logout`)]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Header',
  render: properties => <Header {...properties} />,
  args: {
    links: ExampleLinks,
    lang: 'en'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: properties => <Header {...properties} />,
  args: {
    links: []
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: properties => <Header {...properties} />,
  args: {
    links: [<Link key='home' href='/' label='Home' />, <Link key='filing' className='nav-item' href='/filing' label='Filing' />, <Link key='profile' className='nav-item' href='/profile' label='User guide' iconRight='document' />, <Button appearance={'secondary'} label='Log out' onClick={(): void => {
      /* Empty*/
    }} key='logout' />]
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Basic`,`LinksWithIcon`]}))();export{f as Basic,d as Default,p as LinksWithIcon,m as __namedExportsOrder,u as default};
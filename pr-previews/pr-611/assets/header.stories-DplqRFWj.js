import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./react-CnPKFcMr.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{i as r,o as i}from"./well-D3BgEUHo.js";import{D as a,E as o,G as s,t as c,w as l}from"./src-BIiy_nQ_.js";var u,d,f,p,m,h;e((()=>{c(),a(),i(),t(),u=n(),d={title:`Components (Draft)/Headers`,tags:[`autodocs`],component:l,argTypes:{lang:{control:`select`,options:[`en`,`es`],description:`Logo language (English or Spanish)`}},parameters:{sbNestedCanvasPadding:`flush`}},f={name:`Header`,render:e=>(0,u.jsx)(l,{...e}),args:{links:o,lang:`en`}},p={render:e=>(0,u.jsx)(l,{...e}),args:{links:[]}},m={render:e=>(0,u.jsx)(l,{...e}),args:{links:[(0,u.jsx)(r,{href:`/`,label:`Home`},`home`),(0,u.jsx)(r,{className:`nav-item`,href:`/filing`,label:`Filing`},`filing`),(0,u.jsx)(r,{className:`nav-item`,href:`/profile`,label:`User guide`,iconRight:`document`},`profile`),(0,u.jsx)(s,{appearance:`secondary`,label:`Log out`,onClick:()=>{}},`logout`)]}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Header',
  render: properties => <Header {...properties} />,
  args: {
    links: ExampleLinks,
    lang: 'en'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: properties => <Header {...properties} />,
  args: {
    links: []
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: properties => <Header {...properties} />,
  args: {
    links: [<Link key='home' href='/' label='Home' />, <Link key='filing' className='nav-item' href='/filing' label='Filing' />, <Link key='profile' className='nav-item' href='/profile' label='User guide' iconRight='document' />, <Button appearance={'secondary'} label='Log out' onClick={(): void => {
      /* Empty*/
    }} key='logout' />]
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Basic`,`LinksWithIcon`]}))();export{p as Basic,f as Default,m as LinksWithIcon,h as __namedExportsOrder,d as default};
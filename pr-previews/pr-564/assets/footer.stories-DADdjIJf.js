import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{t as n}from"./icon-BW7exp0q.js";import{b as r,t as i,x as a,y as o}from"./src-CWJHUDUy.js";import{t as s}from"./link-DGfNXM0e.js";var c,l,u,d,f,p,m;e((()=>{i(),c=t(),l={title:`Components (Draft)/Footers`,tags:[`autodocs`],component:r,argTypes:{}},u=(e,t)=>(0,c.jsxs)(`a`,{href:globalThis.location.href,className:`m-list__link a-link ${t?`a-link--icon`:``}`,children:[(0,c.jsx)(`span`,{className:`a-link__text`,children:e}),t?(0,c.jsx)(n,{name:`external-link`,alt:`External link`}):null]},e),d=e=>(0,c.jsx)(`a`,{href:globalThis.location.href,children:(0,c.jsx)(n,{name:e,withBg:!0})},e),f={name:`Website footer`,render:e=>(0,c.jsx)(a,{...e}),args:{navLinks:[u(`Nav 1`),u(`Nav 2`),u(`Nav 3`)],socialLinks:[d(`facebook`),d(`youtube`)],linksCol1:[u(`Col1 Link 1`),u(`Col1 Link 2`),u(`Col1 Link 3`)],linksCol2:[u(`Col2 Link 1`),u(`Col2 Link 2`),u(`Col2 Link 3`)],linksCol3:[u(`Col3 Link 1`,!0),u(`Col3 Link 2`,!0),u(`Col3 Link 3`,!0)]}},p={name:`Application footer`,render:e=>(0,c.jsx)(o,{...e}),args:{navLinks:[u(`relevant link one`),u(`link two`)],footerContent:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`h3`,{children:`Heading`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}),(0,c.jsx)(s,{href:`#`,children:`Link`})]})},parameters:{docs:{description:{story:`A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Website footer',
  render: properties => <WebsiteFooter {...properties} />,
  args: {
    navLinks: [makeLink('Nav 1'), makeLink('Nav 2'), makeLink('Nav 3')],
    socialLinks: [makeSocialLink('facebook'), makeSocialLink('youtube')],
    linksCol1: [makeLink('Col1 Link 1'), makeLink('Col1 Link 2'), makeLink('Col1 Link 3')],
    linksCol2: [makeLink('Col2 Link 1'), makeLink('Col2 Link 2'), makeLink('Col2 Link 3')],
    linksCol3: [makeLink('Col3 Link 1', true), makeLink('Col3 Link 2', true), makeLink('Col3 Link 3', true)]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Application footer',
  render: properties => <ApplicationFooter {...properties} />,
  args: {
    navLinks: [makeLink('relevant link one'), makeLink('link two')],
    footerContent: <>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link href='#'>Link</Link>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`Website`,`App`]}))();export{p as App,f as Website,m as __namedExportsOrder,l as default};
import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{t as n}from"./icon-CoWdj0LK.js";import{b as r,t as i,x as a,y as o}from"./src-BMrEY75h.js";import{t as s}from"./link-BfkmWqMQ.js";var c,l,u,d,f,p;e((()=>{i(),c=t(),l={title:`Components (Draft)/Footers`,tags:[`autodocs`],component:a,argTypes:{}},u=(e,t)=>(0,c.jsxs)(`a`,{href:globalThis.location.href,className:`m-list__link a-link ${t?`a-link--icon`:``}`,children:[(0,c.jsx)(`span`,{className:`a-link__text`,children:e}),t?(0,c.jsx)(n,{name:`external-link`,alt:`External link`}):null]},e),d={name:`Website (cf.gov)`,render:()=>(0,c.jsx)(o,{})},f={name:`Application`,render:e=>(0,c.jsx)(r,{...e}),args:{navLinks:[u(`relevant link one`),u(`link two`)],footerContent:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`h3`,{children:`Heading`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}),(0,c.jsx)(s,{href:`#`,children:`Link`})]})},parameters:{docs:{description:{story:`A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Website (cf.gov)',
  render: () => <FooterCfGov />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Application',
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
}`,...f.parameters?.docs?.source}}},p=[`CFGov`,`App`]}))();export{f as App,d as CFGov,p as __namedExportsOrder,l as default};
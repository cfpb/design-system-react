import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{t as n}from"./icon-BZ9Rlf9G.js";import{S as r,b as i,t as a,x as o,y as s}from"./src-CChCCqbm.js";import{t as c}from"./link-CtDakdf4.js";var l,u,d,f,p,m,h,g,_;e((()=>{a(),l=t(),u={title:`Components (Draft)/Footers`,tags:[`autodocs`],component:o,argTypes:{}},d=(e,t)=>(0,l.jsxs)(`a`,{href:globalThis.location.href,className:`m-list__link a-link ${t?`a-link--icon`:``}`,children:[(0,l.jsx)(`span`,{className:`a-link__text`,children:e}),t?(0,l.jsx)(n,{name:`external-link`,alt:`External link`}):null]},e),f=e=>(0,l.jsx)(`a`,{href:globalThis.location.href,children:(0,l.jsx)(n,{name:e,withBg:!0})},e),p={name:`Footer`,render:e=>(0,l.jsx)(o,{...e,children:`Footer content goes here`})},m={name:`Application footer`,render:e=>(0,l.jsx)(i,{...e}),args:{navLinks:[d(`relevant link one`),d(`link two`)],footerContent:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`h3`,{children:`Data usage`}),(0,l.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}),(0,l.jsx)(c,{href:`#`,children:`Link`})]})},parameters:{docs:{description:{story:`A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.`}}}},h={name:`Website footer`,render:e=>(0,l.jsx)(r,{...e}),args:{navLinks:[d(`Nav 1`),d(`Nav 2`),d(`Nav 3`)],socialLinks:[f(`facebook`),f(`youtube`)],linksCol1:[d(`Col1 Link 1`),d(`Col1 Link 2`),d(`Col1 Link 3`)],linksCol2:[d(`Col2 Link 1`),d(`Col2 Link 2`),d(`Col2 Link 3`)],linksCol3:[d(`Col3 Link 1`,!0),d(`Col3 Link 2`,!0),d(`Col3 Link 3`,!0)]}},g={render:()=>(0,l.jsx)(s,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Footer',
  render: properties => <Footer {...properties}>
      Footer content goes here
    </Footer>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Application footer',
  render: properties => <AppFooter {...properties} />,
  args: {
    navLinks: [makeLink('relevant link one'), makeLink('link two')],
    footerContent: <>
        <h3>Data usage</h3>
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Website footer',
  render: properties => <WebsiteFooter {...properties} />,
  args: {
    navLinks: [makeLink('Nav 1'), makeLink('Nav 2'), makeLink('Nav 3')],
    socialLinks: [makeSocialLink('facebook'), makeSocialLink('youtube')],
    linksCol1: [makeLink('Col1 Link 1'), makeLink('Col1 Link 2'), makeLink('Col1 Link 3')],
    linksCol2: [makeLink('Col2 Link 1'), makeLink('Col2 Link 2'), makeLink('Col2 Link 3')],
    linksCol3: [makeLink('Col3 Link 1', true), makeLink('Col3 Link 2', true), makeLink('Col3 Link 3', true)]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <FooterCfGov />
}`,...g.parameters?.docs?.source}}},_=[`Example`,`App`,`Website`,`CFGov`]}))();export{m as App,g as CFGov,p as Example,h as Website,_ as __namedExportsOrder,u as default};
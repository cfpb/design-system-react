import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{A as n,M as r,N as i,S as a,t as o}from"./src-TQ3Pn_4n.js";import{i as s}from"./well-6PMuQYTF.js";import{t as c}from"./paragraph-BOvP6WlU.js";var l,u,d,f,p;e((()=>{o(),l=t(),u={title:`Components (Draft)/Footers`,tags:[`autodocs`],component:i,argTypes:{},parameters:{sbNestedCanvasPadding:`flush`}},d={name:`Website (cf.gov)`,render:()=>(0,l.jsx)(n,{})},f={name:`Application`,render:()=>(0,l.jsx)(r,{navLinks:[(0,l.jsx)(s,{label:`Link 1`,href:`#`},`link_1`),(0,l.jsx)(s,{label:`Longer link 2`,href:`#`},`link_2`)],footerContent:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{type:`3`,children:`Heading`}),(0,l.jsx)(c,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}),(0,l.jsx)(s,{href:`#`,children:`Link`})]})}),parameters:{docs:{description:{story:`A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Website (cf.gov)',
  render: () => <FooterCfGov />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Application',
  render: () => <ApplicationFooter navLinks={[<Link label='Link 1' key='link_1' href='#' />, <Link label='Longer link 2' key='link_2' href='#' />]} footerContent={<>
          <Heading type='3'>Heading</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
          <Link href='#'>Link</Link>
        </>} />,
  parameters: {
    docs: {
      description: {
        story: 'A minimal two-column footer for use in applications. The left column can contain information about the app, and the right column is for relevant links.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`CFGov`,`App`]}))();export{f as App,d as CFGov,p as __namedExportsOrder,u as default};
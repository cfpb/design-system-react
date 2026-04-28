import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{f as n,t as r}from"./src-CeeEYZpt.js";function i(e){let t=(e.layout??`2-1`)===`1-3`?[c,s]:[s,c];return(0,a.jsx)(n.Main,{...e,children:(0,a.jsx)(n.Wrapper,{children:t})})}var a,o,s,c,l,u,d;e((()=>{r(),a=t(),o={title:`Components (Draft)/Layout/Main`,tags:[`autodocs`],component:n.Main,parameters:{docs:{description:{component:`
### CFPB DS Layout.Main component

Container for all of the content within a Layout. Used to configure the column structure ('layout') and whether the sidebar bleeds to the window edge ('bleedbar').


<ul>
<li>layout<ul>
<li>[1-3](https://cfpb.github.io/design-system/development/main-content-and-sidebars#left-hand-sidebar-layout)</li>
<li>[2-1](https://cfpb.github.io/design-system/development/main-content-and-sidebars#right-hand-sidebar-layout)</li>
</ul></li>

</ul>


Source: https://cfpb.github.io/design-system/development/main-content-and-sidebars

### Usage

import Layout from './Layout<br/>

< Layout.Main ><br/>
&nbsp;&nbsp;< Hero / ><br/>
&nbsp;&nbsp;< Layout.Wrapper ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;< Layout.Content ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main Content<br/>
&nbsp;&nbsp;&nbsp;&nbsp;< /Layout.Content ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;< Layout.Sidebar ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sidebar Content<br/>
&nbsp;&nbsp;&nbsp;&nbsp;< /Layout.Sidebar ><br/>
&nbsp;&nbsp;< /Layout.Wrapper ><br/>
< /Layout.Main ><br/>

**Note:** For \`layout="1-3"\` (sidebar on the left), put \`Layout.Sidebar\` **before** \`Layout.Content\` inside \`Layout.Wrapper\`. For \`layout="2-1"\`, put **main first**, then sidebar—matching the [CFPB markup](https://cfpb.github.io/design-system/development/main-content-and-sidebars).
`}}}},s=(0,a.jsxs)(n.Content,{children:[(0,a.jsx)(`h1`,{children:`Content`}),(0,a.jsx)(`p`,{children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?`})]},`content`),c=(0,a.jsx)(n.Sidebar,{children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h2`,{children:`Sidebar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsx)(`li`,{children:`Item 1`}),(0,a.jsx)(`li`,{children:`Item 2`}),(0,a.jsx)(`li`,{children:`Item 3`})]}),(0,a.jsx)(`h2`,{children:`Sidebar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsx)(`li`,{children:`Item 1`}),(0,a.jsx)(`li`,{children:`Item 2`}),(0,a.jsx)(`li`,{children:`Item 3`})]}),(0,a.jsx)(`h2`,{children:`Sidebar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsx)(`li`,{children:`Item 1`}),(0,a.jsx)(`li`,{children:`Item 2`}),(0,a.jsx)(`li`,{children:`Item 3`})]}),(0,a.jsx)(`h2`,{children:`Sidebar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsx)(`li`,{children:`Item 1`}),(0,a.jsx)(`li`,{children:`Item 2`}),(0,a.jsx)(`li`,{children:`Item 3`})]}),(0,a.jsx)(`h2`,{children:`Sidebar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsx)(`li`,{children:`Item 1`}),(0,a.jsx)(`li`,{children:`Item 2`}),(0,a.jsx)(`li`,{children:`Item 3`})]}),(0,a.jsx)(`h2`,{children:`Sidebar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsx)(`li`,{children:`Item 1`}),(0,a.jsx)(`li`,{children:`Item 2`}),(0,a.jsx)(`li`,{children:`Item 3`})]}),(0,a.jsx)(`h2`,{children:`Sidebar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsx)(`li`,{children:`Item 1`}),(0,a.jsx)(`li`,{children:`Item 2`}),(0,a.jsx)(`li`,{children:`Item 3`})]})]})},`sidebar`),l={args:{layout:`2-1`},render:e=>i(e)},u={args:{layout:`1-3`},render:e=>i(e)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: '2-1'
  },
  render: properties => renderMainLayout(properties)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    layout: '1-3'
  },
  render: properties => renderMainLayout(properties)
}`,...u.parameters?.docs?.source}}},d=[`Layout_2_1`,`Layout_1_3`]}))();export{u as Layout_1_3,l as Layout_2_1,d as __namedExportsOrder,o as default};
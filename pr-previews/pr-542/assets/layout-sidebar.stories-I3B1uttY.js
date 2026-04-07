import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CWHGkrjl.js";import{f as n,t as r}from"./src-C3v4BQRk.js";var i,a,o,s;e((()=>{r(),i=t(),a={title:`Components (Draft)/Layout/Sidebar`,tags:[`autodocs`],component:n.Sidebar,parameters:{docs:{description:{component:`
### CFPB DS Layout.Sidebar component

Container for the sidebar content within a layout.

<ul>
<li>[flushBottom](https://cfpb.github.io/design-system/development/main-content-and-sidebars#flush-bottom-modifier)</li>
<li>[flushTopOnSmall](https://cfpb.github.io/design-system/development/main-content-and-sidebars#flush-top-modifier-only-on-small-screens)</li>
<li>[flushAllOnSmall](https://cfpb.github.io/design-system/development/main-content-and-sidebars#flush-all-modifier-only-on-small-screens)</li>
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
`}}}},o={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1},render:e=>(0,i.jsx)(n.Main,{children:(0,i.jsxs)(n.Wrapper,{children:[(0,i.jsx)(n.Sidebar,{...e,children:(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h2`,{children:`Layout.Sidebar`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:`Item 1`}),(0,i.jsx)(`li`,{children:`Item 2`}),(0,i.jsx)(`li`,{children:`Item 3`})]})]})}),(0,i.jsxs)(n.Content,{children:[(0,i.jsx)(`h1`,{children:`Layout.Content`}),(0,i.jsx)(`p`,{children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?`})]})]})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    flushBottom: false,
    flushTopOnSmall: false,
    flushAllOnSmall: false
  },
  render: properties => <Layout.Main>
      <Layout.Wrapper>
        <Layout.Sidebar {...properties}>
          <div>
            <h2>Layout.Sidebar</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </Layout.Sidebar>
        <Layout.Content>
          <h1>Layout.Content</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            alias eum ut officiis optio similique explicabo cupiditate
            architecto voluptatem nostrum recusandae, eaque consectetur iure,
            veritatis eos, mollitia possimus error earum?
          </p>
        </Layout.Content>
      </Layout.Wrapper>
    </Layout.Main>
}`,...o.parameters?.docs?.source}}},s=[`Sidebar`]}))();export{o as Sidebar,s as __namedExportsOrder,a as default};
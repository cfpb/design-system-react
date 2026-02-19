import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DRoUsYVS.js";import{x as n}from"./well-Cmt2U0YJ.js";import"./checkbox-Dv3GYwXb.js";import"./paragraph-Cd9vYq7V.js";import"./text-area-BqLw6gZF.js";import"./preload-helper-lKO2eUTi.js";import"./index-FyLRUMSf.js";const b={title:"Components (Draft)/Layout/Sidebar",tags:["autodocs"],component:n.Sidebar,parameters:{docs:{description:{component:`
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
`}}}},t={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1},render:s=>e.jsx(n.Main,{children:e.jsxs(n.Wrapper,{children:[e.jsx(n.Sidebar,{...s,children:e.jsxs("div",{children:[e.jsx("h2",{children:"Layout.Sidebar"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"})]})]})}),e.jsxs(n.Content,{children:[e.jsx("h1",{children:"Layout.Content"}),e.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const d=["Sidebar"];export{t as Sidebar,d as __namedExportsOrder,b as default};

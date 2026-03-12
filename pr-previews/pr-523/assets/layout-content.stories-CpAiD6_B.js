import{j as t}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C1Fjx0nV.js";import{l as n}from"./text-introduction-DO6dbPKh.js";import"./checkbox-DMrXPKMj.js";import"./icon-DgNA2ciD.js";import"./link-D2VXf1jz.js";import"./well-BSinepsg.js";import"./paragraph-BrOTU1oo.js";import"./secondary-nav-BRzj2-Uh.js";import"./summary-CXQrXsfd.js";import"./text-area-CR70XH6r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcAgj1t7.js";const y={title:"Components (Draft)/Layout/Content",tags:["autodocs"],component:n.Content,parameters:{docs:{description:{component:`
### CFPB DS Layout.Content component

Container for the primary page content within a layout. 
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
`}}}},e={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1},render:s=>t.jsx(n.Main,{children:t.jsxs(n.Wrapper,{children:[t.jsx(n.Sidebar,{children:t.jsxs("div",{children:[t.jsx("h2",{children:"Layout.Sidebar"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Item 1"}),t.jsx("li",{children:"Item 2"}),t.jsx("li",{children:"Item 3"})]})]})}),t.jsxs(n.Content,{...s,children:[t.jsx("h1",{children:"Layout.Content"}),t.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    flushBottom: false,
    flushTopOnSmall: false,
    flushAllOnSmall: false
  },
  render: properties => <Layout.Main>
      <Layout.Wrapper>
        <Layout.Sidebar>
          <div>
            <h2>Layout.Sidebar</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </Layout.Sidebar>
        <Layout.Content {...properties}>
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
}`,...e.parameters?.docs?.source}}};const L=["Content"];export{e as Content,L as __namedExportsOrder,y as default};

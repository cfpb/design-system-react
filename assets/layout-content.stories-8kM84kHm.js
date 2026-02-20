import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CDur59y_.js";import{x as t}from"./well-BaN3Uoyj.js";import"./checkbox-K7AaJUSW.js";import"./paragraph-SJ9Cx82_.js";import"./text-area-Ds2RKvUh.js";import"./preload-helper-lKO2eUTi.js";import"./index-CuAN4szL.js";const b={title:"Components (Draft)/Layout/Content",tags:["autodocs"],component:t.Content,parameters:{docs:{description:{component:`
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
`}}}},e={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1},render:s=>n.jsx(t.Main,{children:n.jsxs(t.Wrapper,{children:[n.jsx(t.Sidebar,{children:n.jsxs("div",{children:[n.jsx("h2",{children:"Layout.Sidebar"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Item 1"}),n.jsx("li",{children:"Item 2"}),n.jsx("li",{children:"Item 3"})]})]})}),n.jsxs(t.Content,{...s,children:[n.jsx("h1",{children:"Layout.Content"}),n.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const c=["Content"];export{e as Content,c as __namedExportsOrder,b as default};

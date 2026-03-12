import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C1Fjx0nV.js";import{l as t}from"./text-introduction-DO6dbPKh.js";import"./checkbox-DMrXPKMj.js";import"./icon-DgNA2ciD.js";import"./link-D2VXf1jz.js";import"./well-BSinepsg.js";import"./paragraph-BrOTU1oo.js";import"./secondary-nav-BRzj2-Uh.js";import"./summary-CXQrXsfd.js";import"./text-area-CR70XH6r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcAgj1t7.js";const h={title:"Components (Draft)/Layout/Wrapper",tags:["autodocs"],component:t.Wrapper,parameters:{docs:{description:{component:`
### CFPB DS Layout.Wrapper component

Container to help position Content and Sidebar elements.

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
`}}}},n={args:{children:[e.jsx(t.Sidebar,{children:e.jsxs("div",{children:[e.jsx("h2",{children:"Layout.Sidebar"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"})]})]})},"sidebar"),e.jsxs(t.Content,{children:[e.jsx("h1",{children:"Layout.Content"}),e.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]},"content")]},render:({children:r})=>e.jsx(t.Main,{children:e.jsx(t.Wrapper,{children:r})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Layout.Sidebar key='sidebar'>
        <div>
          <h2>Layout.Sidebar</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </Layout.Sidebar>, <Layout.Content key='content'>
        <h1>Layout.Content</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          alias eum ut officiis optio similique explicabo cupiditate architecto
          voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos,
          mollitia possimus error earum?
        </p>
      </Layout.Content>]
  },
  render: ({
    children
  }) => <Layout.Main>
      <Layout.Wrapper>{children}</Layout.Wrapper>
    </Layout.Main>
}`,...n.parameters?.docs?.source}}};const x=["Wrapper"];export{n as Wrapper,x as __namedExportsOrder,h as default};

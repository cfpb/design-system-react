import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DPJ0TFPD.js";import{l as n}from"./text-introduction-Crig2j7x.js";import"./checkbox-IEcF5yrI.js";import"./icon-_krKSud2.js";import"./well-DUFLSiBx.js";import"./paragraph-BD2ewLIg.js";import"./summary-B3J8vzPG.js";import"./text-area-BZlbxa1S.js";import"./preload-helper-lKO2eUTi.js";import"./index-4TX9tm5B.js";const y={title:"Components (Draft)/Layout/Wrapper",tags:["autodocs"],component:n.Wrapper,parameters:{docs:{description:{component:`
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
`}}}},t={args:{children:[e.jsx(n.Sidebar,{children:e.jsxs("div",{children:[e.jsx("h2",{children:"Layout.Sidebar"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"})]})]})},"sidebar"),e.jsxs(n.Content,{children:[e.jsx("h1",{children:"Layout.Content"}),e.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]},"content")]},render:({children:r})=>e.jsx(n.Main,{children:e.jsx(n.Wrapper,{children:r})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Wrapper"];export{t as Wrapper,L as __namedExportsOrder,y as default};

import{j as t}from"./jsx-runtime-BLchON5X.js";/* empty css                */import"./TextIntroduction-DUkKXHvK.js";import"./Dropdown-BT6K47fQ.js";import"./Checkbox-Caysy1F0.js";import{L as e}from"./Layout-B21pUhD1.js";import"./Well-B2cr-7Hx.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Bg_-DZq5.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-D-Yp4Rm0.js";const C={title:"Components (Draft)/Layout/Wrapper",tags:["autodocs"],component:e.Wrapper,parameters:{docs:{description:{component:`
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
`}}}},n={args:{children:[t.jsx(e.Sidebar,{children:t.jsxs("div",{children:[t.jsx("h2",{children:"Layout.Sidebar"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Item 1"}),t.jsx("li",{children:"Item 2"}),t.jsx("li",{children:"Item 3"})]})]})},"sidebar"),t.jsxs(e.Content,{children:[t.jsx("h1",{children:"Layout.Content"}),t.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]},"content")]},render:({children:r})=>t.jsx(e.Main,{children:t.jsx(e.Wrapper,{children:r})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const S=["Wrapper"];export{n as Wrapper,S as __namedExportsOrder,C as default};

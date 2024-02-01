import{j as e}from"./index.7eca609e.js";/* empty css                */import"./Well.9c109664.js";import"./Dropdown.fedbd3e3.js";import"./Checkbox.996db734.js";import"./ExpandableGroup.a7c7cf48.js";import"./Icon.4528769c.js";import{L as t}from"./Layout.d25eb99c.js";import"./Paragraph.9304145b.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./index.f108a8f5.js";import"./iframe.7e7c80eb.js";import"../sb-preview/runtime.js";const f={title:"Components (Draft)/Layout/Wrapper",tags:["autodocs"],component:t.Wrapper,parameters:{docs:{description:{component:`
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
`}}}},r={args:{children:[e.exports.jsx(t.Sidebar,{children:e.exports.jsxs("div",{children:[e.exports.jsx("h2",{children:"Layout.Sidebar"}),e.exports.jsxs("ul",{children:[e.exports.jsx("li",{children:"Item 1"}),e.exports.jsx("li",{children:"Item 2"}),e.exports.jsx("li",{children:"Item 3"})]})]})},"sidebar"),e.exports.jsxs(t.Content,{children:[e.exports.jsx("h1",{children:"Layout.Content"}),e.exports.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]},"content")]},render:({children:i})=>e.exports.jsx(t.Main,{children:e.exports.jsx(t.Wrapper,{children:i})})};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const W=["Wrapper"];export{r as Wrapper,W as __namedExportsOrder,f as default};

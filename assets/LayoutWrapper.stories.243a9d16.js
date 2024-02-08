import{j as e}from"./index.dedf70f8.js";/* empty css                */import"./Well.9ca4e134.js";import"./Dropdown.4f85706e.js";import"./Checkbox.eb7761bd.js";import"./ExpandableGroup.28bfb684.js";import"./Icon.716354f0.js";import{L as t}from"./Layout.f60d938d.js";import"./Paragraph.000dbaf6.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./TextInputStatus.8d37edaa.js";import"./index.f108a8f5.js";import"./iframe.e9f4410d.js";import"../sb-preview/runtime.js";const W={title:"Components (Draft)/Layout/Wrapper",tags:["autodocs"],component:t.Wrapper,parameters:{docs:{description:{component:`
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
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const g=["Wrapper"];export{r as Wrapper,g as __namedExportsOrder,W as default};

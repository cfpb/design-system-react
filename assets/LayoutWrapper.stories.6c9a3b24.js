import"./Well.3c28e4a3.js";import"./Dropdown.a8362ad2.js";import"./ExpandableGroup.c35d12d8.js";import"./Icon.016ca644.js";import{j as e,a as r}from"./jsx-runtime.5f84dc07.js";import{L as n}from"./Layout.cf0f1f40.js";import"./extends.cc011e2f.js";import"./floating-ui.dom.esm.1a703617.js";import"./index.40d0d0b8.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.3ea92dc1.js";import"../sb-preview/runtime.js";const f={component:n.Wrapper,parameters:{docs:{description:{component:`
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
`}}}},t={args:{children:[e(n.Sidebar,{children:r("div",{children:[e("h2",{children:"Layout.Sidebar"}),r("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]})},"sidebar"),r(n.Content,{children:[e("h1",{children:"Layout.Content"}),e("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]},"content")]},render:({children:s})=>e(n.Main,{children:e(n.Wrapper,{children:s})})};var i,o,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["Wrapper"];export{t as Wrapper,W as __namedExportsOrder,f as default};
//# sourceMappingURL=LayoutWrapper.stories.6c9a3b24.js.map

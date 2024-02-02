import{j as t}from"./index.7eca609e.js";/* empty css                */import"./Well.e0ee796b.js";import"./Dropdown.de6af447.js";import"./Checkbox.68b690a2.js";import"./ExpandableGroup.14e9f130.js";import"./Icon.b4338ba6.js";import{L as e}from"./Layout.ca92cd54.js";import"./Paragraph.9304145b.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./index.f108a8f5.js";import"./iframe.24c94f66.js";import"../sb-preview/runtime.js";const j={title:"Components (Draft)/Layout/Sidebar",tags:["autodocs"],component:e.Sidebar,parameters:{docs:{description:{component:`
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
`}}}},s={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1},render:r=>t.exports.jsx(e.Main,{children:t.exports.jsxs(e.Wrapper,{children:[t.exports.jsx(e.Sidebar,{...r,children:t.exports.jsxs("div",{children:[t.exports.jsx("h2",{children:"Layout.Sidebar"}),t.exports.jsxs("ul",{children:[t.exports.jsx("li",{children:"Item 1"}),t.exports.jsx("li",{children:"Item 2"}),t.exports.jsx("li",{children:"Item 3"})]})]})}),t.exports.jsxs(e.Content,{children:[t.exports.jsx("h1",{children:"Layout.Content"}),t.exports.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var n,o,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const C=["Sidebar"];export{s as Sidebar,C as __namedExportsOrder,j as default};

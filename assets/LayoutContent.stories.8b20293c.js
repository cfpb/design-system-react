import{j as t}from"./index.7eca609e.js";/* empty css                */import"./TextIntroduction.78c7eeb4.js";import"./Dropdown.5d83d4e9.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.8fdf162d.js";import"./Icon.8eb29304.js";import{L as e}from"./Layout.0730ea28.js";import"./Well.b1717e7b.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.24c2c4ec.js";import"./index.49a47dde.js";import"./iframe.5a9f21fb.js";import"../sb-preview/runtime.js";const v={title:"Components (Draft)/Layout/Content",tags:["autodocs"],component:e.Content,parameters:{docs:{description:{component:`
### CFPB DS Layout.Content component

Container for the primary page content within a layout. 
<ul>
<li>[flushBottom](https://cfpb.github.io/design-system/development/main-content-and-sidebars#flush-bottom-modifier)</li>
<li>[flushTopOnSmall](https://cfpb.github.io/design-system/development/main-content-and-sidebars#flush-top-modifier-only-on-small-screens)</li>
<li>[flushAllOnSmall](https://cfpb.github.io/design-system/development/main-content-and-sidebars#flush-all-modifier-only-on-small-screens)</li>
<li>[narrow](https://cfpb.github.io/design-system/development/main-content-and-sidebars#narrow-content-column-option)</li>
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
`}}}},n={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1,narrow:!1},render:r=>t.exports.jsx(e.Main,{children:t.exports.jsxs(e.Wrapper,{children:[t.exports.jsx(e.Sidebar,{children:t.exports.jsxs("div",{children:[t.exports.jsx("h2",{children:"Layout.Sidebar"}),t.exports.jsxs("ul",{children:[t.exports.jsx("li",{children:"Item 1"}),t.exports.jsx("li",{children:"Item 2"}),t.exports.jsx("li",{children:"Item 3"})]})]})}),t.exports.jsxs(e.Content,{...r,children:[t.exports.jsx("h1",{children:"Layout.Content"}),t.exports.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    flushBottom: false,
    flushTopOnSmall: false,
    flushAllOnSmall: false,
    narrow: false
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
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const O=["Content"];export{n as Content,O as __namedExportsOrder,v as default};
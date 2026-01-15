import{j as t}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import"./TextIntroduction-Bstxs7Zo.js";import"./Dropdown-B6xjHWB2.js";import"./Checkbox-uScmMply.js";import"./ExpandableGroup-B-nqpYqT.js";import"./Icon-DrPd1Ij2.js";import{L as e}from"./Layout-C7F0J8iI.js";import"./Well-Bfy2vVI4.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-ZDMBHX8g.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-BZIwhJs7.js";const C={title:"Components (Draft)/Layout/Sidebar",tags:["autodocs"],component:e.Sidebar,parameters:{docs:{description:{component:`
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
`}}}},n={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1},render:r=>t.jsx(e.Main,{children:t.jsxs(e.Wrapper,{children:[t.jsx(e.Sidebar,{...r,children:t.jsxs("div",{children:[t.jsx("h2",{children:"Layout.Sidebar"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Item 1"}),t.jsx("li",{children:"Item 2"}),t.jsx("li",{children:"Item 3"})]})]})}),t.jsxs(e.Content,{children:[t.jsx("h1",{children:"Layout.Content"}),t.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const v=["Sidebar"];export{n as Sidebar,v as __namedExportsOrder,C as default};

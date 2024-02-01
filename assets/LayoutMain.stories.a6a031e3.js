import{j as e}from"./index.7eca609e.js";/* empty css                */import"./Well.9c109664.js";import"./Dropdown.fedbd3e3.js";import"./Checkbox.996db734.js";import"./ExpandableGroup.a7c7cf48.js";import"./Icon.4528769c.js";import{L as t}from"./Layout.d25eb99c.js";import"./Paragraph.9304145b.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./index.f108a8f5.js";import"./iframe.7e7c80eb.js";import"../sb-preview/runtime.js";const M={title:"Components (Draft)/Layout/Main",tags:["autodocs"],component:t.Main,parameters:{docs:{description:{component:`
### CFPB DS Layout.Main component

Container for all of the content within a Layout. Used to configure the column structure ('layout') and whether the sidebar bleeds to the window edge ('bleedbar').


<ul>
<li>layout<ul>
<li>[1-3](https://cfpb.github.io/design-system/development/main-content-and-sidebars#left-hand-sidebar-layout)</li>
<li>[2-1](https://cfpb.github.io/design-system/development/main-content-and-sidebars#right-hand-sidebar-layout)</li>
</ul></li>

<li>[bleedbar](https://cfpb.github.io/design-system/development/main-content-and-sidebars#bleedbar-sidebar-styling)</li>
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
`}}}},r={args:{layout:"2-1",bleedbar:!0},render:n=>e.exports.jsx(t.Main,{...n,children:e.exports.jsxs(t.Wrapper,{children:[e.exports.jsxs(t.Content,{children:[e.exports.jsx("h1",{children:"Content"}),e.exports.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]}),e.exports.jsx(t.Sidebar,{children:e.exports.jsxs("div",{children:[e.exports.jsx("h2",{children:"Sidebar"}),e.exports.jsxs("ul",{children:[e.exports.jsx("li",{children:"Item 1"}),e.exports.jsx("li",{children:"Item 2"}),e.exports.jsx("li",{children:"Item 3"})]})]})})]})})},i={args:{layout:"1-3",bleedbar:!1},render:n=>e.exports.jsx(t.Main,{...n,children:e.exports.jsxs(t.Wrapper,{children:[e.exports.jsx(t.Sidebar,{children:e.exports.jsxs("div",{children:[e.exports.jsx("h2",{children:"Sidebar"}),e.exports.jsxs("ul",{children:[e.exports.jsx("li",{children:"Item 1"}),e.exports.jsx("li",{children:"Item 2"}),e.exports.jsx("li",{children:"Item 3"})]})]})}),e.exports.jsxs(t.Content,{children:[e.exports.jsx("h1",{children:"Content"}),e.exports.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    layout: '2-1',
    bleedbar: true
  },
  render: properties => <Layout.Main {...properties}>
      <Layout.Wrapper>
        <Layout.Content>
          <h1>Content</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            alias eum ut officiis optio similique explicabo cupiditate
            architecto voluptatem nostrum recusandae, eaque consectetur iure,
            veritatis eos, mollitia possimus error earum?
          </p>
        </Layout.Content>
        <Layout.Sidebar>
          <div>
            <h2>Sidebar</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </Layout.Sidebar>
      </Layout.Wrapper>
    </Layout.Main>
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var p,u,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    layout: '1-3',
    bleedbar: false
  },
  render: properties => <Layout.Main {...properties}>
      <Layout.Wrapper>
        <Layout.Sidebar>
          <div>
            <h2>Sidebar</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </Layout.Sidebar>
        <Layout.Content>
          <h1>Content</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            alias eum ut officiis optio similique explicabo cupiditate
            architecto voluptatem nostrum recusandae, eaque consectetur iure,
            veritatis eos, mollitia possimus error earum?
          </p>
        </Layout.Content>
      </Layout.Wrapper>
    </Layout.Main>
}`,...(l=(u=i.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const _=["Layout_2_1","Layout_1_3"];export{i as Layout_1_3,r as Layout_2_1,_ as __namedExportsOrder,M as default};

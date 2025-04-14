import{j as e}from"./jsx-runtime-eba35cff.js";/* empty css                */import"./TextIntroduction-ec76f2b4.js";import"./Dropdown-5b8e2e15.js";import"./Checkbox-7e7ab2e2.js";import"./ExpandableGroup-09add38b.js";import"./Icon-cdfcf558.js";import{L as t}from"./Layout-630569a2.js";import"./Well-11b17e27.js";import"./Paragraph-18b341b1.js";import"./TextArea-441eb386.js";import"./index-9053fc1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-798a71e2.js";import"./index-eeaea43d.js";import"./iframe-f0b11885.js";const _={title:"Components (Draft)/Layout/Main",tags:["autodocs"],component:t.Main,parameters:{docs:{description:{component:`
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
`}}}},i={args:{layout:"2-1",bleedbar:!0},render:r=>e.jsx(t.Main,{...r,children:e.jsxs(t.Wrapper,{children:[e.jsxs(t.Content,{children:[e.jsx("h1",{children:"Content"}),e.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]}),e.jsx(t.Sidebar,{children:e.jsxs("div",{children:[e.jsx("h2",{children:"Sidebar"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"})]})]})})]})})},n={args:{layout:"1-3",bleedbar:!1},render:r=>e.jsx(t.Main,{...r,children:e.jsxs(t.Wrapper,{children:[e.jsx(t.Sidebar,{children:e.jsxs("div",{children:[e.jsx("h2",{children:"Sidebar"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"})]})]})}),e.jsxs(t.Content,{children:[e.jsx("h1",{children:"Content"}),e.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var a,s,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const q=["Layout_2_1","Layout_1_3"];export{n as Layout_1_3,i as Layout_2_1,q as __namedExportsOrder,_ as default};

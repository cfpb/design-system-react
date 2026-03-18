import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{f as n,t as r}from"./src-DtJwsejz.js";var i,a,o,s,c;e((()=>{r(),i=t(),a={title:`Components (Draft)/Layout/Main`,tags:[`autodocs`],component:n.Main,parameters:{docs:{description:{component:`
### CFPB DS Layout.Main component

Container for all of the content within a Layout. Used to configure the column structure ('layout') and whether the sidebar bleeds to the window edge ('bleedbar').


<ul>
<li>layout<ul>
<li>[1-3](https://cfpb.github.io/design-system/development/main-content-and-sidebars#left-hand-sidebar-layout)</li>
<li>[2-1](https://cfpb.github.io/design-system/development/main-content-and-sidebars#right-hand-sidebar-layout)</li>
</ul></li>

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
`}}}},o={args:{layout:`2-1`},render:e=>(0,i.jsx)(n.Main,{...e,children:(0,i.jsxs)(n.Wrapper,{children:[(0,i.jsxs)(n.Content,{children:[(0,i.jsx)(`h1`,{children:`Content`}),(0,i.jsx)(`p`,{children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?`})]}),(0,i.jsx)(n.Sidebar,{children:(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h2`,{children:`Sidebar`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:`Item 1`}),(0,i.jsx)(`li`,{children:`Item 2`}),(0,i.jsx)(`li`,{children:`Item 3`})]})]})})]})})},s={args:{layout:`1-3`},render:e=>(0,i.jsx)(n.Main,{...e,children:(0,i.jsxs)(n.Wrapper,{children:[(0,i.jsx)(n.Sidebar,{children:(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h2`,{children:`Sidebar`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:`Item 1`}),(0,i.jsx)(`li`,{children:`Item 2`}),(0,i.jsx)(`li`,{children:`Item 3`})]})]})}),(0,i.jsxs)(n.Content,{children:[(0,i.jsx)(`h1`,{children:`Content`}),(0,i.jsx)(`p`,{children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?`})]})]})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: '2-1'
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: '1-3'
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
}`,...s.parameters?.docs?.source}}},c=[`Layout_2_1`,`Layout_1_3`]}))();export{s as Layout_1_3,o as Layout_2_1,c as __namedExportsOrder,a as default};
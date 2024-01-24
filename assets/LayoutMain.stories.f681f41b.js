/* empty css                */import"./Well.8b359911.js";import"./Dropdown.a315f808.js";import"./Checkbox.cd13dfbb.js";import"./ExpandableGroup.394828f2.js";import"./Icon.bd2a0ab0.js";import{j as e,a as i}from"./jsx-runtime.54133100.js";import{L as t}from"./Layout.ff481c50.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.89f60069.js";import"../sb-preview/runtime.js";const x={title:"Components (Draft)/Layout/Main",component:t.Main,parameters:{docs:{description:{component:`
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
`}}}},n={args:{layout:"2-1",bleedbar:!0},render:a=>e(t.Main,{...a,children:i(t.Wrapper,{children:[i(t.Content,{children:[e("h1",{children:"Content"}),e("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]}),e(t.Sidebar,{children:i("div",{children:[e("h2",{children:"Sidebar"}),i("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]})})]})})},r={args:{layout:"1-3",bleedbar:!1},render:a=>e(t.Main,{...a,children:i(t.Wrapper,{children:[e(t.Sidebar,{children:i("div",{children:[e("h2",{children:"Sidebar"}),i("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]})}),i(t.Content,{children:[e("h1",{children:"Content"}),e("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var o,s,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const W=["Layout_2_1","Layout_1_3"];export{r as Layout_1_3,n as Layout_2_1,W as __namedExportsOrder,x as default};
//# sourceMappingURL=LayoutMain.stories.f681f41b.js.map

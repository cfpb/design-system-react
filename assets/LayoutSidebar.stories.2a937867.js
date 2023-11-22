/* empty css                */import"./Well.b38df8e1.js";import"./Dropdown.22431321.js";import"./Checkbox.fe2d0150.js";import"./ExpandableGroup.35433f11.js";import"./Icon.dd0c7c9b.js";import{j as e,a as n}from"./jsx-runtime.54133100.js";import"./TextIntroduction.ff1fa05f.js";import{L as t}from"./Layout.09e91639.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.e59b99b3.js";import"../sb-preview/runtime.js";const x={title:"Components (Draft)/Layout/Sidebar",component:t.Sidebar,parameters:{docs:{description:{component:`
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
`}}}},i={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1},render:a=>e(t.Main,{children:n(t.Wrapper,{children:[e(t.Sidebar,{...a,children:n("div",{children:[e("h2",{children:"Layout.Sidebar"}),n("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]})}),n(t.Content,{children:[e("h1",{children:"Layout.Content"}),e("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var o,s,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(s=i.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const I=["Sidebar"];export{i as Sidebar,I as __namedExportsOrder,x as default};
//# sourceMappingURL=LayoutSidebar.stories.2a937867.js.map

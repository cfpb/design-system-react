import"./Well.b18f5e16.js";import"./Dropdown.723dd00e.js";import"./ExpandableGroup.b2bee709.js";import"./Icon.3e36b841.js";import{j as n,a as e}from"./jsx-runtime.3c5b5edf.js";import{L as t}from"./Layout.974e9c87.js";import"./extends.cc011e2f.js";import"./isNativeReflectConstruct.8b039ce4.js";import"./index.c8a4389a.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.7655b027.js";import"../sb-preview/runtime.js";const S={component:t.Content,parameters:{docs:{description:{component:`
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
`}}}},o={args:{flushBottom:!1,flushTopOnSmall:!1,flushAllOnSmall:!1,narrow:!1},render:a=>n(t.Main,{children:e(t.Wrapper,{children:[n(t.Sidebar,{children:e("div",{children:[n("h2",{children:"Layout.Sidebar"}),e("ul",{children:[n("li",{children:"Item 1"}),n("li",{children:"Item 2"}),n("li",{children:"Item 3"})]})]})}),e(t.Content,{...a,children:[n("h1",{children:"Layout.Content"}),n("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]})]})})};var i,s,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const C=["Content"];export{o as Content,C as __namedExportsOrder,S as default};
//# sourceMappingURL=LayoutContent.stories.e38ee8ca.js.map

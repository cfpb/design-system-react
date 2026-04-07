import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{f as n,t as r}from"./src-CobhvKEF.js";var i,a,o,s;e((()=>{r(),i=t(),a={title:`Components (Draft)/Layout/Wrapper`,tags:[`autodocs`],component:n.Wrapper,parameters:{docs:{description:{component:`
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
`}}}},o={args:{children:[(0,i.jsx)(n.Sidebar,{children:(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h2`,{children:`Layout.Sidebar`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:`Item 1`}),(0,i.jsx)(`li`,{children:`Item 2`}),(0,i.jsx)(`li`,{children:`Item 3`})]})]})},`sidebar`),(0,i.jsxs)(n.Content,{children:[(0,i.jsx)(`h1`,{children:`Layout.Content`}),(0,i.jsx)(`p`,{children:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?`})]},`content`)]},render:({children:e})=>(0,i.jsx)(n.Main,{children:(0,i.jsx)(n.Wrapper,{children:e})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`Wrapper`]}))();export{o as Wrapper,s as __namedExportsOrder,a as default};
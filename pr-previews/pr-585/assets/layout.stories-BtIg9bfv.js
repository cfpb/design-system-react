import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n,y as r}from"./src-BLrdg1DV.js";var i,a,o,s,c,l,u,d=e((()=>{n(),i=t(),a=`https://cfpb.github.io/design-system/development/main-content-and-sidebars`,o={component:`Use \`Layout.Main\`, \`Layout.Wrapper\`, \`Layout.Content\`, and \`Layout.Sidebar\` together to structure page content and optional sidebars.

Main is the container for all content within a layout and configures column structure (\`layout\`) and whether the sidebar bleeds to the window edge. Content is the main body of the page. Wrapper positions content and sidebar columns. Sidebar is a vertical region beside the main content.

Source: ${a}`},s=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?`,c=()=>(0,i.jsxs)(r.Content,{children:[(0,i.jsx)(`h1`,{children:`Content`}),(0,i.jsx)(`p`,{children:s})]}),l=()=>(0,i.jsx)(r.Sidebar,{children:(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h2`,{children:`Sidebar`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:`Item 1`}),(0,i.jsx)(`li`,{children:`Item 2`}),(0,i.jsx)(`li`,{children:`Item 3`})]})]})}),u=({layout:e=`2-1`})=>{let t=c(),n=l(),a=e===`1-3`?[n,t]:[t,n];return(0,i.jsx)(r.Main,{layout:e,children:(0,i.jsx)(r.Wrapper,{children:a})})};try{u.displayName=`renderLayoutTwoColumnExample`,u.__docgenInfo={description:``,displayName:`renderLayoutTwoColumnExample`,filePath:`/home/runner/work/design-system-react/design-system-react/src/components/Layout/layout-stories-shared.tsx`,methods:[],props:{layout:{defaultValue:{value:`2-1`},declarations:[{fileName:`design-system-react/src/components/Layout/layout-stories-shared.tsx`,name:`TypeLiteral`}],description:``,name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`"1-3" | "2-1"`,value:[{value:`"1-3"`},{value:`"2-1"`}]}}},tags:{}}}catch{}})),f,p,m,h,g,_;e((()=>{n(),d(),f=t(),p={title:`Components (Draft)/Layouts`,tags:[`autodocs`],component:r.Main,parameters:{docs:{description:{component:o.component}}}},m={name:`Basic main`,render:()=>(0,f.jsx)(r.Main,{children:(0,f.jsx)(r.Wrapper,{children:c()})})},h={name:`2-1 layout`,args:{layout:`2-1`},render:({layout:e=`2-1`})=>u({layout:e})},g={name:`1-3 layout`,args:{layout:`1-3`},render:({layout:e=`1-3`})=>u({layout:e})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Basic main',
  render: () => <Layout.Main>
      <Layout.Wrapper>{LayoutExampleContent()}</Layout.Wrapper>
    </Layout.Main>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '2-1 layout',
  args: {
    layout: '2-1'
  },
  render: ({
    layout = '2-1'
  }) => renderLayoutTwoColumnExample({
    layout
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '1-3 layout',
  args: {
    layout: '1-3'
  },
  render: ({
    layout = '1-3'
  }) => renderLayoutTwoColumnExample({
    layout
  })
}`,...g.parameters?.docs?.source}}},_=[`BasicMain`,`Layout_2_1`,`Layout_1_3`]}))();export{m as BasicMain,g as Layout_1_3,h as Layout_2_1,_ as __namedExportsOrder,p as default};
import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n,y as r}from"./src-B_He4Zwj.js";var i,a,o,s,c,l,u,d,f=e((()=>{n(),i=t(),a=`https://cfpb.github.io/design-system/development/main-content-and-sidebars`,o=[``,`2-1`,`1-3`],s={component:`Layout is a **composition API**: assemble \`Layout.Main\`, \`Layout.Wrapper\`, \`Layout.Content\`, and optionally \`Layout.Sidebar\` rather than picking a single “variant” on one component.

| Piece | Role |
| ----- | ---- |
| **Main** | Page \`<main>\` landmark. Set \`layout="2-1"\` or \`layout="1-3"\` only when using a two-column page; omit \`layout\` for a single full-width content column. |
| **Wrapper** | \`.wrapper\` around columns (and optional hero above it inside Main). |
| **Content** | Primary page body (\`.content__main\`). |
| **Sidebar** | Optional aside (\`.content__sidebar\`). Order in the wrapper must match the layout (main then sidebar for \`2-1\`; sidebar then main for \`1-3\`). |

Use the **Page layout** story control to preview column ratios. Individual pieces share the same DOM/classes as in production; see the building-block stories for each part in isolation.

Source: ${a}`},c=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?`,l=()=>(0,i.jsxs)(r.Content,{children:[(0,i.jsx)(`h1`,{children:`Content`}),(0,i.jsx)(`p`,{children:c})]}),u=()=>(0,i.jsx)(r.Sidebar,{children:(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h2`,{children:`Sidebar`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:`Item 1`}),(0,i.jsx)(`li`,{children:`Item 2`}),(0,i.jsx)(`li`,{children:`Item 3`})]})]})}),d=({layout:e=``})=>{let t=l(),n=e||void 0;if(!n)return(0,i.jsx)(r.Main,{children:(0,i.jsx)(r.Wrapper,{children:t})});let a=u(),o=n===`1-3`?[a,t]:[t,a];return(0,i.jsx)(r.Main,{layout:n,children:(0,i.jsx)(r.Wrapper,{children:o})})};try{d.displayName=`renderLayoutPageExample`,d.__docgenInfo={description:``,displayName:`renderLayoutPageExample`,filePath:`/home/runner/work/design-system-react/design-system-react/src/components/Layout/layout-stories-shared.tsx`,methods:[],props:{layout:{defaultValue:{value:``},declarations:[{fileName:`design-system-react/src/components/Layout/layout-stories-shared.tsx`,name:`TypeLiteral`}],description:``,name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`LayoutStoryLayoutValue`,value:[{value:`""`},{value:`"1-3"`},{value:`"2-1"`}]}}},tags:{}}}catch{}})),p,m,h,g,_,v,y;e((()=>{n(),f(),p=t(),m={title:`Components (Draft)/Layouts`,tags:[`autodocs`],component:r.Main,parameters:{layout:`fullscreen`,docs:{description:{component:s.component}}},argTypes:{layout:{name:`Column layout`,control:{type:`select`},options:o,labels:{"":`None (single column)`,"2-1":`2-1 (main + right sidebar)`,"1-3":`1-3 (left sidebar + main)`},description:"Two-column ratios on `Layout.Main`. None = no `layout` prop (main content only, no sidebar column)."},id:{table:{disable:!0}},classes:{table:{disable:!0}},children:{table:{disable:!0}}}},h={name:`Page layout`,args:{layout:``},render:({layout:e=``})=>d({layout:e}),parameters:{docs:{description:{story:"Typical assembly: `Layout.Main` → `Layout.Wrapper` → `Layout.Content` (and `Layout.Sidebar` when using `2-1` or `1-3`). This is the story to use when reviewing layout behavior; the stories below show each building block alone."}}}},g={name:`Building block — Main`,parameters:{controls:{disable:!0},docs:{description:{story:"`Layout.Main` only, with no `layout` prop — single-column shell (`content`, no `content--*`)."}}},render:()=>(0,p.jsx)(r.Main,{children:(0,p.jsx)(r.Wrapper,{children:l()})})},_={name:`Building block — Content`,parameters:{controls:{disable:!0},docs:{description:{story:"`Layout.Content` markup and classes without Main/Wrapper."}}},render:()=>l()},v={name:`Building block — Sidebar`,parameters:{controls:{disable:!0},docs:{description:{story:"`Layout.Sidebar` markup and classes without Main/Wrapper."}}},render:()=>u()},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Page layout',
  args: {
    layout: '' satisfies LayoutStoryLayoutValue
  },
  render: ({
    layout = ''
  }) => renderLayoutPageExample({
    layout
  }),
  parameters: {
    docs: {
      description: {
        story: 'Typical assembly: \`Layout.Main\` → \`Layout.Wrapper\` → \`Layout.Content\` (and \`Layout.Sidebar\` when using \`2-1\` or \`1-3\`). This is the story to use when reviewing layout behavior; the stories below show each building block alone.'
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Composed page shell — use Controls to switch column layout or preview main-only.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Building block — Main',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '\`Layout.Main\` only, with no \`layout\` prop — single-column shell (\`content\`, no \`content--*\`).'
      }
    }
  },
  render: () => <Layout.Main>
      <Layout.Wrapper>{LayoutExampleContent()}</Layout.Wrapper>
    </Layout.Main>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Building block — Content',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '\`Layout.Content\` markup and classes without Main/Wrapper.'
      }
    }
  },
  render: () => LayoutExampleContent()
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Building block — Sidebar',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '\`Layout.Sidebar\` markup and classes without Main/Wrapper.'
      }
    }
  },
  render: () => LayoutExampleSidebar()
}`,...v.parameters?.docs?.source}}},y=[`PageLayout`,`BuildingBlockMain`,`BuildingBlockContent`,`BuildingBlockSidebar`]}))();export{_ as BuildingBlockContent,g as BuildingBlockMain,v as BuildingBlockSidebar,h as PageLayout,y as __namedExportsOrder,m as default};
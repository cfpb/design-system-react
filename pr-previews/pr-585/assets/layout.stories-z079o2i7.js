import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{V as n,t as r,y as i}from"./src-CLIJm9n-.js";var a,o,s,c,l,u=e((()=>{a=t(),o=`https://cfpb.github.io/design-system/development/main-content-and-sidebars`,s={component:`Layout is a **composition API** that mirrors the [CFPB main content and sidebars](${o}) pattern. Assemble \`Layout.Main\`, \`Layout.Wrapper\`, \`Layout.Content\`, and optionally \`Layout.Sidebar\`.

| Piece | Role |
| ----- | ---- |
| **Main** | Page \`<main>\` landmark (\`.content\`). Set \`layout="2-1"\` or \`layout="1-3"\` for two-column layouts; omit \`layout\` when main and sidebar stack vertically. |
| **Wrapper** | \`.wrapper\` around columns (hero or \`Divider\` may sit above it inside Main). |
| **Content** | Primary page body (\`.content__main\`). |
| **Sidebar** | Optional aside (\`.content__sidebar\`). Order in the wrapper must match the layout (sidebar then main for \`1-3\`; main then sidebar for \`2-1\`). |
| **Content / Sidebar modifiers** | \`flushBottom\`, \`flushTopOnSmall\`, and \`flushAllOnSmall\` map to \`.content--flush-bottom\`, \`.content--flush-top-on-small\`, and \`.content--flush-all-on-small\`. |

The stories below follow the live examples on the design system documentation page.`},c=`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Cum corrupti tempora nam nihil qui mollitia consectetur
corporis nemo culpa dolorum! Laborum at eos deleniti
consequatur itaque officiis debitis quisquam! Provident!`,l=()=>(0,a.jsx)(`footer`,{className:`footer`,role:`contentinfo`,children:(0,a.jsx)(`div`,{className:`wrapper`,children:`Footer`})});try{c.displayName=`LAYOUT_EXAMPLE_LOREM`,c.__docgenInfo={description:`Lorem copy from the CFPB left/right sidebar layout examples.`,displayName:`LAYOUT_EXAMPLE_LOREM`,filePath:`/home/runner/work/design-system-react/design-system-react/src/components/Layout/layout-stories-shared.tsx`,methods:[],props:{},tags:{}}}catch{}})),d,f,p,m,h,g,_,v,y;e((()=>{r(),u(),d=t(),f={title:`Components (Draft)/Layouts`,tags:[`autodocs`],component:i.Main,parameters:{layout:`fullscreen`,docs:{description:{component:s.component}}}},p={name:`Main content and sidebar`,render:()=>(0,d.jsxs)(i.Main,{children:[(0,d.jsx)(`section`,{className:`content_hero`,style:{background:`#E3E4E5`},children:`Content hero`}),(0,d.jsxs)(i.Wrapper,{children:[(0,d.jsx)(i.Content,{children:`Main content area`}),(0,d.jsx)(i.Sidebar,{style:{background:`#F1F2F2`},children:`Sidebar`})]})]}),parameters:{docs:{description:{story:"Standard layout for the main content area and sidebar. By default `.content__main` and `.content__sidebar` stack vertically. Column modifiers (`2-1`, `1-3`) convert to side-by-side columns at 801px. Inline styling is for demonstration only."}}}},m={name:`Left-hand sidebar layout`,render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.Main,{layout:`1-3`,children:[(0,d.jsx)(n,{}),(0,d.jsxs)(i.Wrapper,{children:[(0,d.jsx)(i.Sidebar,{children:`Section navigation`}),(0,d.jsxs)(i.Content,{children:[(0,d.jsx)(`h2`,{children:`Main content area`}),(0,d.jsx)(`p`,{children:c})]})]})]}),(0,d.jsx)(l,{})]}),parameters:{docs:{description:{story:'Add `layout="1-3"` to `Layout.Main` for a 1:3 ratio with the sidebar on the left and main content on the right. Place `Layout.Sidebar` before `Layout.Content` in the wrapper.'}}}},h={name:`Right-hand sidebar layout`,render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.Main,{layout:`2-1`,children:[(0,d.jsx)(n,{}),(0,d.jsxs)(i.Wrapper,{children:[(0,d.jsxs)(i.Content,{children:[(0,d.jsx)(`h2`,{children:`Main content area`}),(0,d.jsx)(`p`,{children:c})]}),(0,d.jsx)(i.Sidebar,{style:{background:`#F1F2F2`},children:`Sidebar`})]})]}),(0,d.jsx)(l,{})]}),parameters:{docs:{description:{story:'Add `layout="2-1"` to `Layout.Main` for a 2:1 ratio with main content on the left and the sidebar on the right. Place `Layout.Content` before `Layout.Sidebar` in the wrapper.'}}}},g={name:`Flush bottom modifier`,render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.Main,{layout:`1-3`,children:[(0,d.jsx)(n,{}),(0,d.jsxs)(i.Wrapper,{children:[(0,d.jsx)(i.Sidebar,{flushBottom:!0,children:`Side with no bottom padding...`}),(0,d.jsxs)(i.Content,{flushBottom:!0,children:[`Main content with no bottom padding...`,(0,d.jsx)(`div`,{className:`block block--flush-bottom block--flush-sides block--bg`,children:`.content--flush-bottom is very useful when you have a content block inside of .content__main with a background and flush sides.`})]})]})]}),(0,d.jsx)(l,{})]}),parameters:{docs:{description:{story:"Set `flushBottom` on `Layout.Content` or `Layout.Sidebar` to apply `.content--flush-bottom` and remove bottom padding."}}}},_={name:`Flush top modifier (only on small screens)`,render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.Main,{layout:`1-3`,children:[(0,d.jsx)(n,{}),(0,d.jsxs)(i.Wrapper,{children:[(0,d.jsx)(i.Sidebar,{flushTopOnSmall:!0,children:`Side with no top padding on small screens...`}),(0,d.jsx)(i.Content,{children:`Main content`})]})]}),(0,d.jsx)(l,{})]}),parameters:{docs:{description:{story:"Set `flushTopOnSmall` on `Layout.Content` or `Layout.Sidebar` to apply `.content--flush-top-on-small`. Top padding is removed only on small screens, where main and sidebar stack in a single column."}}}},v={name:`Flush all modifier (only on small screens)`,render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.Main,{layout:`1-3`,children:[(0,d.jsx)(n,{}),(0,d.jsxs)(i.Wrapper,{children:[(0,d.jsx)(i.Sidebar,{flushAllOnSmall:!0,children:`Side with no padding or border-based gutters on small screens...`}),(0,d.jsx)(i.Content,{children:`Main content`})]})]}),(0,d.jsx)(l,{})]}),parameters:{docs:{description:{story:"Set `flushAllOnSmall` on `Layout.Content` or `Layout.Sidebar` to apply `.content--flush-all-on-small`. All padding and border-based gutters are removed on small screens only."}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Main content and sidebar',
  render: () => <Layout.Main>
      <section className='content_hero' style={{
      background: '#E3E4E5'
    }}>
        Content hero
      </section>
      <Layout.Wrapper>
        <Layout.Content>Main content area</Layout.Content>
        <Layout.Sidebar style={{
        background: '#F1F2F2'
      }}>Sidebar</Layout.Sidebar>
      </Layout.Wrapper>
    </Layout.Main>,
  parameters: {
    docs: {
      description: {
        story: 'Standard layout for the main content area and sidebar. By default \`.content__main\` and \`.content__sidebar\` stack vertically. Column modifiers (\`2-1\`, \`1-3\`) convert to side-by-side columns at 801px. Inline styling is for demonstration only.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Left-hand sidebar layout',
  render: () => <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar>Section navigation</Layout.Sidebar>
          <Layout.Content>
            <h2>Main content area</h2>
            <p>{LAYOUT_EXAMPLE_LOREM}</p>
          </Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Add \`layout="1-3"\` to \`Layout.Main\` for a 1:3 ratio with the sidebar on the left and main content on the right. Place \`Layout.Sidebar\` before \`Layout.Content\` in the wrapper.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Right-hand sidebar layout',
  render: () => <>
      <Layout.Main layout='2-1'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Content>
            <h2>Main content area</h2>
            <p>{LAYOUT_EXAMPLE_LOREM}</p>
          </Layout.Content>
          <Layout.Sidebar style={{
          background: '#F1F2F2'
        }}>Sidebar</Layout.Sidebar>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Add \`layout="2-1"\` to \`Layout.Main\` for a 2:1 ratio with main content on the left and the sidebar on the right. Place \`Layout.Content\` before \`Layout.Sidebar\` in the wrapper.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Flush bottom modifier',
  render: () => <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar flushBottom>
            Side with no bottom padding...
          </Layout.Sidebar>
          <Layout.Content flushBottom>
            Main content with no bottom padding...
            <div className='block block--flush-bottom block--flush-sides block--bg'>
              .content--flush-bottom is very useful when you have a content block
              inside of .content__main with a background and flush sides.
            </div>
          </Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Set \`flushBottom\` on \`Layout.Content\` or \`Layout.Sidebar\` to apply \`.content--flush-bottom\` and remove bottom padding.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Flush top modifier (only on small screens)',
  render: () => <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar flushTopOnSmall>
            Side with no top padding on small screens...
          </Layout.Sidebar>
          <Layout.Content>Main content</Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Set \`flushTopOnSmall\` on \`Layout.Content\` or \`Layout.Sidebar\` to apply \`.content--flush-top-on-small\`. Top padding is removed only on small screens, where main and sidebar stack in a single column.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Flush all modifier (only on small screens)',
  render: () => <>
      <Layout.Main layout='1-3'>
        <Divider />
        <Layout.Wrapper>
          <Layout.Sidebar flushAllOnSmall>
            Side with no padding or border-based gutters on small screens...
          </Layout.Sidebar>
          <Layout.Content>Main content</Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>
      <LayoutStoryFooter />
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Set \`flushAllOnSmall\` on \`Layout.Content\` or \`Layout.Sidebar\` to apply \`.content--flush-all-on-small\`. All padding and border-based gutters are removed on small screens only.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`MainContentAndSidebar`,`LeftHandSidebarLayout`,`RightHandSidebarLayout`,`FlushBottomModifier`,`FlushTopOnSmallModifier`,`FlushAllOnSmallModifier`]}))();export{v as FlushAllOnSmallModifier,g as FlushBottomModifier,_ as FlushTopOnSmallModifier,m as LeftHandSidebarLayout,p as MainContentAndSidebar,h as RightHandSidebarLayout,y as __namedExportsOrder,f as default};
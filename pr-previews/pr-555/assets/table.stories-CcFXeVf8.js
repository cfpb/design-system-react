import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{a as n,l as r,t as i}from"./src-Bf26jzHO.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{i(),r(),a=t(),o={title:`Components (Verified)/Tables`,tags:[`autodocs`],component:n,argTypes:{columns:{description:`Accepts strings or column config objects: { header, isAlignRight, width, isCellWordBreak, isCellDisableWordWrap, isHeaderWordWrap }.`,table:{type:{summary:`Array<string | TableColumnConfiguration>`}}}}},s={args:{caption:`Table caption describing the data`,columns:[`Column 1 header`,`Column 2 header`,`Column 3 header`],rows:[[`Row 1, Column 1`,`Row 1, Column 2`,`Row 1, Column 3`],[`Row 2, Column 1`,`Row 2, Column 2`,`Row 2, Column 3`],[`Row 3, Column 1`,`Row 3, Column 2`,`Row 3, Column 3`]]}},c={name:`Responsive stacked`,args:{columns:[`Column 1`,`Column 2`,`Column 3`],rows:[[`Row A`,`Cell A2`,`Cell A3`],[`Row B`,`Cell B2`,`Cell B3`],[`Row C`,`Cell C2`,`Cell C3`],[`Row D`,`Cell D2`,`Cell D3`]],isResponsive:!0}},l={name:`Responsive with horizontal scroll`,args:{columns:[`Column 1`,`Column 2`,`Column 3`,`Column 4`,`Column 5`,`Column 6`,`Column 7`,`Column 8`],rows:[[`Row A`,`Cell A2`,`Cell A3`,`Cell A4`,`Cell A5`,`Cell A6`,`Cell A7`,`Cell A8`],[`Row B`,`Cell B2`,`Cell B3`,`Cell B4`,`Cell B5`,`Cell B6`,`Cell B7`,`Cell B8`],[`Row C`,`Cell C2`,`Cell C3`,`Cell C4`,`Cell C5`,`Cell C6`,`Cell C7`,`Cell C8`]],isScrollableHorizontal:!0}},u={args:{columns:c.args?.columns,rows:c.args?.rows,isStriped:!0}},d={name:`Right-aligned`,args:{columns:[{header:`Column 1`},{header:`Column 2`},{header:`Right-aligned column`,isAlignRight:!0}],rows:[[`Row A`,`Cell A2`,`$1.00`],[`Row B`,`Cell B2`,`$200.02`]]}},f=30,p=5,m={args:{columns:[`Column 1`,`Column 2`,`Column 3`,`Column 4`,`Column 5`],rows:[...Array.from({length:f}).keys()].map(e=>[`Row ${e+1}, Column 1`,`Row ${e+1}, Column 2`,`Row ${e+1}, Column 3`,`Row ${e+1}, Column 4`,`Row ${e+1}, Column 5`]),isPaginated:!0,perPage:p},render:e=>(0,a.jsx)(n,{...e})},h={name:`Fixed-width columns `,args:{columns:[{header:`County`,width:`20`},{header:`Lien status`,width:`60`},{header:`Active`,width:`20`}],rows:[[`Abbeville`,`Secured`,`Yes`],[`Abbey`,`Secured`,`No`]]}},g=[...Array.from({length:20}).keys()].map((e,t)=>[`Row ${t+1e9}`,`4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS`,`4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS`,`4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS`]),_={name:`Long character sets`,args:{columns:[{header:`Column 1`,isCellDisableWordWrap:!0,isHeaderWordWrap:!1},{header:`Column 2`,isCellWordBreak:!0},{header:`Column 3`,isCellWordBreak:!0},{header:`Column 4`,isCellWordBreak:!0}],rows:g,isScrollableHorizontal:!1}},v={name:`Column configuration options`,parameters:{docs:{description:{story:"Columns accept objects with `header`, `isAlignRight`, `width` (percent as string), `isCellWordBreak`, `isCellDisableWordWrap`, and `isHeaderWordWrap`.\n\nColumn `width` maps to the CFPB Design System width utility classes (u-w{n}pct). Valid values for width are 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 75, 65, 25, 15, 66, and 33.\n\nSource: https://cfpb.github.io/design-system/development/helper-classes-and-mixins#width-utilities-helper-classes"}}},args:{columns:[{header:`Header (default)`,width:`25`},{header:`Align right`,isAlignRight:!0,width:`25`},{header:`Word break`,isCellWordBreak:!0,width:`25`},{header:`No wrap header`,isHeaderWordWrap:!1,isCellDisableWordWrap:!0,width:`25`}],rows:[[`Standard text`,`$12,345.67`,`SUPERLONGIDENTIFIERSTRINGWITHOUTSPACES`,`Long cell value should stay on one line`],[`Row 2`,`$0.99`,`ANOTHERLONGIDENTIFIERSTRINGWITHOUTSPACES`,`Another long cell value without wrapping`]]}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Responsive stacked',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row A', 'Cell A2', 'Cell A3'], ['Row B', 'Cell B2', 'Cell B3'], ['Row C', 'Cell C2', 'Cell C3'], ['Row D', 'Cell D2', 'Cell D3']],
    isResponsive: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Responsive with horizontal scroll',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8'],
    rows: [['Row A', 'Cell A2', 'Cell A3', 'Cell A4', 'Cell A5', 'Cell A6', 'Cell A7', 'Cell A8'], ['Row B', 'Cell B2', 'Cell B3', 'Cell B4', 'Cell B5', 'Cell B6', 'Cell B7', 'Cell B8'], ['Row C', 'Cell C2', 'Cell C3', 'Cell C4', 'Cell C5', 'Cell C6', 'Cell C7', 'Cell C8']],
    isScrollableHorizontal: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Right-aligned',
  args: {
    columns: [{
      header: 'Column 1'
    }, {
      header: 'Column 2'
    }, {
      header: 'Right-aligned column',
      isAlignRight: true
    }],
    rows: [['Row A', 'Cell A2', '$1.00'], ['Row B', 'Cell B2', '$200.02']]
  }
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],\n    rows: [...Array.from({\n      length: numberRows\n    }).keys()].map(key => [`Row ${key + ONE}, Column 1`, `Row ${key + ONE}, Column 2`, `Row ${key + ONE}, Column 3`, `Row ${key + ONE}, Column 4`, `Row ${key + ONE}, Column 5`]),\n    isPaginated: true,\n    perPage: PAGINATION_PER_PAGE\n  },\n  render: arguments_ => <Table {...arguments_} />\n}",...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Fixed-width columns ',
  args: {
    columns: [{
      header: 'County',
      width: '20'
    }, {
      header: 'Lien status',
      width: '60'
    }, {
      header: 'Active',
      width: '20'
    }],
    rows: [['Abbeville', 'Secured', 'Yes'], ['Abbey', 'Secured', 'No']]
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Long character sets',
  args: {
    columns: [{
      header: 'Column 1',
      isCellDisableWordWrap: true,
      isHeaderWordWrap: false
    }, {
      header: 'Column 2',
      isCellWordBreak: true
    }, {
      header: 'Column 3',
      isCellWordBreak: true
    }, {
      header: 'Column 4',
      isCellWordBreak: true
    }],
    rows: maxUidTestRows,
    isScrollableHorizontal: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Column configuration options',
  parameters: {
    docs: {
      description: {
        story: 'Columns accept objects with \`header\`, \`isAlignRight\`, \`width\` (percent as string), \`isCellWordBreak\`, \`isCellDisableWordWrap\`, and \`isHeaderWordWrap\`.\\n\\n' + 'Column \`width\` maps to the CFPB Design System width utility classes (u-w{n}pct). Valid values for width are 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 75, 65, 25, 15, 66, and 33.\\n\\n' + 'Source: https://cfpb.github.io/design-system/development/helper-classes-and-mixins#width-utilities-helper-classes'
      }
    }
  },
  args: {
    columns: [{
      header: 'Header (default)',
      width: '25'
    }, {
      header: 'Align right',
      isAlignRight: true,
      width: '25'
    }, {
      header: 'Word break',
      isCellWordBreak: true,
      width: '25'
    }, {
      header: 'No wrap header',
      isHeaderWordWrap: false,
      isCellDisableWordWrap: true,
      width: '25'
    }],
    rows: [['Standard text', '$12,345.67', 'SUPERLONGIDENTIFIERSTRINGWITHOUTSPACES', 'Long cell value should stay on one line'], ['Row 2', '$0.99', 'ANOTHERLONGIDENTIFIERSTRINGWITHOUTSPACES', 'Another long cell value without wrapping']]
  }
}`,...v.parameters?.docs?.source}}},y=[`Standard`,`Responsive`,`HorizontalScroll`,`Striped`,`RightAligned`,`Pagination`,`FixedWidth`,`LongCharacterSets`,`ColumnConfiguration`]}))();export{v as ColumnConfiguration,h as FixedWidth,l as HorizontalScroll,_ as LongCharacterSets,m as Pagination,c as Responsive,d as RightAligned,s as Standard,u as Striped,y as __namedExportsOrder,o as default};
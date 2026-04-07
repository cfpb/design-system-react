import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CWHGkrjl.js";import{a as n,l as r,t as i}from"./src-Bk1oFcNy.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{i(),r(),a=t(),o={title:`Components (Verified)/Tables`,tags:[`autodocs`],component:n},s={name:`Standard table`,args:{caption:`Table caption describing the data`,columns:[`Column 1 header`,`Column 2 header`,`Column 3 header`],rows:[[`Row 1, Column 1`,`Row 1, Column 2`,`Row 1, Column 3`],[`Row 2, Column 1`,`Row 2, Column 2`,`Row 2, Column 3`],[`Row 3, Column 1`,`Row 3, Column 2`,`Row 3, Column 3`]]}},c={name:`Responsive stacked table`,args:{columns:[`Column 1`,`Column 2`,`Column 3`],rows:[[`Row A`,`Cell A2`,`Cell A3`],[`Row B`,`Cell B2`,`Cell B3`],[`Row C`,`Cell C2`,`Cell C3`],[`Row D`,`Cell D2`,`Cell D3`]],isResponsive:!0}},l={name:`Responsive table with horizontal scroll`,args:{columns:[`Column 1`,`Column 2`,`Column 3`,`Column 4`,`Column 5`,`Column 6`,`Column 7`,`Column 8`],rows:[[`Row A`,`Cell A2`,`Cell A3`,`Cell A4`,`Cell A5`,`Cell A6`,`Cell A7`,`Cell A8`],[`Row B`,`Cell B2`,`Cell B3`,`Cell B4`,`Cell B5`,`Cell B6`,`Cell B7`,`Cell B8`],[`Row C`,`Cell C2`,`Cell C3`,`Cell C4`,`Cell C5`,`Cell C6`,`Cell C7`,`Cell C8`]],isScrollableHorizontal:!0}},u={name:`Striped table`,args:{columns:c.args?.columns,rows:c.args?.rows,isStriped:!0}},d={name:`Right-aligned table`,args:{columns:[{header:`Col 1`},`Col 2`,{header:`Right-aligned column`,alignRight:!0}],rows:[[`Row A`,`Cell A2`,`$1.00`],[`Row B`,`Cell B2`,`$200.02`]]}},f=30,p=5,m={args:{columns:[`Column 1`,`Column 2`,`Column 3`,`Column 4`,`Column 5`],rows:[...Array.from({length:f}).keys()].map(e=>[`Row ${e+1}, Column 1`,`Row ${e+1}, Column 2`,`Row ${e+1}, Column 3`,`Row ${e+1}, Column 4`,`Row ${e+1}, Column 5`]),isPaginated:!0,perPage:p},render:e=>(0,a.jsx)(n,{...e})},h={name:`Fixed-width column tables `,args:{columns:[{header:`County`,width:`20`},{header:`Lien status`,width:`60`},{header:`Active`,width:`20`}],rows:[[`Abbeville`,`Secured`,`Yes`],[`Abbey`,`Secured`,`No`]]}},g=[...Array.from({length:20}).keys()].map((e,t)=>[`Row ${t+1e9}`,`4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS`,`4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS`,`4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS`]),_={name:`Long Character Sets `,args:{columns:[{header:`Column 1`,cellDisableWordWrap:!0,headerWordWrap:!1},{header:`Column 2`,cellWordBreak:!0},{header:`Column 3`,cellWordBreak:!0},{header:`Column 4`,cellWordBreak:!0}],rows:g,isScrollableHorizontal:!1}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Standard table',
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Responsive stacked table',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row A', 'Cell A2', 'Cell A3'], ['Row B', 'Cell B2', 'Cell B3'], ['Row C', 'Cell C2', 'Cell C3'], ['Row D', 'Cell D2', 'Cell D3']],
    isResponsive: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Responsive table with horizontal scroll',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8'],
    rows: [['Row A', 'Cell A2', 'Cell A3', 'Cell A4', 'Cell A5', 'Cell A6', 'Cell A7', 'Cell A8'], ['Row B', 'Cell B2', 'Cell B3', 'Cell B4', 'Cell B5', 'Cell B6', 'Cell B7', 'Cell B8'], ['Row C', 'Cell C2', 'Cell C3', 'Cell C4', 'Cell C5', 'Cell C6', 'Cell C7', 'Cell C8']],
    isScrollableHorizontal: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Striped table',
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Right-aligned table',
  args: {
    columns: [{
      header: 'Col 1'
    }, 'Col 2', {
      header: 'Right-aligned column',
      alignRight: true
    }],
    rows: [['Row A', 'Cell A2', '$1.00'], ['Row B', 'Cell B2', '$200.02']]
  }
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],\n    rows: [...Array.from({\n      length: numberRows\n    }).keys()].map(key => [`Row ${key + ONE}, Column 1`, `Row ${key + ONE}, Column 2`, `Row ${key + ONE}, Column 3`, `Row ${key + ONE}, Column 4`, `Row ${key + ONE}, Column 5`]),\n    isPaginated: true,\n    perPage: PAGINATION_PER_PAGE\n  },\n  render: arguments_ => <Table {...arguments_} />\n}",...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Fixed-width column tables ',
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
  name: 'Long Character Sets ',
  args: {
    columns: [{
      header: 'Column 1',
      cellDisableWordWrap: true,
      headerWordWrap: false
    }, {
      header: 'Column 2',
      cellWordBreak: true
    }, {
      header: 'Column 3',
      cellWordBreak: true
    }, {
      header: 'Column 4',
      cellWordBreak: true
    }],
    rows: maxUidTestRows,
    isScrollableHorizontal: false
  }
}`,..._.parameters?.docs?.source}}},v=[`Standard`,`Responsive`,`HorizontalScroll`,`Striped`,`RightAligned`,`Pagination`,`FixedWidth`,`LongCharacterSets`]}))();export{h as FixedWidth,l as HorizontalScroll,_ as LongCharacterSets,m as Pagination,c as Responsive,d as RightAligned,s as Standard,u as Striped,v as __namedExportsOrder,o as default};
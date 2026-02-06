import{j as i}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CiCXGmEO.js";import{g as u,O as l}from"./Well-xzLOu0ed.js";import"./Checkbox-CDxPAGM0.js";import"./Paragraph-DWcGDxu5.js";import"./TextArea-IoVnnwbh.js";import"./preload-helper-lKO2eUTi.js";import"./index-DKfb1IHN.js";const E={title:"Components (Verified)/Tables",tags:["autodocs"],component:u},n={name:"Standard table",args:{caption:"Table caption describing the data",columns:["Column 1 header","Column 2 header","Column 3 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3"]]}},o={name:"Responsive stacked table",args:{columns:["Column 1","Column 2","Column 3"],rows:[["Row A","Cell A2","Cell A3"],["Row B","Cell B2","Cell B3"],["Row C","Cell C2","Cell C3"],["Row D","Cell D2","Cell D3"]],isResponsive:!0}},r={name:"Responsive table with horizontal scroll",args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5","Column 6","Column 7","Column 8"],rows:[["Row A","Cell A2","Cell A3","Cell A4","Cell A5","Cell A6","Cell A7","Cell A8"],["Row B","Cell B2","Cell B3","Cell B4","Cell B5","Cell B6","Cell B7","Cell B8"],["Row C","Cell C2","Cell C3","Cell C4","Cell C5","Cell C6","Cell C7","Cell C8"]],isScrollableHorizontal:!0}},a={name:"Striped table",args:{columns:o.args?.columns,rows:o.args?.rows,isStriped:!0}},s={name:"Right-aligned table",args:{columns:[{header:"Col 1"},"Col 2",{header:"Right-aligned column",alignRight:!0}],rows:[["Row A","Cell A2","$1.00"],["Row B","Cell B2","$200.02"]]}},d=30,R=5,C={args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5"],rows:[...Array.from({length:d}).keys()].map(e=>[`Row ${e+l}, Column 1`,`Row ${e+l}, Column 2`,`Row ${e+l}, Column 3`,`Row ${e+l}, Column 4`,`Row ${e+l}, Column 5`]),isPaginated:!0,perPage:R},render:e=>i.jsx(u,{...e})},t={name:"Fixed-width column tables ",args:{columns:[{header:"County",width:"20"},{header:"Lien status",width:"60"},{header:"Active",width:"20"}],rows:[["Abbeville","Secured","Yes"],["Abbey","Secured","No"]]}},w=[...Array.from({length:20}).keys()].map((e,c)=>[`Row ${c+1e9}`,"4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS","4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS","4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS"]),m={name:"Long Character Sets ",args:{columns:[{header:"Column 1",cellDisableWordWrap:!0,headerWordWrap:!1},{header:"Column 2",cellWordBreak:!0},{header:"Column 3",cellWordBreak:!0},{header:"Column 4",cellWordBreak:!0}],rows:w,isScrollableHorizontal:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Standard table',
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']]
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Responsive stacked table',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row A', 'Cell A2', 'Cell A3'], ['Row B', 'Cell B2', 'Cell B3'], ['Row C', 'Cell C2', 'Cell C3'], ['Row D', 'Cell D2', 'Cell D3']],
    isResponsive: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Responsive table with horizontal scroll',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8'],
    rows: [['Row A', 'Cell A2', 'Cell A3', 'Cell A4', 'Cell A5', 'Cell A6', 'Cell A7', 'Cell A8'], ['Row B', 'Cell B2', 'Cell B3', 'Cell B4', 'Cell B5', 'Cell B6', 'Cell B7', 'Cell B8'], ['Row C', 'Cell C2', 'Cell C3', 'Cell C4', 'Cell C5', 'Cell C6', 'Cell C7', 'Cell C8']],
    isScrollableHorizontal: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Striped table',
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],\n    rows: [...Array.from({\n      length: numberRows\n    }).keys()].map(key => [`Row ${key + ONE}, Column 1`, `Row ${key + ONE}, Column 2`, `Row ${key + ONE}, Column 3`, `Row ${key + ONE}, Column 4`, `Row ${key + ONE}, Column 5`]),\n    isPaginated: true,\n    perPage: PAGINATION_PER_PAGE\n  },\n  render: arguments_ => <Table {...arguments_} />\n}",...C.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const P=["Standard","Responsive","HorizontalScroll","Striped","RightAligned","Pagination","FixedWidth","LongCharacterSets"];export{t as FixedWidth,r as HorizontalScroll,m as LongCharacterSets,C as Pagination,o as Responsive,s as RightAligned,n as Standard,a as Striped,P as __namedExportsOrder,E as default};

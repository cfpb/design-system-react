import{j as z}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{m as x,O as l}from"./TextIntroduction-DOIJh-7J.js";import"./Dropdown-BpjabCMe.js";import"./Checkbox-uScmMply.js";import"./ExpandableGroup-CaYQL2AJ.js";import"./Icon-6PULpW2t.js";import"./Well-DdbSBrlA.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-DVOrI9Mn.js";const ne={title:"Components (Verified)/Tables",tags:["autodocs"],component:x},n={name:"Standard table",args:{caption:"Table caption describing the data",columns:["Column 1 header","Column 2 header","Column 3 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3"]]}},o={name:"Responsive stacked table",args:{columns:["Column 1","Column 2","Column 3"],rows:[["Row A","Cell A2","Cell A3"],["Row B","Cell B2","Cell B3"],["Row C","Cell C2","Cell C3"],["Row D","Cell D2","Cell D3"]],isResponsive:!0}},r={name:"Responsive table with horizontal scroll",args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5","Column 6","Column 7","Column 8"],rows:[["Row A","Cell A2","Cell A3","Cell A4","Cell A5","Cell A6","Cell A7","Cell A8"],["Row B","Cell B2","Cell B3","Cell B4","Cell B5","Cell B6","Cell B7","Cell B8"],["Row C","Cell C2","Cell C3","Cell C4","Cell C5","Cell C6","Cell C7","Cell C8"]],isScrollableHorizontal:!0}};var u,i;const a={name:"Striped table",args:{columns:(u=o.args)==null?void 0:u.columns,rows:(i=o.args)==null?void 0:i.rows,isStriped:!0}},s={name:"Right-aligned table",args:{columns:[{header:"Col 1"},"Col 2",{header:"Right-aligned column",alignRight:!0}],rows:[["Row A","Cell A2","$1.00"],["Row B","Cell B2","$200.02"]]}},D=30,_=5,m={args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5"],rows:[...Array.from({length:D}).keys()].map(e=>[`Row ${e+l}, Column 1`,`Row ${e+l}, Column 2`,`Row ${e+l}, Column 3`,`Row ${e+l}, Column 4`,`Row ${e+l}, Column 5`]),isPaginated:!0,perPage:_},render:e=>z.jsx(x,{...e})},t={name:"Fixed-width column tables ",args:{columns:[{header:"County",width:"20"},{header:"Lien status",width:"60"},{header:"Active",width:"20"}],rows:[["Abbeville","Secured","Yes"],["Abbey","Secured","No"]]}},F=[...Array.from({length:20}).keys()].map((e,H)=>[`Row ${H+1e9}`,"4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS","4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS","4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS"]),C={name:"Long Character Sets ",args:{columns:[{header:"Column 1",cellDisableWordWrap:!0,headerWordWrap:!1},{header:"Column 2",cellWordBreak:!0},{header:"Column 3",cellWordBreak:!0},{header:"Column 4",cellWordBreak:!0}],rows:F,isScrollableHorizontal:!1}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Standard table',
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']]
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var R,w,g;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Responsive stacked table',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row A', 'Cell A2', 'Cell A3'], ['Row B', 'Cell B2', 'Cell B3'], ['Row C', 'Cell C2', 'Cell C3'], ['Row D', 'Cell D2', 'Cell D3']],
    isResponsive: true
  }
}`,...(g=(w=o.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var h,A,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Responsive table with horizontal scroll',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8'],
    rows: [['Row A', 'Cell A2', 'Cell A3', 'Cell A4', 'Cell A5', 'Cell A6', 'Cell A7', 'Cell A8'], ['Row B', 'Cell B2', 'Cell B3', 'Cell B4', 'Cell B5', 'Cell B6', 'Cell B7', 'Cell B8'], ['Row C', 'Cell C2', 'Cell C3', 'Cell C4', 'Cell C5', 'Cell C6', 'Cell C7', 'Cell C8']],
    isScrollableHorizontal: true
  }
}`,...(S=(A=r.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var b,B,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Striped table',
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
}`,...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var E,P,W;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(P=s.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var L,$,v;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:"{\n  args: {\n    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],\n    rows: [...Array.from({\n      length: numberRows\n    }).keys()].map(key => [`Row ${key + ONE}, Column 1`, `Row ${key + ONE}, Column 2`, `Row ${key + ONE}, Column 3`, `Row ${key + ONE}, Column 4`, `Row ${key + ONE}, Column 5`]),\n    isPaginated: true,\n    perPage: PAGINATION_PER_PAGE\n  },\n  render: arguments_ => <Table {...arguments_} />\n}",...(v=($=m.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var k,O,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(O=t.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var N,T,f;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(f=(T=C.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const re=["Standard","Responsive","HorizontalScroll","Striped","RightAligned","Pagination","FixedWidth","LongCharacterSets"];export{t as FixedWidth,r as HorizontalScroll,C as LongCharacterSets,m as Pagination,o as Responsive,s as RightAligned,n as Standard,a as Striped,re as __namedExportsOrder,ne as default};

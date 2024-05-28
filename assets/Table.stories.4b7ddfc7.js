import{j as F}from"./index.7eca609e.js";/* empty css                */import{l as z,O as l}from"./TextIntroduction.0ad8d5db.js";import"./Dropdown.2144c0d0.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.37ce01fa.js";import"./Icon.a06444fe.js";import"./Well.e7055d12.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./extends.946277fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.67af5abc.js";import"./index.f108a8f5.js";import"./iframe.9b478b45.js";import"../sb-preview/runtime.js";const Ce={title:"Components (Verified)/Tables",tags:["autodocs"],component:z},r={name:"Standard table",args:{caption:"Table caption describing the data",columns:["Column 1 header","Column 2 header","Column 3 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3"]]}},o={name:"Responsive stacked table",args:{columns:["Column 1","Column 2","Column 3"],rows:[["Row A","Cell A2","Cell A3"],["Row B","Cell B2","Cell B3"],["Row C","Cell C2","Cell C3"],["Row D","Cell D2","Cell D3"]],isResponsive:!0}},n={name:"Responsive stacked table with header (directory table)",args:{columns:["Employee name","Phone number","Email address"],rows:[["Andrew Able","(202) XXX-XXXX","aable@example.com"],["Betsy Bort","(202) XXX-XXXX","bbort@example.com"],["Charles Clark","(202) XXX-XXXX","cclark@example.com"]],isDirectory:!0}},a={name:"Responsive table with horizontal scroll",args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5","Column 6","Column 7","Column 8"],rows:[["Row A","Cell A2","Cell A3","Cell A4","Cell A5","Cell A6","Cell A7","Cell A8"],["Row B","Cell B2","Cell B3","Cell B4","Cell B5","Cell B6","Cell B7","Cell B8"],["Row C","Cell C2","Cell C3","Cell C4","Cell C5","Cell C6","Cell C7","Cell C8"]],isScrollableHorizontal:!0}};var c,i;const s={name:"Striped table",args:{columns:(c=o.args)==null?void 0:c.columns,rows:(i=o.args)==null?void 0:i.rows,isStriped:!0}},m={name:"Right-aligned table",args:{columns:[{header:"Col 1"},"Col 2",{header:"Right-aligned column",alignRight:!0}],rows:[["Row A","Cell A2","$1.00"],["Row B","Cell B2","$200.02"]]}},G=30,U=5,t={args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5"],rows:[...Array.from({length:G}).keys()].map(e=>[`Row ${e+l}, Column 1`,`Row ${e+l}, Column 2`,`Row ${e+l}, Column 3`,`Row ${e+l}, Column 4`,`Row ${e+l}, Column 5`]),isPaginated:!0,perPage:U},render:e=>F.exports.jsx(z,{...e})},C={name:"Fixed-width column tables ",args:{columns:[{header:"County",width:"20"},{header:"Lien status",width:"60"},{header:"Active",width:"20"}],rows:[["Abbeville","Secured","Yes"],["Abbey","Secured","No"]]}},j=[...Array.from({length:20}).keys()].map((e,_)=>[`Row ${_+1e9}`,"4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS","4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS","4234000O91BZ2SUPERCALIFRAGILISTICEXPIALI45CHARS"]),u={name:"Long Character Sets ",args:{columns:[{header:"Column 1",cellDisableWordWrap:!0,headerWordWrap:!1},{header:"Column 2",cellWordBreak:!0},{header:"Column 3",cellWordBreak:!0},{header:"Column 4",cellWordBreak:!0}],rows:j,isScrollableHorizontal:!1}};var d,p,w;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Standard table',
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']]
  }
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var R,g,h;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Responsive stacked table',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row A', 'Cell A2', 'Cell A3'], ['Row B', 'Cell B2', 'Cell B3'], ['Row C', 'Cell C2', 'Cell C3'], ['Row D', 'Cell D2', 'Cell D3']],
    isResponsive: true
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var A,b,X;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Responsive stacked table with header (directory table)',
  args: {
    columns: ['Employee name', 'Phone number', 'Email address'],
    rows: [['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'], ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'], ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']],
    isDirectory: true
  }
}`,...(X=(b=n.parameters)==null?void 0:b.docs)==null?void 0:X.source}}};var S,B,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Responsive table with horizontal scroll',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8'],
    rows: [['Row A', 'Cell A2', 'Cell A3', 'Cell A4', 'Cell A5', 'Cell A6', 'Cell A7', 'Cell A8'], ['Row B', 'Cell B2', 'Cell B3', 'Cell B4', 'Cell B5', 'Cell B6', 'Cell B7', 'Cell B8'], ['Row C', 'Cell C2', 'Cell C3', 'Cell C4', 'Cell C5', 'Cell C6', 'Cell C7', 'Cell C8']],
    isScrollableHorizontal: true
  }
}`,...(y=(B=a.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var I,E,P;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Striped table',
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
}`,...(P=(E=s.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var k,x,v;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var W,L,$;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:"{\n  args: {\n    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],\n    rows: [...Array.from({\n      length: numberRows\n    }).keys()].map(key => [`Row ${key + ONE}, Column 1`, `Row ${key + ONE}, Column 2`, `Row ${key + ONE}, Column 3`, `Row ${key + ONE}, Column 4`, `Row ${key + ONE}, Column 5`]),\n    isPaginated: true,\n    perPage: PAGINATION_PER_PAGE\n  },\n  render: arguments_ => <Table {...arguments_} />\n}",...($=(L=t.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var O,D,N;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(D=C.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,f,H;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=(f=u.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};const ue=["Standard","Responsive","Directory","HorizontalScroll","Striped","RightAligned","Pagination","FixedWidth","LongCharacterSets"];export{n as Directory,C as FixedWidth,a as HorizontalScroll,u as LongCharacterSets,t as Pagination,o as Responsive,m as RightAligned,r as Standard,s as Striped,ue as __namedExportsOrder,Ce as default};

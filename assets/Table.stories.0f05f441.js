/* empty css                */import{d as f,O as l}from"./Well.8b359911.js";import"./Dropdown.a315f808.js";import"./Checkbox.cd13dfbb.js";import"./ExpandableGroup.394828f2.js";import"./Icon.bd2a0ab0.js";import{j as z}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.89f60069.js";import"../sb-preview/runtime.js";const ee={title:"Components (Verified)/Tables",component:f},n={name:"Standard table",args:{caption:"Table caption describing the data",columns:["Column 1 header","Column 2 header","Column 3 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3"]]}},o={name:"Responsive stacked table",args:{columns:["Column 1","Column 2","Column 3"],rows:[["Row A","Cell A2","Cell A3"],["Row B","Cell B2","Cell B3"],["Row C","Cell C2","Cell C3"],["Row D","Cell D2","Cell D3"]],isResponsive:!0}},r={name:"Responsive stacked table with header (directory table)",args:{columns:["Employee name","Phone number","Email address"],rows:[["Andrew Able","(202) XXX-XXXX","aable@example.com"],["Betsy Bort","(202) XXX-XXXX","bbort@example.com"],["Charles Clark","(202) XXX-XXXX","cclark@example.com"]],isDirectory:!0}},a={name:"Responsive table with horizontal scroll",args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5","Column 6","Column 7","Column 8"],rows:[["Row A","Cell A2","Cell A3","Cell A4","Cell A5","Cell A6","Cell A7","Cell A8"],["Row B","Cell B2","Cell B3","Cell B4","Cell B5","Cell B6","Cell B7","Cell B8"],["Row C","Cell C2","Cell C3","Cell C4","Cell C5","Cell C6","Cell C7","Cell C8"]],isScrollableHorizontal:!0}};var u,i;const s={name:"Striped table",args:{columns:(u=o.args)==null?void 0:u.columns,rows:(i=o.args)==null?void 0:i.rows,isStriped:!0}},m={name:"Right-aligned table",args:{columns:[{header:"Col 1"},"Col 2",{header:"Right-aligned column",alignRight:!0}],rows:[["Row A","Cell A2","$1.00"],["Row B","Cell B2","$200.02"]]}},F=30,G=5,t={args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5"],rows:[...Array.from({length:F}).keys()].map(e=>[`Row ${e+l}, Column 1`,`Row ${e+l}, Column 2`,`Row ${e+l}, Column 3`,`Row ${e+l}, Column 4`,`Row ${e+l}, Column 5`]),isPaginated:!0,perPage:G},render:e=>z(f,{...e})},C={name:"Fixed-width column tables ",args:{columns:[{header:"County",width:"20"},{header:"Lien status",width:"60"},{header:"Active",width:"20"}],rows:[["Abbeville","Secured","Yes"],["Abbey","Secured","No"]]}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Standard table',
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']]
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var w,R,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Responsive stacked table',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row A', 'Cell A2', 'Cell A3'], ['Row B', 'Cell B2', 'Cell B3'], ['Row C', 'Cell C2', 'Cell C3'], ['Row D', 'Cell D2', 'Cell D3']],
    isResponsive: true
  }
}`,...(g=(R=o.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var h,A,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Responsive stacked table with header (directory table)',
  args: {
    columns: ['Employee name', 'Phone number', 'Email address'],
    rows: [['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'], ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'], ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']],
    isDirectory: true
  }
}`,...(b=(A=r.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var X,B,S;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Responsive table with horizontal scroll',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8'],
    rows: [['Row A', 'Cell A2', 'Cell A3', 'Cell A4', 'Cell A5', 'Cell A6', 'Cell A7', 'Cell A8'], ['Row B', 'Cell B2', 'Cell B3', 'Cell B4', 'Cell B5', 'Cell B6', 'Cell B7', 'Cell B8'], ['Row C', 'Cell C2', 'Cell C3', 'Cell C4', 'Cell C5', 'Cell C6', 'Cell C7', 'Cell C8']],
    isScrollableHorizontal: true
  }
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var y,v,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Striped table',
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var P,$,x;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(x=($=m.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var k,N,D;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:"{\n  args: {\n    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],\n    rows: [...Array.from({\n      length: numberRows\n    }).keys()].map(key => [`Row ${key + ONE}, Column 1`, `Row ${key + ONE}, Column 2`, `Row ${key + ONE}, Column 3`, `Row ${key + ONE}, Column 4`, `Row ${key + ONE}, Column 5`]),\n    isPaginated: true,\n    perPage: PAGINATION_PER_PAGE\n  },\n  render: arguments_ => <Table {...arguments_} />\n}",...(D=(N=t.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var O,_,T;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(_=C.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const oe=["Standard","Responsive","Directory","HorizontalScroll","Striped","RightAligned","Pagination","FixedWidth"];export{r as Directory,C as FixedWidth,a as HorizontalScroll,t as Pagination,o as Responsive,m as RightAligned,n as Standard,s as Striped,oe as __namedExportsOrder,ee as default};
//# sourceMappingURL=Table.stories.0f05f441.js.map

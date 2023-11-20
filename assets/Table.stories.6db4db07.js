/* empty css                */import{b as _}from"./Well.670cbac0.js";import"./Dropdown.dd9b0b26.js";import"./Checkbox.fe2d0150.js";import"./ExpandableGroup.c7fbca8a.js";import"./Icon.126db49c.js";import"./jsx-runtime.54133100.js";import"./TextIntroduction.ff1fa05f.js";import"./Paragraph.878bd808.js";import{g as f}from"./Pagination.storyUtils.d89d2d28.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.69ca4aa8.js";import"../sb-preview/runtime.js";const oe={title:"Components (Draft)/Tables",component:_},o={name:"Standard table",args:{caption:"Table caption describing the data",columns:["Column 1 header","Column 2 header","Column 3 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3"]]}},e={name:"Responsive stacked table",args:{columns:["Column 1","Column 2","Column 3"],rows:[["Row A","Cell A2","Cell A3"],["Row B","Cell B2","Cell B3"],["Row C","Cell C2","Cell C3"],["Row D","Cell D2","Cell D3"]],isResponsive:!0}},l={name:"Responsive stacked table with header (directory tables)",args:{columns:["Employee name","Phone number","Email address"],rows:[["Andrew Able","(202) XXX-XXXX","aable@example.com"],["Betsy Bort","(202) XXX-XXXX","bbort@example.com"],["Charles Clark","(202) XXX-XXXX","cclark@example.com"]],isDirectory:!0}},r={name:"Responsive table with horizontal scroll",args:{columns:["Column 1","Column 2","Column 3","Column 4","Column 5","Column 6","Column 7","Column 8"],rows:[["Row A","Cell A2","Cell A3","Cell A4","Cell A5","Cell A6","Cell A7","Cell A8"],["Row B","Cell B2","Cell B3","Cell B4","Cell B5","Cell B6","Cell B7","Cell B8"],["Row C","Cell C2","Cell C3","Cell C4","Cell C5","Cell C6","Cell C7","Cell C8"]],isScrollableHorizontal:!0}};var m,C;const n={name:"Striped table",args:{columns:(m=e.args)==null?void 0:m.columns,rows:(C=e.args)==null?void 0:C.rows,isStriped:!0}},a={name:"Right aligned table",args:{columns:[{header:"Col 1"},"Col 2",{header:"Right-aligned column",alignRight:!0}],rows:[["Row A","Cell A2","$1.00"],["Row B","Cell B2","$200.02"]]}},F=30,G=f(F),H=5,s={args:{columns:["A","B"],rows:G,isPaginated:!0,perPage:H}},t={name:"Fixed-width column tables ",args:{columns:[{header:"County",width:"20"},{header:"Lien status",width:"60"},{header:"Active",width:"20"}],rows:[["Abbeville","Secured","Yes"],["Abbey","Secured","No"]]}};var i,c,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Standard table',
  args: {
    caption: 'Table caption describing the data',
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']]
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,w;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Responsive stacked table',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row A', 'Cell A2', 'Cell A3'], ['Row B', 'Cell B2', 'Cell B3'], ['Row C', 'Cell C2', 'Cell C3'], ['Row D', 'Cell D2', 'Cell D3']],
    isResponsive: true
  }
}`,...(w=(p=e.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var R,g,h;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Responsive stacked table with header (directory tables)',
  args: {
    columns: ['Employee name', 'Phone number', 'Email address'],
    rows: [['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'], ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'], ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']],
    isDirectory: true
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var A,b,X;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Responsive table with horizontal scroll',
  args: {
    columns: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8'],
    rows: [['Row A', 'Cell A2', 'Cell A3', 'Cell A4', 'Cell A5', 'Cell A6', 'Cell A7', 'Cell A8'], ['Row B', 'Cell B2', 'Cell B3', 'Cell B4', 'Cell B5', 'Cell B6', 'Cell B7', 'Cell B8'], ['Row C', 'Cell C2', 'Cell C3', 'Cell C4', 'Cell C5', 'Cell C6', 'Cell C7', 'Cell C8']],
    isScrollableHorizontal: true
  }
}`,...(X=(b=r.parameters)==null?void 0:b.docs)==null?void 0:X.source}}};var B,S,v;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Striped table',
  args: {
    columns: Responsive.args?.columns,
    rows: Responsive.args?.rows,
    isStriped: true
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,P,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Right aligned table',
  args: {
    columns: [{
      header: 'Col 1'
    }, 'Col 2', {
      header: 'Right-aligned column',
      alignRight: true
    }],
    rows: [['Row A', 'Cell A2', '$1.00'], ['Row B', 'Cell B2', '$200.02']]
  }
}`,...(x=(P=a.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var D,E,k;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns: ['A', 'B'],
    rows: paginationRows,
    isPaginated: true,
    perPage: PAGINATION_PER_PAGE
  }
}`,...(k=(E=s.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var T,z,N;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(z=t.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const le=["Standard","Responsive","Directory","HorizontalScroll","Striped","RightAligned","Pagination","FixedWidth"];export{l as Directory,t as FixedWidth,r as HorizontalScroll,s as Pagination,e as Responsive,a as RightAligned,o as Standard,n as Striped,le as __namedExportsOrder,oe as default};
//# sourceMappingURL=Table.stories.6db4db07.js.map

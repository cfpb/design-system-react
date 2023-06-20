import{T as S}from"./Table.3ce54c74.js";import{a as C,F as w,j as s}from"./jsx-runtime.3c5b5edf.js";import"./Pagination.968231aa.js";import"./index.cfa9e344.js";import"./Icon.f52ff9b9.js";import"./iframe.d17b25c3.js";import"../sb-preview/runtime.js";import"./Label.0fd4b1c8.js";import"./_commonjsHelpers.712cc82f.js";const x=25,$=3,F=5,o=1,U={component:S,argTypes:{caption:{control:"text"}},parameters:{docs:{description:{component:`
### CFPB DS - TableComplex component
 
Provides more advanced table functionality such as pagination and filtration.

Source: https://cfpb.github.io/design-system/components/tables
`}}}},i=[{accessorKey:"col1",header:"Column 1"},{accessorKey:"col2",header:"Column 2"},{accessorKey:"col3",header:"Column 3"},{accessorKey:"col4",header:"Column 4",enableColumnFilter:!1},{accessorKey:"col5",header:"Column 5",enableColumnFilter:!1}],y=[..."x".repeat($)].map((R,e)=>({col1:`Row ${e+o}`,col2:e,col3:`Row ${e+o}`,col4:`Row ${e+o}`,col5:`Row ${e+o}`})),O={isStriped:!0},a={args:{caption:"TableComplex offers extended functionality such as pagination and data filtration. By default these are disabled but can be enabled and configured via the `options` prop.",options:O,columns:i,data:y}};var l;const t={args:{caption:C(w,{children:["Setting `options.isPaginated = true` will enable the pagination of table content, with navigation controls displayed beneath the table. ",s("br",{}),s("br",{}),"Use `options.pageSize` to adjust the number of items displayed per page."]}),options:{...(l=a.args)==null?void 0:l.options,isPaginated:!0,pageSize:F},columns:i,data:[..."x".repeat(x)].map((R,e)=>({col1:`Row ${e+o}, Col 1`,col2:`Row ${e+o}, Col 2`,col3:`Row ${e+o}, Col 3`,col4:`Row ${e+o}, Col 4`,col5:`Row ${e+o}, Col 5`}))}};var r;const n={args:{caption:C(w,{children:["Setting `options.isFilterable = true` will enable the display of a search box for each column that displays a filtration-compatible data type. ",s("br",{}),s("br",{}),"To disable the filter capability for individual fields, set `enableColumnFilter: false` in the column's configuration, as we see for Column 4 below."]}),columns:i,options:{...(r=a.args)==null?void 0:r.options,isFilterable:!0},data:y}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    caption: 'TableComplex offers extended functionality such as pagination and data filtration. By default these are disabled but can be enabled and configured via the \`options\` prop.',
    options,
    columns,
    data
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    caption: <>
        Setting \`options.isPaginated = true\` will enable the pagination of table
        content, with navigation controls displayed beneath the table. <br />
        <br />
        Use \`options.pageSize\` to adjust the number of items displayed per page.
      </>,
    options: {
      ...Default.args?.options,
      isPaginated: true,
      pageSize: PAGE_SIZE
    },
    columns,
    data: [...'x'.repeat(ROW_COUNT_25)].map((_value, index) => ({
      col1: \`Row \${index + ONE}, Col 1\`,
      col2: \`Row \${index + ONE}, Col 2\`,
      col3: \`Row \${index + ONE}, Col 3\`,
      col4: \`Row \${index + ONE}, Col 4\`,
      col5: \`Row \${index + ONE}, Col 5\`
    }))
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    caption: <>
        Setting \`options.isFilterable = true\` will enable the display of a
        search box for each column that displays a filtration-compatible data
        type. <br />
        <br />
        To disable the filter capability for individual fields, set
        \`enableColumnFilter: false\` in the column's configuration, as we see for
        Column 4 below.
      </>,
    columns,
    options: {
      ...Default.args?.options,
      isFilterable: true
    },
    data
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const z=["Default","Paginated","Filterable"];export{a as Default,n as Filterable,t as Paginated,z as __namedExportsOrder,U as default};
//# sourceMappingURL=TableComplex.stories.6a86f734.js.map

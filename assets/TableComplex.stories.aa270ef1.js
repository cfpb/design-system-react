import{c as S}from"./Well.73b6f548.js";import"./Dropdown.3866af6b.js";import"./ExpandableGroup.fafb0ea5.js";import"./Icon.a805f316.js";import{a as C,F as w,j as i}from"./jsx-runtime.5f84dc07.js";import"./extends.cc011e2f.js";import"./floating-ui.dom.esm.1a703617.js";import"./index.40d0d0b8.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.e57518cd.js";import"../sb-preview/runtime.js";const x=25,$=3,F=5,o=1,B={component:S,argTypes:{caption:{control:"text"}},parameters:{docs:{description:{component:`
### CFPB DS - TableComplex component
 
Provides more advanced table functionality such as pagination and filtration.

Source: https://cfpb.github.io/design-system/components/tables
`}}}},s=[{accessorKey:"col1",header:"Column 1"},{accessorKey:"col2",header:"Column 2"},{accessorKey:"col3",header:"Column 3"},{accessorKey:"col4",header:"Column 4",enableColumnFilter:!1},{accessorKey:"col5",header:"Column 5",enableColumnFilter:!1}],y=[..."x".repeat($)].map((R,e)=>({col1:`Row ${e+o}`,col2:e,col3:`Row ${e+o}`,col4:`Row ${e+o}`,col5:`Row ${e+o}`})),O={isStriped:!0},a={args:{caption:"TableComplex offers extended functionality such as pagination and data filtration. By default these are disabled but can be enabled and configured via the `options` prop.",options:O,columns:s,data:y}};var l;const t={args:{caption:C(w,{children:["Setting `options.isPaginated = true` will enable the pagination of table content, with navigation controls displayed beneath the table. ",i("br",{}),i("br",{}),"Use `options.pageSize` to adjust the number of items displayed per page."]}),options:{...(l=a.args)==null?void 0:l.options,isPaginated:!0,pageSize:F},columns:s,data:[..."x".repeat(x)].map((R,e)=>({col1:`Row ${e+o}, Col 1`,col2:`Row ${e+o}, Col 2`,col3:`Row ${e+o}, Col 3`,col4:`Row ${e+o}, Col 4`,col5:`Row ${e+o}, Col 5`}))}};var r;const n={args:{caption:C(w,{children:["Setting `options.isFilterable = true` will enable the display of a search box for each column that displays a filtration-compatible data type. ",i("br",{}),i("br",{}),"To disable the filter capability for individual fields, set `enableColumnFilter: false` in the column's configuration, as we see for Column 4 below."]}),columns:s,options:{...(r=a.args)==null?void 0:r.options,isFilterable:!0},data:y}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    caption: 'TableComplex offers extended functionality such as pagination and data filtration. By default these are disabled but can be enabled and configured via the \`options\` prop.',
    options,
    columns,
    data
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const W=["Default","Paginated","Filterable"];export{a as Default,n as Filterable,t as Paginated,W as __namedExportsOrder,B as default};
//# sourceMappingURL=TableComplex.stories.aa270ef1.js.map
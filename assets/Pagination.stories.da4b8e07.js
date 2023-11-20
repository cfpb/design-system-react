/* empty css                */import{P as b,u as G}from"./Well.670cbac0.js";import"./Dropdown.dd9b0b26.js";import"./Checkbox.fe2d0150.js";import"./ExpandableGroup.c7fbca8a.js";import"./Icon.126db49c.js";import{a as e,F as f,j as n}from"./jsx-runtime.54133100.js";import"./TextIntroduction.ff1fa05f.js";import"./Paragraph.878bd808.js";import{g as w,s as O}from"./Pagination.storyUtils.d89d2d28.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.69ca4aa8.js";import"../sb-preview/runtime.js";const K={title:"Components (Draft)/Pagination",component:b},S=1,C=20,s=40,a={name:"Default pagination",args:{page:C,pageCount:s}},t={name:"Previous button disabled on first page",args:{page:S,pageCount:s}},o={name:"Next button disabled on last page",args:{page:s,pageCount:s}},r={name:"usePagination",parameters:{docs:{description:{story:"A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state."}}},render:()=>{const i=w(6),v={rows:i,perPage:2,startPage:1},[T,p]=G(v);return e(f,{children:[e("div",{children:[n("h4",{children:"Calling the hook"}),e("pre",{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: ${1},
`,`	perPage: ${2},
`,`	rows: ${JSON.stringify(i)}
`,"});"]})]}),n("br",{}),e("div",{children:[e("h4",{children:["Output: ",n("code",{children:"visibleRows"})]}),n("pre",{children:JSON.stringify(T)})]}),n("br",{}),e("div",{children:[e("h4",{children:["Output: ",n("code",{children:"paginationProperties"})]}),n("pre",{children:O(p)})]}),n("br",{}),n(b,{...p})]})}};var g,c,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Default pagination',
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var P,m,u;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,A,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(h=(A=o.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var E,R,_;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'usePagination',
  parameters: {
    docs: {
      description: {
        story: 'A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state.'
      }
    }
  },
  render: (): JSX.Element => {
    const START_PAGE = 1;
    const PER_PAGE = 2;
    const ROW_COUNT = 6;
    const paginationRows = generateTestRows(ROW_COUNT);
    const usePaginationArguments = {
      rows: paginationRows,
      perPage: PER_PAGE,
      startPage: START_PAGE
    };
    const [visibleRows, paginationProperties] = usePagination(usePaginationArguments);
    return <>
        <div>
          <h4>Calling the hook</h4>
          <pre>
            {\`const [visibleRows, paginationProperties] = usePagination({\\n\`}
            {\`\\tstartPage: \${START_PAGE},\\n\`}
            {\`\\tperPage: \${PER_PAGE},\\n\`}
            {\`\\trows: \${JSON.stringify(paginationRows)}\\n\`}
            {\`});\`}
          </pre>
        </div>
        <br />
        <div>
          <h4>
            Output: <code>visibleRows</code>
          </h4>
          <pre>{JSON.stringify(visibleRows)}</pre>
        </div>
        <br />
        <div>
          <h4>
            Output: <code>paginationProperties</code>
          </h4>
          <pre>{stringify(paginationProperties)}</pre>
        </div>
        <br />
        <Pagination {...paginationProperties} />
      </>;
  }
}`,...(_=(R=r.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Q=["Base","PreviousDisabledAtMinPage","NextDisabledAtMaxPage","UsePagination"];export{a as Base,o as NextDisabledAtMaxPage,t as PreviousDisabledAtMinPage,r as UsePagination,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Pagination.stories.da4b8e07.js.map

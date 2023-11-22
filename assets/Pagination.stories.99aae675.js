/* empty css                */import{P as w,u as S}from"./Well.a655144f.js";import"./Dropdown.bfe8d62f.js";import"./Checkbox.ad7351d6.js";import"./ExpandableGroup.ae4ffb1f.js";import"./Icon.0a9dc2e9.js";import{a as e,F as N,j as n}from"./jsx-runtime.54133100.js";import"./Link.53e442ec.js";import"./Paragraph.878bd808.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.4a0683de.js";import"../sb-preview/runtime.js";const u=1,y=2,C=r=>[...Array.from({length:r}).keys()].map(t=>[`A${t+u}`,`B${t+u}`]),D=r=>{const t="____PLACEHOLDER____",d=[];let a=JSON.stringify(r,(P,o)=>typeof o=="function"?(d.push(o),t):o,y);return a=a.replaceAll(new RegExp(`"${t}"`,"g"),()=>d.shift()),a},K={title:"Components (Verified)/Pagination",component:w},x=1,M=20,c=40,s={name:"Default pagination",args:{page:M,pageCount:c}},i={name:"Previous button disabled on first page",args:{page:x,pageCount:c}},p={name:"Next button disabled on last page",args:{page:c,pageCount:c}},g={name:"usePagination",parameters:{docs:{description:{story:"A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state."}}},render:()=>{const a=C(6),P={rows:a,perPage:2,startPage:1},[o,m]=S(P);return e(N,{children:[e("div",{children:[n("h4",{children:"Calling the hook"}),e("pre",{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: ${1},
`,`	perPage: ${2},
`,`	rows: ${JSON.stringify(a)}
`,"});"]})]}),n("br",{}),e("div",{children:[e("h4",{children:["Output: ",n("code",{children:"visibleRows"})]}),n("pre",{children:JSON.stringify(o)})]}),n("br",{}),e("div",{children:[e("h4",{children:["Output: ",n("code",{children:"paginationProperties"})]}),n("pre",{children:D(m)})]}),n("br",{}),n(w,{...m})]})}};var l,A,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Default pagination',
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(h=(A=s.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var E,_,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(R=(_=i.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var b,T,f;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(f=(T=p.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var v,G,O;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(G=g.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const Q=["Base","PreviousDisabledAtMinPage","NextDisabledAtMaxPage","UsePagination"];export{s as Base,p as NextDisabledAtMaxPage,i as PreviousDisabledAtMinPage,g as UsePagination,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Pagination.stories.99aae675.js.map

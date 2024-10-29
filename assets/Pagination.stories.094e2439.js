import{j as e}from"./index.7eca609e.js";/* empty css                */import{j as G,u as O}from"./TextIntroduction.b789c744.js";import"./Dropdown.66ff9a5c.js";import"./Checkbox.1213d1d0.js";import"./ExpandableGroup.569af9d6.js";import"./Icon.c6add608.js";import"./Well.44588516.js";import"./Paragraph.9304145b.js";import"./TextArea.7a5ccf81.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.24c2c4ec.js";import"./index.49a47dde.js";import"./iframe.58befc0e.js";import"../sb-preview/runtime.js";const m=1,j=2,w=o=>[...Array.from({length:o}).keys()].map(n=>[`A${n+m}`,`B${n+m}`]),S=o=>{const n="____PLACEHOLDER____",c=[];let t=JSON.stringify(o,(d,s)=>typeof s=="function"?(c.push(s),n):s,j);return t=t.replaceAll(new RegExp(`"${n}"`,"g"),()=>c.shift()),t},z={title:"Components (Verified)/Pagination",tags:["autodocs"],component:G},N=1,y=20,g=40,a={name:"Default pagination",args:{page:y,pageCount:g}},r={name:"Previous button disabled on first page",args:{page:N,pageCount:g}},i={name:"Next button disabled on last page",args:{page:g,pageCount:g}},p={name:"usePagination",parameters:{docs:{description:{story:"A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state."}}},render:()=>{const t=w(6),d={rows:t,perPage:2,startPage:1},[s,P]=O(d);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs("div",{children:[e.exports.jsx("h4",{children:"Calling the hook"}),e.exports.jsxs("pre",{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: ${1},
`,`	perPage: ${2},
`,`	rows: ${JSON.stringify(t)}
`,"});"]})]}),e.exports.jsx("br",{}),e.exports.jsxs("div",{children:[e.exports.jsxs("h4",{children:["Output: ",e.exports.jsx("code",{children:"visibleRows"})]}),e.exports.jsx("pre",{children:JSON.stringify(s)})]}),e.exports.jsx("br",{}),e.exports.jsxs("div",{children:[e.exports.jsxs("h4",{children:["Output: ",e.exports.jsx("code",{children:"paginationProperties"})]}),e.exports.jsx("pre",{children:S(P)})]}),e.exports.jsx("br",{}),e.exports.jsx(G,{...P})]})}};var u,l,A;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Default pagination',
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(A=(l=a.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var x,h,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(E=(h=r.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var _,R,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(b=(R=i.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var T,f,v;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const K=["Base","PreviousDisabledAtMinPage","NextDisabledAtMaxPage","UsePagination"];export{a as Base,i as NextDisabledAtMaxPage,r as PreviousDisabledAtMinPage,p as UsePagination,K as __namedExportsOrder,z as default};

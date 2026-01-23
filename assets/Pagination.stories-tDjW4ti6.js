import{j as n}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{s as G,u as O}from"./TextIntroduction-CC22rDrW.js";import"./Dropdown-CSOjUpWP.js";import"./Checkbox-uScmMply.js";import"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-byJ3EejR.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-CO3MXUuu.js";const u=1,j=2,w=s=>[...Array.from({length:s}).keys()].map(e=>[`A${e+u}`,`B${e+u}`]),S=s=>{const e="____PLACEHOLDER____",c=[];let t=JSON.stringify(s,(d,a)=>typeof a=="function"?(c.push(a),e):a,j);return t=t.replaceAll(new RegExp(`"${e}"`,"g"),()=>c.shift()),t},H={title:"Components (Verified)/Pagination",tags:["autodocs"],component:G},N=1,y=20,g=40,o={name:"Default pagination",args:{page:y,pageCount:g}},r={name:"Previous button disabled on first page",args:{page:N,pageCount:g}},i={name:"Next button disabled on last page",args:{page:g,pageCount:g}},p={name:"usePagination",parameters:{docs:{description:{story:"A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state."}}},render:()=>{const t=w(6),d={rows:t,perPage:2,startPage:1},[a,P]=O(d);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("h4",{children:"Calling the hook"}),n.jsxs("pre",{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: 1,
`,`	perPage: 2,
`,`	rows: ${JSON.stringify(t)}
`,"});"]})]}),n.jsx("br",{}),n.jsxs("div",{children:[n.jsxs("h4",{children:["Output: ",n.jsx("code",{children:"visibleRows"})]}),n.jsx("pre",{children:JSON.stringify(a)})]}),n.jsx("br",{}),n.jsxs("div",{children:[n.jsxs("h4",{children:["Output: ",n.jsx("code",{children:"paginationProperties"})]}),n.jsx("pre",{children:S(P)})]}),n.jsx("br",{}),n.jsx(G,{...P})]})}};var m,l,A;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default pagination',
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var h,E,_;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(_=(E=r.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var R,x,b;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,f,v;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const V=["Base","PreviousDisabledAtMinPage","NextDisabledAtMaxPage","UsePagination"];export{o as Base,i as NextDisabledAtMaxPage,r as PreviousDisabledAtMinPage,p as UsePagination,V as __namedExportsOrder,H as default};

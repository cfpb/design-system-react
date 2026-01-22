import{j as n}from"./jsx-runtime-BLchON5X.js";/* empty css                */import{r as u,u as l}from"./TextIntroduction-CY3_wILz.js";import"./Dropdown-BAS5xsjk.js";import"./Checkbox-C8PZvyyp.js";import"./Well-XpBeq6ld.js";import"./Paragraph-CSOJQ8Ca.js";import"./TextArea-Ddz0oDhE.js";import"./index-kA4PVysc.js";import"./index-6tNKdD3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D_VgsJHj.js";import"./index-CkhFrLeO.js";import"./index-F3Nh2vET.js";import"./iframe-ChmeYw71.js";const m=1,A=2,h=s=>[...Array.from({length:s}).keys()].map(e=>[`A${e+m}`,`B${e+m}`]),E=s=>{const e="____PLACEHOLDER____",c=[];let t=JSON.stringify(s,(d,a)=>typeof a=="function"?(c.push(a),e):a,A);return t=t.replaceAll(new RegExp(`"${e}"`,"g"),()=>c.shift()),t},k={title:"Components (Verified)/Pagination",tags:["autodocs"],component:u},_=1,R=20,g=40,o={name:"Default pagination",args:{page:R,pageCount:g}},r={name:"Previous button disabled on first page",args:{page:_,pageCount:g}},i={name:"Next button disabled on last page",args:{page:g,pageCount:g}},p={name:"usePagination",parameters:{docs:{description:{story:"A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state."}}},render:()=>{const t=h(6),d={rows:t,perPage:2,startPage:1},[a,P]=l(d);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("h4",{children:"Calling the hook"}),n.jsxs("pre",{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: 1,
`,`	perPage: 2,
`,`	rows: ${JSON.stringify(t)}
`,"});"]})]}),n.jsx("br",{}),n.jsxs("div",{children:[n.jsxs("h4",{children:["Output: ",n.jsx("code",{children:"visibleRows"})]}),n.jsx("pre",{children:JSON.stringify(a)})]}),n.jsx("br",{}),n.jsxs("div",{children:[n.jsxs("h4",{children:["Output: ",n.jsx("code",{children:"paginationProperties"})]}),n.jsx("pre",{children:E(P)})]}),n.jsx("br",{}),n.jsx(u,{...P})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Default pagination',
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const $=["Base","PreviousDisabledAtMinPage","NextDisabledAtMaxPage","UsePagination"];export{o as Base,i as NextDisabledAtMaxPage,r as PreviousDisabledAtMinPage,p as UsePagination,$ as __namedExportsOrder,k as default};

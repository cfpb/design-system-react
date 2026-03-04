import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./iframe-UTmaDlTk.js";import{P as v,u as E}from"./text-introduction-7r4ik8RQ.js";import"./checkbox-B--Myacb.js";import"./icon-CtKOvZmN.js";import"./well-x1aieNJk.js";import"./paragraph-Cdh6VLzi.js";import"./summary-XIGyk5gs.js";import"./text-area-Bde3y1SG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nHnuynT0.js";const u=1,h=2,_=a=>[...Array.from({length:a}).keys()].map(e=>[`A${e+u}`,`B${e+u}`]),x=a=>{const e="____PLACEHOLDER____",s=[];let t=JSON.stringify(a,(i,o)=>typeof o=="function"?(s.push(o),e):o,h);return t=t.replaceAll(new RegExp(`"${e}"`,"g"),()=>s.shift()),t},{expect:P,fn:m,userEvent:A,within:R}=__STORYBOOK_MODULE_TEST__,D={title:"Components (Verified)/Pagination",tags:["autodocs"],component:v},T=1,b=20,d=40,r={name:"Default pagination",args:{page:b,pageCount:d,onClickPrevious:m(),onClickNext:m()},play:async({canvasElement:a,args:e})=>{const s=R(a),t=s.getByRole("button",{name:/next/i}),i=s.getByRole("button",{name:/previous/i});await A.click(t),await P(e.onClickNext).toHaveBeenCalledTimes(1),await A.click(i),await P(e.onClickPrevious).toHaveBeenCalledTimes(1)}},p={name:"Previous button disabled on first page",args:{page:T,pageCount:d}},c={name:"Next button disabled on last page",args:{page:d,pageCount:d}},g={name:"usePagination",parameters:{docs:{description:{story:"A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state."}}},render:()=>{const t=_(6),i={rows:t,perPage:2,startPage:1},[o,l]=E(i);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("h4",{children:"Calling the hook"}),n.jsxs("pre",{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: 1,
`,`	perPage: 2,
`,`	rows: ${JSON.stringify(t)}
`,"});"]})]}),n.jsx("br",{}),n.jsxs("div",{children:[n.jsxs("h4",{children:["Output: ",n.jsx("code",{children:"visibleRows"})]}),n.jsx("pre",{children:JSON.stringify(o)})]}),n.jsx("br",{}),n.jsxs("div",{children:[n.jsxs("h4",{children:["Output: ",n.jsx("code",{children:"paginationProperties"})]}),n.jsx("pre",{children:x(l)})]}),n.jsx("br",{}),n.jsx(v,{...l})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Default pagination',
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE,
    onClickPrevious: fn(),
    onClickNext: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByRole('button', {
      name: /next/i
    });
    const prevButton = canvas.getByRole('button', {
      name: /previous/i
    });
    await userEvent.click(nextButton);
    await expect(args.onClickNext).toHaveBeenCalledTimes(1);
    await userEvent.click(prevButton);
    await expect(args.onClickPrevious).toHaveBeenCalledTimes(1);
  }
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const M=["Base","PreviousDisabledAtMinPage","NextDisabledAtMaxPage","UsePagination"];export{r as Base,c as NextDisabledAtMaxPage,p as PreviousDisabledAtMinPage,g as UsePagination,M as __namedExportsOrder,D as default};

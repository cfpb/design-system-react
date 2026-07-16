import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{i as n,n as r,r as i,t as a}from"./use-pagination-CLCFf0jx.js";var o,s,c,l,u=e((()=>{o=1,s=2,c=e=>Array.from({length:e},(e,t)=>[`A${t+o}`,`B${t+o}`]),l=e=>{let t=`____PLACEHOLDER____`,n=[],r=JSON.stringify(e,(e,r)=>typeof r==`function`?(n.push(r),t):r,s);return r=r.replaceAll(RegExp(`"${t}"`,`g`),()=>String(n.shift()??``)),r}})),d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),a(),u(),d=t(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components (Verified)/Pagination`,tags:[`autodocs`],component:i},_=1,v=20,y=40,b={name:`Default pagination`,args:{page:v,pageCount:y,onClickPrevious:p(),onClickNext:p()},play:async({canvasElement:e,args:t})=>{let n=h(e),r=n.getByRole(`button`,{name:/next/i}),i=n.getByRole(`button`,{name:/previous/i});await m.click(r),await f(t.onClickNext).toHaveBeenCalledTimes(1),await m.click(i),await f(t.onClickPrevious).toHaveBeenCalledTimes(1)}},x={name:`Previous button disabled on first page`,args:{page:_,pageCount:y}},S={name:`Next button disabled on last page`,args:{page:y,pageCount:y}},C={name:`usePagination`,parameters:{docs:{description:{story:`A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state.`}}},render:()=>{let e=c(6),[t,n]=r({rows:e,perPage:2,startPage:1});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h4`,{children:`Calling the hook`}),(0,d.jsxs)(`pre`,{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: 1,
`,`	perPage: 2,
`,`\trows: ${JSON.stringify(e)}\n`,`});`]})]}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`h4`,{children:[`Output: `,(0,d.jsx)(`code`,{children:`visibleRows`})]}),(0,d.jsx)(`pre`,{children:JSON.stringify(t)})]}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`h4`,{children:[`Output: `,(0,d.jsx)(`code`,{children:`paginationProperties`})]}),(0,d.jsx)(`pre`,{children:l(n)})]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(i,{...n})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    const previousButton = canvas.getByRole('button', {
      name: /previous/i
    });
    await userEvent.click(nextButton);
    await expect(args.onClickNext).toHaveBeenCalledTimes(1);
    await userEvent.click(previousButton);
    await expect(args.onClickPrevious).toHaveBeenCalledTimes(1);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Base`,`PreviousDisabledAtMinPage`,`NextDisabledAtMaxPage`,`UsePagination`]}))();export{b as Base,S as NextDisabledAtMaxPage,x as PreviousDisabledAtMinPage,C as UsePagination,w as __namedExportsOrder,g as default};
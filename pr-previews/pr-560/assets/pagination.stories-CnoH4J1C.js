import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BX9360Lk.js";import{d as n,t as r,u as i}from"./src-BJIqBcNJ.js";var a,o,s,c,l=e((()=>{a=1,o=2,s=e=>[...Array.from({length:e}).keys()].map(e=>[`A${e+a}`,`B${e+a}`]),c=e=>{let t=`____PLACEHOLDER____`,n=[],r=JSON.stringify(e,(e,r)=>typeof r==`function`?(n.push(r),t):r,o);return r=r.replaceAll(RegExp(`"${t}"`,`g`),()=>String(n.shift()??``)),r}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),l(),u=t(),{expect:d,fn:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components (Verified)/Pagination`,tags:[`autodocs`],component:n},g=1,_=20,v=40,y={name:`Default pagination`,args:{page:_,pageCount:v,onClickPrevious:f(),onClickNext:f()},play:async({canvasElement:e,args:t})=>{let n=m(e),r=n.getByRole(`button`,{name:/next/i}),i=n.getByRole(`button`,{name:/previous/i});await p.click(r),await d(t.onClickNext).toHaveBeenCalledTimes(1),await p.click(i),await d(t.onClickPrevious).toHaveBeenCalledTimes(1)}},b={name:`Previous button disabled on first page`,args:{page:g,pageCount:v}},x={name:`Next button disabled on last page`,args:{page:v,pageCount:v}},S={name:`usePagination`,parameters:{docs:{description:{story:`A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state.`}}},render:()=>{let e=s(6),[t,r]=i({rows:e,perPage:2,startPage:1});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h4`,{children:`Calling the hook`}),(0,u.jsxs)(`pre`,{children:[`const [visibleRows, paginationProperties] = usePagination({
`,`	startPage: 1,
`,`	perPage: 2,
`,`\trows: ${JSON.stringify(e)}\n`,`});`]})]}),(0,u.jsx)(`br`,{}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`h4`,{children:[`Output: `,(0,u.jsx)(`code`,{children:`visibleRows`})]}),(0,u.jsx)(`pre`,{children:JSON.stringify(t)})]}),(0,u.jsx)(`br`,{}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`h4`,{children:[`Output: `,(0,u.jsx)(`code`,{children:`paginationProperties`})]}),(0,u.jsx)(`pre`,{children:c(r)})]}),(0,u.jsx)(`br`,{}),(0,u.jsx)(n,{...r})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Base`,`PreviousDisabledAtMinPage`,`NextDisabledAtMaxPage`,`UsePagination`]}))();export{y as Base,x as NextDisabledAtMaxPage,b as PreviousDisabledAtMinPage,S as UsePagination,C as __namedExportsOrder,h as default};
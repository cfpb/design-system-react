import{c as f}from"./index.cfa9e344.js";import{j as t,a as o,r as B,F as m}from"./jsx-runtime.556016cd.js";import"./_commonjsHelpers.712cc82f.js";const y=({caption:e,columns:a,rows:l,isResponsive:n=!1,isDirectory:s=!1,isScrollableHorizontal:i=!1,isStriped:g=!1})=>{const c=[];return(n||s)&&(c.push("o-table"),c.push("o-table__stack-on-small")),s&&c.push("o-table__entry-header-on-small"),g&&c.push("o-table__striped"),i?t("div",{className:"o-table-wrapper__scrolling",children:o("table",{className:f(c),children:[e&&t("caption",{children:e}),w(a),C(l,a)]})}):o("table",{className:f(c),children:[e&&t("caption",{children:e}),w(a),C(l,a)]})},w=e=>{if(!!e)return t("thead",{children:t("tr",{children:e.map((a,l)=>{let n="",s=[""];const i=`header-${l}`;return typeof a=="object"?(n=a.header,a.alignRight&&s.push("o-table_cell__right-align"),a.width&&s.push(`u-w${a.width}pct`)):n=a,t("th",{className:f(s),children:n},i)})})})},C=(e,a)=>{if(!!e)return t("tbody",{children:e.map((l,n)=>t("tr",{children:l.map((s,i)=>{const g=a&&a[i];return B.exports.createElement("td",{...F(g),key:`row-${n}-col-${i}`},s)})},`row-${n}`))})},F=e=>e?typeof e=="string"?{"data-label":e}:{"data-label":e.header,className:e.alignRight?"o-table_cell__right-align":""}:{};try{y.displayName="TableSimple",y.__docgenInfo={description:`This component captures the non-interactive variations of the
CFPB DS Table. For advanced functionality, such as pagination,
use the TableComplex component.

https://cfpb.github.io/design-system/components/tables`,displayName:"TableSimple",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"(string | TableSimpleColumnProps)[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[][]"}},isResponsive:{defaultValue:{value:"false"},description:"",name:"isResponsive",required:!1,type:{name:"boolean"}},isDirectory:{defaultValue:{value:"false"},description:"",name:"isDirectory",required:!1,type:{name:"boolean"}},isScrollableHorizontal:{defaultValue:{value:"false"},description:"",name:"isScrollableHorizontal",required:!1,type:{name:"boolean"}},isStriped:{defaultValue:{value:"false"},description:"",name:"isStriped",required:!1,type:{name:"boolean"}}}}}catch{}const W={component:y,parameters:{docs:{description:{component:`
### CFPB DS - TableSimple component

Source: https://cfpb.github.io/design-system/components/tables
`}}}},r={args:{caption:o(m,{children:["This is the"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#standard-table-1",children:"default style"})," ","at the large screen breakpoint. Tables are not responsive by default;"]}),columns:["Column 1 header","Column 2 header","Column 3 header","Column 4 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3","Row 1, Column 4"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3","Row 2, Column 4"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3","Row 3, Column 4"]]}},u={args:{...r.args,caption:o(m,{children:["Use a"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-stacked-table",children:"Responsive stacked table"})," ","to stack table information on smaller screens and keep the information legible."]}),isResponsive:!0}},p={args:{columns:["Employee name","Phone number","Email address"],rows:[["Andrew Able","(202) XXX-XXXX","aable@example.com"],["Betsy Bort","(202) XXX-XXXX","bbort@example.com"],["Charles Clark","(202) XXX-XXXX","cclark@example.com"]],caption:o(m,{children:["The"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables",children:"directory table"})," ","is a variation of the stacked table. At the small screen breakpoint, the directory table pattern uses first column data (employee name, for instance) as a way to group and label stacks of rows. ."]}),isDirectory:!0}},d={args:{...r.args,caption:o(m,{children:["Use a table with"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-table-with-horizontal-scroll",children:"horizontal scroll"})," ","when the data you\u2019re presenting has more columns than will fit comfortably on the screen, and you want to ensure all information can be accessed in its original tabular structure, even on smaller screens."]}),isScrollableHorizontal:!0}},h={args:{...r.args,caption:o(m,{children:[t("a",{href:"https://cfpb.github.io/design-system/components/tables#striped-table",children:"Striping"})," ","is useful to help the eye track across table rows. Use striping for tables that have more than five columns, or for tables with rows that are difficult to follow across the full width of the table."]}),isStriped:!0}},$=[{header:"Col 1",width:30},"Col 2","Col 3",{header:"Right Aligned",width:40,alignRight:!0}],b={args:{...r.args,columns:$,caption:o(m,{children:[t("a",{href:"https://cfpb.github.io/design-system/components/tables#right-aligned-table",children:"Right-align columns"})," ","of numbers when they\u2019re quantities (counts, dollar amounts, percentages) or ordinals (ranks, item numbers). Use the .o-table_cell__right-align class on a td. ",t("br",{}),t("br",{}),"Left-align columns of numbers when they\u2019re nominal (ZIP codes, room numbers) or non-numeric values (names, phrases)."]})}};var X,R,S;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    caption: <>
        This is the{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#standard-table-1'>
          default style
        </a>{' '}
        at the large screen breakpoint. Tables are not responsive by default;
      </>,
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header', 'Column 4 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3', 'Row 1, Column 4'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3', 'Row 2, Column 4'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3', 'Row 3, Column 4']]
  }
}`,...(S=(R=r.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var v,_,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    caption: <>
        Use a{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table'>
          Responsive stacked table
        </a>{' '}
        to stack table information on smaller screens and keep the information
        legible.
      </>,
    isResponsive: true
  }
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var T,x,z;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    columns: ['Employee name', 'Phone number', 'Email address'],
    rows: [['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'], ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'], ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']],
    caption: <>
        The{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables'>
          directory table
        </a>{' '}
        is a variation of the stacked table. At the small screen breakpoint, the
        directory table pattern uses first column data (employee name, for
        instance) as a way to group and label stacks of rows. .
      </>,
    isDirectory: true
  }
}`,...(z=(x=p.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var E,q,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    caption: <>
        Use a table with{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-table-with-horizontal-scroll'>
          horizontal scroll
        </a>{' '}
        when the data you\u2019re presenting has more columns than will fit comfortably
        on the screen, and you want to ensure all information can be accessed in
        its original tabular structure, even on smaller screens.
      </>,
    isScrollableHorizontal: true
  }
}`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var P,U,D;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    caption: <>
        <a href='https://cfpb.github.io/design-system/components/tables#striped-table'>
          Striping
        </a>{' '}
        is useful to help the eye track across table rows. Use striping for tables
        that have more than five columns, or for tables with rows that are
        difficult to follow across the full width of the table.
      </>,
    isStriped: true
  }
}`,...(D=(U=h.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var H,N,V;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    columns: columnsWithConfiguration,
    caption: <>
        <a href='https://cfpb.github.io/design-system/components/tables#right-aligned-table'>
          Right-align columns
        </a>{' '}
        of numbers when they\u2019re quantities (counts, dollar amounts, percentages)
        or ordinals (ranks, item numbers). Use the .o-table_cell__right-align
        class on a td. <br />
        <br />
        Left-align columns of numbers when they\u2019re nominal (ZIP codes, room
        numbers) or non-numeric values (names, phrases).
      </>
  }
}`,...(V=(N=b.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const Z=["Standard","Responsive","Directory","HorizontalScroll","Striped","RightAligned"];export{p as Directory,d as HorizontalScroll,u as Responsive,b as RightAligned,r as Standard,h as Striped,Z as __namedExportsOrder,W as default};
//# sourceMappingURL=TableSimple.stories.628e3298.js.map

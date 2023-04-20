var y=Object.defineProperty;var c=(e,t)=>y(e,"name",{value:t,configurable:!0});import{c as b}from"./index.cfa9e344.js";import{j as n,b as s,r as w,F as d}from"./jsx-runtime.3a1e2061.js";import"./iframe.375110c5.js";const h=c(({caption:e,columns:t,rows:l,isResponsive:o=!1,isDirectory:a=!1,isScrollableHorizontal:r=!1,isStriped:u=!1})=>{const i=[];return(o||a)&&(i.push("o-table"),i.push("o-table__stack-on-small")),a&&i.push("o-table__entry-header-on-small"),u&&i.push("o-table__striped"),r?n("div",{className:"o-table-wrapper__scrolling",children:s("table",{className:b(i),children:[e&&n("caption",{children:e}),g(t),f(l,t)]})}):s("table",{className:b(i),children:[e&&n("caption",{children:e}),g(t),f(l,t)]})},"TableSimple"),g=c(e=>{if(!!e)return n("thead",{children:n("tr",{children:e.map((t,l)=>{let o="",a=[""];const r=`header-${l}`;return typeof t=="object"?(o=t.header,t.alignRight&&a.push("o-table_cell__right-align"),t.width&&a.push(`u-w${t.width}pct`)):o=t,n("th",{className:b(a),children:o},r)})})})},"buildColumnHeaders"),f=c((e,t)=>{if(!!e)return n("tbody",{children:e.map((l,o)=>n("tr",{children:l.map((a,r)=>{const u=t&&t[r];return w.exports.createElement("td",{...C(u),key:`row-${o}-col-${r}`},a)})},`row-${o}`))})},"buildRows"),C=c(e=>e?typeof e=="string"?{"data-label":e}:{"data-label":e.header,className:e.alignRight?"o-table_cell__right-align":""}:{},"getCellProps");try{h.displayName="TableSimple",h.__docgenInfo={description:`This component captures the non-interactive variations of the
CFPB DS Table. For advanced functionality, such as pagination,
use the TableComplex component.

https://cfpb.github.io/design-system/components/tables`,displayName:"TableSimple",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"(string | TableSimpleColumnProps)[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[][]"}},isResponsive:{defaultValue:{value:"false"},description:"",name:"isResponsive",required:!1,type:{name:"boolean"}},isDirectory:{defaultValue:{value:"false"},description:"",name:"isDirectory",required:!1,type:{name:"boolean"}},isScrollableHorizontal:{defaultValue:{value:"false"},description:"",name:"isScrollableHorizontal",required:!1,type:{name:"boolean"}},isStriped:{defaultValue:{value:"false"},description:"",name:"isStriped",required:!1,type:{name:"boolean"}}}}}catch{}const z={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableSimple } from './TableSimple';

export default {
  title: 'Components/TableSimple',
  component: TableSimple
} as ComponentMeta<typeof TableSimple>;

const Template: ComponentStory<typeof TableSimple> = arguments_ => (
  <TableSimple {...arguments_} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard = Template.bind({});
Standard.args = {
  caption: (
    <>
      This is the{' '}
      <a href='https://cfpb.github.io/design-system/components/tables#standard-table-1'>
        default style
      </a>{' '}
      at the large screen breakpoint. Tables are not responsive by default;
    </>
  ),
  columns: [
    'Column 1 header',
    'Column 2 header',
    'Column 3 header',
    'Column 4 header'
  ],
  rows: [
    [
      'Row 1, Column 1',
      'Row 1, Column 2',
      'Row 1, Column 3',
      'Row 1, Column 4'
    ],
    [
      'Row 2, Column 1',
      'Row 2, Column 2',
      'Row 2, Column 3',
      'Row 2, Column 4'
    ],
    ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3', 'Row 3, Column 4']
  ]
};

export const Responsive = Template.bind({});
Responsive.args = {
  ...Standard.args,
  caption: (
    <>
      Use a{' '}
      <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table'>
        Responsive stacked table
      </a>{' '}
      to stack table information on smaller screens and keep the information
      legible.
    </>
  ),
  isResponsive: true
};

export const Directory = Template.bind({});
Directory.args = {
  columns: ['Employee name', 'Phone number', 'Email address'],
  rows: [
    ['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'],
    ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'],
    ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']
  ],
  caption: (
    <>
      The{' '}
      <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables'>
        directory table
      </a>{' '}
      is a variation of the stacked table. At the small screen breakpoint, the
      directory table pattern uses first column data (employee name, for
      instance) as a way to group and label stacks of rows. .
    </>
  ),
  isDirectory: true
};

export const HorizontalScroll = Template.bind({});
HorizontalScroll.args = {
  ...Standard.args,
  caption: (
    <>
      Use a table with{' '}
      <a href='https://cfpb.github.io/design-system/components/tables#responsive-table-with-horizontal-scroll'>
        horizontal scroll
      </a>{' '}
      when the data you\u2019re presenting has more columns than will fit comfortably
      on the screen, and you want to ensure all information can be accessed in
      its original tabular structure, even on smaller screens.
    </>
  ),
  isScrollableHorizontal: true
};

export const Striped = Template.bind({});
Striped.args = {
  ...Standard.args,
  caption: (
    <>
      <a href='https://cfpb.github.io/design-system/components/tables#striped-table'>
        Striping
      </a>{' '}
      is useful to help the eye track across table rows. Use striping for tables
      that have more than five columns, or for tables with rows that are
      difficult to follow across the full width of the table.
    </>
  ),
  isStriped: true
};

const columnsWithConfiguration = [
  { header: 'Col 1', width: 30 },
  'Col 2',
  'Col 3',
  { header: 'Right Aligned', width: 40, alignRight: true }
];

export const RightAligned = Template.bind({});
RightAligned.args = {
  ...Standard.args,
  columns: columnsWithConfiguration,
  caption: (
    <>
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
  )
};
`,locationsMap:{standard:{startLoc:{col:53,line:9},endLoc:{col:1,line:11},startBody:{col:53,line:9},endBody:{col:1,line:11}},responsive:{startLoc:{col:53,line:9},endLoc:{col:1,line:11},startBody:{col:53,line:9},endBody:{col:1,line:11}},directory:{startLoc:{col:53,line:9},endLoc:{col:1,line:11},startBody:{col:53,line:9},endBody:{col:1,line:11}},"horizontal-scroll":{startLoc:{col:53,line:9},endLoc:{col:1,line:11},startBody:{col:53,line:9},endBody:{col:1,line:11}},striped:{startLoc:{col:53,line:9},endLoc:{col:1,line:11},startBody:{col:53,line:9},endBody:{col:1,line:11}},"right-aligned":{startLoc:{col:53,line:9},endLoc:{col:1,line:11},startBody:{col:53,line:9},endBody:{col:1,line:11}}}}},title:"Components/TableSimple",component:h},m=c(e=>n(h,{...e}),"Template"),p=m.bind({});p.args={caption:s(d,{children:["This is the"," ",n("a",{href:"https://cfpb.github.io/design-system/components/tables#standard-table-1",children:"default style"})," ","at the large screen breakpoint. Tables are not responsive by default;"]}),columns:["Column 1 header","Column 2 header","Column 3 header","Column 4 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3","Row 1, Column 4"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3","Row 2, Column 4"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3","Row 3, Column 4"]]};const R=m.bind({});R.args={...p.args,caption:s(d,{children:["Use a"," ",n("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-stacked-table",children:"Responsive stacked table"})," ","to stack table information on smaller screens and keep the information legible."]}),isResponsive:!0};const S=m.bind({});S.args={columns:["Employee name","Phone number","Email address"],rows:[["Andrew Able","(202) XXX-XXXX","aable@example.com"],["Betsy Bort","(202) XXX-XXXX","bbort@example.com"],["Charles Clark","(202) XXX-XXXX","cclark@example.com"]],caption:s(d,{children:["The"," ",n("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables",children:"directory table"})," ","is a variation of the stacked table. At the small screen breakpoint, the directory table pattern uses first column data (employee name, for instance) as a way to group and label stacks of rows. ."]}),isDirectory:!0};const X=m.bind({});X.args={...p.args,caption:s(d,{children:["Use a table with"," ",n("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-table-with-horizontal-scroll",children:"horizontal scroll"})," ","when the data you\u2019re presenting has more columns than will fit comfortably on the screen, and you want to ensure all information can be accessed in its original tabular structure, even on smaller screens."]}),isScrollableHorizontal:!0};const v=m.bind({});v.args={...p.args,caption:s(d,{children:[n("a",{href:"https://cfpb.github.io/design-system/components/tables#striped-table",children:"Striping"})," ","is useful to help the eye track across table rows. Use striping for tables that have more than five columns, or for tables with rows that are difficult to follow across the full width of the table."]}),isStriped:!0};const _=[{header:"Col 1",width:30},"Col 2","Col 3",{header:"Right Aligned",width:40,alignRight:!0}],k=m.bind({});k.args={...p.args,columns:_,caption:s(d,{children:[n("a",{href:"https://cfpb.github.io/design-system/components/tables#right-aligned-table",children:"Right-align columns"})," ","of numbers when they\u2019re quantities (counts, dollar amounts, percentages) or ordinals (ranks, item numbers). Use the .o-table_cell__right-align class on a td. ",n("br",{}),n("br",{}),"Left-align columns of numbers when they\u2019re nominal (ZIP codes, room numbers) or non-numeric values (names, phrases)."]})};const A=["Standard","Responsive","Directory","HorizontalScroll","Striped","RightAligned"];export{S as Directory,X as HorizontalScroll,R as Responsive,k as RightAligned,p as Standard,v as Striped,A as __namedExportsOrder,z as default};
//# sourceMappingURL=TableSimple.stories.89a9f4fe.js.map

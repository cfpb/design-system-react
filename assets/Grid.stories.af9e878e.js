import{c as s}from"./index.cfa9e344.js";import{j as n,a as d,F as t}from"./jsx-runtime.3c5b5edf.js";import"./_commonjsHelpers.712cc82f.js";var R=(i=>(i[i.Full=12]="Full",i[i.ThreeQuarters=9]="ThreeQuarters",i[i.TwoThirds=8]="TwoThirds",i[i.Half=6]="Half",i[i.Third=4]="Third",i[i.Quarter=3]="Quarter",i[i.Single=1]="Single",i))(R||{});function G({width:i=1,children:e,className:l="",...o}){const c=["col",`col-${i}`,l];return n("div",{className:s(c),role:"gridcell",...o,children:e})}try{G.displayName="GridColumn",G.__docgenInfo={description:"",displayName:"GridColumn",props:{width:{defaultValue:{value:"GridColWidth.Single"},description:"",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},others:{defaultValue:null,description:"",name:"others",required:!1,type:{name:"unknown[]"}}}}}catch{}function w({children:i,className:e,...l}){return n("div",{className:s(["row",e]),role:"row",...l,children:i})}try{w.displayName="GridRow",w.__docgenInfo={description:"",displayName:"GridRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function C({children:i,width:e=R.Full,demo:l,center:o,className:c,...q}){const a=[`grid cols-${e}`,c];return l&&a.push("demo"),o&&a.push("centered"),n("div",{className:s(a),role:"grid",...q,children:i})}try{C.displayName="GridWrapper",C.__docgenInfo={description:"",displayName:"GridWrapper",props:{width:{defaultValue:{value:"GridColWidth.Full"},description:"",name:"width",required:!1,type:{name:"number"}},demo:{defaultValue:null,description:"",name:"demo",required:!1,type:{name:"boolean"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const r={Column:G,Row:w,Width:R,Wrapper:C};try{Grid.displayName="Grid",Grid.__docgenInfo={description:`CFPB Grid
https://cfpb.github.io/design-system/foundation/grid`,displayName:"Grid",props:{}}}catch{}const I={component:r.Wrapper,parameters:{docs:{description:{component:`
### CFPB DS Grid component

Source: https://cfpb.github.io/design-system/foundation/grid
`}}}},h={args:{demo:!0,className:"",children:d(t,{children:[d(r.Row,{children:[n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})}),n(r.Column,{width:1,children:n("p",{children:"1"})})]}),d(r.Row,{children:[n(r.Column,{width:2,children:n("p",{children:"2"})}),n(r.Column,{width:2,children:n("p",{children:"2"})}),n(r.Column,{width:2,children:n("p",{children:"2"})}),n(r.Column,{width:2,children:n("p",{children:"2"})}),n(r.Column,{width:2,children:n("p",{children:"2"})}),n(r.Column,{width:2,children:n("p",{children:"2"})})]}),d(r.Row,{children:[n(r.Column,{width:2,children:n("p",{children:"2"})}),n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:2,children:n("p",{children:"2"})}),n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:2,children:n("p",{children:"2"})})]}),d(r.Row,{children:[n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:3,children:n("p",{children:"3"})})]}),d(r.Row,{children:[n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})})]}),d(r.Row,{children:[n(r.Column,{width:6,children:n("p",{children:"6"})}),n(r.Column,{width:6,children:n("p",{children:"6"})})]}),n(r.Row,{children:n(r.Column,{width:12,children:n("p",{children:"12"})})})]})}},p={args:{demo:!0,className:"",children:d(t,{children:[d(r.Row,{children:[d(r.Column,{width:6,children:[n("p",{children:"6"}),d(r.Wrapper,{children:[n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})})]})]}),d(r.Column,{width:6,children:[n("p",{children:"6"}),d(r.Wrapper,{children:[n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})})]})]})]}),d(r.Row,{children:[d(r.Column,{width:3,children:[n("p",{children:"3"}),d(r.Wrapper,{children:[n(r.Column,{width:6,children:n("p",{children:"6"})}),n(r.Column,{width:6,children:n("p",{children:"6"})})]})]}),d(r.Column,{width:6,children:[n("p",{children:"6"}),d(r.Wrapper,{children:[n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})})]})]}),d(r.Column,{width:3,children:[n("p",{children:"3"}),d(r.Wrapper,{children:[n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:3,children:n("p",{children:"3"})}),n(r.Column,{width:3,children:n("p",{children:"3"})})]})]})]})]})}},u={args:{demo:!0,className:"",center:!0,children:d(t,{children:[n(r.Row,{children:n(r.Column,{width:12,children:n("p",{children:"12"})})}),n(r.Row,{children:n(r.Column,{width:8,children:n("p",{children:"8"})})}),d(r.Row,{children:[n(r.Column,{width:4,children:n("p",{children:"4"})}),n(r.Column,{width:4,children:n("p",{children:"4"})})]}),n(r.Row,{children:n(r.Column,{width:4,children:n("p",{children:"4"})})})]})}},m={parameters:{docs:{description:{story:"GridColWidth is an enum used to help simplify sizing Grid.Columns."}}},args:{demo:!0,className:"",children:d(t,{children:[d(r.Row,{children:[n(r.Column,{width:r.Width.Quarter,children:n("p",{children:"Quarter"})}),n(r.Column,{width:r.Width.ThreeQuarters,children:n("p",{children:"ThreeQuarters"})})]}),d(r.Row,{children:[n(r.Column,{width:r.Width.Third,children:n("p",{children:"Third"})}),n(r.Column,{width:r.Width.TwoThirds,children:n("p",{children:"TwoThirds"})})]}),d(r.Row,{children:[n(r.Column,{width:r.Width.Half,children:n("p",{children:"Half"})}),n(r.Column,{width:r.Width.Half,children:n("p",{children:"Half"})})]}),n(r.Row,{children:n(r.Column,{width:r.Width.Full,children:n("p",{children:"Full"})})})]})}};var f,g,_;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    demo: true,
    className: '',
    children: <>
        <Grid.Row>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <p>6</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>6</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>12</p>
          </Grid.Column>
        </Grid.Row>
      </>
  }
}`,...(_=(g=h.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var y,W,N;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    demo: true,
    className: '',
    children: <>
        <Grid.Row>
          <Grid.Column width={6}>
            <p>6</p>
            <Grid.Wrapper>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>6</p>
            <Grid.Wrapper>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <p>3</p>
            <Grid.Wrapper>
              <Grid.Column width={6}>
                <p>6</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <p>6</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>6</p>
            <Grid.Wrapper>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
            <Grid.Wrapper>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
        </Grid.Row>
      </>
  }
}`,...(N=(W=p.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var T,F,Q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    demo: true,
    className: '',
    center: true,
    children: <>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>12</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <p>8</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
        </Grid.Row>
      </>
  }
}`,...(Q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var S,H,b;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'GridColWidth is an enum used to help simplify sizing Grid.Columns.'
      }
    }
  },
  args: {
    demo: true,
    className: '',
    children: <>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Quarter}>
            <p>Quarter</p>
          </Grid.Column>
          <Grid.Column width={Grid.Width.ThreeQuarters}>
            <p>ThreeQuarters</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Third}>
            <p>Third</p>
          </Grid.Column>
          <Grid.Column width={Grid.Width.TwoThirds}>
            <p>TwoThirds</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Half}>
            <p>Half</p>
          </Grid.Column>
          <Grid.Column width={Grid.Width.Half}>
            <p>Half</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Full}>
            <p>Full</p>
          </Grid.Column>
        </Grid.Row>
      </>
  }
}`,...(b=(H=m.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};const $=["StandardGrid","NestedGrid","CenteredGrid","GridColWidthEnum"];export{u as CenteredGrid,m as GridColWidthEnum,p as NestedGrid,h as StandardGrid,$ as __namedExportsOrder,I as default};
//# sourceMappingURL=Grid.stories.af9e878e.js.map

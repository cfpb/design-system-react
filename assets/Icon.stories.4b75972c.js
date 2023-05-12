import{I as t}from"./Icon.629f615a.js";import{j as e,F as h,a as n}from"./jsx-runtime.556016cd.js";import"./index.cfa9e344.js";import"./iframe.065efd45.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.712cc82f.js";const _={component:t,parameters:{docs:{description:{component:`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`}}}},m=a=>a.map((d,l)=>e(h,{children:n("tr",{children:[e("td",{children:e(t,{name:d},l)}),e("td",{children:e(t,{name:d,withBg:!0},l)}),e("td",{children:d})]})})),r=()=>e(h,{children:e(t,{name:"approved"})}),o=()=>e(h,{children:e(t,{name:"approved",withBg:!0})}),c=()=>n("table",{children:[n("thead",{children:[e("th",{children:"icon"}),e("th",{children:"withBg"}),e("th",{children:"canonical name"})]}),e("tbody",{children:m(["approved","error","warning","update","updating"])})]}),s=()=>n("table",{children:[n("thead",{children:[e("th",{children:"icon"}),e("th",{children:"withBg"}),e("th",{children:"canonical name"})]}),e("tbody",{children:m(["information","external-link"])})]}),i=()=>n("table",{children:[n("thead",{children:[e("th",{children:"icon"}),e("th",{children:"withBg"}),e("th",{children:"canonical name"})]}),e("tbody",{children:m(["up","right","down","left"])})]});var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <>
    <Icon name='approved' />
  </>`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,w,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`(): React.ReactElement => <>
    <Icon name='approved' withBg />
  </>`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var R,B,f;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => {
  const names = ['approved', 'error', 'warning', 'update', 'updating'];
  return <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>;
}`,...(f=(B=c.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,S,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => {
  const names = ['information', 'external-link'];
  return <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>;
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,E,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`(): React.ReactElement => {
  const names = ['up', 'right', 'down', 'left'];
  return <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>;
}`,...(x=(E=i.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const C=["IconDefault","IconWithBackground","StatusIcons","WebApplicationIcons","NavigationIcons"];export{r as IconDefault,o as IconWithBackground,i as NavigationIcons,c as StatusIcons,s as WebApplicationIcons,C as __namedExportsOrder,_ as default};
//# sourceMappingURL=Icon.stories.4b75972c.js.map

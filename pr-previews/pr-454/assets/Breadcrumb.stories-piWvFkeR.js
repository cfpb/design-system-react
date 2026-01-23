import{j as c}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as n}from"./TextIntroduction-D2Fr4ir7.js";import"./Dropdown-B9TzQohg.js";import"./Checkbox-uScmMply.js";import"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-ZDMBHX8g.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-B7IGOZZW.js";const R={title:"Components (Draft)/Breadcrumb",tags:["autodocs"],component:n,argTypes:{}},e={render:r=>c.jsx(n,{...r}),args:{crumbs:[{href:"/data-research/prepaid-accounts/",label:"Prepaid Account Agreements"}]}};e.storyName="Single crumb";const a={render:r=>c.jsx(n,{...r}),args:{crumbs:[{href:"/data-research/",label:"Data & research"},{href:"/data-research/prepaid-accounts/",label:"Prepaid Account Agreements"}]}};a.storyName="Multiple crumbs";const s={render:r=>c.jsx(n,{...r}),args:{crumbs:[{href:"/data-research/",label:"Data & research"},{href:"/data-research/prepaid-accounts/",label:"Prepaid Account Agreements",isCurrent:!0}]}};s.storyName="Current page (aria-current)";const t={render:r=>c.jsx(n,{...r}),args:{separator:" > ",crumbs:[{href:"/a",label:"Section"},{href:"/a/b",label:"Subsection"},{href:"/a/b/c",label:"Current",isCurrent:!0}]}};t.storyName="Custom separator";var o,p,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [{
      href: '/data-research/prepaid-accounts/',
      label: 'Prepaid Account Agreements'
    }]
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,i,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [{
      href: '/data-research/',
      label: 'Data & research'
    }, {
      href: '/data-research/prepaid-accounts/',
      label: 'Prepaid Account Agreements'
    }]
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,b,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [{
      href: '/data-research/',
      label: 'Data & research'
    }, {
      href: '/data-research/prepaid-accounts/',
      label: 'Prepaid Account Agreements',
      isCurrent: true
    }]
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,f,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    separator: ' > ',
    crumbs: [{
      href: '/a',
      label: 'Section'
    }, {
      href: '/a/b',
      label: 'Subsection'
    }, {
      href: '/a/b/c',
      label: 'Current',
      isCurrent: true
    }]
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const T=["SingleCrumb","MultipleCrumbs","CurrentPage","CustomSeparator"];export{s as CurrentPage,t as CustomSeparator,a as MultipleCrumbs,e as SingleCrumb,T as __namedExportsOrder,R as default};

import{j as r}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as o}from"./TextIntroduction-j1eohnz2.js";import"./Dropdown-BwaCGRVN.js";import"./Checkbox-PbiD6xC7.js";import{L as a}from"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DgH5CRnd.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-Ct1y-2Q6.js";const O={title:"Components (Draft)/Breadcrumb",tags:["autodocs"],component:o,argTypes:{}},s={render:e=>r.jsx(o,{...e}),args:{crumbs:[{href:"/data-research/prepaid-accounts/",label:r.jsx(a,{href:"/data-research/prepaid-accounts/",children:"Prepaid Account Agreements"})}]}};s.storyName="Single crumb";const n={render:e=>r.jsx(o,{...e}),args:{crumbs:[{href:"/data-research/",label:r.jsx(a,{href:"/data-research/",children:"Data & research"})},{href:"/data-research/prepaid-accounts/",label:r.jsx(a,{href:"/data-research/prepaid-accounts/",children:"Prepaid Account Agreements"})}]}};n.storyName="Multiple crumbs";const t={render:e=>r.jsx(o,{...e}),args:{crumbs:[{href:"/data-research/",label:r.jsx(a,{href:"/data-research/",children:"Data & research"})},{href:"/data-research/prepaid-accounts/",label:"Prepaid Account Agreements",isCurrent:!0}]}};t.storyName="Current page (aria-current)";const c={render:e=>r.jsx(o,{...e}),args:{separator:" > ",crumbs:[{href:"/a",label:r.jsx(a,{href:"/a",children:"Section"})},{href:"/a/b",label:r.jsx(a,{href:"/a/b",children:"Subsection"})},{href:"/a/b/c",label:"Current",isCurrent:!0}]}};c.storyName="Custom separator";var p,i,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [{
      href: '/data-research/prepaid-accounts/',
      label: <Link href='/data-research/prepaid-accounts/'>
            Prepaid Account Agreements
          </Link>
    }]
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [{
      href: '/data-research/',
      label: <Link href='/data-research/'>
            Data & research
          </Link>
    }, {
      href: '/data-research/prepaid-accounts/',
      label: <Link href='/data-research/prepaid-accounts/'>
            Prepaid Account Agreements
          </Link>
    }]
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var l,b,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [{
      href: '/data-research/',
      label: <Link href='/data-research/'>
            Data & research
          </Link>
    }, {
      href: '/data-research/prepaid-accounts/',
      label: 'Prepaid Account Agreements',
      isCurrent: true
    }]
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,C,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    separator: ' > ',
    crumbs: [{
      href: '/a',
      label: <Link href='/a'>Section</Link>
    }, {
      href: '/a/b',
      label: <Link href='/a/b'>Subsection</Link>
    }, {
      href: '/a/b/c',
      label: 'Current',
      isCurrent: true
    }]
  }
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const R=["SingleCrumb","MultipleCrumbs","CurrentPage","CustomSeparator"];export{t as CurrentPage,c as CustomSeparator,n as MultipleCrumbs,s as SingleCrumb,R as __namedExportsOrder,O as default};

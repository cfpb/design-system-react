import{j as c}from"./jsx-runtime-Wp9Qcrv3.js";/* empty css                */import{c as t}from"./TextIntroduction-C487NXC3.js";import"./Dropdown-Beph6eBG.js";import"./Checkbox-uScmMply.js";import"./Well-11qJzUyd.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-CKaCfP7D.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-XmDEAOo_.js";import"./iframe-BtAeJAU8.js";const N={title:"Components (Draft)/Breadcrumb",tags:["autodocs"],component:t,argTypes:{}},e={render:r=>c.jsx(t,{...r}),args:{crumbs:[{href:"/data-research/prepaid-accounts/",label:"Prepaid Account Agreements"}]}};e.storyName="Single crumb";const a={render:r=>c.jsx(t,{...r}),args:{crumbs:[{href:"/data-research/",label:"Data & research"},{href:"/data-research/prepaid-accounts/",label:"Prepaid Account Agreements"}]}};a.storyName="Multiple crumbs";const s={render:r=>c.jsx(t,{...r}),args:{crumbs:[{href:"/data-research/",label:"Data & research"},{href:"/data-research/prepaid-accounts/",label:"Prepaid Account Agreements",isCurrent:!0}]}};s.storyName="Current page (aria-current)";var n,o,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [{
      href: '/data-research/prepaid-accounts/',
      label: 'Prepaid Account Agreements'
    }]
  }
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,u,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,l,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const E=["SingleCrumb","MultipleCrumbs","CurrentPage"];export{s as CurrentPage,a as MultipleCrumbs,e as SingleCrumb,E as __namedExportsOrder,N as default};

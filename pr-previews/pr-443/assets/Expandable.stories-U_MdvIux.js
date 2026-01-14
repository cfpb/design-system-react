import{j as c}from"./jsx-runtime-Wp9Qcrv3.js";import{w as O,e,u as l}from"./index-B1ndDI2N.js";/* empty css                */import"./TextIntroduction-DOIJh-7J.js";import"./Dropdown-BpjabCMe.js";import"./Checkbox-uScmMply.js";import{E as C}from"./ExpandableGroup-CaYQL2AJ.js";import"./Icon-6PULpW2t.js";import"./Well-DdbSBrlA.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import{s as d}from"./sleep-Ceq2-en_.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-DVOrI9Mn.js";const J={title:"Components (Draft)/Expandables",tags:["autodocs"],component:C,parameters:{docs:{description:{component:`
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},k=c.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",c.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),a={args:{header:"Expandable label",name:"Default",children:k}},t={args:{...a.args,header:"Expandable label",name:"Open on load",openOnLoad:!0}},o={play:async({canvasElement:B})=>{var p;const r=O(B);await d(500);const D=r.getByText(((p=t.args)==null?void 0:p.header)??"");e(D).toBeInTheDocument();const n=r.getByRole("button");e(n.getAttribute("aria-expanded")).toMatch("false");const i=r.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),l.click(n),await d(500),e(n.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),l.click(n),await d(500),e(n.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...a.args,header:"Expandable label"}},s={args:{...a.args,name:"Padded expandable",header:"Expandable label",icon:"bank",isPadded:!0}};var m,u,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    header: 'Expandable label',
    name: 'Default',
    children: Content
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable label',
    name: 'Open on load',
    openOnLoad: true
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,f,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const waitTime = 500;
    const canvas = within(canvasElement);

    // Wait for initialization
    await sleep(waitTime);
    const heading = canvas.getByText(OpenOnLoad.args?.header ?? '');
    expect(heading).toBeInTheDocument();

    // Content wrapper collapsed
    const showHide = canvas.getByRole('button');
    expect(showHide.getAttribute('aria-expanded')).toMatch('false');

    // Content hidden
    const content = canvas.queryByText(/lorem ipsum/gi);
    expect(content).not.toBeVisible();

    // Toggle
    userEvent.click(showHide);
    await sleep(waitTime);

    // Content visible
    expect(showHide.getAttribute('aria-expanded')).toMatch('true');
    expect(content).toBeVisible();

    // Toggle
    userEvent.click(showHide);
    await sleep(waitTime);

    // Content hidden
    expect(showHide.getAttribute('aria-expanded')).toMatch('false');
    expect(content).not.toBeVisible();
  },
  args: {
    ...Default.args,
    header: 'Expandable label'
  }
}`,...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var T,y,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'Padded expandable',
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const K=["Default","OpenOnLoad","TestExpandCollapse","PaddedExpandable"];export{a as Default,t as OpenOnLoad,s as PaddedExpandable,o as TestExpandCollapse,K as __namedExportsOrder,J as default};

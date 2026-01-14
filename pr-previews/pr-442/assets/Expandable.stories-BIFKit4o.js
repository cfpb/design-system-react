import{j as p}from"./jsx-runtime-Wp9Qcrv3.js";import{w as D,e,u as l}from"./index-B1ndDI2N.js";/* empty css                */import"./TextIntroduction-BdEbVkoU.js";import"./Dropdown-C7x8cwQE.js";import"./Checkbox-uScmMply.js";import{E as O}from"./ExpandableGroup-ZESpFWR3.js";import"./Icon-DS4Tul8L.js";import"./Well-Bfy2vVI4.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-DjPQjK3-.js";import{s as d}from"./sleep-Ceq2-en_.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-livxNL0y.js";import"./iframe-DLgKPEO2.js";const J={title:"Components (Draft)/Expandable/Single",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
### Expandables
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},L=p.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",p.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),a={args:{header:"Expandable label",children:L}},n={args:{...a.args,header:"Expandable label",openOnLoad:!0}},o={play:async({canvasElement:B})=>{var c;const r=D(B);await d(500);const C=r.getByText(((c=OpenOnLoad.args)==null?void 0:c.header)??"");e(C).toBeInTheDocument();const t=r.getByRole("button");e(t.getAttribute("aria-expanded")).toMatch("false");const i=r.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),l.click(t),await d(500),e(t.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),l.click(t),await d(500),e(t.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...a.args,header:"Expandable label"}},s={args:{...a.args,header:"Expandable label",icon:"bank",isPadded:!0}};var m,u,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,E,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(E=o.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var T,y,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const K=["Default","OpenForLoad","TestExpandCollapse","PaddedExpandable"];export{a as Default,n as OpenForLoad,s as PaddedExpandable,o as TestExpandCollapse,K as __namedExportsOrder,J as default};

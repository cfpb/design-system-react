import{j as l}from"./jsx-runtime-Wp9Qcrv3.js";import{w as D,e,u as p}from"./index-B1ndDI2N.js";import{s as c}from"./sleep-Ceq2-en_.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V={title:"Components (Draft)/Expandables",component:Expandables,tags:["autodocs"],parameters:{docs:{description:{component:`
### Expandables
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.
Source: https://cfpb.github.io/design-system/components/expandables
`}}}},O=l.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",l.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),a={args:{header:"Expandable label",children:O}},t={args:{...a.args,header:"Expandable label",openOnLoad:!0}},o={play:async({canvasElement:B})=>{var d;const r=D(B);await c(500);const A=r.getByText(((d=t.args)==null?void 0:d.header)??"");e(A).toBeInTheDocument();const n=r.getByRole("button");e(n.getAttribute("aria-expanded")).toMatch("false");const i=r.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),p.click(n),await c(500),e(n.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),p.click(n),await c(500),e(n.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...a.args,header:"Expandable label"}},s={args:{...a.args,header:"Expandable label",icon:"bank",isPadded:!0}};var u,m,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable label',
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
}`,...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var y,T,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const S=["Default","OpenOnLoad","Accordion","PaddedExpandable"];export{o as Accordion,a as Default,t as OpenOnLoad,s as PaddedExpandable,S as __namedExportsOrder,V as default};

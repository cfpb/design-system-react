import{j as p}from"./jsx-runtime-Wp9Qcrv3.js";import{w as D,e,u as l}from"./index-B1ndDI2N.js";import{s as c}from"./sleep-Ceq2-en_.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S={title:"Components (Draft)/Expandables",component:Expandables,tags:["autodocs"],parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},O=p.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",p.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),a={args:{header:"Expandable label",children:O}},s={args:{...a.args,header:"Expandable label",icon:"bank",isPadded:!0}},n={args:{...a.args,header:"Expandable label",openOnLoad:!0}},o={play:async({canvasElement:v})=>{var d;const r=D(v);await c(500);const C=r.getByText(((d=n.args)==null?void 0:d.header)??"");e(C).toBeInTheDocument();const t=r.getByRole("button");e(t.getAttribute("aria-expanded")).toMatch("false");const i=r.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),l.click(t),await c(500),e(t.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),l.click(t),await c(500),e(t.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...a.args,header:"Expandable label"}};var u,m,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: 'Expandable label',
    children: Content
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,E,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
}`,...(f=(E=n.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var T,B,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(B=o.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const V=["Default","PaddedExpandable","OpenOnLoad","TestExpandCollapse"];export{a as Default,n as OpenOnLoad,s as PaddedExpandable,o as TestExpandCollapse,V as __namedExportsOrder,S as default};

import{j as p}from"./jsx-runtime-Wp9Qcrv3.js";import{w as C,e,u as l}from"./index-B1ndDI2N.js";import{s as d}from"./sleep-Ceq2-en_.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S={title:"Components (Draft)/Expandables",component:Expandables,tags:["autodocs"],parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},D=p.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",p.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),a={args:{header:"Expandable Header",children:D}},s={args:{...a.args,header:"Expandable Header",icon:"bank",isPadded:!0}},n={args:{...a.args,header:"Expandable Header",openOnLoad:!0}},o={play:async({canvasElement:y})=>{var c;const r=C(y);await d(500);const v=r.getByText(((c=n.args)==null?void 0:c.header)??"");e(v).toBeInTheDocument();const t=r.getByRole("button");e(t.getAttribute("aria-expanded")).toMatch("false");const i=r.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),l.click(t),await d(500),e(t.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),l.click(t),await d(500),e(t.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...a.args,header:"Expandable Header"}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: 'Expandable Header',
    children: Content
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,h,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable Header',
    icon: 'bank',
    isPadded: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,E,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable Header',
    openOnLoad: true
  }
}`,...(f=(E=n.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var T,B,H;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    header: 'Expandable Header'
  }
}`,...(H=(B=o.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const V=["Default","PaddedExpandable","OpenOnLoad","TestExpandCollapse"];export{a as Default,n as OpenOnLoad,s as PaddedExpandable,o as TestExpandCollapse,V as __namedExportsOrder,S as default};

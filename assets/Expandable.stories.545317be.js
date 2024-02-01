import{j as d}from"./index.7eca609e.js";import{w as y,s as r,e,u as m}from"./sleep.aa1b50e6.js";/* empty css                */import"./Well.9c109664.js";import"./Dropdown.fedbd3e3.js";import"./Checkbox.996db734.js";import{a as v}from"./ExpandableGroup.a7c7cf48.js";import"./Icon.4528769c.js";import"./Paragraph.9304145b.js";import"./index.ca1bfdbe.js";import"./_commonjsHelpers.712cc82f.js";import"./_baseIsEqual.a652f15c.js";import"./index.320f77c7.js";import"./uniq.1538566d.js";import"./index.4b267bee.js";import"./index.67736049.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm.1960f945.js";import"./index.f108a8f5.js";import"./iframe.7e7c80eb.js";import"../sb-preview/runtime.js";const K={title:"Components (Draft)/Expandable/Single",component:v,tags:["autodocs"],parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},H=d.exports.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",d.exports.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),t={args:{header:"Expandable Header",children:H}},n={args:{...t.args,header:"Expandable Header",openOnLoad:!0}},o={play:async({canvasElement:E})=>{var p,c;const s=y(E);await r(500);const B=s.getByText((c=(p=n.args)==null?void 0:p.header)!=null?c:"");e(B).toBeInTheDocument();const a=s.getByRole("button");e(a.getAttribute("aria-expanded")).toMatch("false");const i=s.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),m.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),m.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...t.args,header:"Expandable Header"}};var l,u,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    header: 'Expandable Header',
    children: Content
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable Header',
    openOnLoad: true
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,T,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const Q=["Default","OpenOnLoad","TestExpandCollapse"];export{t as Default,n as OpenOnLoad,o as TestExpandCollapse,Q as __namedExportsOrder,K as default};

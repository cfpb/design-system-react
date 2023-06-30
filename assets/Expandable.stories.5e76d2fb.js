import{s as i,e}from"./sleep.a6e64752.js";import{w as B,u as d}from"./index.08c73bc2.js";import"./Well.b18f5e16.js";import"./Dropdown.723dd00e.js";import{E as y}from"./ExpandableGroup.b2bee709.js";import"./Icon.3e36b841.js";import{a as v,F as H,j as C}from"./jsx-runtime.3c5b5edf.js";import"./index.fd930501.js";import"./index.e850844b.js";import"./_baseIsEqual.5f277acd.js";import"./_commonjsHelpers.712cc82f.js";import"./index.320f77c7.js";import"./extends.cc011e2f.js";import"./uniq.3b6f40f1.js";import"./index.4b267bee.js";import"./index.67736049.js";import"./isNativeReflectConstruct.8b039ce4.js";import"./index.c8a4389a.js";import"./iframe.7655b027.js";import"../sb-preview/runtime.js";const U={component:y,parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},O=v(H,{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",C("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),t={args:{header:"Expandable Header",children:O}},n={args:{...t.args,header:"Expandable Header",openOnLoad:!0}},o={play:async({canvasElement:f})=>{var p,c;const r=B(f);await i(500);const E=r.getByText((c=(p=n.args)==null?void 0:p.header)!=null?c:"");e(E).toBeInTheDocument();const a=r.getByRole("button");e(a.getAttribute("aria-expanded")).toMatch("false");const s=r.queryByText(/lorem ipsum/gi);e(s).not.toBeVisible(),d.click(a),await i(500),e(a.getAttribute("aria-expanded")).toMatch("true"),e(s).toBeVisible(),d.click(a),await i(500),e(a.getAttribute("aria-expanded")).toMatch("false"),e(s).not.toBeVisible()},args:{...t.args,header:"Expandable Header"}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    header: 'Expandable Header',
    children: Content
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable Header',
    openOnLoad: true
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,w,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const X=["Default","OpenOnLoad","TestExpandCollapse"];export{t as Default,n as OpenOnLoad,o as TestExpandCollapse,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Expandable.stories.5e76d2fb.js.map

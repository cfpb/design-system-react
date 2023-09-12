import{w as B,s as r,e,u as d}from"./sleep.f062a059.js";import"./Well.6e567983.js";import"./Dropdown.54462f5d.js";import{a as y}from"./ExpandableGroup.6781f7fe.js";import"./Icon.11d1187e.js";import{a as v,j as H}from"./jsx-runtime.54133100.js";import"./index.cb80487d.js";import"./_commonjsHelpers.712cc82f.js";import"./_baseIsEqual.a652f15c.js";import"./index.320f77c7.js";import"./extends.cc011e2f.js";import"./uniq.1538566d.js";import"./index.67736049.js";import"./isNativeReflectConstruct.c66bbbb3.js";import"./index.a2b6e612.js";import"./iframe.25f2457a.js";import"../sb-preview/runtime.js";const G={component:y,parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},C=v("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",H("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),t={args:{header:"Expandable Header",children:C}},n={args:{...t.args,header:"Expandable Header",openOnLoad:!0}},o={play:async({canvasElement:f})=>{var p,c;const s=B(f);await r(500);const E=s.getByText((c=(p=n.args)==null?void 0:p.header)!=null?c:"");e(E).toBeInTheDocument();const a=s.getByRole("button");e(a.getAttribute("aria-expanded")).toMatch("false");const i=s.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...t.args,header:"Expandable Header"}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const J=["Default","OpenOnLoad","TestExpandCollapse"];export{t as Default,n as OpenOnLoad,o as TestExpandCollapse,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Expandable.stories.3d2726d5.js.map

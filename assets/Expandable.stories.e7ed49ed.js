import{w as B,s as r,e,u as d}from"./sleep.28df0acb.js";/* empty css                */import"./Well.d0c9108c.js";import"./Dropdown.04390d20.js";import"./Checkbox.ad7351d6.js";import{a as y}from"./ExpandableGroup.b9976e4d.js";import"./Icon.53c14fd8.js";import{a as v,j as H}from"./jsx-runtime.54133100.js";import"./Paragraph.878bd808.js";import"./_baseIsEqual.a652f15c.js";import"./_commonjsHelpers.712cc82f.js";import"./index.320f77c7.js";import"./uniq.1538566d.js";import"./index.4b267bee.js";import"./index.67736049.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.97850bd2.js";import"./index.a2b6e612.js";import"./iframe.34deb4ef.js";import"../sb-preview/runtime.js";const Q={title:"Components (Draft)/Expandable/Single",component:y,parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},C=v("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",H("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),t={args:{header:"Expandable Header",children:C}},n={args:{...t.args,header:"Expandable Header",openOnLoad:!0}},o={play:async({canvasElement:f})=>{var p,c;const i=B(f);await r(500);const E=i.getByText((c=(p=n.args)==null?void 0:p.header)!=null?c:"");e(E).toBeInTheDocument();const a=i.getByRole("button");e(a.getAttribute("aria-expanded")).toMatch("false");const s=i.queryByText(/lorem ipsum/gi);e(s).not.toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("true"),e(s).toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("false"),e(s).not.toBeVisible()},args:{...t.args,header:"Expandable Header"}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const U=["Default","OpenOnLoad","TestExpandCollapse"];export{t as Default,n as OpenOnLoad,o as TestExpandCollapse,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Expandable.stories.e7ed49ed.js.map

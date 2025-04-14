import{j as c}from"./jsx-runtime-eba35cff.js";import{w as B,e,u as d}from"./index-7d65060f.js";/* empty css                */import"./TextIntroduction-ed53788c.js";import"./Dropdown-6a8553fc.js";import"./Checkbox-7e7ab2e2.js";import{E as y}from"./ExpandableGroup-3773f0a5.js";import"./Icon-a1f52d1d.js";import"./Well-11b17e27.js";import"./Paragraph-18b341b1.js";import"./TextArea-441eb386.js";import{s as r}from"./sleep-17351bde.js";import"./index-9053fc1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-798a71e2.js";import"./index-eeaea43d.js";import"./iframe-5b7f846e.js";const P={title:"Components (Draft)/Expandable/Single",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},v=c.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? ",c.jsx("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),t={args:{header:"Expandable Header",children:v}},n={args:{...t.args,header:"Expandable Header",openOnLoad:!0}},o={play:async({canvasElement:f})=>{var p;const s=B(f);await r(500);const T=s.getByText(((p=n.args)==null?void 0:p.header)??"");e(T).toBeInTheDocument();const a=s.getByRole("button");e(a.getAttribute("aria-expanded")).toMatch("false");const i=s.queryByText(/lorem ipsum/gi);e(i).not.toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("true"),e(i).toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("false"),e(i).not.toBeVisible()},args:{...t.args,header:"Expandable Header"}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,w,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const W=["Default","OpenOnLoad","TestExpandCollapse"];export{t as Default,n as OpenOnLoad,o as TestExpandCollapse,W as __namedExportsOrder,P as default};

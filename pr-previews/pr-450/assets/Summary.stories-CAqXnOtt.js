import{j as e}from"./jsx-runtime-Wp9Qcrv3.js";import{m as h}from"./TextIntroduction-s28_FXD6.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";/* empty css                */import"./Dropdown-D_RsKWvm.js";import"./index-XmDEAOo_.js";import"./Checkbox-uScmMply.js";import"./iframe-yUFgnPhD.js";import"./Well-DMVuktKN.js";import"./Paragraph-CHJO3p8T.js";import"./TextArea-Dpxs-BUW.js";const D={title:"Components (Draft)/Summaries",component:h,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the toggle button"},isMobileOnly:{control:"boolean",description:"Whether the summary behavior should only apply on mobile viewports"}}},p=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is a long block of text that should be truncated by the Summary component. The component is designed to automatically wrap long blocks of content and provide a toggle button to reveal the full text when the content exceeds a certain height (typically 88px or 5.5em)."}),e.jsxs("p",{children:["By default, the Summary component is always active, but it can also be configured to only apply the summary behavior on mobile viewports using the ",e.jsx("code",{children:"isMobileOnly"})," prop."]}),e.jsx("p",{children:'The button label can be customized as well. In this example, we are using the default label "Show full text". When the user clicks the button, the content expands to its full height and the button is hidden.'}),e.jsx("p",{children:"This implementation follows the CFPB Design System standards for summaries, ensuring a consistent user experience across platforms."})]}),t={name:"Default",args:{label:"Show full text",children:p}},o={name:"Mobile-only",args:{label:"Show full text",isMobileOnly:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:'This summary behavior will only be applied on mobile viewports (widths below 600px). On larger screens, the content will be fully visible and the "Show full text" button will be hidden.'}),e.jsx("p",{children:"Try resizing your browser or switching to a mobile view in Storybook to see the behavior change."}),p]})}},i={name:"Minimal",args:{isMinimal:!0,children:e.jsx(e.Fragment,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}};var n,r,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Show full text',
    children: longTextContent
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var a,s,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Mobile-only',
  args: {
    label: 'Show full text',
    isMobileOnly: true,
    children: <>
        <p>
          This summary behavior will only be applied on mobile viewports (widths
          below 600px). On larger screens, the content will be fully visible and
          the &quot;Show full text&quot; button will be hidden.
        </p>
        <p>
          Try resizing your browser or switching to a mobile view in Storybook
          to see the behavior change.
        </p>
        {longTextContent}
      </>
  }
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var m,c,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Minimal',
  args: {
    isMinimal: true,
    children: <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </>
  }
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Default","MobileOnly","Minimal"];export{t as Default,i as Minimal,o as MobileOnly,k as __namedExportsOrder,D as default};

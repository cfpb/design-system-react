var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{H as n}from"./Header.ce902628.js";import{j as s}from"./jsx-runtime.f64634e7.js";import"./Button.9579d54e.js";import"./iframe.d7ea66f6.js";const u={title:"Components/Header",component:n,parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = arguments_ => (
  <Header {...arguments_} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:14},endLoc:{col:1,line:16},startBody:{col:48,line:14},endBody:{col:1,line:16}},"logged-out":{startLoc:{col:48,line:14},endLoc:{col:1,line:16},startBody:{col:48,line:14},endBody:{col:1,line:16}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),d=t.bind({});d.args={user:{name:"Jane Doe"}};const l=t.bind({});l.args={};const y=["LoggedIn","LoggedOut"];export{d as LoggedIn,l as LoggedOut,y as __namedExportsOrder,u as default};
//# sourceMappingURL=Header.stories.743f1c3f.js.map

var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{E as o}from"./Expandable.f8ba212a.js";import{b as s,j as i}from"./jsx-runtime.3a1e2061.js";import"./Icon.7052b3a7.js";import"./index.cfa9e344.js";import"./iframe.375110c5.js";const g={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Expandable from './Expandable';

export default {
  title: 'Components/Expandable',
  component: Expandable,

  argTypes: {
    openOnLoad: { control: 'select' }
  }
} as ComponentMeta<typeof Expandable>;

const Template: ComponentStory<typeof Expandable> = arguments_ => (
  <Expandable {...arguments_}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
    voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem.
    Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore
    ipsa?&nbsp;
    <a href='/?path=/story/components-expandable--default'>Lorem link</a>
  </Expandable>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: 'Expandable Header'
};

export const OpenOnLoad = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OpenOnLoad.args = {
  header: 'Expandable Header',
  openOnLoad: true
};
`,locationsMap:{default:{startLoc:{col:52,line:14},endLoc:{col:1,line:22},startBody:{col:52,line:14},endBody:{col:1,line:22}},"open-on-load":{startLoc:{col:52,line:14},endLoc:{col:1,line:22},startBody:{col:52,line:14},endBody:{col:1,line:22}}}}},title:"Components/Expandable",component:o,argTypes:{openOnLoad:{control:"select"}}},a=n(e=>s(o,{...e,children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",i("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),"Template"),p=a.bind({});p.args={header:"Expandable Header"};const l=a.bind({});l.args={header:"Expandable Header",openOnLoad:!0};const f=["Default","OpenOnLoad"];export{p as Default,l as OpenOnLoad,f as __namedExportsOrder,g as default};
//# sourceMappingURL=Expandable.stories.df1d5b34.js.map

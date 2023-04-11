var r=Object.defineProperty;var t=(n,e)=>r(n,"name",{value:e,configurable:!0});import{E as a}from"./Expandable.9266085c.js";import{j as o,b as i}from"./jsx-runtime.3f46b21e.js";import"./Icon.c29c41bb.js";import"./iframe.fb0da43b.js";const b={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
    <div>
      Lorem ipsum{' '}
      <a href='#' onClick={e => e.preventDefault()}>
        Lorem link
      </a>
      dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus
      soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus
      ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?
      <a href='#' onClick={e => e.preventDefault()}>
        Lorem link
      </a>
    </div>
  </Expandable>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: 'Expandable Header'
};
`,locationsMap:{default:{startLoc:{col:52,line:13},endLoc:{col:1,line:28},startBody:{col:52,line:13},endBody:{col:1,line:28}}}}},title:"Components/Expandable",component:a,argTypes:{openOnLoad:{control:"select"}}},s=t(n=>o(a,{...n,children:i("div",{children:["Lorem ipsum"," ",o("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"}),"dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",o("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),"Template"),l=s.bind({});l.args={header:"Expandable Header"};const f=["Default"];export{l as Default,f as __namedExportsOrder,b as default};
//# sourceMappingURL=Expandable.stories.ecff58c1.js.map

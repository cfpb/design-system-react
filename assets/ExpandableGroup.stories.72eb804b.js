var c=Object.defineProperty;var o=(e,t)=>c(e,"name",{value:t,configurable:!0});import{a as m,E as i}from"./Expandable.f8ba212a.js";import{r as b,R as s,j as n,b as a}from"./jsx-runtime.3a1e2061.js";import"./Icon.7052b3a7.js";import"./index.cfa9e344.js";import"./iframe.375110c5.js";const u=o(({accordion:e=!1,children:t})=>{let d="o-expandable-group";e&&(d+=" o-expandable-group__accordion"),b.exports.useEffect(()=>{!e||m.init(document.querySelector(".o-expandable-group"))},[e]);const l=s.Children.map(t,r=>s.isValidElement(r)&&e?s.cloneElement(r,{inAccordion:e}):r);return n("div",{className:d,children:l})},"ExpandableGroup"),p=u;try{u.displayName="ExpandableGroup",u.__docgenInfo={description:"",displayName:"ExpandableGroup",props:{accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}}}}}catch{}const _={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Expandable from './Expandable';
import ExpandableGroup from './ExpandableGroup';

export default {
  title: 'Components/ExpandableGroup',
  component: ExpandableGroup,

  argTypes: {
    accordion: { accordion: 'select' }
  }
} as ComponentMeta<typeof ExpandableGroup>;

const Template: ComponentStory<typeof ExpandableGroup> = arguments_ => (
  <ExpandableGroup>
    <Expandable header='Expandable 1' {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?&nbsp;
        <a href='/?path=/story/components-expandablegroup--default'>
          Lorem link
        </a>
      </div>
    </Expandable>
    <Expandable header='Expandable 2' {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='/?path=/story/components-expandablegroup--default'>
          Lorem link
        </a>
      </div>
    </Expandable>

    <Expandable header='Expandable 3' {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='/?path=/story/components-expandablegroup--default'>
          Lorem link
        </a>
      </div>
    </Expandable>
  </ExpandableGroup>
);

const TemplateAccordion: ComponentStory<
  typeof ExpandableGroup
> = arguments_ => (
  <ExpandableGroup accordion>
    <Expandable header='Expandable 1' {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?&nbsp;
        <a href='/?path=/story/components-expandablegroup--accordion'>
          Lorem link
        </a>
      </div>
    </Expandable>
    <Expandable header='Expandable 2' {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?&nbsp;
        <a href='/?path=/story/components-expandablegroup--accordion'>
          Lorem link
        </a>
      </div>
    </Expandable>

    <Expandable header='Expandable 3' {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?&nbsp;
        <a href='/?path=/story/components-expandablegroup--accordion'>
          Lorem link
        </a>
      </div>
    </Expandable>
  </ExpandableGroup>
);

export const Default = Template.bind({});
export const Accordion = TemplateAccordion.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
`,locationsMap:{default:{startLoc:{col:57,line:15},endLoc:{col:1,line:52},startBody:{col:57,line:15},endBody:{col:1,line:52}},accordion:{startLoc:{col:4,line:56},endLoc:{col:1,line:93},startBody:{col:4,line:56},endBody:{col:1,line:93}}}}},title:"Components/ExpandableGroup",component:p,argTypes:{accordion:{accordion:"select"}}},x=o(e=>a(p,{children:[n(i,{header:"Expandable 1",...e,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",n("a",{href:"/?path=/story/components-expandablegroup--default",children:"Lorem link"})]})}),n(i,{header:"Expandable 2",...e,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"/?path=/story/components-expandablegroup--default",children:"Lorem link"})]})}),n(i,{header:"Expandable 3",...e,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"/?path=/story/components-expandablegroup--default",children:"Lorem link"})]})})]}),"Template"),q=o(e=>a(p,{accordion:!0,children:[n(i,{header:"Expandable 1",...e,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",n("a",{href:"/?path=/story/components-expandablegroup--accordion",children:"Lorem link"})]})}),n(i,{header:"Expandable 2",...e,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",n("a",{href:"/?path=/story/components-expandablegroup--accordion",children:"Lorem link"})]})}),n(i,{header:"Expandable 3",...e,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",n("a",{href:"/?path=/story/components-expandablegroup--accordion",children:"Lorem link"})]})})]}),"TemplateAccordion"),h=x.bind({}),G=q.bind({});h.args={};const D=["Default","Accordion"];export{G as Accordion,h as Default,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=ExpandableGroup.stories.72eb804b.js.map

var b=Object.defineProperty;var t=(i,e)=>b(i,"name",{value:e,configurable:!0});import{E as o}from"./Expandable.c508d30d.js";import{r as q,R as s,j as n,b as a}from"./jsx-runtime.0d0e3881.js";import"./Icon.efc03920.js";import"./iframe.3abd4ff5.js";const u=t(({accordion:i=!1,children:e})=>{const[d,p]=q.exports.useState(null),c=s.Children.map(e,(r,m)=>s.isValidElement(r)&&accordian?s.cloneElement(r,{index:m,activeIndex:d,setActiveIndex:p}):r);return n("div",{className:"o-expandable-group",children:c})},"ExpandableGroup"),l=u;try{u.displayName="ExpandableGroup",u.__docgenInfo={description:"",displayName:"ExpandableGroup",props:{accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}}}}}catch{}const k={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
    <Expandable header={'Expandable 1'} {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='#' onClick={e => e.preventDefault()}>
          Lorem link
        </a>
      </div>
    </Expandable>
    <Expandable header={'Expandable 2'} {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='#' onClick={e => e.preventDefault()}>
          Lorem link
        </a>
      </div>
    </Expandable>

    <Expandable header={'Expandable 3'} {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='#' onClick={e => e.preventDefault()}>
          Lorem link
        </a>
      </div>
    </Expandable>
  </ExpandableGroup>
);

const TemplateAccordian: ComponentStory<
  typeof ExpandableGroup
> = arguments_ => (
  <ExpandableGroup accordian={true}>
    <Expandable header={'Expandable 1'} {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='#' onClick={e => e.preventDefault()}>
          Lorem link
        </a>
      </div>
    </Expandable>
    <Expandable header={'Expandable 2'} {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='#' onClick={e => e.preventDefault()}>
          Lorem link
        </a>
      </div>
    </Expandable>

    <Expandable header={'Expandable 3'} {...arguments_}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa?
        <a href='#' onClick={e => e.preventDefault()}>
          Lorem link
        </a>
      </div>
    </Expandable>
  </ExpandableGroup>
);

export const Default = Template.bind({});
export const Accordian = TemplateAccordian.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
`,locationsMap:{default:{startLoc:{col:57,line:14},endLoc:{col:1,line:51},startBody:{col:57,line:14},endBody:{col:1,line:51}},accordian:{startLoc:{col:4,line:55},endLoc:{col:1,line:92},startBody:{col:4,line:55},endBody:{col:1,line:92}}}}},title:"Components/ExpandableGroup",component:l,argTypes:{accordion:{accordion:"select"}}},v=t(i=>a(l,{children:[n(o,{header:"Expandable 1",...i,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),n(o,{header:"Expandable 2",...i,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),n(o,{header:"Expandable 3",...i,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})})]}),"Template"),x=t(i=>a(l,{accordian:!0,children:[n(o,{header:"Expandable 1",...i,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),n(o,{header:"Expandable 2",...i,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),n(o,{header:"Expandable 3",...i,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",n("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})})]}),"TemplateAccordian"),h=v.bind({}),y=x.bind({});h.args={};const C=["Default","Accordian"];export{y as Accordian,h as Default,C as __namedExportsOrder,k as default};
//# sourceMappingURL=ExpandableGroup.stories.71a149de.js.map

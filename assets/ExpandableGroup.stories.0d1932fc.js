var b=Object.defineProperty;var t=(n,e)=>b(n,"name",{value:e,configurable:!0});import{E as o}from"./Expandable.9266085c.js";import{r as q,R as s,j as i,b as a}from"./jsx-runtime.3f46b21e.js";import"./Icon.c29c41bb.js";import"./iframe.fb0da43b.js";const u=t(({accordion:n=!1,children:e})=>{const[d,p]=q.exports.useState(void 0),c=s.Children.map(e,(r,m)=>s.isValidElement(r)&&n?s.cloneElement(r,{index:m,activeIndex:d,setActiveIndex:p}):r);return i("div",{className:"o-expandable-group",children:c})},"ExpandableGroup"),l=u;try{u.displayName="ExpandableGroup",u.__docgenInfo={description:"",displayName:"ExpandableGroup",props:{accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}}}}}catch{}const k={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
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

const TemplateAccordion: ComponentStory<
  typeof ExpandableGroup
> = arguments_ => (
  <ExpandableGroup accordion={true}>
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
export const Accordion = TemplateAccordion.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
`,locationsMap:{default:{startLoc:{col:57,line:14},endLoc:{col:1,line:51},startBody:{col:57,line:14},endBody:{col:1,line:51}},accordion:{startLoc:{col:4,line:55},endLoc:{col:1,line:92},startBody:{col:4,line:55},endBody:{col:1,line:92}}}}},title:"Components/ExpandableGroup",component:l,argTypes:{accordion:{accordion:"select"}}},v=t(n=>a(l,{children:[i(o,{header:"Expandable 1",...n,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",i("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),i(o,{header:"Expandable 2",...n,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",i("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),i(o,{header:"Expandable 3",...n,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",i("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})})]}),"Template"),x=t(n=>a(l,{accordion:!0,children:[i(o,{header:"Expandable 1",...n,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",i("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),i(o,{header:"Expandable 2",...n,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",i("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})}),i(o,{header:"Expandable 3",...n,children:a("div",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?",i("a",{href:"#",onClick:e=>e.preventDefault(),children:"Lorem link"})]})})]}),"TemplateAccordion"),h=v.bind({}),y=x.bind({});h.args={};const C=["Default","Accordion"];export{y as Accordion,h as Default,C as __namedExportsOrder,k as default};
//# sourceMappingURL=ExpandableGroup.stories.0d1932fc.js.map

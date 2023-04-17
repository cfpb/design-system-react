import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
        blanditiis dolore ipsa?{' '}
        <a href='/?path=/story/components-expandablegroup--accordion'>
          Lorem link
        </a>
        . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam
        temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt
        earum vel est quaerat blanditiis dolore ipsa? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis
        unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis
        nesciunt earum vel est quaerat blanditiis dolore ipsa? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta
        nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione
        corporis nesciunt earum vel est quaerat blanditiis dolore ipsa? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
        voluptatibus soluta nobis unde quisquam temporibus magnam debitis
        quidem. Ducimus ratione corporis nesciunt earum vel est quaerat
        blanditiis dolore ipsa? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam
        temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt
        earum vel est quaerat blanditiis dolore ipsa?
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

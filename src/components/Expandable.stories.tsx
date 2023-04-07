import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
      voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem.
      Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore
      ipsa?
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

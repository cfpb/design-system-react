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
  // <div className='o-expandable'>
  <Expandable {...arguments_} />
  // </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: 'Expandable Header',
  paragraphText: 'This is a paragraph',
  expandableLink: 'this is a link'
};

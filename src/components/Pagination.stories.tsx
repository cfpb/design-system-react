import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = arguments_ => (
  <Pagination {...arguments_} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
Default.args = {
  page: 4,
  pageCount: 40
};

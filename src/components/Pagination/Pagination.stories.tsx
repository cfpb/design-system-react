import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '~/src/index';

const meta: Meta<typeof Pagination> = {
  title: 'Components (Draft)/Pagination',
  component: Pagination
};

export default meta;

type Story = StoryObj<typeof meta>;

const FIRST_PAGE = 1;
const MIDDLE_PAGE = 20;
const MAX_PAGE = 40;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  name: 'Default pagination',
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE
  }
};

export const PreviousDisabledAtMinPage: Story = {
  name: 'Previous button disabled on first page',
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
};

export const NextDisabledAtMaxPage: Story = {
  name: 'Next button disabled on last page',
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
};

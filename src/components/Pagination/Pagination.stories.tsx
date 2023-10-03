import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '~/src/index';

const meta: Meta<typeof Pagination> = {
  title: 'Components (Draft)/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - Pagination component

Source: https://cfpb.github.io/design-system/patterns/pagination
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const FIRST_PAGE = 1;
const MIDDLE_PAGE = 20;
const MAX_PAGE = 40;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    page: MIDDLE_PAGE,
    pageCount: MAX_PAGE
  }
};

export const PreviousDisabledAtMinPage: Story = {
  args: {
    page: FIRST_PAGE,
    pageCount: MAX_PAGE
  }
};

export const NextDisabledAtMaxPage: Story = {
  args: {
    page: MAX_PAGE,
    pageCount: MAX_PAGE
  }
};

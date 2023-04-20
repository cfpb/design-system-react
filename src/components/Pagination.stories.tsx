import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta = {
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
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    page: 20,
    pageCount: 40
  }
};

export const PrevDisabledAtMinPage: Story = {
  args: {
    page: 1,
    pageCount: 40
  }
};

export const NextDisabledAtMaxPage: Story = {
  args: {
    page: 40,
    pageCount: 40
  }
};

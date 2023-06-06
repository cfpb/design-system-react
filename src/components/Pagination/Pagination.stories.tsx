import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
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

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    page: 20,
    pageCount: 40
  }
};

export const PreviousDisabledAtMinPage: Story = {
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

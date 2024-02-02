import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, usePagination } from '~/src/index';
import { generateTestRows, stringify } from './Pagination.storyUtils';

const meta: Meta<typeof Pagination> = {
  title: 'Components (Verified)/Pagination',
  tags: ['autodocs'],
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

export const UsePagination = {
  name: 'usePagination',
  parameters: {
    docs: {
      description: {
        story:
          'A custom hook to manage paginated data and generate props for the Pagination component. The hook internally tracks pagination state and provides event handlers to update this state.'
      }
    }
  },
  render: (): JSX.Element => {
    const START_PAGE = 1;
    const PER_PAGE = 2;
    const ROW_COUNT = 6;

    const paginationRows = generateTestRows(ROW_COUNT);

    const usePaginationArguments = {
      rows: paginationRows,
      perPage: PER_PAGE,
      startPage: START_PAGE
    };

    const [visibleRows, paginationProperties] = usePagination(
      usePaginationArguments
    );

    return (
      <>
        <div>
          <h4>Calling the hook</h4>
          <pre>
            {`const [visibleRows, paginationProperties] = usePagination({\n`}
            {`\tstartPage: ${START_PAGE},\n`}
            {`\tperPage: ${PER_PAGE},\n`}
            {`\trows: ${JSON.stringify(paginationRows)}\n`}
            {`});`}
          </pre>
        </div>
        <br />
        <div>
          <h4>
            Output: <code>visibleRows</code>
          </h4>
          <pre>{JSON.stringify(visibleRows)}</pre>
        </div>
        <br />
        <div>
          <h4>
            Output: <code>paginationProperties</code>
          </h4>
          <pre>{stringify(paginationProperties)}</pre>
        </div>
        <br />
        <Pagination {...paginationProperties} />
      </>
    );
  }
};

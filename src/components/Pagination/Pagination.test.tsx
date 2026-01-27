import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, useState } from 'react';
import { Pagination } from './Pagination';

const user = userEvent.setup();

describe('<Pagination />', () => {
  it('displays pagination controls when provided', () => {
    render(<Pagination page={2} pageCount={3} tableId='pagination' />);
    const next = screen.getByText('Next');
    expect(next).toBeInTheDocument();

    const previous = screen.getByText('Previous');
    expect(previous).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(<Pagination page={1} pageCount={3} tableId='pagination' />);
    const previous = screen.getByRole('button', { name: 'Previous' });
    expect(previous.classList.contains('a-btn--disabled')).toBe(true);
  });

  it('disables next button on last page', () => {
    render(<Pagination page={3} pageCount={3} tableId='pagination' />);
    const next = screen.getByRole('button', { name:'Next' });
    expect(next.classList.contains('a-btn--disabled')).toBe(true);
  });

  it('goes to page on submit', async () => {
    const ControlledPagination = (): ReactElement => {
      const [page, setPage] = useState(2);
      const onSubmit = (value: number): void => {
        setPage(value);
      };
      return (
        <Pagination
          page={page}
          pageCount={3}
          tableId='pagination'
          onClickGo={onSubmit}
        />
      );
    };

    render(<ControlledPagination />);
    const next = screen.getByRole('button', { name: 'Next' });
    const input = screen.getByLabelText(/number/);
    const go = screen.getByRole('button', { name: 'Go' });

    await act(async () => {
      fireEvent.change(input, { target: { value: '3' } });
      await user.click(go);
    });

    await waitFor(() => {
      expect(next.classList.contains('a-btn--disabled')).toBe(true);
    });
  });
});

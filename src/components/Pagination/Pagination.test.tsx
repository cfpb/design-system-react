import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, useState } from 'react';
import { Pagination } from './Pagination';

const user = userEvent.setup();

describe('<Pagination />', () => {
  it('displays pagination controls when provided', () => {
    render(<Pagination page={2} pageCount={3} />);
    const next = screen.getByText('Next');
    expect(next).toBeInTheDocument();

    const previous = screen.getByText('Previous');
    expect(previous).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(<Pagination page={1} pageCount={3} />);
    const previous = screen.getByText('Previous');
    expect(previous.classList.contains('a-btn__disabled')).toBe(true);
  });

  it('disables next button on last page', () => {
    render(<Pagination page={3} pageCount={3} />);
    const next = screen.getByText('Next');
    expect(next.classList.contains('a-btn__disabled')).toBe(true);
  });

  it('goes to page on submit', async () => {
    const ControlledPagination = (): ReactElement => {
      const [page, setPage] = useState(2);
      const onSubmit = (value: number): void => {
        setPage(value);
      };
      return <Pagination page={page} pageCount={3} onClickGo={onSubmit} />;
    };

    render(<ControlledPagination />);
    const next = screen.getByText('Next');
    const input = screen.getByDisplayValue('2');
    const go = screen.getByText('Go');

    await act(async () => {
      await user.type(input, '{Backspace}3');
      await user.click(go);
    });

    await waitFor(() => {
      expect(next.classList.contains('a-btn__disabled')).toBe(true);
    });
  });
});

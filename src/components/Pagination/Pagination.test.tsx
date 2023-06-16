import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  it('displays pagination controls when provided', () => {
    render(<Pagination page={2} pageCount={3} />);
    const next = screen.getByText('Next');
    expect(next).toBeInTheDocument();

    const prev = screen.getByText('Previous');
    expect(prev).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(<Pagination page={1} pageCount={3} />);
    const prev = screen.getByText('Previous');
    expect(prev.classList.contains('a-btn__disabled')).toBe(true);
  });

  it('disables next button on last page', () => {
    render(<Pagination page={3} pageCount={3} />);
    const next = screen.getByText('Next');
    expect(next.classList.contains('a-btn__disabled')).toBe(true);
  });

  it('goes to page on submit', () => {
    render(<Pagination page={2} pageCount={3} />);
    const next = screen.getByText('Next');
    const input = screen.getByDisplayValue('2');
    const go = screen.getByText('Go');

    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(go);

    waitFor(() => {
      expect(next.classList.contains('a-btn__disabled')).toBe(true);
    });
  });
});

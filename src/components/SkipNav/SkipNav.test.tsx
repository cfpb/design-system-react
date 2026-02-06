import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SkipNav from './SkipNav';

describe('<SkipNav />', () => {
  it('renders the default link', () => {
    render(<SkipNav />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toHaveAttribute('href', '#main');
    expect(link).toHaveClass('skip-nav__link');
  });

  it('renders custom href and text', () => {
    render(<SkipNav href='#content' text='Skip to content' />);
    const link = screen.getByRole('link', { name: /skip to content/i });
    expect(link).toHaveAttribute('href', '#content');
  });

  it('receives focus when tabbing', async () => {
    const user = userEvent.setup();
    render(<SkipNav />);
    await user.tab();
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toHaveFocus();
  });
});

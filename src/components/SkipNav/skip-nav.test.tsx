import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SkipNav from './skip-nav';

describe('<SkipNav />', () => {
  it('renders the default link', async () => {
    render(<SkipNav />);
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
    const elm = screen.getByText('Skip to main content');
    const shadowRoot = elm?.shadowRoot;
    await new Promise((resolve) => requestAnimationFrame(resolve));
    // eslint-disable-next-line testing-library/no-node-access
    expect(shadowRoot?.querySelector('button')).toBeInTheDocument();

    // const link = screen.getByRole('button', { name: /skip to main content/i });
    // expect(link).toHaveAttribute('href', '#main');
    // expect(link).toHaveClass('skip-nav__link');
  });

  // it('receives focus when tabbing', async () => {
  //   const user = userEvent.setup();
  //   render(<SkipNav />);
  //   await user.tab();
  //   const link = screen.getByRole('link', { name: /skip to main content/i });
  //   expect(link).toHaveFocus();
  // });
});

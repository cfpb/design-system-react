import { CfpbButton } from '@cfpb/cfpb-design-system';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SkipNav from './skip-nav';

describe('<SkipNav />', () => {
  beforeEach(() => {
    CfpbButton.init();
  });

  it('renders the default link text', () => {
    render(<SkipNav />);
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });

  it('renders a custom label when provided', () => {
    render(<SkipNav label='Skip to page content' />);
    expect(screen.getByText('Skip to page content')).toBeInTheDocument();
  });

  it('passes the default href and className to cfpb-button', async () => {
    render(<SkipNav />);
    const link = screen.getByText('Skip to main content');

    expect(link).toHaveClass('skip-nav__link');

    await new Promise((resolve) => requestAnimationFrame(resolve));

    expect(link).toHaveProperty('href', '#main');
  });

  it('passes a custom href to cfpb-button', async () => {
    render(<SkipNav href='#content' />);
    const link = screen.getByText('Skip to main content');

    await new Promise((resolve) => requestAnimationFrame(resolve));

    expect(link).toHaveProperty('href', '#content');
  });

  it('wraps the web component in a skip-nav container', () => {
    render(<SkipNav />);
    expect(screen.getByTestId('skip-nav')).toBeInTheDocument();
    expect(screen.getByText('Skip to main content')).toHaveClass('skip-nav__link');
  });
});

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

  it('renders a skip link inside the cfpb-button shadow DOM', async () => {
    render(<SkipNav />);
    const elm = screen.getByText('Skip to main content');
    const shadowRoot = elm?.shadowRoot;

    await new Promise((resolve) => requestAnimationFrame(resolve));

    // With href, cfpb-button renders an anchor (role="button"), not a <button>.
    // eslint-disable-next-line testing-library/no-node-access
    const link = shadowRoot?.querySelector('a[href="#main"]');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('role', 'button');
  });

  it('passes href and className to cfpb-button', async () => {
    render(<SkipNav href='#content' />);
    const elm = screen.getByText('Skip to main content');

    expect(elm).toHaveClass('skip-nav__link');

    await new Promise((resolve) => requestAnimationFrame(resolve));

    // eslint-disable-next-line testing-library/no-node-access
    expect(elm.shadowRoot?.querySelector('a[href="#content"]')).toBeInTheDocument();
  });

  it('wraps the web component in a skip-nav container', () => {
    const { container } = render(<SkipNav />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('.skip-nav')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('cfpb-button')).toBeInTheDocument();
  });
});

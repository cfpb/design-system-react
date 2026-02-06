import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('<Breadcrumb />', () => {
  it('renders nothing when no crumbs are provided', () => {
    const { container } = render(<Breadcrumb crumbs={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders a single crumb', () => {
    render(
      <Breadcrumb
        crumbs={[
          {
            href: '/home',
            label: 'Home'
          }
        ]}
      />
    );

    const nav = screen.getByRole('navigation', { name: 'Breadcrumbs' });
    const link = screen.getByRole('link', { name: /Home/ });

    expect(nav).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveClass('m-breadcrumbs__crumb');
  });

  it('renders multiple crumbs', () => {
    render(
      <Breadcrumb
        crumbs={[
          { href: '/home', label: 'Home' },
          { href: '/section', label: 'Section' }
        ]}
      />
    );

    const nav = screen.getByRole('navigation');
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(2);
    expect(nav).toHaveTextContent(/\/\s*Home\s*\/\s*Section/);
  });

  it('uses aria-current when isCurrent is true', () => {
    render(
      <Breadcrumb
        crumbs={[
          { href: '/home', label: 'Home' },
          { href: '/current', label: 'Current', isCurrent: true }
        ]}
      />
    );

    const currentCrumb = screen.getByText(/Current/);
    expect(currentCrumb).toHaveAttribute('aria-current', 'page');
    expect(screen.queryByRole('link', { name: /Current/ })).toBeNull();
  });
});

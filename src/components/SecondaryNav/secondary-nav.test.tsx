import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { SecondaryNav } from './secondary-nav';
import type { SecondaryNavItem } from './secondary-nav';

describe('<SecondaryNav />', () => {
  const defaultItems: SecondaryNavItem[] = [
    { href: '/a', label: 'Link A' },
    { href: '/b', label: 'Link B', isActive: true },
    { href: '/c', label: 'Link C' },
  ];

  it('renders a nav with the default aria-label', () => {
    render(<SecondaryNav items={defaultItems} />);
    const nav = screen.getByRole('navigation', { name: 'Page navigation' });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('o-secondary-nav');
  });

  it('renders custom aria-label when provided', () => {
    render(<SecondaryNav items={defaultItems} ariaLabel='On this page' />);
    expect(
      screen.getByRole('navigation', { name: 'On this page' }),
    ).toBeInTheDocument();
  });

  it('renders a mobile toggle button with aria-expanded', () => {
    render(<SecondaryNav items={defaultItems} />);
    const toggleButton = screen.getByTestId('secondary-nav-toggle');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles aria-expanded when the button is clicked', () => {
    render(<SecondaryNav items={defaultItems} />);
    const toggleButton = screen.getByTestId('secondary-nav-toggle');
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders all items as links; active link has aria-current', () => {
    render(<SecondaryNav items={defaultItems} />);
    const linkA = screen.getByRole('link', { name: 'Link A' });
    const linkB = screen.getByRole('link', { name: 'Link B' });
    const linkC = screen.getByRole('link', { name: 'Link C' });
    expect(linkA).toHaveAttribute('href', '/a');
    expect(linkB).toHaveAttribute('href', '/b');
    expect(linkB).toHaveAttribute('aria-current', 'page');
    expect(linkC).toHaveAttribute('href', '/c');
  });

  it('sets data-nav-is-active on the li for the active item', () => {
    render(<SecondaryNav items={defaultItems} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).not.toHaveAttribute('data-nav-is-active');
    expect(listItems[1]).toHaveAttribute('data-nav-is-active', 'true');
    expect(listItems[2]).not.toHaveAttribute('data-nav-is-active');
  });

  it('renders no list when items is empty', () => {
    render(<SecondaryNav items={[]} />);
    expect(screen.queryByRole('list')).toBeNull();
  });

  it('applies custom className', () => {
    render(<SecondaryNav items={defaultItems} className='custom-nav' />);
    const nav = screen.getByRole('navigation', { name: 'Page navigation' });
    expect(nav).toHaveClass('o-secondary-nav');
    expect(nav).toHaveClass('custom-nav');
  });

  it('renders child items when parent has children', () => {
    const itemsWithChildren: SecondaryNavItem[] = [
      {
        label: 'Parent',
        isActive: true,
        children: [
          { href: '/child-a', label: 'Child A', isActive: true },
          { href: '/child-b', label: 'Child B' },
        ],
      },
    ];
    render(<SecondaryNav items={itemsWithChildren} />);
    expect(screen.getByText('Parent')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Child A' })).toHaveAttribute(
      'href',
      '/child-a',
    );
    expect(screen.getByRole('link', { name: 'Child B' })).toHaveAttribute(
      'href',
      '/child-b',
    );
    expect(screen.getByRole('link', { name: 'Child A' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });
});

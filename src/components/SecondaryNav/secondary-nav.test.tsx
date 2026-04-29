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
    const nav = screen.getByRole('navigation', { name: 'Section' });
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
    expect(toggleButton).toHaveClass('o-secondary-nav__header');
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

  it('renders anchors; active item has no href and aria-current', () => {
    render(<SecondaryNav items={defaultItems} />);
    const linkA = screen.getByRole('link', { name: 'Link A' });
    const linkC = screen.getByRole('link', { name: 'Link C' });
    expect(linkA).toHaveAttribute('href', '/a');
    expect(linkC).toHaveAttribute('href', '/c');

    const current = screen.getByText('Link B');
    expect(current.tagName).toBe('A');
    expect(current).not.toHaveAttribute('href');
    expect(current).toHaveAttribute('aria-current', 'page');
  });

  it('sets cfgov data-nav-is-active True/False on each li', () => {
    render(<SecondaryNav items={defaultItems} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveAttribute('data-nav-is-active', 'False');
    expect(listItems[1]).toHaveAttribute('data-nav-is-active', 'True');
    expect(listItems[2]).toHaveAttribute('data-nav-is-active', 'False');
  });

  it('renders no list when items is empty', () => {
    render(<SecondaryNav items={[]} />);
    expect(screen.queryByRole('list')).toBeNull();
  });

  it('applies custom className', () => {
    render(<SecondaryNav items={defaultItems} className='custom-nav' />);
    const nav = screen.getByRole('navigation', { name: 'Section' });
    expect(nav).toHaveClass('o-secondary-nav');
    expect(nav).toHaveClass('custom-nav');
  });

  it('adds o-secondary-nav--no-children when no item has children', () => {
    render(<SecondaryNav items={defaultItems} />);
    expect(screen.getByRole('navigation', { name: 'Section' })).toHaveClass(
      'o-secondary-nav--no-children',
    );
  });

  it('omits o-secondary-nav--no-children when any item has children', () => {
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
    expect(screen.getByRole('navigation', { name: 'Section' })).not.toHaveClass(
      'o-secondary-nav--no-children',
    );
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
    const childB = screen.getByRole('link', { name: 'Child B' });
    expect(childB).toHaveAttribute('href', '/child-b');

    const childA = screen.getByText('Child A');
    expect(childA.tagName).toBe('A');
    expect(childA).not.toHaveAttribute('href');
    expect(childA).toHaveAttribute('aria-current', 'page');
  });
});

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import matchMediaMock from 'jest-matchmedia-mock';
import ResponsiveMenu, { ExampleLinks } from './responsive-menu';

let matchMedia: matchMediaMock;

const resizeScreenSize = (width: number) => {
  Object.defineProperty(globalThis, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  globalThis.dispatchEvent(new Event('resize'));
};

describe('ResponsiveMenu', () => {
  const renderWithScope = (ui: React.ReactElement) =>
    render(<div className='o-header-scope'>{ui}</div>);

  beforeAll(() => {
    matchMedia = new matchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it('does not render the menu without links', () => {
    resizeScreenSize(500);
    renderWithScope(<ResponsiveMenu />);

    expect(screen.queryByTestId('menu-toggle')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();

    expect(screen.getByTestId('CfpbLogoLink')).toBeInTheDocument();
    expect(screen.getByAltText('CFPB Logo')).toBeInTheDocument();
  });

  it('renders with custom links', () => {
    resizeScreenSize(500);
    renderWithScope(<ResponsiveMenu links={ExampleLinks} />);

    // Menu is rendered
    const menuToggle = screen.getAllByRole('button')[0];
    expect(menuToggle).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Filing')).toBeInTheDocument();
    expect(screen.getByText('John Sample')).toBeInTheDocument();
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  it('toggles menu visibility on button click', () => {
    resizeScreenSize(500);

    renderWithScope(<ResponsiveMenu links={ExampleLinks} />);
    const menuToggle = screen.getAllByRole('button')[0];
    const navItems = screen.getByRole('navigation');
    expect(navItems).not.toHaveClass('open');
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuToggle);

    expect(navItems).toHaveClass('open');
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
    expect(menuToggle.querySelector('.sr-only')).toHaveTextContent(
      'Close menu',
    );

    fireEvent.click(menuToggle);

    expect(navItems).not.toHaveClass('open');
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
    expect(menuToggle.querySelector('.sr-only')).toHaveTextContent('Open menu');
  });

  it('closes menu when clicking overlay', () => {
    renderWithScope(<ResponsiveMenu links={ExampleLinks} />);
    const menuToggle = screen.getAllByRole('button')[0];
    fireEvent.click(menuToggle);

    const overlay = screen.getByLabelText('Close menu');
    fireEvent.click(overlay);

    expect(screen.getByRole('navigation')).not.toHaveClass('open');
  });

  it('closes menu when clicking a link', () => {
    renderWithScope(<ResponsiveMenu links={ExampleLinks} />);
    const menuToggle = screen.getAllByRole('button')[0];
    fireEvent.click(menuToggle);

    const link = screen.getByText('Home');
    fireEvent.click(link);

    expect(screen.getByRole('navigation')).not.toHaveClass('open');
  });

  it('applies active class to the current page link', () => {
    renderWithScope(<ResponsiveMenu links={ExampleLinks} />);

    const activeLink = screen.getByText('Filing');
    expect(activeLink).toHaveClass('active');
  });

  it('renders CFPB logo with custom href', () => {
    const customHref = 'https://example.com';
    renderWithScope(<ResponsiveMenu href={customHref} />);

    const logoLink = screen.getByTestId('CfpbLogoLink');
    expect(logoLink).toHaveAttribute('href', customHref);
  });
});

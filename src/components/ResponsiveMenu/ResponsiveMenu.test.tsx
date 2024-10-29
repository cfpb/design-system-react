import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import matchMediaMock from 'jest-matchmedia-mock';
import ResponsiveMenu, { ExampleLinks } from './ResponsiveMenu';

let matchMedia: matchMediaMock;

describe('ResponsiveMenu', () => {
  beforeAll(() => {
    matchMedia = new matchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  const resizeScreenSize = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    window.dispatchEvent(new Event('resize'));
  };

   it('does not render the menu without links', () => {
     resizeScreenSize(500);
     render(<ResponsiveMenu />);

     expect(screen.queryByTestId('menu-toggle')).not.toBeInTheDocument();
     expect(screen.queryByRole('navigation')).not.toBeInTheDocument();

     expect(screen.getByTestId('CfpbLogoLink')).toBeInTheDocument();
     expect(screen.getByAltText('CFPB Logo')).toBeInTheDocument();
   });

   it('renders with custom links', () => {
     resizeScreenSize(500);
     render(<ResponsiveMenu links={ExampleLinks} />);

     // Menu is rendered
     const menuToggle = screen.getAllByRole('button')[0];
     expect(menuToggle).toBeInTheDocument();
     expect(screen.getByRole('navigation')).toBeInTheDocument();

     // Links are rendered
     expect(screen.getByText('Home')).toBeInTheDocument();
     expect(screen.getByText('Filing')).toBeInTheDocument();
     expect(screen.getByText('John Sample')).toBeInTheDocument();
     expect(screen.getByText('LOG OUT')).toBeInTheDocument();
   });

  it('toggles menu visibility on button click', () => {
    resizeScreenSize(500);

    render(<ResponsiveMenu links={ExampleLinks} />);
    const menuToggle = screen.getAllByRole('button')[0];
    const navItems = screen.getByRole('navigation');
    expect(navItems).not.toHaveClass('open');
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuToggle);

    expect(navItems).toHaveClass('open');
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
    expect(menuToggle.querySelector('.sr-only')).toHaveTextContent(
      'Close menu'
    );

    fireEvent.click(menuToggle);

    expect(navItems).not.toHaveClass('open');
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
    expect(menuToggle.querySelector('.sr-only')).toHaveTextContent('Open menu');
  });

  it('closes menu when clicking overlay', () => {
    render(<ResponsiveMenu links={ExampleLinks} />);
    const menuToggle = screen.getAllByRole('button')[0];
    fireEvent.click(menuToggle);

    const overlay = screen.getByLabelText('Close menu');
    fireEvent.click(overlay);

    expect(screen.getByRole('navigation')).not.toHaveClass('open');
  });

  it('closes menu when clicking a link', () => {
    render(<ResponsiveMenu links={ExampleLinks} />);
    const menuToggle = screen.getAllByRole('button')[0];
    fireEvent.click(menuToggle);

    const link = screen.getByText('Home');
    fireEvent.click(link);

    expect(screen.getByRole('navigation')).not.toHaveClass('open');
  });

  it('applies active class to the current page link', () => {
    render(<ResponsiveMenu links={ExampleLinks} />);
    const menuToggle = screen.getAllByRole('button')[0];

    const activeLink = screen.getByText('Filing');
    expect(activeLink).toHaveClass('active');
  });

  it('renders CFPB logo with custom href', () => {
    const customHref = 'https://example.com';
    render(<ResponsiveMenu href={customHref} />);

    const logoLink = screen.getByTestId('CfpbLogoLink');
    expect(logoLink).toHaveAttribute('href', customHref);
  });
});

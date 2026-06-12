import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer, ApplicationFooter, WebsiteFooter } from './footer';

describe('Footer', () => {
  it('Renders with content', () => {
    render(
      <Footer data-testid='basic-footer'>
        <p>Footer content</p>
      </Footer>,
    );
    const basicFooter = screen.getByTestId('basic-footer');
    expect(basicFooter).toHaveClass('o-footer');
    expect(basicFooter).toHaveTextContent('Footer content');
  });
});

describe('WebsiteFooter', () => {
  it('Skips empty lists', () => {
    render(<WebsiteFooter />);

    // List not rendered
    const list = screen.queryAllByRole('list');
    expect(list.length).toEqual(0);

    // Items not rendered
    const items = screen.queryAllByRole('listitem');
    expect(items.length).toEqual(0);

    // Find tagline web component.
    const tagline = screen.getByTestId('footer-tagline');
    expect(tagline).toBeInTheDocument();
  });

  it('Renders NavLinks', () => {
    const expectedClassName = /o-footer__nav-list/g;
    const expectedItemCount = 3;

    const navLink = [
      <a href='/' className='link1' key='link1'>
        Link 1
      </a>,
      <a href='/' className='link2' key='link2'>
        Link 2
      </a>,
      <a href='/' className='link3' key='link3'>
        Link 3
      </a>,
    ];
    render(<WebsiteFooter navLinks={navLink} />);

    // // List rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(expectedClassName);

    // Items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(expectedItemCount);
  });

  it('Renders SocialLinks', () => {
    const expectedClassName = /m-social-media__icons/g;
    const expectedItemCount = 1;

    const socialLink = [
      <a href='/' className='link1' key='link1'>
        Link 1
      </a>,
    ];
    render(<WebsiteFooter socialLinks={socialLink} />);

    // // List rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(expectedClassName);

    // Items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(expectedItemCount);
  });

  it('Renders all 3 link columns', () => {
    const expectedClassName = /o-footer__list/g;
    const expectedItemCount = 3;

    const socialLink = [
      <a href='/' className='link1' key='link1'>
        Link 1
      </a>,
    ];
    render(
      <WebsiteFooter
        linksCol1={socialLink}
        linksCol2={socialLink}
        linksCol3={socialLink}
      />,
    );

    // Lists rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(3);
    expect(list[0].className).toMatch(expectedClassName);

    // All items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(expectedItemCount);
  });
});

describe('ApplicationFooter', () => {
  it('Renders content and navLinks', () => {
    const expectedClassName = /o-footer__list/g;
    const expectedItemCount = 3;

    const navLinks = [
      <a href='/' className='link1' key='link1'>
        Link 1
      </a>,
      <a href='/' className='link2' key='link2'>
        Link 2
      </a>,
      <a href='/' className='link3' key='link3'>
        Link 3
      </a>,
    ];
    const content = <h3>About this app</h3>;
    render(<ApplicationFooter navLinks={navLinks} footerContent={content} />);

    // Nav links rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(expectedClassName);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(expectedItemCount);

    // Footer content rendered
    const contentSection = screen.getByTestId('footer-content');
    expect(contentSection).toHaveTextContent('About this app');

    // Tagline rendered
    const tagline = screen.getByTestId('footer-tagline');
    expect(tagline).toBeInTheDocument();

    // Back to top button rendered
    const backToTop = screen.getByTestId('back-to-top');
    expect(backToTop).toBeInTheDocument();
  });
});

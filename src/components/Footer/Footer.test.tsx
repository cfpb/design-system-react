import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('Skips empty lists', () => {
    render(<Footer />);

    // List not rendered
    const list = screen.queryAllByRole('list');
    expect(list.length).toEqual(0);

    // Items not rendered
    const items = screen.queryAllByRole('listitem');
    expect(items.length).toEqual(0);

    // Banner displayed (text is broken up, hence the multiple queries)
    expect(screen.getByText('An official website of the'));
    expect(screen.getByText('United States government'));
  });

  it('Renders NavLinks', () => {
    const expectedClassName = /o-footer_nav-list/g;
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
      </a>
    ];
    render(<Footer navLinks={navLink} />);

    // // List rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(expectedClassName);

    // Items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(expectedItemCount);
  });

  it('Renders SocialLinks', () => {
    const expectedClassName = /m-social-media_icons/g;
    const expectedItemCount = 1;

    const socialLink = [
      <a href='/' className='link1' key='link1'>
        Link 1
      </a>
    ];
    render(<Footer socialLinks={socialLink} />);

    // // List rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(expectedClassName);

    // Items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(expectedItemCount);
  });

  it('Renders all 3 link columns', () => {
    const expectedClassName = /o-footer_list/g;
    const expectedItemCount = 3;

    const socialLink = [
      <a href='/' className='link1' key='link1'>
        Link 1
      </a>
    ];
    render(
      <Footer
        linksCol1={socialLink}
        linksCol2={socialLink}
        linksCol3={socialLink}
      />
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

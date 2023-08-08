import { render, screen } from '@testing-library/react';
import { Icon } from '../Icon/Icon';
import { FooterLinksColumn, NavLinks, SocialLinks } from './FooterLinks';

describe('NavLinks', () => {
  it('Skips empty children', () => {
    render(<NavLinks>{[]}</NavLinks>);

    // List not rendered
    const list = screen.queryAllByRole('list');
    expect(list.length).toEqual(0);

    // Items not rendered
    const items = screen.queryAllByRole('listitem');
    expect(items.length).toEqual(0);
  });

  it('Renders children as nav-list', () => {
    render(
      <NavLinks>
        <a href='/' key='first' className='f1'>
          First
        </a>
        <a href='/' key='second' className='f2'>
          Second
        </a>
      </NavLinks>
    );

    // List rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(/o-footer_nav-list/g);

    // Items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(2);

    // Classnames propagated
    const links = screen.getAllByRole('link');
    expect(links[0].className).toMatch(/f1/g);
    expect(links[1].className).toMatch(/f2/g);
  });
});

describe('SocialLinks', () => {
  it('Skips empty children', () => {
    render(<SocialLinks>{[]}</SocialLinks>);

    // List not rendered
    const list = screen.queryAllByRole('list');
    expect(list.length).toEqual(0);

    // Items not rendered
    const items = screen.queryAllByRole('listitem');
    expect(items.length).toEqual(0);
  });

  it('Renders items', () => {
    render(
      <SocialLinks>
        {[
          <a href='/' key='first' className='facebook'>
            <Icon name='facebook' withBg />
          </a>
        ]}
      </SocialLinks>
    );

    // List rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(/m-social-media_icons/g);

    // Items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(1);

    // Classnames propagated
    const links = screen.getAllByRole('link');
    expect(links[0].className).toMatch(/facebook/g);

    // TODO: How to test that the Icon is rendered?
    // It does not show up in the screen.debug() output
  });
});

describe('FooterLinksColumn', () => {
  it('Skips empty children', () => {
    render(<FooterLinksColumn>{[]}</FooterLinksColumn>);

    // List not rendered
    const list = screen.queryAllByRole('list');
    expect(list.length).toEqual(0);

    // Items not rendered
    const items = screen.queryAllByRole('listitem');
    expect(items.length).toEqual(0);
  });

  it('Renders items', () => {
    render(
      <FooterLinksColumn>
        {[
          <a href='/' key='first' className='facebook'>
            Link 1
          </a>
        ]}
      </FooterLinksColumn>
    );

    // List rendered
    const list = screen.getAllByRole('list');
    expect(list.length).toEqual(1);
    expect(list[0].className).toMatch(/o-footer_list/g);

    // Items rendered
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(1);

    // Classnames propagated
    const links = screen.getAllByRole('link');
    expect(links[0].className).toMatch(/facebook/g);
  });
});

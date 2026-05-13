import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

describe('Layout.Main', () => {
  it('renders main landmark with default 2-1 layout classes', () => {
    render(
      <Layout.Main>
        <span>child</span>
      </Layout.Main>,
    );

    const main = screen.getByRole('main');
    expect(main).toHaveClass('content', 'content--2-1');
    expect(main).toHaveAttribute('id', 'main');
    expect(screen.getByText('child')).toBeInTheDocument();
  });

  it('applies 1-3 layout class when layout is 1-3', () => {
    render(
      <Layout.Main layout='1-3'>
        <span>child</span>
      </Layout.Main>,
    );

    expect(screen.getByRole('main')).toHaveClass('content--1-3');
  });

  it('accepts custom id and extra classes', () => {
    render(
      <Layout.Main id='page-main' classes='extra-class'>
        <span>child</span>
      </Layout.Main>,
    );

    const main = screen.getByRole('main');
    expect(main).toHaveAttribute('id', 'page-main');
    expect(main).toHaveClass('extra-class');
  });
});

describe('Layout.Wrapper', () => {
  it('renders wrapper class and passes through div attributes', () => {
    render(
      <Layout.Wrapper data-testid='wrap' aria-label='Page'>
        inner
      </Layout.Wrapper>,
    );

    const wrap = screen.getByTestId('wrap');
    expect(wrap).toHaveClass('wrapper');
    expect(wrap).toHaveAttribute('aria-label', 'Page');
    expect(wrap).toHaveTextContent('inner');
  });
});

describe('Layout.Content', () => {
  it('renders content__main and optional flush modifiers', () => {
    const { rerender } = render(
      <Layout.Content data-testid='content'>
        body
      </Layout.Content>,
    );

    let node = screen.getByTestId('content');
    expect(node).toHaveClass('content__main');
    expect(node).not.toHaveClass('content--flush-bottom');

    rerender(
      <Layout.Content
        data-testid='content'
        flushBottom
        flushTopOnSmall
        flushAllOnSmall
      >
        body
      </Layout.Content>,
    );

    node = screen.getByTestId('content');
    expect(node).toHaveClass(
      'content__main',
      'content--flush-bottom',
      'content--flush-top-on-small',
      'content--flush-all-on-small',
    );
  });
});

describe('Layout.Sidebar', () => {
  it('renders aside with sidebar classes and optional flush modifiers', () => {
    const { rerender } = render(
      <Layout.Sidebar data-testid='side'>nav</Layout.Sidebar>,
    );

    let aside = screen.getByTestId('side');
    expect(aside.tagName).toBe('ASIDE');
    expect(aside).toHaveClass('sidebar', 'content__sidebar', 'o-sidebar-content');
    expect(aside).not.toHaveClass('content--flush-bottom');

    rerender(
      <Layout.Sidebar
        data-testid='side'
        flushBottom
        flushTopOnSmall
        flushAllOnSmall
      >
        nav
      </Layout.Sidebar>,
    );

    aside = screen.getByTestId('side');
    expect(aside).toHaveClass(
      'content--flush-bottom',
      'content--flush-top-on-small',
      'content--flush-all-on-small',
    );
  });
});

describe('Layout composition (CFPB DOM order)', () => {
  it('2-1: main column precedes sidebar in document order', () => {
    render(
      <Layout.Main layout='2-1'>
        <Layout.Wrapper>
          <Layout.Content data-testid='layout-main-col'>
            <span>Main</span>
          </Layout.Content>
          <Layout.Sidebar data-testid='layout-sidebar-col'>
            <span>Side</span>
          </Layout.Sidebar>
        </Layout.Wrapper>
      </Layout.Main>,
    );

    const mainCol = screen.getByTestId('layout-main-col');
    const sidebar = screen.getByTestId('layout-sidebar-col');
    expect(
      Boolean(
        mainCol.compareDocumentPosition(sidebar) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ),
    ).toBe(true);
  });

  it('1-3: sidebar precedes main column in document order', () => {
    render(
      <Layout.Main layout='1-3'>
        <Layout.Wrapper>
          <Layout.Sidebar data-testid='layout-sidebar-col'>
            <span>Side</span>
          </Layout.Sidebar>
          <Layout.Content data-testid='layout-main-col'>
            <span>Main</span>
          </Layout.Content>
        </Layout.Wrapper>
      </Layout.Main>,
    );

    const mainCol = screen.getByTestId('layout-main-col');
    const sidebar = screen.getByTestId('layout-sidebar-col');
    expect(
      Boolean(
        sidebar.compareDocumentPosition(mainCol) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ),
    ).toBe(true);
  });
});

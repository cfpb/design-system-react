import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Link, { LinkText, ListLink } from './link';

describe('<Link />', () => {
  const linkBaseProperties = {
    href: '/foo/bar',
    'data-testid': 'link-test-id',
    label: 'some link',
  };
  const testId = linkBaseProperties['data-testid'];

  it('Type: "default"', () => {
    render(<Link {...linkBaseProperties} />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveAttribute('href', '/foo/bar');
  });

  it('Type: "destructive"', () => {
    render(<Link {...linkBaseProperties} type='destructive' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-btn a-btn--link a-btn--warning');
  });

  it('Option: isJump - it adds classnames', () => {
    render(<Link {...linkBaseProperties} isJump />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link--jump');
    expect(screen.getByText('some link')).toHaveClass('a-link__text');
  });

  it('Option: leftIcon - it adds left icon', async () => {
    render(<Link {...linkBaseProperties} iconLeft='left' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link');
    expect(screen.getByText('some link')).toHaveClass('a-link__text');
    expect(await screen.findByTestId('link-icon-left')).toBeInTheDocument();
  });

  it('Option: rightIcon - it adds right icon', async () => {
    render(<Link {...linkBaseProperties} iconRight='right' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link');
    expect(screen.getByText('some link')).toHaveClass('a-link__text');
    expect(await screen.findByTestId('link-icon-right')).toBeInTheDocument();
  });

  it('Option: asButton - it does not add a-link and wraps the label', () => {
    render(<Link {...linkBaseProperties} asButton />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-btn');
    expect(link).not.toHaveClass('a-link');
    expect(screen.getByText('some link')).toHaveClass('a-link__text');
  });

  it('Option: asButton with icon - it keeps a-btn, skips a-link, and shows icon', async () => {
    render(<Link {...linkBaseProperties} asButton iconRight='right' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-btn');
    expect(link).not.toHaveClass('a-link');
    expect(screen.getByText('some link')).toHaveClass('a-link__text');
    expect(await screen.findByTestId('link-icon-right')).toBeInTheDocument();
  });

  it('Other: propagates other attributes', () => {
    render(<Link {...linkBaseProperties} target='_blank' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('Option: isRouterLink - it renders a router link', () => {
    render(
      <MemoryRouter initialEntries={['/foo/bar']}>
        <Link {...linkBaseProperties} isRouterLink />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /some link/i });
    expect(link).toHaveAttribute('href', '/foo/bar');
  });

  it('Option: isRouterLink - it requires href', () => {
    const brokenProperties = {
      ...linkBaseProperties,
      href: undefined as unknown as string,
    };

    expect(() => render(<Link {...brokenProperties} isRouterLink />)).toThrow(
      'Link component: href is a required attribute when isRouterLink is true',
    );
  });
});

describe('<LinkText>', () => {
  it('includes appropriate classnames', () => {
    render(<LinkText data-testid='link-text'>Test text</LinkText>);
    const linkText = screen.getByTestId('link-text');
    expect(linkText).toHaveClass('a-link__text');
    expect(linkText).toHaveTextContent('Test text');
  });
});

describe('<ListLink>', () => {
  const testId = 'list-link';

  it('includes all expected elements', () => {
    render(<ListLink data-testid={testId} href='/foo/bar' label='Test text' />);
    // ListItem
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent('Test text');

    // Link
    const linkText = screen.getByTestId(testId);
    expect(linkText).toHaveClass('a-link--jump');
    expect(linkText).toHaveTextContent('Test text');
  });
});

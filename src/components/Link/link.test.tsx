import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Link, { LinkText, ListLink } from './link';
import { DSRContext } from '~/src/context/dsr-context';
import { ReactNode } from 'react';
import type { JSXElement } from "~/src/types/jsx-element";

describe('<Link />', () => {
  const linkBaseProperties = {
    to: '/foo/bar',
    'data-testid': 'link-test-id',
    label: 'some link',
  };
  const testId = linkBaseProperties['data-testid'];

  interface CustomLinkProperties {
      to: string | undefined;
      children: ReactNode;
  }

  const CustomLinkComponent = ({
    to,
    children,
    ...others
  }: CustomLinkProperties): JSXElement | null => {
    return (
      <a href={to} {...others} data-testid='link-component-from-context'>
        {children}
      </a>
    );
  };

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

  it('Throws an error when both left and right icons are provided', () => {
    expect(() =>
      render(
        <Link {...linkBaseProperties} iconLeft='left' iconRight='right' />,
      ),
    ).toThrow(
      'Link component: only one of iconLeft or iconRight can be provided',
    );
  });

  it('Option: isButton - it does not add a-link and wraps the label', () => {
    render(<Link {...linkBaseProperties} isButton />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-btn');
    expect(link).not.toHaveClass('a-link');
    expect(screen.getByText('some link')).toHaveClass('a-link__text');
  });

  it('Option: isButton with icon - it keeps a-btn, skips a-link, and shows icon', async () => {
    render(<Link {...linkBaseProperties} isButton iconRight='right' />);
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

  it('Context: uses link component configured in context', () => {
    render(
      <DSRContext value={{LinkComponent:CustomLinkComponent}}>
        <Link {...linkBaseProperties}>
          <span data-testid='link-child'>Child</span>
        </Link>
      </DSRContext>,
    );

    expect(screen.getByTestId('link-component-from-context')).toBeInTheDocument();

  });

  it('Context: uses base link component by default', () => {
    render(
        <Link {...linkBaseProperties}>
          <span data-testid='link-child'>Child</span>
        </Link>,
    );

    expect(screen.queryByTestId('link-component-from-context')).not.toBeInTheDocument();

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
    render(<ListLink data-testid={testId} to='/foo/bar' label='Test text' />);
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

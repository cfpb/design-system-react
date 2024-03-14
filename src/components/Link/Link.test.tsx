import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Link, { DestructiveLink, LinkText, ListLink } from './Link';
// import { DestructiveLink, Link, LinkText, ListLink } from '~/src/index';

describe('<Link />', () => {
  const linkBaseProperties = {
    href: '/#',
    'data-testid': 'link-test-id'
  };

  const testId = linkBaseProperties['data-testid'];

  it('Type: "default"', () => {
    render(<Link {...linkBaseProperties} />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link');
    expect(link).toHaveAttribute('href', '/#');
  });

  it('Type: "destructive"', () => {
    render(<Link {...linkBaseProperties} type='destructive' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link a-btn a-btn__link a-btn__warning');
  });

  it('Type: "list"', () => {
    render(<Link {...linkBaseProperties} type='list' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('m-list_link');
    expect(link).not.toHaveClass('a-link');
  });

  it('Option: noWrap - it adds classnames', () => {
    render(<Link {...linkBaseProperties} noWrap />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link__no-wrap');
  });

  it('Option: isJump - it adds classnames', () => {
    render(<Link {...linkBaseProperties} isJump />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link__jump a-link__icon-after-text');
  });

  it('Option: isJumpLeft - it adds classnames', () => {
    render(<Link {...linkBaseProperties} isJumpLeft />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link__jump a-link__icon-before-text');
  });

  it('Option: hasIcon - it adds classnames', () => {
    render(<Link {...linkBaseProperties} hasIcon />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link a-link__icon');
  });

  it('Other: propagates other attributes', () => {
    render(<Link {...linkBaseProperties} target='_blank' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveAttribute('target', '_blank');
  });
});

describe('<LinkText>', () => {
  it('includes appropriate classnames', () => {
    render(<LinkText data-testid='link-text'>Test text</LinkText>);
    const linkText = screen.getByTestId('link-text');
    expect(linkText).toHaveClass('a-link_text');
    expect(linkText).toHaveTextContent('Test text');
  });
});

describe('<ListLink>', () => {
  const testId = 'list-link';

  it('includes all expected elements', () => {
    render(<ListLink data-testid={testId}>Test text</ListLink>);
    // ListItem
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent('Test text');

    // Link
    const linkText = screen.getByTestId(testId);
    expect(linkText).toHaveClass('m-list_link');
    expect(linkText).toHaveTextContent('Test text');
  });
});

describe('<DestructiveLink>', () => {
  const testId = 'destructive-link';

  it('includes all expected elements', () => {
    render(<DestructiveLink data-testid={testId}>Test text</DestructiveLink>);
    const linkDestructive = screen.getByTestId(testId);
    expect(linkDestructive).toHaveClass(
      'a-link a-btn a-btn__link a-btn__warning'
    );
    expect(linkDestructive).toHaveTextContent('Test text');
  });
});

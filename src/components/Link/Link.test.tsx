import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Link, { ListLink } from './Link';

describe('<Link />', () => {
  const linkBaseProperties = {
    href: '/#',
    'data-testid': 'link-test-id'
  };
  const testId = linkBaseProperties['data-testid'];

  it('Type: "default"', () => {
    render(<Link label='some link' {...linkBaseProperties} />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveAttribute('href', '/#');
  });

  it('Type: "destructive"', () => {
    render(
      <Link label='some link' {...linkBaseProperties} type='destructive' />
    );
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-btn a-btn--link a-btn--warning');
  });

  it('Option: isJump - it adds classnames', () => {
    render(<Link label='some link' {...linkBaseProperties} isJump />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link--jump');
  });

  it('Option: leftIcon - it adds left icon', () => {
    render(<Link label='some link' {...linkBaseProperties} iconLeft='left' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link');
  });

  it('Option: rightIcon - it adds right icon', () => {
    render(
      <Link label='some link' {...linkBaseProperties} iconRight='right' />
    );
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('a-link');
  });

  it('Other: propagates other attributes', () => {
    render(<Link label='some link' {...linkBaseProperties} target='_blank' />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveAttribute('target', '_blank');
  });
});

describe('<ListLink>', () => {
  const testId = 'list-link';

  it('includes all expected elements', () => {
    render(<ListLink data-testid={testId} href='/#' label='Test text' />);
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

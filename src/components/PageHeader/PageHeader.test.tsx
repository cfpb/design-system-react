import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('Logo href should have custom declared value', () => {
    render(<PageHeader href='https://www.google.com' />);
    expect(screen.getByTestId('CfpbLogoLink')).toHaveAttribute(
      'href',
      'https://www.google.com'
    );
  });

  it('Logo with undeclared href should default to cf.govq', () => {
    render(<PageHeader />);
    expect(screen.getByTestId('CfpbLogoLink')).toHaveAttribute(
      'href',
      'https://www.consumerfinance.gov'
    );
  });
});

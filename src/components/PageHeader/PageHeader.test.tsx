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

  it('Renders with bottom border by default', () => {
    const { container } = render(<PageHeader />);
    expect(container.firstChild.className).toBe('o-header bottom-border');
  });

  it('Can be rendered without bottom border', () => {
    const { container } = render(<PageHeader withBottomBorder={false} />);
    expect(container.firstChild.className).toBe('o-header');
  });
});

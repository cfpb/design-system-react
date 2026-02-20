import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  it('Logo href should have custom declared value', () => {
    render(<Header href='https://www.google.com' />);
    expect(screen.getByTestId('CfpbLogoLink')).toHaveAttribute(
      'href',
      'https://www.google.com',
    );
  });

  it('Logo with undeclared href should default to cf.govq', () => {
    render(<Header />);
    expect(screen.getByTestId('CfpbLogoLink')).toHaveAttribute(
      'href',
      'https://www.consumerfinance.gov',
    );
  });

  it('Renders with bottom border by default', () => {
    const { container } = render(<Header />);
    expect(container.firstChild.className).toBe('o-header bottom-border');
  });

  it('Can be rendered without bottom border', () => {
    const { container } = render(<Header withBottomBorder={false} />);
    expect(container.firstChild.className).toBe('o-header');
  });
});

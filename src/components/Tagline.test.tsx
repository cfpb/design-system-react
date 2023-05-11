import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Tagline } from './Tagline';

describe('<Tagline />', () => {
  it('renders tagline text correctly', () => {
    render(<Tagline>Hoboken</Tagline>);
    expect(screen.getByText('Hoboken')).toBeInTheDocument();
  });

  it('renders usa flag', () => {
    render(<Tagline>tagline</Tagline>);
    expect(screen.getByTestId('usa-flag')).toBeInTheDocument();
  });

  it('renders large version', () => {
    render(<Tagline isLarge>tagline</Tagline>);
    expect(screen.getByTestId('tagline')).toHaveClass('a-tagline__large');
  });
});

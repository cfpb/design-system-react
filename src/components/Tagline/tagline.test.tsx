import { CfpbTagline } from '@cfpb/cfpb-design-system';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('<Tagline />', () => {
  beforeEach(() => {
    CfpbTagline.init();
  });

  it('renders tagline text correctly', () => {
    render(<cfpb-tagline>Hoboken</cfpb-tagline>);
    expect(screen.getByText('Hoboken')).toBeInTheDocument();
  });

  it('renders usa flag', async () => {
    render(<cfpb-tagline isLarge>tagline</cfpb-tagline>);
    const elm = screen.getByText('tagline');
    const shadowRoot = elm?.shadowRoot;

    await new Promise((resolve) => requestAnimationFrame(resolve));

    // eslint-disable-next-line testing-library/no-node-access
    expect(shadowRoot?.querySelector('cfpb-flag-usa')).toBeInTheDocument();
  });

  it('renders large version', async () => {
    render(<cfpb-tagline isLarge>tagline</cfpb-tagline>);
    const elm = screen.getByText('tagline');
    const shadowRoot = elm?.shadowRoot;

    await new Promise((resolve) => requestAnimationFrame(resolve));

    // eslint-disable-next-line testing-library/no-node-access
    expect(shadowRoot?.querySelector('.a-tagline')).toHaveClass(
      'a-tagline--large',
    );
  });
});

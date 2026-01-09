import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('Renders a plain icon', async () => {
    const name = 'error';

    render(<Icon name={name} withBg />);

    // Need to wait for icon to load - include hidden elements
    const icon = await screen.findByRole('img', { hidden: true });
    expect(icon.getAttribute('class')).toMatch(`cf-icon-svg--${name}`);
  });

  it('Renders a round icon', async () => {
    const name = 'error';

    render(<Icon name={name} withBg />);

    // Need to wait for icon to load - include hidden elements
    const icon = await screen.findByRole('img', { hidden: true });
    expect(icon.getAttribute('class')).toMatch(`cf-icon-svg--${name}`);
  });

  it('Renders a square icon', async () => {
    const name = 'youtube';

    render(<Icon name={name} withBg />);

    // Need to wait for icon to load - include hidden elements
    const icon = await screen.findByRole('img', { hidden: true });
    expect(icon.getAttribute('class')).toMatch(`cf-icon-svg--${name}`);
  });

  it('Renders an open number icon', async () => {
    const name = 'four';

    render(<Icon name={name} />);

    // Need to wait for icon to load - include hidden elements
    const icon = await screen.findByRole('img', { hidden: true });
    expect(icon.getAttribute('class')).toMatch(`cf-icon-svg--${name}-open`);
  });

  it('Renders a closed number icon', async () => {
    const name = 'four';

    render(<Icon name={name} withBg />);

    // Need to wait for icon to load - include hidden elements
    const icon = await screen.findByRole('img', { hidden: true });
    expect(icon.getAttribute('class')).toMatch(`cf-icon-svg--${name}-closed`);
  });

  it('Returns error icon when icon is unknown', async () => {
    const name = 'unknown';

    render(<Icon name={name} />);

    const notFound = await screen.findByRole('img', { hidden: true });
    expect(notFound.getAttribute('class')).toMatch(
      'cf-icon-svg cf-icon-svg--unknown'
    );
  });
});

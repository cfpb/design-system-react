import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
  it('Renders a plain icon', () => {
    const name = 'error';

    const { container } = render(<Icon name={name} />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.querySelector('cfpb-icon');
    expect(icon).toHaveProperty('name', name);
    expect(icon).toHaveClass(`cf-icon-svg--${name}`);
  });

  it('Renders a round icon', () => {
    const name = 'error';

    const { container } = render(<Icon name={name} withBg />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.querySelector('cfpb-icon');
    expect(icon).toHaveProperty('name', `${name}-round`);
    expect(icon).toHaveClass(`cf-icon-svg--${name}-round`);
  });

  it('Renders a square icon', () => {
    const name = 'youtube';

    const { container } = render(<Icon name={name} withBg />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.querySelector('cfpb-icon');
    expect(icon).toHaveProperty('name', `${name}-square`);
    expect(icon).toHaveClass(`cf-icon-svg--${name}-square`);
  });

  it('Renders an open number icon', () => {
    const name = 'four';

    const { container } = render(<Icon name={name} />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.querySelector('cfpb-icon');
    expect(icon).toHaveProperty('name', `${name}-open`);
    expect(icon).toHaveClass(`cf-icon-svg--${name}-open`);
  });

  it('Renders a closed number icon', () => {
    const name = 'four';

    const { container } = render(<Icon name={name} withBg />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.querySelector('cfpb-icon');
    expect(icon).toHaveProperty('name', `${name}-closed`);
    expect(icon).toHaveClass(`cf-icon-svg--${name}-closed`);
  });

  it('Renders the requested icon name when icon is unknown', () => {
    const name = 'unknown';

    const { container } = render(<Icon name={name} />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.querySelector('cfpb-icon');
    expect(icon).toHaveProperty('name', name);
    expect(icon).toHaveClass('cf-icon-svg--unknown');
  });

  it('Applies accessibility attributes to the cfpb-icon host', () => {
    render(<Icon name='approved' alt='Approved' />);

    expect(screen.getByRole('img', { name: 'Approved' })).toHaveProperty(
      'name',
      'approved',
    );
  });

  it('Can be presentational', () => {
    const { container } = render(<Icon name='approved' isPresentational />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.querySelector('cfpb-icon');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).not.toHaveAttribute('role');
  });
});

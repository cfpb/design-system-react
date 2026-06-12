import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { ButtonGroup } from './button-group';

describe('<ButtonGroup />', () => {
  it('Renders a group of buttons', () => {
    render(
      <ButtonGroup data-testid='group'>
        <Button label='first' data-testid='first' />
        <Button label='second' data-testid='second' />
      </ButtonGroup>,
    );

    expect(screen.getByTestId('group')).toBeInTheDocument();
    expect(screen.getByTestId('first')).toBeInTheDocument();
    expect(screen.getByTestId('second')).toBeInTheDocument();
  });

  it('Does not render without children', () => {
    render(<ButtonGroup data-testid='group' />);
    expect(screen.queryByTestId('group')).not.toBeInTheDocument();
  });
});

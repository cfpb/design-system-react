import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ButtonIcon } from './ButtonIcon';

describe('<ButtonIcon />', () => {
  it('Renders icon to the left', async () => {
    render(<ButtonIcon name='left' isLeft data-testid='lefty' />);
    const icon = await screen.findByRole(/img/i);
    expect(icon).toBeInTheDocument();

    const wrapper = screen.getByTestId('lefty');
    expect(wrapper).toHaveClass('a-btn_icon__on-left');
  });

  it('Renders icon to the right', async () => {
    render(<ButtonIcon name='right' isRight data-testid='righty' />);
    const icon = await screen.findByRole(/img/i);
    expect(icon).toBeInTheDocument();

    const wrapper = screen.getByTestId('righty');
    expect(wrapper).toHaveClass('a-btn_icon__on-right');
  });
});

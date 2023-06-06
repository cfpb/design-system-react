import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('renders labels correctly', () => {
    render(<Button label='button' />);
    expect(screen.getByText('button')).toBeInTheDocument();

    render(<Button label='wowzers' />);
    expect(screen.getByText('wowzers')).toBeInTheDocument();
  });
  it('renders multiple appearances', () => {
    render(<Button label='button' />);
    expect(screen.getByText('button')).toHaveClass('a-btn');

    render(<Button label='secondary button' appearance='secondary' />);
    expect(screen.getByText('secondary button')).toHaveClass(
      'a-btn__secondary'
    );
  });
  it('renders multiple sizes', () => {
    render(<Button label='Button' size='default' />);
    expect(screen.getByText('Button')).toHaveClass('a-btn');

    render(<Button label='super button' size='super' />);
    expect(screen.getByText('super button')).toHaveClass('a-btn__super');

    render(<Button label='full width button' size='full' />);
    expect(screen.getByText('full width button')).toHaveClass(
      'a-btn__full-on-xs'
    );
  });
  it('can be disabled', () => {
    render(<Button label='normal button' />);
    expect(screen.getByText('normal button')).toBeEnabled();

    render(<Button label='disabled button' isDisabled />);
    expect(screen.getByText('disabled button')).toBeDisabled();
  });
  it('supports arbitrary properties', async () => {
    render(<Button label='random property' data-something='hi' />);
    expect(screen.getByText('random property')).toHaveAttribute(
      'data-something',
      'hi'
    );

    render(<Button label='custom type' type='reset' />);
    expect(screen.getByText('custom type')).toHaveAttribute('type', 'reset');

    render(<Button label='custom form' form='some-form' />);
    expect(screen.getByText('custom form')).toHaveAttribute(
      'form',
      'some-form'
    );
  });
  it('tracks clicks', async () => {
    const onClick = vi.fn();
    render(<Button label='button' onClick={onClick} />);
    const button = screen.getByText('button');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(4);
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button />', () => {
  it('Propagates additional HTML properties to main component element', () => {
    const testClass = 'this-is-a-test-classname';
    const testTitle = 'test-title';
    const testLabel = 'button';

    render(
      <Button label={testLabel} className={testClass} title={testTitle} />
    );
    expect(screen.getByText(testLabel)).toBeInTheDocument();
    expect(screen.getByText(testLabel)).toHaveClass(testClass);
    expect(screen.getByText(testLabel)).toHaveAttribute('title', testTitle);
  });

  it('renders as a link', () => {
    render(<Button label='button' asLink />);
    expect(screen.getByText('button')).toHaveClass('a-btn__link');
  });

  it('renders labels correctly', () => {
    const label1 = 'button';
    render(<Button label={label1} />);
    expect(screen.getByText(label1)).toBeInTheDocument();
    expect(screen.getByText(label1).textContent).toEqual(label1);

    const label2 = 'wowzers';
    render(<Button label={label2} />);
    expect(screen.getByText(label2)).toBeInTheDocument();
    expect(screen.getByText(label2).textContent).toEqual(label2);
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

    render(<Button label='disabled button' disabled />);
    expect(screen.getByText('disabled button')).toBeDisabled();
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

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

const testLabel = 'button';

const buttonBaseClass = 'a-btn';
const buttonLinkClass = 'a-btn__link';
const buttonFullXSClass = 'a-btn__full-on-xs';
const buttonSecondaryClass = 'a-btn__secondary';

describe('<Button />', () => {
  it('Propagates additional HTML properties to main component element', () => {
    const testClass = 'this-is-a-test-classname';
    const testTitle = 'test-title';

    render(
      <Button label={testLabel} className={testClass} title={testTitle} />
    );
    expect(screen.getByText(testLabel)).toBeInTheDocument();
    expect(screen.getByText(testLabel)).toHaveClass(buttonBaseClass);
    expect(screen.getByText(testLabel)).toHaveClass(testClass);
    expect(screen.getByText(testLabel)).toHaveAttribute('title', testTitle);
  });

  it('Renders as a link', () => {
    render(<Button label={testLabel} asLink />);
    expect(screen.getByText(testLabel)).toHaveClass(buttonLinkClass);
  });

  it('Renders labels correctly', () => {
    render(<Button label={testLabel} />);
    expect(screen.getByText(testLabel)).toBeInTheDocument();
    expect(screen.getByText(testLabel).textContent).toEqual(testLabel);

    const wowLabel = 'wowzers';
    render(<Button label={wowLabel} />);
    expect(screen.getByText(wowLabel)).toBeInTheDocument();
    expect(screen.getByText(wowLabel).textContent).toEqual(wowLabel);
  });

  it('Renders alternative appearances', () => {
    render(<Button label={testLabel} />);
    expect(screen.getByText(testLabel)).toHaveClass(buttonBaseClass);

    const secondaryLabel = 'secondary button';
    render(<Button label={secondaryLabel} appearance='secondary' />);
    expect(screen.getByText(secondaryLabel)).toHaveClass(buttonSecondaryClass);
  });

  it('Renders alternative sizes', () => {
    render(<Button label={testLabel} size='default' />);
    expect(screen.getByText(testLabel)).toHaveClass(buttonBaseClass);

    const labelFull = 'full width';
    render(<Button label={labelFull} size='full' />);
    expect(screen.getByText(labelFull)).toHaveClass(buttonFullXSClass);
  });

  it('Can be disabled', () => {
    render(<Button label={testLabel} />);
    expect(screen.getByText(testLabel)).toBeEnabled();

    const labelDisabled = 'disabled button';
    render(<Button label={labelDisabled} disabled />);
    expect(screen.getByText(labelDisabled)).toBeDisabled();
  });

  it('Tracks clicks', async () => {
    const onClick = vi.fn();
    render(<Button label={testLabel} onClick={onClick} />);
    const button = screen.getByText(testLabel);
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(4);
  });
});

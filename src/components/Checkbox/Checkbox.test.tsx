import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { CheckboxTestWrapper } from './Checkbox.utils';

const id = 'default';
const label = 'this is a label';
const testId = `${id}-container`;
const inputTestId = `${id}-input`;

const attributeAria = 'aria-checked';
const attributeClass = 'class';
const attributeTitle = 'title';

const defaultProps = { id, label, 'data-testid': testId };

describe('Checkbox', () => {
  it('Propagates additional HTML properties to main component element', () => {
    const testTitle = 'test-title';

    render(<Checkbox {...defaultProps} title={testTitle} />);
    const checkbox = screen.getByTestId(inputTestId);

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute(attributeTitle, testTitle);
  });

  it('Calls the provided onChange handler', async () => {
    const onChange = vi.fn();

    render(<CheckboxTestWrapper {...defaultProps} onChange={onChange} />);

    const checkbox = await screen.findByRole(/checkbox/i);

    expect(checkbox.getAttribute(attributeClass)).toMatch('a-checkbox');
    expect(checkbox.getAttribute(attributeAria)).toMatch('false');
    expect(checkbox).not.toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();

    act(() => checkbox.click());

    expect(onChange).toHaveBeenCalled();

    // Accessbility attributes updated
    expect(checkbox.getAttribute(attributeAria)).toMatch('true');
  });

  it('Renders helper text that toggles checkbox when clicked', async () => {
    const helperText = 'This is optional helper text for the checkbox';
    const helperTextOutput = `(${helperText})`;

    render(<CheckboxTestWrapper {...defaultProps} helperText={helperText} />);

    const checkbox = await screen.findByRole(/checkbox/i);
    expect(checkbox.getAttribute(attributeAria)).toMatch('false');

    // Clicking helper text correctly updates checkbox
    const helper = await screen.findByText(helperTextOutput);
    act(() => helper.click());
    expect(checkbox.getAttribute(attributeAria)).toMatch('true');
  });

  it('Renders the "Large" variant', async () => {
    render(<Checkbox {...defaultProps} isLarge />);

    const largeClass = 'm-form-field__lg-target';
    const checkbox = screen.getByTestId(testId);
    expect(checkbox.getAttribute(attributeClass)).toMatch(largeClass);
  });

  it('Is disabled when passing the "disabled" prop', async () => {
    render(<Checkbox {...defaultProps} disabled />);

    const checkbox = await screen.findByRole(/checkbox/i);
    expect(checkbox).toBeDisabled();
  });

  it('Integrates a provided className', async () => {
    const cname = 'extraCname';

    render(<Checkbox {...defaultProps} className={cname} />);

    const checkbox = screen.getByTestId(testId);
    expect(checkbox).toHaveClass(cname);
  });

  it('Integrates a provided inputClassName', async () => {
    const cname = 'extraInputCname';

    render(<Checkbox {...defaultProps} inputClassName={cname} />);

    const input = screen.getByTestId(`${id}-input`);
    expect(input).toHaveClass(cname);
  });
});

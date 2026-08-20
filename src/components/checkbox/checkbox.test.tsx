import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { Checkbox } from './checkbox';
import { CheckboxTestWrapper } from './checkbox.utilities';

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

    const checkbox = await screen.findByRole('checkbox');

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

    const checkbox = await screen.findByRole('checkbox');
    expect(checkbox.getAttribute(attributeAria)).toMatch('false');

    // Clicking helper text correctly updates checkbox
    const helper = await screen.findByText(helperTextOutput);
    act(() => helper.click());
    expect(checkbox.getAttribute(attributeAria)).toMatch('true');
  });

  it('Renders the "Large" variant', () => {
    render(<Checkbox {...defaultProps} isLarge />);

    const largeClass = 'm-form-field--lg-target';
    const checkbox = screen.getByTestId(testId);
    expect(checkbox.getAttribute(attributeClass)).toMatch(largeClass);
  });

  it('Is disabled when passing the "disabled" prop', async () => {
    render(<Checkbox {...defaultProps} disabled />);

    const checkbox = await screen.findByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('Integrates a provided className', () => {
    const cname = 'extraCname';

    render(<Checkbox {...defaultProps} className={cname} />);

    const checkbox = screen.getByTestId(testId);
    expect(checkbox).toHaveClass(cname);
  });

  it('Integrates a provided inputClassName', () => {
    const cname = 'extraInputCname';

    render(<Checkbox {...defaultProps} inputClassName={cname} />);

    const input = screen.getByTestId(`${id}-input`);
    expect(input).toHaveClass(cname);
  });

  it('does not set indeterminate property on checkbox by default', () => {
    render(<Checkbox {...defaultProps} />);

    const checkbox = screen.getByTestId(inputTestId);
    expect(checkbox.matches(':indeterminate')).toBe(false);
  });

  it('sets indeterminate property on checkbox if isIndeterminate is true', () => {
    render(<Checkbox {...defaultProps} isIndeterminate={true} />);

    const checkbox = screen.getByTestId(inputTestId);
    expect(checkbox.matches(':indeterminate')).toBe(true);
  });

  it('sets aria-checked to mixed when isIndeterminate is true', () => {
    render(<Checkbox {...defaultProps} isIndeterminate />);

    const checkbox = screen.getByTestId(inputTestId);
    expect(checkbox).toHaveAttribute(attributeAria, 'mixed');
  });

  it('sets aria-checked to mixed in controlled mode when isIndeterminate is true', () => {
    render(
      <Checkbox {...defaultProps} checked={false} isIndeterminate />,
    );

    const checkbox = screen.getByTestId(inputTestId);
    expect(checkbox).toHaveAttribute(attributeAria, 'mixed');
  });
});

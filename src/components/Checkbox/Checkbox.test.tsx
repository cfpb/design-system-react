import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { Checkbox } from '.';

const id = 'default';
const label = 'this is a label';
const defaultProps = { id, label };

describe('Checkbox', () => {
  it('Default w/ onChange', async () => {
    const name = 'named checkbox';
    const onChange = vi.fn();

    render(<Checkbox {...defaultProps} name={name} onChange={onChange} />);

    const checkbox = await screen.findByRole(/checkbox/i);
    expect(checkbox.getAttribute('class')).toMatch(`a-checkbox`);
    expect(checkbox.getAttribute('aria-checked')).toMatch(`false`);
    expect(checkbox).not.toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();

    act(() => {
      checkbox.click();
    });

    // Change handler updated with new value
    expect(onChange).toHaveBeenCalledWith(true);

    // Accessbility attributes updated
    expect(checkbox.getAttribute('aria-checked')).toMatch(`true`);
  });

  it('With helper text', async () => {
    const helperText = 'This is optional helper text for the checkbox';

    render(<Checkbox {...defaultProps} helperText={helperText} />);

    const checkbox = await screen.findByRole(/checkbox/i);
    expect(checkbox.getAttribute('aria-checked')).toMatch(`false`);

    // Clicking helper text correctly updates checkbox
    const helper = await screen.findByText(helperText);
    act(() => {
      helper.click();
    });

    expect(checkbox.getAttribute('aria-checked')).toMatch(`true`);
  });

  it('Large', async () => {
    render(<Checkbox {...defaultProps} isLarge />);

    const checkbox = screen.getByTestId(`${id}-container`);
    expect(checkbox.getAttribute('class')).toMatch(`m-form-field__lg-target`);
  });

  it('Disabled', async () => {
    render(<Checkbox {...defaultProps} isDisabled />);

    const checkbox = await screen.findByRole(/checkbox/i);
    expect(checkbox).toBeDisabled();
  });

  it('With className', async () => {
    const cname = 'extraCname';

    render(<Checkbox {...defaultProps} className={cname} />);

    const checkbox = await screen.findByRole(/checkbox/i);
    expect(checkbox.getAttribute('class')).toMatch(cname);
  });
});

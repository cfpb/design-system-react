import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioButton } from './RadioButton';

const buildProperties = (
  additive: number | string
): { id: string; label: string } => ({
  id: `radio-${additive}`,
  label: `label-${additive}`
});

describe('<RadioButton />', () => {
  const helperText = 'helperText goes here';
  const helperTextOutput = '(helperText goes here)';

  const role = 'radio';

  it('renders labels correctly', () => {
    const properties = buildProperties('first');
    render(<RadioButton {...properties} />);
    expect(screen.getByText(properties.label)).toBeInTheDocument();
  });

  it('renders helperText', () => {
    const properties = buildProperties('helper');
    render(<RadioButton {...properties} helperText={helperText} />);
    expect(screen.getByText(helperTextOutput)).toBeInTheDocument();
  });

  it('isLarge', () => {
    const properties = buildProperties('large');
    render(<RadioButton {...properties} helperText={helperText} isLarge />);

    expect(screen.getByText(helperTextOutput)).toBeInTheDocument();
    expect(screen.getByTestId('radio-container').getAttribute('class')).toMatch(
      'm-form-field__lg-target'
    );
  });

  it('isDisabled', () => {
    const properties = buildProperties('disabled');
    render(<RadioButton {...properties} disabled />);

    const element = screen.getByRole(role);

    expect(element).toBeInTheDocument();
    expect(element.getAttribute('disabled')).not.toBe('null');
    expect(element.getAttribute('disabled')).toBe('');
  });

  it('accepts additional input element props', () => {
    const properties = buildProperties('default-checked');
    render(<RadioButton {...properties} defaultChecked />);

    const element = screen.getByRole(role);

    expect(element).toBeInTheDocument();
    expect(element).toBeChecked();
  });

  it('Select via click', () => {
    const properties = buildProperties('click');
    render(<RadioButton {...properties} />);

    const element = screen.getByRole(role);
    expect(element).not.toBeChecked();

    screen.getByText(properties.label).click();

    expect(element).toBeChecked();
  });

  it('Select via keyboard', async () => {
    const user = userEvent.setup();
    const properties = buildProperties('keyboard');
    render(<RadioButton {...properties} />);

    const element = screen.getByRole(role);
    expect(element).not.toBeChecked();

    element.focus();
    await user.keyboard(' ');

    expect(element).toBeChecked();
  });
});

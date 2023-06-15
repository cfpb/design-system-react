import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from './Radio';

const buildProperties = (
  additive: number | string
): { id: string; label: string } => ({
  id: `radio-${additive}`,
  label: `label-${additive}`
});

describe('<Radio />', () => {
  const helperText = 'helperText goes here';
  const role = 'radio';

  it('renders labels correctly', () => {
    const properties = buildProperties('first');
    render(<Radio {...properties} />);
    expect(screen.getByText(properties.label)).toBeInTheDocument();
  });

  it('renders helperText', () => {
    const properties = buildProperties('helper');
    render(<Radio {...properties} helperText={helperText} />);
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('isLarge', () => {
    const properties = buildProperties('large');
    render(<Radio {...properties} helperText={helperText} isLarge />);

    expect(screen.getByText(helperText)).toBeInTheDocument();
    expect(screen.getByTestId('radio-container').getAttribute('class')).toMatch(
      'm-form-field__lg-target'
    );
  });

  it('isDisabled', () => {
    const properties = buildProperties('disabled');
    render(<Radio {...properties} isDisabled />);

    const element = screen.getByRole(role);

    expect(element).toBeInTheDocument();
    expect(element.getAttribute('disabled')).not.toBe('null');
    expect(element.getAttribute('disabled')).toBe('');
  });

  it('Select via click', () => {
    const properties = buildProperties('click');
    render(<Radio {...properties} />);

    const element = screen.getByRole(role);
    expect(element).not.toBeChecked();

    screen.getByText(properties.label).click();

    expect(element).toBeChecked();
  });

  it('Select via keyboard', async () => {
    const user = userEvent.setup();
    const properties = buildProperties('keyboard');
    render(<Radio {...properties} />);

    const element = screen.getByRole(role);
    expect(element).not.toBeChecked();

    element.focus();
    await user.keyboard(' ');

    expect(element).toBeChecked();
  });
});

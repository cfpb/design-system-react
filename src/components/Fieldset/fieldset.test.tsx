import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../Checkbox/checkbox';
import { RadioButton } from '../RadioButton/radio-button';
import { Fieldset } from './fieldset';

const legend = 'Basic legend';
const legendHelperText = 'Use block helper text for instructions.';

describe('Fieldset', () => {
  it('renders legend text', () => {
    render(
      <Fieldset legend={legend}>
        <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
      </Fieldset>,
    );

    expect(screen.getByRole('group', { name: legend })).toBeInTheDocument();
  });

  it('renders block helper text when provided', () => {
    render(
      <Fieldset legend={legend} legendHelperText={legendHelperText}>
        <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
      </Fieldset>,
    );

    expect(screen.getByText(legendHelperText)).toBeInTheDocument();
    expect(screen.getByText(legendHelperText)).toHaveClass(
      'a-label__helper',
      'a-label__helper--block',
    );
  });

  it('renders children form controls', () => {
    render(
      <Fieldset legend={legend}>
        <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
        <Checkbox id='fieldset-checkbox-2' name='test_checkbox' label='Label' />
      </Fieldset>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
    expect(checkboxes[0]).toBeInTheDocument();
    expect(checkboxes[1]).toBeInTheDocument();
  });

  it('renders with radio buttons', () => {
    render(
      <Fieldset legend={legend}>
        <RadioButton id='fieldset-radio-1' name='test_radio' label='Label' />
        <RadioButton id='fieldset-radio-2' name='test_radio' label='Label' />
      </Fieldset>,
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);
    expect(radios[0]).toBeInTheDocument();
    expect(radios[1]).toBeInTheDocument();
  });

  it('applies o-form__fieldset class to fieldset', () => {
    render(
      <Fieldset legend={legend}>
        <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
      </Fieldset>,
    );

    const fieldset = screen.getByTestId('fieldset');
    expect(fieldset).toHaveClass('o-form__fieldset');
  });

  it('integrates a provided className', () => {
    const customClass = 'custom-fieldset';

    render(
      <Fieldset legend={legend} className={customClass}>
        <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
      </Fieldset>,
    );

    const fieldset = screen.getByTestId('fieldset');
    expect(fieldset).toHaveClass(customClass);
  });

  it('applies inline layout class when isInline prop is true', () => {
    render(
      <Fieldset legend={legend} isInline>
        <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
      </Fieldset>,
    );

    const fieldset = screen.getByTestId('fieldset');
    expect(fieldset).toHaveClass('o-form__fieldset--inline');
  });

  it('propagates additional HTML attributes to fieldset element', () => {
    render(
      <Fieldset legend={legend} disabled>
        <Checkbox id='fieldset-checkbox-1' name='test_checkbox' label='Label' />
      </Fieldset>,
    );

    const fieldset = screen.getByTestId('fieldset');
    expect(fieldset).toBeDisabled();
  });

  describe('interactions', () => {
    it('allows selecting and deselecting checkboxes in a fieldset', async () => {
      const user = userEvent.setup();
      render(
        <Fieldset legend={legend} legendHelperText={legendHelperText}>
          <Checkbox
            id='fieldset-checkbox-1'
            name='test_checkbox'
            label='Label'
          />
          <Checkbox
            id='fieldset-checkbox-2'
            name='test_checkbox'
            label='Label'
          />
        </Fieldset>,
      );

      const checkboxes = screen.getAllByRole('checkbox');

      expect(checkboxes[0]).not.toBeChecked();
      expect(checkboxes[1]).not.toBeChecked();

      await user.click(checkboxes[0]);
      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).not.toBeChecked();

      await user.click(checkboxes[1]);
      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).toBeChecked();

      await user.click(checkboxes[0]);
      expect(checkboxes[0]).not.toBeChecked();
      expect(checkboxes[1]).toBeChecked();
    });

    it('allows selecting checkboxes via label click', async () => {
      const user = userEvent.setup();
      render(
        <Fieldset legend={legend} legendHelperText={legendHelperText}>
          <Checkbox
            id='fieldset-checkbox-1'
            name='test_checkbox'
            label='Label'
          />
          <Checkbox
            id='fieldset-checkbox-2'
            name='test_checkbox'
            label='Label'
          />
        </Fieldset>,
      );

      const checkboxes = screen.getAllByRole('checkbox');
      const labels = screen.getAllByText('Label');

      expect(checkboxes[0]).not.toBeChecked();
      await user.click(labels[0]);
      expect(checkboxes[0]).toBeChecked();
    });

    it('allows selecting one radio button at a time in a fieldset', async () => {
      const user = userEvent.setup();
      render(
        <Fieldset legend={legend} legendHelperText={legendHelperText}>
          <RadioButton id='fieldset-radio-1' name='test_radio' label='Label' />
          <RadioButton id='fieldset-radio-2' name='test_radio' label='Label' />
        </Fieldset>,
      );

      const radios = screen.getAllByRole('radio');

      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).not.toBeChecked();

      await user.click(radios[0]);
      expect(radios[0]).toBeChecked();
      expect(radios[1]).not.toBeChecked();

      await user.click(radios[1]);
      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).toBeChecked();
    });

    it('allows selecting radio via keyboard', async () => {
      const user = userEvent.setup();
      render(
        <Fieldset legend={legend} legendHelperText={legendHelperText}>
          <RadioButton id='fieldset-radio-1' name='test_radio' label='Label' />
          <RadioButton id='fieldset-radio-2' name='test_radio' label='Label' />
        </Fieldset>,
      );

      const radios = screen.getAllByRole('radio');

      radios[0].focus();
      await user.keyboard(' ');

      expect(radios[0]).toBeChecked();
      expect(radios[1]).not.toBeChecked();

      await user.keyboard('{ArrowDown}');
      await user.keyboard(' ');

      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).toBeChecked();
    });
  });
});

import { jest } from '@storybook/jest';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';
import { DemoOptions } from './testUtils';

describe('<SelectSingle />', () => {
  it('renders Single select with default value', () => {
    render(<Select id='single' options={DemoOptions} />);
    expect(screen.getByRole('combobox')).toHaveValue('option0');
    expect(screen.getByRole('option', { name: 'Option 0' }).selected).toBe(
      true
    );
  });

  it('Handles Single selection change', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Select
        id='single-change'
        label='Single Select'
        options={DemoOptions}
        defaultValue='option1'
        onChange={onChange}
      />
    );

    await user.selectOptions(screen.getByRole('combobox'), 'option3');
    expect(screen.getByRole('combobox')).toHaveValue('option3');
    expect(onChange).toHaveBeenCalledWith(DemoOptions[3]);
  });
});

describe('<SelectMulti />', () => {
  it('Is interactable', async () => {
    const id = 'multi';
    const label = 'MultiLabel';
    const maxSelections = 2;
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Select
        id={id}
        options={DemoOptions}
        label={label}
        isMulti
        maxSelections={maxSelections}
        onChange={onChange}
      />
    );

    // Has correct placeholder text based on maxSelections
    const placeholder = `Select up to ${maxSelections}`;
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();

    // Initial Select has nothing selected
    expect(onChange).toHaveBeenCalledWith([]);

    // Allows selection of multiple options, up to the limit
    await act(async () => {
      await user.click(screen.getByLabelText('Option 1'));
      await user.click(screen.getByLabelText('Option 5'));
      await user.click(screen.getByLabelText('Option 0'));
    });

    // Change handler is called with the expected content
    expect(onChange).toHaveBeenCalledWith([
      { ...DemoOptions[1], selected: true },
      { ...DemoOptions[5], selected: true }
    ]);

    // Tags are rendered only for the selected options
    expect(screen.getByTestId(`tag-multi-option1`)).toBeInTheDocument();
    expect(screen.getByTestId(`tag-multi-option5`)).toBeInTheDocument();
    expect(screen.queryByTestId(`tag-multi-option0`)).not.toBeInTheDocument();
  });
});

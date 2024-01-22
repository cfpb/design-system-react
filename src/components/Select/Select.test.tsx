import { jest } from '@storybook/jest';
import '@testing-library/jest-dom';
import { act, render, screen, within } from '@testing-library/react';
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

    // Selection limit has not been reached
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll('.u-max-selections').length).toBe(0);

    // Allows selection of multiple options, up to the limit
    await act(async () => {
      await user.click(screen.getByLabelText('Option 1'));
      await user.click(screen.getByLabelText('Option 5'));
    });

    // Change handler is called with the expected content
    expect(onChange).toHaveBeenCalledWith([
      { ...DemoOptions[1], selected: true },
      { ...DemoOptions[5], selected: true }
    ]);

    // Tags are rendered for the selected options
    const AllButtons = screen.getAllByRole(`button`);
    expect(within(AllButtons[0]).getByText(`Option 1`)).toBeInTheDocument();
    expect(within(AllButtons[1]).getByText(`Option 5`)).toBeInTheDocument();
    expect(AllButtons.length).toBe(2);

    /* TODO: Verify that no further selections are allowed, beyond the max.
     *  We are relying on the DS implementation of Multiselect which uses CSS
     *  to show/hide options, but the options' <li> remain in the DOM. To Vitest,
     *  these elements, even when CSS is set to `display: none`, are still "visible".
     *
     *  For now, I'm just checking that the `u-max-selections` class is applied.
     */
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll('.u-max-selections').length).toBe(1);

    // Allows deselection of options
    await act(async () => {
      await user.click(screen.getByLabelText('Option 1'));
      await user.click(screen.getByLabelText('Option 5'));
    });

    const NoButtons = screen.queryAllByRole(`button`);
    expect(NoButtons.length).toBe(0);
    expect(onChange).toHaveBeenCalledWith([]);
  });
});

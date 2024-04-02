import { jest } from '@storybook/jest';
import '@testing-library/jest-dom';
import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Select, SelectOption } from './Select';
import { MultipleSelectOptions, SingleSelectOptions } from './testUtils';

const SingleSelectWrapper = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string>(
    SingleSelectOptions[0].value
  );

  const onHandleChange = (
    newValue: SelectOption | SelectOption[] | undefined
  ): void => {
    // Just to resolve TypeScript since we are using Select in single format
    if (Array.isArray(newValue)) return;
    setSelectedValue(newValue?.value ?? '');
  };

  return (
    <Select
      id='single'
      options={SingleSelectOptions}
      onChange={onHandleChange}
      value={selectedValue}
    />
  );
};

describe('<SelectSingle />', () => {
  it('renders Single select with default value', () => {
    // render(<Select id='single' options={SingleSelectOptions} />);
    render(<SingleSelectWrapper />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue('option1');
  });

  it('Handles Single selection change', async () => {
    render(<SingleSelectWrapper />);
    const selectElement = screen.getByRole('combobox');

    await userEvent.selectOptions(selectElement, 'option3');
    expect(screen.getByRole('combobox')).toHaveValue('option3');
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
        options={MultipleSelectOptions}
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
      await user.click(screen.getByLabelText('Option 4'));
    });

    // Change handler is called with the expected content
    expect(onChange).toHaveBeenCalledWith([
      { ...MultipleSelectOptions[1], selected: true },
      { ...MultipleSelectOptions[4], selected: true }
    ]);

    // Tags are rendered for the selected options
    const AllButtons = screen.getAllByRole(`button`);
    expect(within(AllButtons[0]).getByText(`Option 1`)).toBeInTheDocument();
    expect(within(AllButtons[1]).getByText(`Option 4`)).toBeInTheDocument();
    expect(AllButtons.length).toBe(2);

    /* TODO: Better verification that maxSelections is enforced.
     *  We are relying on the DS implementation of Multiselect which uses CSS
     *  to show/hide options, but the options' <li> remain in the DOM. To Vitest,
     *  these elements, even when CSS is set to `display: none`,
     *  are still "visible".
     *
     *  For now, I'm just checking that the `u-max-selections` class is applied.
     */
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll('.u-max-selections').length).toBe(1);

    // Allows deselection of options
    await act(async () => {
      await user.click(screen.getByLabelText('Option 1'));
      await user.click(screen.getByLabelText('Option 4'));
    });

    const NoButtons = screen.queryAllByRole(`button`);
    expect(NoButtons.length).toBe(0);
    expect(onChange).toHaveBeenCalledWith([]);
  });
});

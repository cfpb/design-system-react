import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';
import { MockOptions } from './utils';

/**
 * TODO
 *
 * We get lots of warnings about needing to wrap in act(...) because actions
 * update React state but, when wrapped, some of the actions don't update
 * the rendered element. I've wrapped what I could to eliminate as many
 * warnings as I could.
 *
 * I have tried some of the workarounds outlined in the article below
 * but have not had any success eliminating the warnings.
 *
 * https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
 */

const onSelect = (): null => null;

const label = '-default dropdown-';
const id = 'anID';
const placeholder = 'HOLD MY PLACE';

/**
 * Single select
 */
describe('Default Dropdown', () => {
  const defaultProps = {
    id,
    label,
    options: MockOptions,
    onSelect,
    placeholder
  };

  it('Renders default labels correctly', () => {
    render(<Dropdown {...{ id, options: MockOptions, onSelect }} />);
    expect(screen.queryByText(label)).not.toBeInTheDocument();
    expect(screen.getByText('Dropdown w/ Multi-select')).toBeInTheDocument();
    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  it('Renders provided labels correctly', () => {
    render(<Dropdown {...defaultProps} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  it('(Mouse) Selects an option', async () => {
    const optionLabel = 'Option A';
    const user = userEvent.setup();

    render(<Dropdown {...defaultProps} />);
    await act(async () => {
      await user.click(screen.getByText(label));
    });

    expect(screen.getByText(optionLabel)).toBeInTheDocument();
    await act(async () => {
      await user.click(screen.getByText(optionLabel));
    });

    const selectedOption = screen.getByText(optionLabel);
    expect(selectedOption).toBeInTheDocument();
    expect(selectedOption.getAttribute('class')).toMatch(/singlevalue/gi);
  });

  it('(Keyboard) Selects an option', async () => {
    const optionLabel = 'Option C';
    const user = userEvent.setup();

    render(<Dropdown {...defaultProps} />);

    expect(screen.queryByText(optionLabel)).not.toBeInTheDocument();
    await user.click(screen.getByText(label));
    await user.keyboard('{Tab}{Tab}{Enter}');

    const selectedOption = screen.getByText(optionLabel);
    expect(selectedOption).toBeInTheDocument();
    expect(selectedOption.getAttribute('class')).toMatch(/singlevalue/gi);
  });

  it('Correctly displays a defaultValue', async () => {
    render(
      <Dropdown
        {...{
          id,
          label,
          options: MockOptions,
          onSelect,
          placeholder,
          defaultValue: MockOptions.at(2)
        }}
      />
    );

    const selectedOption = screen.getByText('Option C');
    expect(selectedOption).toBeInTheDocument();
    expect(selectedOption.getAttribute('class')).toMatch(/singlevalue/gi);

    expect(screen.queryByText('Option A')).not.toBeInTheDocument();
  });
});

/**
 * Multi-select
 */
describe('Multi-select Dropdown', () => {
  const multiProperties = {
    id,
    label,
    options: MockOptions,
    onSelect,
    placeholder,
    isMulti: true,
    withCheckbox: true
  };

  it.skip('(Mouse) Selects an option and displays pill', async () => {
    const optionLabel = 'Option A';
    const user = userEvent.setup();

    render(<Dropdown {...multiProperties} />);
    await act(async () => {
      await user.click(screen.getByText(label));
    });

    expect(screen.getByText(optionLabel)).toBeInTheDocument();
    expect(screen.getByText(optionLabel).getAttribute('class')).toMatch(
      /option/gi
    );
    await act(async () => {
      await user.click(screen.getByText(optionLabel));
    });

    const pills = screen.queryAllByRole('listitem');
    expect(pills.length).toBe(2);

    const selectedOption = pills[0];
    expect(selectedOption).toHaveClass('pill');
    expect(selectedOption).toHaveTextContent(optionLabel);
  });

  it.skip('(Keyboard) Navigation, selection, de-selection', async () => {
    const optionLabel = 'Option C';
    const user = userEvent.setup();

    render(<Dropdown {...multiProperties} />);

    const beforeSelection = screen.queryAllByRole('listitem');

    expect(beforeSelection.length).toBe(0);
    expect(screen.queryByText(optionLabel)).not.toBeInTheDocument();

    // Choose 'Option C' and close menu
    await user.click(screen.getByText(label));
    await user.keyboard(
      '{Tab}{Tab}{Shift>}{Tab}{/Shift}{Tab}{Enter}{Escape}{Tab}'
    );

    // Verify other options are hidden
    expect(screen.queryByText('Option A')).not.toBeInTheDocument();
    expect(screen.queryByText('Option B')).not.toBeInTheDocument();

    // Verify pill displayed
    expect(screen.getByText(optionLabel)).toBeInTheDocument();
    const afterSelection = screen.queryAllByRole('listitem');
    expect(afterSelection.length).toBe(2);
    expect(afterSelection[0]).toHaveClass('pill');
    expect(afterSelection[0]).toHaveTextContent(optionLabel);

    // Delete selection
    await act(async () => {
      await user.click(screen.getByText(label));
      await user.keyboard('{Delete}');
    });

    // No pills
    expect(screen.queryAllByRole('listitem').length).toBe(0);
  });

  it.skip('(Keyboard) Pills interaction', async () => {
    const optionLabel = 'Option C';
    const user = userEvent.setup();

    // All options selected by default
    render(<Dropdown {...multiProperties} defaultValue={MockOptions} />);

    // Verify pills displayed
    const afterSelection = screen.queryAllByRole('listitem');
    // All options + Clear All button
    expect(afterSelection.length).toBe(5);
    expect(afterSelection[2]).toHaveClass('pill');
    expect(afterSelection[2]).toHaveTextContent(optionLabel);

    // Focus on pill and delete selection
    await act(async () => {
      await user.click(screen.getByText(label));
      await user.keyboard('{Shift}{Tab}{Tab}{/Shift}{Enter}');
    });

    // Verify correct option's pill was removed, while others remain
    const afterDelete = screen.queryAllByRole('listitem');
    expect(afterDelete.length).toBe(4);
    expect(afterDelete[0]).toHaveTextContent('Option B');
    expect(afterDelete[1]).toHaveTextContent('Option C');
  });

  it.skip('Correctly displays a default option', async () => {
    render(
      <Dropdown
        {...{
          ...multiProperties,
          defaultValue: [MockOptions[1], MockOptions[2]]
        }}
      />
    );

    expect(screen.queryByText('Option A')).not.toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
    expect(screen.getByText('Option C')).toBeInTheDocument();
  });

  it.skip('Allows search for option', async () => {
    const targetOption = MockOptions[1].label;
    const user = userEvent.setup();

    render(
      <Dropdown
        {...{
          ...multiProperties,
          defaultValue: [MockOptions[0]]
        }}
      />
    );

    // Verify option is initially not selected
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.queryByText(targetOption)).not.toBeInTheDocument();

    // Simulate text input
    const input = screen.getByLabelText(label);
    input.focus();
    await user.keyboard('B{Enter}{Esc}');

    // Option found and selected
    expect(screen.getByText(targetOption)).toBeInTheDocument();

    // Remove option by clicking pill
    const pill = screen.getByRole('button', {
      name: `${targetOption}`
    });

    await user.click(pill);
    expect(screen.queryByText(targetOption)).not.toBeInTheDocument();
  });

  it.skip('Remove all options via clear button', async () => {
    const user = userEvent.setup();

    render(
      <Dropdown
        {...{
          ...multiProperties,
          defaultValue: [MockOptions[0], MockOptions[1]]
        }}
      />
    );

    // Verify option is initially not selected
    expect(screen.getByText(MockOptions[0].label)).toBeInTheDocument();
    expect(screen.getByText(MockOptions[1].label)).toBeInTheDocument();

    // Clear all
    const button = screen.getByText('Clear All Selected Institutions');
    await user.click(button);

    // Verify all clear
    expect(screen.queryByText(MockOptions[0].label)).not.toBeInTheDocument();
    expect(screen.queryByText(MockOptions[1].label)).not.toBeInTheDocument();
  });
});

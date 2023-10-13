import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import Select from './Select';
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

function SelectWrapper({ ...arguments_ }): JSX.Element {
  const [value, setValue] = useState(arguments_.value);

  return (
    <div style={{ minHeight: '16rem' }}>
      <Select
        {...arguments_}
        value={value}
        onSelect={(newValue): void => {
          setValue(newValue);
        }}
      />
    </div>
  );
}

const onSelect = (): null => null;

const label = '-default select-';
const id = 'anID';
const placeholder = 'HOLD MY PLACE';

/**
 * Single select
 */
describe('Default Select', () => {
  const defaultProps = {
    id,
    label,
    options: MockOptions,
    onSelect,
    placeholder
  };

  it('Renders default labels correctly', () => {
    render(<SelectWrapper {...{ id, options: MockOptions, onSelect }} />);
    expect(screen.queryByText(label)).not.toBeInTheDocument();
    expect(screen.getByText('Select w/ Multi-select')).toBeInTheDocument();
    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  it('Renders provided labels correctly', () => {
    render(<SelectWrapper {...defaultProps} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  it('(Mouse) Selects an option', async () => {
    const optionLabel = 'Option A';
    const user = userEvent.setup();

    render(<SelectWrapper {...defaultProps} />);
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
    const optionLabel = MockOptions[2].label;
    const user = userEvent.setup();

    render(<SelectWrapper {...defaultProps} />);

    expect(screen.queryByText(optionLabel)).not.toBeInTheDocument();
    await act(async () => {
      await user.click(screen.getByText(label));
      await user.keyboard('{Tab}{Tab}{Enter}');
    });
    const selectedOption = screen.getByText(optionLabel);
    expect(selectedOption).toBeInTheDocument();
    // expect(selectedOption.getAttribute('class')).toMatch(/singlevalue/gi);
  });

  it('Correctly displays a default value', async () => {
    render(
      <SelectWrapper
        {...{
          id,
          label,
          options: MockOptions,
          onSelect,
          placeholder,
          value: MockOptions[2]
        }}
      />
    );

    const selectedOption = screen.getByText(MockOptions[2].label);
    expect(selectedOption).toBeInTheDocument();
    expect(selectedOption.getAttribute('class')).toMatch(/singlevalue/gi);
    expect(screen.queryByText(MockOptions[0].label)).not.toBeInTheDocument();
    expect(screen.queryByText(MockOptions[1].label)).not.toBeInTheDocument();
  });
});

/**
 * Multi-select
 */
describe('Multi-select Select', () => {
  const multiProperties = {
    id,
    label,
    options: MockOptions,
    onSelect,
    placeholder,
    pillAlign: 'bottom',
    isMulti: true,
    withCheckbox: true
  };

  it('(Mouse) Selects an option and displays pill', async () => {
    const optionLabel = MockOptions[0].label;
    const user = userEvent.setup();

    render(<SelectWrapper {...multiProperties} />);
    await act(async () => {
      await user.click(screen.getByText(label));
    });

    expect(screen.getByText(optionLabel)).toBeInTheDocument();
    // expect(screen.getByText(optionLabel).getAttribute('class')).toMatch(
    //   /option/gi
    // );

    await act(async () => {
      await user.click(screen.getByText(optionLabel));
    });

    const pills = screen.queryAllByRole('listitem');
    expect(pills.length).toBe(2);

    const selectedOption = pills[0];
    expect(selectedOption).toHaveClass('pill');
    expect(selectedOption).toHaveTextContent(optionLabel);
  });

  it('(Keyboard) Navigation, selection, de-selection', async () => {
    const optionLabel = 'Option C';
    const user = userEvent.setup();

    render(<SelectWrapper {...multiProperties} value={[]} />);

    const beforeSelection = screen.queryAllByRole('listitem');

    expect(beforeSelection.length).toBe(0);
    expect(screen.queryByText(optionLabel)).not.toBeInTheDocument();

    // Choose 'Option C' and close menu
    await act(async () => {
      await user.click(screen.getByText(label));
      await screen.debug();
      await user.keyboard('{Tab}{Tab}{Enter}{Tab}{Enter}{Escape}'); // TODO: Not sure why the options are expanding
      await screen.debug();
    });

    // await user.keyboard(
    //   '{Tab}{Tab}{Shift>}{Tab}{/Shift}{Tab}{Enter}{Escape}{Tab}'
    // );

    // Verify other options are hidden
    expect(screen.queryByText(MockOptions[0].label)).not.toBeInTheDocument();
    expect(screen.queryByText(MockOptions[1].label)).not.toBeInTheDocument();
    expect(screen.getByText(MockOptions[2].label)).toBeInTheDocument();
    expect(screen.getByText(MockOptions[3].label)).toBeInTheDocument();

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

  it('(Keyboard) Pills interaction', async () => {
    const optionLabel = 'Option C';
    const user = userEvent.setup();

    // All options selected by default
    render(<SelectWrapper {...multiProperties} value={MockOptions} />);

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

  it('Correctly displays a default option', async () => {
    render(
      <SelectWrapper
        {...{
          ...multiProperties,
          value: [MockOptions[1], MockOptions[2]]
        }}
      />
    );

    expect(screen.queryByText('Option A')).not.toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
    expect(screen.getByText('Option C')).toBeInTheDocument();
  });

  it('Allows search for option', async () => {
    const initialOption = MockOptions[0].label;
    const targetOption = MockOptions[1].label;
    const user = userEvent.setup();

    render(
      <SelectWrapper
        {...{
          ...multiProperties,
          value: [MockOptions[0]]
        }}
      />
    );

    // Verify option is initially not selected
    expect(screen.getByText(initialOption)).toBeInTheDocument();
    expect(screen.queryByText(targetOption)).not.toBeInTheDocument();

    // Simulate text input
    const input = screen.getByLabelText(label);
    await act(async () => {
      input.focus();
      await user.keyboard('B{Enter}{Esc}');
    });
    // Option found and selected
    expect(screen.getByText(targetOption)).toBeInTheDocument();

    // Remove option by clicking pill
    const pill = screen.getByRole('button', {
      name: `${targetOption}`
    });
    await act(async () => {
      await user.click(pill);
    });
    expect(screen.queryByText(targetOption)).not.toBeInTheDocument();
  });
});

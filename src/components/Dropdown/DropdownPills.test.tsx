import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownPill, DropdownPills, onCloser } from './DropdownPills';
import { MockOptions } from './utils';

describe('DropdownPill', () => {
  // Never happens due to checks in DropdownPills but this is for full test coverage
  it('onCloser called with nothing selected does not call onChange', async () => {
    const user = userEvent.setup();
    const testLabel = 'Test Value';

    const selected = null;
    const onChange = vi.fn();
    const onCloseListener = onCloser(0, onChange, selected);

    render(<DropdownPill value={testLabel} onClose={onCloseListener} />);
    await act(async () => {
      await user.click(screen.getByText(testLabel));
    });
    expect(onChange).not.toHaveBeenCalled();
  });
});

describe('DropdownPills', () => {
  it('Calls onChange when pill is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const selected = MockOptions[0];

    render(<DropdownPills selected={[selected]} onChange={onChange} isMulti />);

    const pills = screen.queryAllByRole('button');
    expect(pills.length).toBe(1);

    const selectedOption = pills[0];
    expect(selectedOption).not.toHaveClass('pill');
    expect(selectedOption).toHaveTextContent(selected.label);
    expect(onChange).not.toBeCalled();
    await act(async () => {
      await user.click(selectedOption);
    });

    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith([]);
  });

  it('(Keyboard) Calls onChange when pill is activated', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const selected = MockOptions[0];

    render(<DropdownPills selected={[selected]} onChange={onChange} isMulti />);

    const pills = screen.queryAllByRole('button');
    expect(pills.length).toBe(1);

    const selectedOption = pills[0];
    expect(selectedOption).not.toHaveClass('pill');
    expect(selectedOption).toHaveTextContent(selected.label);
    expect(onChange).not.toBeCalled();
    selectedOption.focus();
    await act(async () => {
      await user.keyboard('p');
    });

    expect(onChange).not.toBeCalled();

    await user.keyboard('{Enter}');
    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith([]);
  });
});
